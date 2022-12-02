import { useState } from "react"

import './styles/carousel.css';

const images = [ 
    'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320', 
    'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', 
    'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg' 
]

export const Carousel = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loader, setLoader] = useState(false);

    const selectNewImage = ( index, images = [], next = true) =>{
        setLoader(false);
        setTimeout(() => {
            const condition = next ? index < images.length - 1 : index > 0;
            const nextIndex = next ? (condition ? index + 1 : 0) : condition ? index - 1 : images.length - 1;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);  
        }, 300);
    } 

    const previus = () => {
        selectNewImage(selectedIndex, images, false)
    }

    const next = () => {
        selectNewImage(selectedIndex, images)
    }

  return (
    <div className="carousel">
        <div className="carousel__content">
            <img 
                src={`${selectedImage}`} 
                alt="" 
                className={`carousel__img ${loader ? 'loaded' : ''}`}
                onLoad={ () => setLoader(true)}
            />

            <button className="carousel__btn btn-left" onClick={previus}>{'<'}</button>
            <button className="carousel__btn btn-right" onClick={next}>{'>'}</button>
        </div>
        
 
    </div>
  )
}
