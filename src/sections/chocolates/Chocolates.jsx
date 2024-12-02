import './Chocolates.scss'
import { useState, useEffect } from 'react';

export default function Chocolates() {

    const image = [
        '/assets/images/choco1',
       '/assets/images/choco2',
       '/assets/images/chocologo',
    ];

    const [imagemAtual, setImagemAtual] = useState(0);
    const [nextImage, setNextImage] = useState(1);

    useEffect(() => {
        
        image.forEach((src) => {
            const img = new Image();
            img.src = src;
        });

        const intervalo = setInterval(() => {
            setTimeout(() => {
                
                setImagemAtual(nextImage);
                setNextImage((nextImage + 1) % image.length);
            }, 1000); 
        }, 2000);

        return () => clearInterval(intervalo);
    }, [nextImage, image]);


    return(
      <div className='slide-minguel'
      style={{
          backgroundImage: `url(${image[imagemAtual]})`,
      }}></div>
    )
  }

// import {register} from 'swiper/element/bundle'
// import {Swiper, SwiperSlide} from 'swiper/react'
// import {useState} from 'react'

// register()
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'

// const Chocolates = () => {

//   const [SlidesPerView,] = useState(1)

//   const minguel = [
//     <img src={choco1} alt="choco1" className="choco1" />,
//     <img src={choco1} alt="choco1" className="choco1" />,
//     <img src={choco1} alt="choco1" className="choco1" />
//   ]

//   return (
//     <div className="criachefe">
//             <Swiper
//               SlidesPerView = {SlidesPerView}
//               pagination = {{clickble : true}}
//               navigation
//             >
//               {minguel.map( (item) => (
//                 <SwiperSlide>
//                   <img 
//                     src={item.choco1} 
//                       alt="Slider" 
//                       className='slide-minguel'
//                   />
                  
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//     </div>
//   )
// }

// export default Chocolates

