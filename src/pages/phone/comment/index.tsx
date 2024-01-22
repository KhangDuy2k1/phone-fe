import {Input} from 'antd';
import { IoSend } from "react-icons/io5";
import classNames from 'classnames/bind';
import styles from "./index.module.scss";
const { TextArea } = Input;
const cx = classNames.bind(styles);
export const Comment = () => {
    return (
        <div className={cx('comment-container')}> 
                <h4>Bình luận</h4>
                <TextArea className={cx('comment-text')} placeholder="Nhập bình luận của bạn" rows={4}>
                </TextArea>
                <IoSend className={cx('send-icon')}/>
                
        </div>
        
    )
}