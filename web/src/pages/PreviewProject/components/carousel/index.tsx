import React, { useState } from 'react'

interface ICarouselImage {
   images: {
      url: string
   }[]
}

export const CarouselImages = ({ images }: ICarouselImage) => {

   const [slideIndex, setSlideIndex] = useState(1)

   const moveDot = (index: number) => {
      setSlideIndex(index)
      console.log(index)
   }

   return (
      <>
         <div className='container_slide'>
            <div className='container_images'>
               {
                  images.map((image: any, index) => {
                     return (
                        <>
                           <div className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
                              <img src={image.url} />
                           </div>
                        </>)
                  })
               }

               <div className='container_dots'>
                  {
                     images.map((item, index) => {
                        return (
                           <div onClick={() => { moveDot(index + 1) }} className={slideIndex === index + 1 ? "dot active" : "dot"}>
                           </div>
                        )
                     })
                  }
               </div>

            </div>


         </div>
      </>
   )

}

