import React from "react";
import { storage } from "../../../../constants/firebase";
import { getDownloadURL, ref, uploadBytesResumable, UploadTask } from 'firebase/storage';
import InputBtn from "../../../../components/utils/Button/InputBtn";


interface IImageProject {
    imageProjects: { url: string }[]
    setImageProjects: (image: string) => void
    maxImage: boolean
}

export const ImageProject = ({ imageProjects, setImageProjects, maxImage }: IImageProject) => {

    const uploadImage = (event: any) => {
        event.preventDefault();
        const file = event.target[0].files
        console.log(file)
        console.log(setImageProjects)

        // if (!file) return
        // for (let index = 0; index < file.length; index++) {
        //     const storageRef = ref(storage, `profilePicture/${file[index].name}`)

        //     const uploadTask: UploadTask = uploadBytesResumable(storageRef, file)

        //     uploadTask.on(
        //         "state_changed",
        //         snapshot => {
        //             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

        //         },
        //         error => { alert(error) },
        //         () => {
        //             getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
        //                 console.log("Deu ruim");
        //             })
        //         }
        //     )
        // }
    }

    return (
        <>
            <div className="aligment_images">
                <div className="images">
                    <img src={imageProjects[0].url} />
                </div>
                <div className="images">
                    <img src={imageProjects[1].url} />
                </div>
                <div className="images">
                    <img src={imageProjects[2].url} />
                </div>
                <div className="images">
                    <img src={imageProjects[3].url} />
                </div>
            </div>

            <form className="aligment_button" onSubmit={uploadImage} >
                <div>
                    <label className="input_btn_select_image" htmlFor="image"> Input </label>

                    <input type="file" id="image" accept=".png, .jpg, .jpeg, .gif" name="image[]" multiple />
                    <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={maxImage ? 'input_btn_select_image' : 'input_btn_select_image_limit'} valueBtn={'Selecionar imagem'} onClick={() => { }} />
                </div>
            </form>

        </>



    )
}