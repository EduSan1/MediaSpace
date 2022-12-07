
import { FullMetadata, getMetadata, getStorage, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";

interface IDelivery {
    deliveryLink: string

    onRemove: (index: number) => void
    index: number
}


const DeliveryCard = ({ deliveryLink, index, onRemove }: IDelivery) => {

    const [metadata, setMetadata] = useState<FullMetadata>()

    const getMetadataFromDelivery = async () => {
        const storage = getStorage();
        const forestRef = ref(storage, deliveryLink);

        getMetadata(forestRef)
            .then((metadata: FullMetadata) => {
                setMetadata(metadata)
                console.log(metadata)
            })
            .catch((error) => {
                // Uh-oh, an error occurred!
                console.log(error)

            })
    }

    const formatBytes = (bytes: number | undefined, decimals = 2) => {
        if (bytes === undefined)
            return
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    useEffect(() => {
        getMetadataFromDelivery()
    }, [])


    return (
        <div className="delivery-modal-card-container">
            <img src="https://firebasestorage.googleapis.com/v0/b/mediaspace-35054.appspot.com/o/system%2FfileIcon.png?alt=media&token=892a6315-2670-4682-8e8f-60a79940cc04" alt="arquivo.png" />
            <div className="delivery-modal-card-details-container">
                <p>{metadata?.name}</p>
                <div>
                    <p>{metadata?.timeCreated.split("T")[0].replace(/^(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")}</p>
                    <p> {formatBytes(metadata?.size)}</p>
                </div>
            </div>
            <p className="remove_file" onClick={() => onRemove(index)} >x</p>
        </div >
    )
}

export default DeliveryCard