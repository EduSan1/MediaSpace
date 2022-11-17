import React, { useState } from "react";
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
        const file = event.target[0].files[0]

        if (!file) return

        const storageRef = ref(storage, `projectImages/${file.name}`)

        const uploadTask: UploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100

            },
            error => { alert(error) },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url: string) => {
                    setImageProjects(url)
                })
            }
        )

    }

    return (
        <>
            <div className="container_images">
                <div className="aligment_images">
                    <div className="images" >
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
            </div>

            <form className="aligment_button" onSubmit={uploadImage} >
                <div>
                    <label className={maxImage ? 'input_btn_select_image_limit':'input_btn_select_image' } htmlFor="image"> Input </label>

                    <input type="file" id="image" accept=".png, .jpg, .jpeg, .gif" name="image" />
                    <InputBtn typeInput={'submit'} name={'btnCadastrar'} className={maxImage ? 'input_btn_select_image_limit':'input_btn_select_image' } valueBtn={'Selecionar imagem'} onClick={() => { }} />


                </div>
            </form>

        </>



    )
}