import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, visibleConfirmLogout } from "../../../redux/user";
import { IoWarningOutline } from "react-icons/io5";
import styles from "./index.module.scss"
import classNames from "classnames/bind";
import { removeToken } from "../../../utill/token";
import { reload } from "../../../utill/action";
const cx = classNames.bind(styles);
export const ConfirmLogoutModal = () => {
    const dispatch = useDispatch() 
    const user = useSelector(selectUser)
    
    const  handleCancle = () => {
         dispatch(visibleConfirmLogout(false));
    }

    const handleOk = () => { 
        removeToken();
        dispatch(visibleConfirmLogout(false));
        reload();
    }
    return (
        <Modal
        open = {user.visibleConfirmLogout}
        onOk={handleOk}
        onCancel={handleCancle}
        >
            <div className={cx('wrapper')}>
                 <IoWarningOutline className={cx('icon-warning')}/>
                 <strong>Bạn có chắc chắn muốn đăng xuất?</strong>
            </div>
           
        </Modal>
    )
}