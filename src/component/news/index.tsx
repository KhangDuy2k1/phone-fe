import styles from "./index.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export const News = () => { 
    return (
        <div className={cx('news-container')}>
            <h2>TIN CÔNG NGHỆ</h2>
            <div className = {cx('list-news-container')}>
                <div className={cx('news-item')}>
                    <h2>Sam Altman: 'ChatGPT đặc biệt hữu ích trong ba lĩnh vực'</h2>
                    <img style={{width: "100%"}} src="https://hnm.1cdn.vn/2023/02/09/hanoimoi.com.vn-uploads-images-vietnga-2023-02-08-_chatgpt.png" alt="" />
                </div>
                <div className={cx('news-item')}>1</div>
                <div className={cx('news-item')}>1</div>
            </div>
        </div>
    )
}