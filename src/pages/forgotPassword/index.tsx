import { Input } from "antd"
import ButtonComponent from "../../component/button"
import { AuthApi } from "../../api/auth"
import classNames from "classnames/bind"
import styles from "./index.module.scss"
import { useState } from "react";
import { reload } from "../../utill/action"
import { useNavigate } from "react-router-dom"
const authApi = new AuthApi();
const cx = classNames.bind(styles);
export const ForgotPassword = () => { 
    const [authenticate, setAuthenticate] = useState<boolean>(false)
    const [log, setLog] = useState<{status: boolean, mes?: string, message?: string}>()
    const [messageCheckPassword, setMessageCheckPassword] = useState()
    const [confirmOtp, setConfirmOtp] = useState("")
    const [email, setEmail] = useState<string>("")
    const [otp, setOtp] = useState<string>("")
    const [passwords, setPasswords] = useState<{
        password: string,
        newPassword: string
    }>({
        password: "",
        newPassword:""
    })
    const navigate = useNavigate()
     
    const handleChangeInputEmail = (e: React.ChangeEvent<HTMLInputElement>):void => { 
        setEmail(e.target.value)
    }

    const handleChangeInputOtp = (e: React.ChangeEvent<HTMLInputElement>):void => { 
        setOtp(e.target.value)
    }


    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswords(({ password, ...others }) => ({ password: e.target.value, ...others }));
    }

    const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPasswords(({ newPassword, ...others }) => ({ newPassword: e.target.value, ...others }));
    }

    const handleChangePasswordFn = async() => {
        try {
            const result = await authApi.updatePasswordForget({email, ...passwords})
            navigate('/')
            reload()
        } catch (error: any) {
            setMessageCheckPassword(error.message)
        }
    }

    const handleSendOtp = async():Promise<any> => { 
        try {
            const  result =  await authApi.verifyOtp(otp)
            setAuthenticate(result.status)
        } catch (error:any){
          setConfirmOtp(error.message)
        }
    }
    const handleSubmit = async():Promise<void> => {
        try {
            const result = await authApi.sendOtpToEmail(email)
            setLog(result)
        } catch (error:any) {
           setLog(error)
        }
    }
    return (
        <div>
         {
            
            authenticate ?
             <div className={cx('change-password-container')}>
                <h3>Đổi mật khẩu mới</h3>
                <div className={cx('change-input-wrapper')}>
                <Input.Password className={cx('input-password-forget')} onChange={handleChangePassword} placeholder="nhập mật khẩu mới"/>
                <Input.Password className={cx('input-password-forget')} onChange={handleChangeNewPassword} placeholder="nhập lại mật khẩu"/>
                </div>
                <p className={cx('message-check-pass')}>{messageCheckPassword}</p>
                <ButtonComponent onClick={handleChangePasswordFn} className={cx('change-password-btn')}>Đổi mật khẩu</ButtonComponent>
             </div>
             : log?.status ?
                        <div className={cx('send-otp-container')}>
                             <p>Đã gửi mã Otp đến email của bạn</p>
                             <p>Nhập mã OTP</p>
                             <input onChange={handleChangeInputOtp} className={cx('input-enter-otp')} placeholder="nhập mã OTP"/>
                             <p className={cx('confirm-otp-message')}>{confirmOtp}</p>
                             <ButtonComponent onClick={handleSendOtp} className={cx('send-otp')}>Gửi mã</ButtonComponent>
                        </div>
                        : 
                        <div className={cx('container')}>
                                 <p className={cx('title')}>Nhập email bạn muốn khôi phục mật khẩu</p> 
                                 <Input onChange={handleChangeInputEmail} placeholder="nhập email của  bạn" style={{width: "40%"}}/>
                                 <p style={{color:"red"}}>{log?.mes}</p>
                                <ButtonComponent onClick={handleSubmit} className={cx('btn-forgot-password')}>Lấy lại mật khẩu</ButtonComponent>
                        </div>
             
        }
        </div>  
    )
    
}
