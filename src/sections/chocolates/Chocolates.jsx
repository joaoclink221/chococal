import './Chocolates.scss'
import {Swiper, SwiperSlide} from 'swiper/react'
import AmargoCard from '../../components/cards/choco-amargo'
import ChocolateCard from '../../components/cards/choco-ao-leite'
import BrancoCard from '../../components/cards/choco-branco'

export default function chocolate(){
            
    const minguel = components [ChocolateCard, BrancoCard, AmargoCard]
    
    return(
        <div className="cria">
            
            <Swiper
            SlidePerview = {1}
            pagination = {{clickable: true}}
            navigation
            >
                {minguel.map( (item, index) => (
                       <SwiperSlide key = {index}>
                            <img 
                            src={item.components} 
                            alt="slide"
                            className='slide-minguel' />
                       </SwiperSlide>
                ))}
             
            </Swiper>
        </div>
    )
}


