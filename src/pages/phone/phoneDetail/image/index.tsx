import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import 'swiper/css';
import styles from "./index.module.scss";
import { ReactElement, useState } from "react";
const cx = classNames.bind(styles);
interface IImage {
    id: number;
    link: string
}
export const Image = (props:{avatar: string, images: IImage[]}) => { 
    const {avatar, images} = props;
    const [imageSelected, setImageSelected] = useState<string>(images[0]?.link);
    const handleSelectImg = () => { 

    }
    return (
    <div className={cx('image-container')}>

        <img className={cx('main-image')} src={imageSelected} alt="" />
    <Swiper
    style={{width: "350px",height: "100px", marginTop: "20px"}}
    modules={[Navigation, Autoplay]}
    autoplay={{ delay: 3000 }}
    spaceBetween={30}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
  >
    {
        images?.map((image) => {
            return <SwiperSlide  className={cx('image-item-swipe')}>
            <img onClick={() => {
                setImageSelected(image?.link)
            }} style={{border: "1px solid #A9A9A9", padding: "12px",}} src={image?.link} alt="" />
        </SwiperSlide>
        })
    }
  </Swiper>
  </div>
    )
}
