import { Modal, Rate } from "antd"
import classNames from "classnames/bind";
import styles from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { visibleReviewModal } from "../../../redux/phone";
import { useState } from "react";
let cx = classNames.bind(styles);
export const ReviewModal = () => { 
    const phone = useSelector((state: any) => state.phone)
    const dispatch = useDispatch()
    const [rateNumber, setRateNumber] = useState<number>(1)
    const handleCancle = () => {
        dispatch(visibleReviewModal(false));
    }   
    const handleStatus = (star:number):string => {
        switch(star){
            case 1: 
              return "Rất tệ";
            case 2: 
              return "Tệ";
            case 3: 
              return "Tạm ổn";
            case 4:
              return "Tốt";
            case 5:
              return "Rất tốt"
            default: 
              return "";
        }
    }
    const hoverChangeRate = (value: number) => {
            setRateNumber(value)
    }
    
    return (
        <Modal
        open={phone.visibleReviewPhone}
        footer = {false}
        onCancel={handleCancle}
        >   
            <div className={cx('rate-container')}>
             <h3>Đánh giá sản phẩm này</h3>
            <Rate onHoverChange={hoverChangeRate} className={cx('rate')} defaultValue={4}/>
            </div>
            <p className={cx("rate-status")}>{handleStatus(rateNumber)}</p>
            <button className={cx('btn-review')}>Gửi Đánh Giá</button>
           
        </Modal>
    ) 
}