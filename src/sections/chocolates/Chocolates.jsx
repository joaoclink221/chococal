import './Chocolates.scss'
import {register} from 'swiper/element/bundle'
import {Swiper, SwiperSlide} from 'swiper/react'
import {useState} from 'react'

register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Chocolates = () => {

  const [SlidesPerView, SetSlidePerview] = useState(1)

  const minguel = [
    <img src={choco1} alt="choco1" className="choco1" />,
    <img src={choco1} alt="choco1" className="choco1" />,
    <img src={choco1} alt="choco1" className="choco1" />
  ]

  return (
    <div className="criachefe">
            <Swiper
              SlidesPerView = {SlidesPerView}
              pagination = {{clickble : true}}
              navigation
            >
              {minguel.map( (item) => (
                <SwiperSlide>
                  <img 
                    src={item.choco1} 
                      alt="Slider" 
                      className='slide-minguel'
                  />
                  
                </SwiperSlide>
              ))}
            </Swiper>
    </div>
  )
}

export default Chocolates

