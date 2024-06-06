import{Swiper, SwiperSlide} from 'swiper/react';
const data = [
    {id: '1', imagem: '/home/matheus/Trabalho_web/Trabalho web/src/img/logo.png'},
    {id: '3', imagem: '/home/matheus/Trabalho_web/Trabalho web/src/img/logo2.svg'},
    {id: '4', imagem: '/home/matheus/Trabalho_web/Trabalho web/src/img/logo2.svg'},
    {id: '5', imagem: '/home/matheus/Trabalho_web/Trabalho web/src/img/logo2.svg'}
]

export function Carrosel(){
    return(
        <>
        <div className='container'>
            <Swiper
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        {
                        <img src="item.imagem"
                        alt="Slider"
                        className='slide-item'
                        />}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        </>
    )
}