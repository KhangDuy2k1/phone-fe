import { ReactElement, useEffect, useState } from "react";
import { PhoneItemComponent } from "../../../component/phoneItem";
import { PhoneApi } from "../../../api/phone";
import styles from "./index.module.scss";

import classNames from "classnames/bind";
interface IPhone {
  
}
const cx = classNames.bind(styles)
const phoneApi = new PhoneApi();

export const OutstandingComponent = () => {
  const [products, setProducts] = useState([])
  useEffect(() => { 
      phoneApi.bestSellingPhone().then((data: {success: boolean, message: string, phones: any}) => { 
            setProducts(data.phones)
      }).catch((err: any) => { 
            console.log(err)
      })
  }, [])  
  return (
    <div className={cx("bestsell-container")}>
      {/* <div> */}
      <h3 className={cx("title-bestsell-phone")}>
          BÁN CHẠY NHẤT 
      </h3>
      
       <div className={cx('list-phone-container')}>
        {
          products?.map((product):ReactElement => {
              return  <PhoneItemComponent phone = {product}/>
          })
        }   
       </div>
              
        <p></p>

    </div>
  );
};


