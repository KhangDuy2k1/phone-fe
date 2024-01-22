import { FC, useState, useEffect } from "react";
import { Dropdown, Space } from 'antd';
import { BsPersonFill, BsCart4, BsFillTelephoneFill } from "react-icons/bs";
import { DownOutlined } from '@ant-design/icons';
import { BsClockHistory } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { visibleConfirmLogout, visibleLoginModal } from "../../redux/user";
import {SearchComponent} from "./search";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./header.module.scss";
import { UserApi } from "../../api/user";
import { getToken, removeToken } from "../../utill/token";
import { reload, removeScrollEvent, scrollAddEvent } from "../../utill/action";
import type {MenuProps} from "antd"
import { VscSignOut } from "react-icons/vsc";
const userApi: UserApi = new UserApi();
const cx = classNames.bind(styles);



export const HeaderComponent: FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [infoUserLogin, setInfoUserLogin] = useState({
    username:""
  })
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const items: MenuProps['items'] = [
    {
      onClick: (e) => {
          navigate('/info_user')
      },
      icon: <CgProfile style={{fontSize: "20px"}}/>,
      label: "Thông tin cá nhân",
      key: '0',
    },
    {
      onClick: () => {
          navigate('/histories_order')
      },
      icon: <BsClockHistory style={{fontSize: "20px"}}/>,
      label: "Lịch sử đặt hàng",
      key: '1',
    },
    {
      onClick: (e) => { 
        dispatch(visibleConfirmLogout(true))
      },
      icon: <VscSignOut style={{fontSize: "20px"}}/>,
      label: "Đăng xuất",
      key: '2',
    },
  ];

 

  useEffect(() => {
      if(getToken()){
        userApi.getUserLogin().then((data) => {
          setInfoUserLogin(data.user);
      }).catch((error) => {
          removeToken()
          reload()
      })
      }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    scrollAddEvent(handleScroll)

    return () => {
      removeScrollEvent(handleScroll)
    };
  }, []);

  const handleLogin = () => {
    localStorage.getItem("nameLogin")
      ? dispatch(visibleLoginModal(false))
      : dispatch(visibleLoginModal(true));
  };
  const handleCart = () => {
      navigate('/cart');
  }
  return (
    <div className={cx("header", `${isSticky ? "sticky-header" : ""}`)}>
    <div className={cx('sub-header')}>
    <div className={cx("logo")}>
        <img
          onClick={() => {
            navigate("/");
          }}
          style={{ width: "40px" }}
          src="https://firebasestorage.googleapis.com/v0/b/myproject-e8593.appspot.com/o/pngtree-smartphone-shop-sale-logo-design-png-image_5069958.jpg?alt=media&token=c4f5aa70-f946-45bd-9a97-078740690646"
          alt="logo"
        />
      </div>

      <div className={cx("search-container")}>
        <SearchComponent />
      </div>

      <div className={cx("icon-info")}>
        <div className={cx("contact")}>
          <BsFillTelephoneFill />
          <div className={cx("sub-contact")}>
            <p className={cx("text-contact")}>Liên hệ</p>
            <p>0969626350</p>
          </div>
        </div>

        <div  className={cx("sub-icon-info")}>
          <div  className={cx("user")}>
            {getToken() ? (
              <>
               <BsPersonFill className={cx("icon")} />
              <Dropdown menu={{ items }}>
                <Space>
                   {
                    infoUserLogin?.username.length < 8 ?
                    infoUserLogin?.username
                    : infoUserLogin?.username.slice(0,8)
                   }
                  <DownOutlined />
                </Space>
              </Dropdown>
              </>
            ) : (
              <>
              <BsPersonFill onClick={handleLogin} className={cx("icon")} />
                <p onClick={handleLogin}>Đăng nhập</p>
              </>
            )}
          </div>

          <div className={cx("cart")}>
            <BsCart4 onClick={handleCart} className={cx("icon")} />
          </div>
        </div>
      </div>  
    </div>  
     
    </div>
  );
};
