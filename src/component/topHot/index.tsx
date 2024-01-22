import { useState, useEffect } from "react";
import styles from "./first.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const FirstComponent = () => {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsShaking((prevIsShaking) => !prevIsShaking);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className={cx("first-container")}>
      <div className={cx(`${isShaking ? "dot" : "shake"}`)}></div>
      <p>Cơ hội sở hữu Samsung S20 FE 256GB chỉ với 6.990.000đ - SL có hạn</p>
    </div>
  );
};
export default FirstComponent;
