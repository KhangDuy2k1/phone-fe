import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);
export const SelectOption = (props: {children : any, idClick:any,id: number, clickHandle: any}) => { 
    const {children, idClick, id, clickHandle} = props
    return (
        <div onClick={clickHandle} style={idClick === id ? {color: "blue", border: "1px solid blue"} : {color: "black"}} className={cx('select')}>
            {children}
        </div>
    )
}