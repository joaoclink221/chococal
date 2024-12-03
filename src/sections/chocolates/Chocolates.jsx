import './Chocolates.scss'


import { Swiper, SwiperSlide } from 'swiper/react'; 


export default function Chocolate() {
    const minguel = [
        { id: '1', image: 'https://media.discordapp.net/attachments/1237955320270028890/1313485576384811088/slide2.png?ex=67504e44&is=674efcc4&hm=8f244ddc6659197f8608ab39c92f93f24830d0fface7213d38c2393c0af749a1&=&format=webp&quality=lossless&width=1432&height=457' },
        { id: '2', image: 'https://media.discordapp.net/attachments/1237955320270028890/1313485576674086922/slide3.png?ex=67504e44&is=674efcc4&hm=f67c6c9d2afc6ab82b435ba27acb1f2c1967a5af54218c3b831356484c56a103&=&format=webp&quality=lossless&width=1432&height=457' },
        { id: '3', image: 'https://media.discordapp.net/attachments/1237955320270028890/1313485577122742353/slide1.png?ex=67504e44&is=674efcc4&hm=9f8c6c9a56013b9f82f06958656cc23285b64fee0e41456c8f79c59cffffd83b&=&format=webp&quality=lossless&width=1432&height=457' }
    ];

    return (
        <div className="cria">
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
