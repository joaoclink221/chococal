import './Chocolates.scss'
import fundo3 from "../../assets/images/fundo3.png"

import { Swiper, SwiperSlide } from 'swiper/react'; 


export default function Chocolate() {
    const minguel = [
        { id: '1', image: 'https://cdn.discordapp.com/attachments/1237955320270028890/1313485577122742353/slide1.png?ex=67519fc4&is=67504e44&hm=c0b21c5aaca2ead10ede98095a54ba41ab66215d60dbe00934a9cf4229bf2770&' },
        { id: '2', image: 'https://cdn.discordapp.com/attachments/1237955320270028890/1313485576674086922/slide3.png?ex=67519fc4&is=67504e44&hm=7532b378f638d61dbd630af868ecca0a01101ab52ae2b5596921076a320083c2&' },
        { id: '3', image: 'https://cdn.discordapp.com/attachments/1237955320270028890/1313485576384811088/slide2.png?ex=67519fc4&is=67504e44&hm=f4922d0af7bccbc3750171f972167da4eec84fa7736ca10a5c74c0657d31241d&' }
    ];

    return (
        <div className="cria">
           <img src={fundo3} alt="fundo" className='fundo3' />
           
            <Swiper
                slidesPerView={1}  
                pagination={{ clickable: true }}
                navigation={true}  
            >
                {minguel.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.image} alt="slider" className="slide-minguel" />
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    );
}
