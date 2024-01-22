import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './styles.css';
import { Navigation, Autoplay } from 'swiper/modules';
import { SlideApi } from '../../../api/slide';
import { ReactElement, useEffect, useState } from 'react';
const slideApi = new SlideApi(); 
export const SlideComponent = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
       slideApi.getAllSlide().then((data:{success: boolean, slides: any}) => { 
          setSlides(data.slides);
       }).catch((err:any) => { 
          console.error(err)
       })
  }, [])
  return (
    <>
      <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]} 
      className="mySwiper"
      autoplay={{ delay: 4000 }}
        >
        {
          slides?.map((slide: {id: number, link: string}):ReactElement => { 
              return  <SwiperSlide><img src={slide.link} alt="" /></SwiperSlide>
          })
        }
      </Swiper>
    </>
  );
}