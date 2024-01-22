import {Rate, Progress} from "antd";

import { FaStar } from "react-icons/fa6";
import classNames from "classnames/bind"
import styles from "./index.module.scss"
import { useDispatch } from "react-redux";
import { visibleReviewModal } from "../../../redux/phone";
import { ReviewApi } from "../../../api/review";
import { useEffect, useState } from "react";
const reviewApi = new ReviewApi();
const cx = classNames.bind(styles);
export const Review = () => { 
    const dispatch =  useDispatch()
    const [review, setReview] = useState<any>({
        totalReview: "",
        total1Star:"",
        total2Star:"",
        total3Star:"",
        total4Star:"",
        total5Star:"",
    })
    useEffect(() => {
        reviewApi.infoReview().then((data: {
            
                totalReview: number;
                total1Star: number;
                total2Star: number;
                total3Star:number;
                total4Star: number;
                total5Star:number; 
            
        }) => {
            setReview(data)
        })
    }, [])
    const percent = (star: number, total: number) => {
            return Math.round((star/total)*100);
    }
    const handleReview = () => { 
        dispatch(visibleReviewModal(true))
    }
    return (
        <div className={cx('review-container')}>
     
               <h2>Đánh giá về Iphone 11</h2>

               <div className={cx('poin-container')}>
                     <span className={cx('rate-number-star')}>4.6</span>
                     <Rate className={cx('poin-item')} allowHalf disabled ={true} defaultValue={4.6}/>
                     <span className={cx('total-review')}>{review?.totalReview} đánh giá</span>
               </div>
               <div className={cx('rate-persent-container')}>
                    <p className={cx('persent-container-item')}>
                        5<FaStar/> <Progress className={cx('persent')} percent={percent(review?.total5Star, review?.totalReview)}/>
                    </p>
                    <p className={cx('persent-container-item')}>
                        4 <FaStar/> <Progress className={cx('persent')} percent={percent(review?.total4Star, review?.totalReview)}/>
                    </p>
                    <p className={cx('persent-container-item')}>
                        3 <FaStar/> <Progress className={cx('persent')} percent={percent(review?.total3Star, review?.totalReview)}/>
                    </p>
                    <p className={cx('persent-container-item')}>
                        2 <FaStar/> <Progress className={cx('persent')} percent={percent(review?.total2Star, review?.totalReview)}/>
                    </p>
                    <p className={cx('persent-container-item')}>
                        1 <FaStar/> <Progress className={cx('persent')} percent={percent(review?.total1Star, review?.totalReview)}/>
                    </p>
               </div>
               <div className={cx('btn-container')}>
                  <button onClick={handleReview} className={cx('btn','btn-review')}>Đánh giá</button>
               </div>
        </div>
    )
}