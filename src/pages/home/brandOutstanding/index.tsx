import { ReactElement } from "react";
import { SiXiaomi } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { SiLenovo } from "react-icons/si";
import { SiSamsung } from "react-icons/si";
import Styles from "./index.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(Styles);

export const  BrandOutStandingComponent = ():ReactElement => { 
    return (
        <div className={cx('container')}>
            <div className={cx('brand-container')}>
                <FaApple className={cx('brand')}/>
                <p style={{opacity: "0,5", fontSize: "20px", marginTop: "10px"}}>Iphone11 Sale giá cực tốt chỉ 9.960.000đ</p>
            </div >
            <div className={cx('brand-container', "samsung")}>
                <SiSamsung className={cx('brand')}/>
            </div>
            <div className={cx('brand-container')}>
                <SiXiaomi className={cx('brand')}/>
            </div>
            <div className={cx('brand-container')}>
                <SiLenovo className={cx('brand')}/>
            </div>
        </div>
    )
}