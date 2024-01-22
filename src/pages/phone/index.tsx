import { useEffect, useState } from "react";
import { Comment } from "./comment";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { Image } from "./phoneDetail/image";
import { Option } from "./phoneDetail/option";
import { ConfigInfo } from "./phoneDetail/config";
import { useParams } from "react-router-dom";
import { Review } from "./review";
import { PhoneApi } from "../../api/phone";
const phoneApi = new PhoneApi()
const cx = classNames.bind(styles);
interface  phoneDetail {
  id: number;
  avatar: string;
  name: string;
  config: any;
  desc: string;
  price: number;
  star_number: number;
  images: any;
  discount: any;
}
export const ProductlPage = () => {
  const {id_phone} = useParams();
  const [phoneDetail, setPhoneDetail] = useState<phoneDetail>(); 
 
  useEffect(() => {
    if(id_phone){
      phoneApi.getPhoneDetail(parseInt(id_phone)).then((phoneDetail) => {
          setPhoneDetail(phoneDetail.phoneDetail);
      }).catch(() => {

      })
    }
      
  }, [])
  console.log(phoneDetail);
  return (
    <div>
      <div className={cx("phone-container")}>
      
           <div className={cx('header-container')}>
             <p>{phoneDetail?.name.toUpperCase()}</p>
          </div>
          <div className={cx('btn','phone-detail-container')}>
            {
              phoneDetail?.avatar &&   <Image avatar={phoneDetail?.avatar} images={phoneDetail?.images}/>
            }
              <Option phone = {phoneDetail}/>
              <ConfigInfo  config = {phoneDetail?.config}/>
          </div>
          <div className={cx('wrap-conten-1')}>
               <Review/>
               <Comment/>
        </div>  
      </div>
    </div>
  );
};