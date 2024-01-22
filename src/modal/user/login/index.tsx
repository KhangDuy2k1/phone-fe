import React, { useState } from "react";
import { Modal, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, visibleLoginModal } from "../../../redux/user";
import { useNavigate } from "react-router-dom";
import { AuthApi } from "../../../api/auth";
import ButtonComponent from "../../../component/button";
import styles from "./login.module.scss";
import classNames from "classnames/bind";
import { setToken } from "../../../utill/token";
import { reload } from "../../../utill/action";
const authApi = new AuthApi();
const cx = classNames.bind(styles);
const LoginModal: React.FC = () => {
  const [info, setInfo] = useState({ username: "", password: "" });
  const [alertShow, setAlertShow] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(selectUser)

  const handleCancle = () => {
    dispatch(visibleLoginModal(false));
  };

  const handleRegiser = () => {
    dispatch(visibleLoginModal(false));
    navigate("/register");
  };

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await authApi.loginHandle(info);
      setToken(response.accessToken)
      dispatch(visibleLoginModal(false));
      navigate("/");
      reload()
    } catch (error: any) {
      setAlertShow(error.message);
    }
  };

  const handleForgotPassword = () => { 
      navigate("/forgot")
      dispatch(visibleLoginModal(false))
  }

  return (
    <>
      <Modal title="Tài khoản" open={user.visibleLoginModal} onCancel={handleCancle} footer={null}>
        <h3>Vui lòng đăng nhập tài khoản của bạn để có thể trải nghiệm tốt hơn</h3>

        <Input
          onChange={(e) => {
            setInfo((prevInfo) => ({ ...prevInfo, username: e.target.value }));
          }}
          placeholder="nhập tên tài khoản"
          style={{ marginBottom: "20px" }}
        />

        <Input.Password
          onChange={(e) => {
            setInfo((prevInfo) => ({ ...prevInfo, password: e.target.value }));
          }}
          placeholder="nhập mật khẩu"
        />

        <span style={{ color: "red", margin: "5px 5px" }}>{alertShow}</span>

        <div className={cx("btn-container")}>
          <ButtonComponent onClick={handleLogin} className={cx("btn-login", "btn")}>
            Đăng nhập
          </ButtonComponent>
        </div>

        <div className={cx("wrap-options")}>
          <span onClick={handleForgotPassword}>Quên mật khẩu?</span>
          <p className={cx("text-question-account")}>
            Bạn chưa có tài khoản? <span onClick={handleRegiser}>Đăng kí</span>
          </p>
        </div>

        <p style={{ textAlign: "center", marginTop: "20px" }}>Hoặc</p>
        <div className={cx("login-social-container")}>
          <ButtonComponent className={cx("btn-login-facebook", "btn-social")}>
            <img
              src="https://cdn.tgdd.vn/2020/03/GameApp/Facebook-200x200.jpg"
              alt=""
              style={{ height: "100%" }}
            />
            <p>Đăng nhập với facebook</p>
          </ButtonComponent>

          <ButtonComponent className={cx("btn-login-google", "btn-social")}>
            <img
              src="	https://hoanghamobile.com/Content/web/img/login-google.png"
              alt=""
              style={{ height: "100%" }}
            />

            <p>Đăng nhập với Google</p>

            <form action="http://localhost:3002/api/auth/google" method="get">
              <button type="submit" value="Đăng nhập với google">
                Đăng nhập với google
              </button>
            </form>
          </ButtonComponent>
        </div>
      </Modal>
    </>
  );
};
export default LoginModal;
