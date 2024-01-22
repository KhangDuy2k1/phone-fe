import { ReactElement, useEffect, useState } from "react";
import { PhoneItemComponent } from "../../../component/phoneItem";
import { PhoneApi } from "../../../api/phone";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
const phoneApi = new PhoneApi();
const cx = classNames.bind(styles);
export const BestSellComponent = () => {
  const [listPhones, setListPhones] = useState([]);
   useEffect(() => {
       phoneApi.massiveDiscount().then((data) => {
          setListPhones(data.phones)
       })
   }, [])
  return (
    <div className={cx("best-sell-container")}>
      {/* <div> */}
      <h3 className={cx("title-best-sell-phone")}>
         KHUYẾN MẠI LỚN
      </h3>
       <div className={cx('list-phone-container')}>
          {
            listPhones?.map((phone): ReactElement => { 
                return  <PhoneItemComponent phone={phone}/>
            })
          }
       </div>
              
        <p></p>

    </div>
  );
};




