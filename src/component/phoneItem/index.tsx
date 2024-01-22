import styles from "./index.module.scss";
import { Rate } from "antd";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import { formatNumber, pricePromotional } from "../../utill/format";
interface IProps { 
  phone: any
}
const cx = classNames.bind(styles);
export const PhoneItemComponent = (props: IProps) => {
  const {phone} = props
  const navigate = useNavigate();
  // const pricePromotional = (price: number, promotion: number): number => {
  //       return Math.floor((100 -promotion)/100*price)
  // }   
  const handleClickPhone  = () => {
     navigate(`/product/${phone.id}`)
  }
  return (
    <div onClick={handleClickPhone} className={cx('item-container')}>
            <h3 className={cx('promotion-number')}>-{phone.scale}% </h3>
      <div className={cx("img-item")}>
         <img src={phone.avatar} alt="" />
      </div>
      <div className={cx('info')}>
          <h3 className={cx('name-phone')}>{phone.name}</h3>
      </div>
      <div className={cx('price-container')}>
          <span className={cx('price-promotion')}>
          {formatNumber(pricePromotional(phone.price,phone.scale))} đ
          </span>
          <strong className={cx('price')}>
          {formatNumber(pricePromotional(phone.price, 0))} đ
          </strong>
      </div>
      <div className={cx('review')}>
             <Rate 
             disabled
             allowHalf 
             defaultValue={phone.star_number}
             className={cx('star')}
             />
      </div>
      <div className={cx('product-remaining')}>
        {
            phone.sum ?
            <h4>Đã bán: {phone.sum } sản phẩm</h4>:
            <div>
            <h3 className={cx('text-km')}>KM lên lến {phone.scale}%</h3>
            <h5>Mua ngay</h5>
            </div>
        }
      </div>
  
      </div>
  );
};
