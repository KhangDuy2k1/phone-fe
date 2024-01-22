// import React, { useState } from 'react';
import { DatePicker, Space, Input, Radio } from "antd";
import styles from "./index.module.scss"
import classNames from "classnames/bind";
import ButtonComponent from "../../component/button";
import { useState } from "react";
import isEmail from "validator/lib/isEmail";
import { isValidateEmail } from "../../utill/validate";
import isEmpty from "validator/lib/isEmpty";
import { AuthApi } from "../../api/auth";
import { reload } from "../../utill/action";
import { useNavigate } from "react-router-dom";
const authApi = new AuthApi()
const cx = classNames.bind(styles)
const RegisterPage = () => {
   const navigate = useNavigate()
   const [submit, setSubmit] = useState(false)
   const [err, setError] = useState("")
   const [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
      rePassword: "",
      phonenumber: "",
      gender: "",
      birthDay: "",
      address:""
   });
   const validate = {
      username: !isEmpty(user.username),
      email: isEmail(user.email),
      password:!isEmpty(user.password),
      rePassword: !isEmpty(user.rePassword),
      phonenumber: !isEmpty(user.phonenumber),
      gender: !isEmpty(user.gender),
      birthDay: !isEmpty(user.birthDay),
      address:!isEmpty(user.address)
   }
   const checkValidate = (): boolean => { 
      return Object.values(validate).every((data) => data);   
   }
  const handleSelectDate = (a: any, dateString: string) => {
   setUser(({ birthDay, ...other }) => ({ birthDay: dateString, ...other }));
  }
  const handleSelectGender= (e: any) => {
   setUser(({ gender, ...other }) => ({ gender: e.target.value, ...other }));
  }
  const hanleEmail = (e: any) => { 
   setUser(({ email, ...other }) => ({ email: e.target.value, ...other }));
  }
  
  const handleUsername = (e: any) => { 
   setUser(({ username, ...other }) => ({ username: e.target.value, ...other}));
  }

  const handlePassword = (e: any) => { 
   setUser(({ password, ...other }) => ({ password: e.target.value, ...other}));
  }

  const handleRePassword = (e: any) => { 
   setUser(({ rePassword, ...other }) => ({ rePassword: e.target.value, ...other}));
  }

  const handlePhone= (e: any) => { 
   setUser(({ phonenumber, ...other }) => ({ phonenumber: e.target.value, ...other}));
  }

  const handleAddress = (e: any) => { 
   setUser(({ address, ...other }) => ({ address: e.target.value, ...other}));
  }
  const handleSubmit = () => { 
      setSubmit(true);
      if(checkValidate()){
         authApi.register(user).then((data) => { 
            alert("đăng kí tài khoản thành công")
            navigate('/')
            reload()
         }).catch((err) => {
            setError(err.mes)
         })
      } 
      
  }
   return (
    <div className={cx('register-container')}>
        <h3>Đăng kí tài khoản</h3>

        <div className={cx('wrapper-input')}>
        <label htmlFor="username">username: </label>
        <Input 
        onChange={handleUsername}
        className={cx('input')}
        id="username"
        />
        </div>

        { submit && isEmpty(user.username) && <p>không được để trống username</p>}

        <div className={cx('wrapper-input')}>
        <label htmlFor="username">email: </label>
        <Input onChange={hanleEmail} type="email" className={cx('input')} id="username"/>        
        </div>

        {submit && !isEmail(user.email) && <p>không phải là email, vui lòng nhập lại</p>}
  

        <div className={cx('wrapper-input')}>
        <label htmlFor="username">mật khẩu: </label>
        <Input.Password 
        onChange={handlePassword}
        className={cx('input')}
        id="username"
        />
        </div>

        { submit && isEmpty(user.password) && <p>không được để trống password</p>}


        <div className={cx('wrapper-input')}>
        <label htmlFor="username">Nhập lại mật khẩu: </label>
        <Input.Password 
        onChange={handleRePassword}
        className={cx('input')}
        id="username"
        />
        </div>

        { submit && isEmpty(user.rePassword) && <p>phải nhập lại password</p>}

        
        <div className={cx('wrapper-input')}>
        <label htmlFor="username">số điện thoại: </label>
        <Input 
        onChange={handlePhone}
        className={cx('input')}
        id="username"
        />
        </div>

        { submit && isEmpty(user.phonenumber) && <p>không được để trống số điện thoại</p>}


        <div  className={cx('wrapper-input')}>
        <label htmlFor="">Giới tính</label>
        <Radio.Group onChange={handleSelectGender}>
           <Radio value={"nam"}>nam</Radio>
           <Radio value={"nữ"}>nữ</Radio>
        </Radio.Group>
        </div>
        
        <div className={cx('wrapper-input')}>
        <label htmlFor="username">Ngày sinh: </label>
        <Space direction="vertical">
           <DatePicker onChange={handleSelectDate}/>
        </Space>
        </div>

        <div className={cx('wrapper-input')}>
        <label htmlFor="username">Địa chỉ </label>
        <Input onChange={handleAddress} className={cx('input')} id="username"/>
        </div>
        { submit && isEmpty(user.address) && <p>không được để trống địa chỉ</p>}
        <p>{err}</p>
        <ButtonComponent className={cx('btn-submit')} onClick={handleSubmit}>Đăng kí tài khoản</ButtonComponent>
    </div> 
   )
  
    
};
export default RegisterPage;
