
import React, { useEffect, useState } from "react"
import { getDownloadURL, ref, uploadBytesResumable, UploadTask } from "firebase/storage"
import jwt from "jwt-decode"
import InputProject from "../../../CreateProject/components/Input"
import { storage } from "../../../../constants/firebase"
import api from "../../../../service"
import ButtonCategories from "../../../../components/utils/Button/Categories/Categories"
import Checkbox from "../../../../components/utils/Input/checkbox/InputCheckbox"

interface IPostModal {
    onClose: () => void
    onPost: () => void
}

interface IPost {
    title: string,
    description: string,
    team: {
        id: string
    },
    images: {
        url: string
    }[],
    categories: {
        id: string
    }[],
    sub_categories: {
        id: string
    }[]

}
const PostModal: React.FC<IPostModal> = ({ onClose, onPost }) => {

    const [post, setPost] = useState<IPost>({
        title: "",
        description: "",
        team: {
            id: ""
        },
        images: [{
            url: "https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FbaseProjectImage.png?alt=media&token=b270e971-908f-4e2e-8250-fd36fb1f496f"
        }],
        categories: [],
        sub_categories: []

    })
    const [categoriesPage, setCategoriesPage] = useState(false)
    const [categories, setCategories] = useState([])
    const [subcategoriesToRender, setSubategoriesToRender] = useState<any>([])


    const profileDice = async () => {
        const userJwt = await localStorage.getItem('userDetails');
        const user: any = jwt(userJwt ? userJwt : "");
        setPost({
            ...post,
            team: {
                id: user.userDetails.id
            }
        });
    }
    const addToPost = (id: string, name: "sub_categories" | "categories") => {
        setPost({
            ...post, [name]: [
                ...post[name], { id: id }
            ]
        })
    }

    const removeFromPost = (object: [{}], name: "sub_categories" | "categories") => {
        setPost({ ...post, [name]: object })
    }


    const sendImage = (event: any) => {
        event.preventDefault();
        const file = event.target.files[0]
        if (!file) return
        const storageRef = ref(storage, `deliveries/${file.name}`)
        const uploadTask: UploadTask = uploadBytesResumable(storageRef, file)
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            },
            error => { alert(error) },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
                    console.log(url)
                    setPost({ ...post, images: [{ url: url }] })
                })
            }
        )
    }
    const findSubCategories = (idCategory: string, action: "REMOVE" | "ADD") => {
        const categoryFilter: any = categories.find((category: any) => category.id === idCategory)

        if (action === "ADD") {
            setSubategoriesToRender([...subcategoriesToRender, categoryFilter])
            addToPost(categoryFilter.id, "categories")
        }
        else {

            const categoryFilter = subcategoriesToRender.filter((category: any) => category.id !== idCategory)
            setSubategoriesToRender(categoryFilter)
            const categoryToRemove = categoryFilter((category: any) => {
                return { id: category.id }
            })
            removeFromPost(categoryToRemove, "categories")

        }
    }

    const removeSubcategory = (id: string) => {
        console.log(id)
        const subCategoriesFilter = post.sub_categories.filter((subcategory: any) => subcategory.id !== id)
        setPost({ ...post, sub_categories: subCategoriesFilter })
    }

    const handlePost = (value: string, key: keyof typeof post) => {
        setPost({ ...post, [key]: value })
    }

    const addPost = () => {
        api.post("/post", post).then((res: any) => {
            console.log(res.data)
            if (res.data.statusCode === 201) {
                onPost()
            } else {
                console.log(res.data)
                window.alert("Não foi possivel realizar o post")
            }
        })
    }

    useEffect(() => {
        profileDice()
    }, [])

    useEffect(() => {
        console.log(post.categories);
        console.log(post.sub_categories);
    }, [post])

    useEffect(() => {
        api.get("/category").then((res: any) => {
            setCategories(res.data)
        })

    }, [])

    return (
        <div className="delivery-modal-background">
            <div className="delivery-modal-container">
                <div className="delivery-modal-header">
                    <h2>Realizar post</h2>
                    <p onClick={() => onClose()}>✖</p>
                </div>
                {
                    !categoriesPage ?
                        <>
                            <div className="delivery-modal-form">
                                <div className="delivery-modal-form-section">
                                    <InputProject handleChange={(event) => handlePost(event.target.value, "title")} label="Titulo" maxLenght={100} name="title" onFocus={() => { }} value={post.title} />
                                    <InputProject handleChange={(event) => handlePost(event.target.value, "description")} label="Descrição" maxLenght={800} name="title" onFocus={() => { }} value={post.description} />
                                </div>
                                <div className="delivery-modal-form-section files-modal">
                                    <div className="container_images">
                                        <div className="aligment_images">


                                            <div className="portfolio-image-container">
                                                <img src={post.images[0].url} />
                                            </div>

                                        </div>
                                    </div>

                                    <label className="add_file" htmlFor="add_file">Adicionar Imagem</label>
                                    <input type="file" onChange={(event: any) => sendImage(event)} accept=".png, .jpg, .jpeg, .gif" id="add_file" />
                                </div>
                            </div>
                            <div className="delivery-modal-footer-container">
                                <button onClick={() => setCategoriesPage(true)} className="delivery-modal-button">Adicionar Categorias</button>
                            </div>
                        </>

                        :
                        <>
                            <div className="delivery-modal-form">
                                <div className="container_categories">
                                    <div className="subtitulo">
                                        <label> Categorias </label>
                                    </div>
                                    <div className="categories">
                                        {
                                            categories.map((category: any) => {
                                                return <ButtonCategories category={category.name} name={category} icon={category.icon} id={category.id} key={category.id} action={() => console.log("")} setSubCategories={findSubCategories} />

                                            })
                                        }
                                    </div>
                                </div>
                                <div className="container_subcategories">
                                    <div className="subtitulo">
                                        <label> Sub-categorias </label>
                                    </div>

                                    <div className="sub_categories">
                                        {
                                            subcategoriesToRender.map((category: any) => {
                                                return category.sub_categories.map((subcategory: any) => {
                                                    return <Checkbox onClickFunction={(check) => check ? removeSubcategory(subcategory.id) : addToPost(subcategory.id, "sub_categories")} key={subcategory.id} nameOption={subcategory.name} />
                                                })
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                            <div className="delivery-modal-footer-container">
                                <button onClick={() => addPost()} className="delivery-modal-button">Cadastrar post</button>
                            </div>
                        </>

                }



            </div>
        </div>
    )
}

export default PostModal


