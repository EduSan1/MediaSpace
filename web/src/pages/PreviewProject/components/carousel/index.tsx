import React from 'react'

interface ICarouselImage {
   images: string[]
}

export const CarouselImages = ({ images }: ICarouselImage) => {

   return (
      <>
         <div>
            <div>
               {
                  images.map((image: any) => {
                     return (
                        <div>
                           <img src={image.url} alt="" />
                        </div>)
                  })
               }
            </div>
         </div>
      </>
   )

}

