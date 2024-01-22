import { MdOutlineArrowRight } from "react-icons/md";
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);
export const ConfigInfo = (props: {config: any}) => { 
    const {config} = props
    return (
    <div className={cx('config-info-container')}>
          <h2>Cấu hình điện thoại</h2>
          <ul className={cx('list-config')}>
            <li className={cx('config-item')}>
                <strong>Màn hình:</strong>
                <span>{config?.screen}</span>
            </li>
            <li className={cx('config-item','span1')}>
                <strong>Hệ điều hành:</strong>
                <span>{config?.os}</span>
            </li>
            <li className={cx('config-item','span2')}>
                <strong>Camera trước:</strong>
                <span>{config?.front_camera}</span>
            </li>
            <li className={cx('config-item',"span3")}>
                <strong>Camera sau:</strong>
                <span>{config?.rear_camera}</span>
            </li>
            <li className={cx('config-item',"span4")}>
                <strong>CPU:</strong>
                <span>{config?.chip}</span>
            </li>
            <li className={cx('config-item',"span5")}>
                <strong>RAM:</strong>
                <span>{config?.ram}GB</span>
            </li>
            <li className={cx('config-item',"span6")}>
                <strong>PIN:</strong>
                <span>{config?.pin}</span>
            </li>
          </ul>
          <button className={cx('btn-info-detail')}>
            Thông tin chi tiết 
            <MdOutlineArrowRight className={cx('icon')}/>
          </button>
    </div>)
}