import { ReactElement, useEffect, useState } from "react";
import {reload, removeScrollEvent, scrollAddEvent} from "../../../utill/action"
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);
interface IPhone {
    id: number,
    name: string
}

export const PopoverComponent = (
    props: {
    contendCategory: {id: number, name: string, phones: any}[], 
    onMouseLeave: any,
    onMouseEnter: any}
    ): ReactElement => { 
    let phones: (IPhone | null)[]  = props['contendCategory'][0].phones;
    const navigate = useNavigate()
    const [isStick, setIsStick] = useState<boolean>(false)
    useEffect(() => { 
        const handleScroll = () => {
            console.log(window.scrollY)
                if(window.scrollY > 40) {
                        setIsStick(true)
                }else{
                        setIsStick(false)
                }
        }
        scrollAddEvent(handleScroll)
        return () => {
            removeScrollEvent(handleScroll)
        } 
    }, [])

    return (
        <div
         onMouseLeave={props["onMouseLeave"]} 
         onMouseEnter={props  ['onMouseEnter']} 
         className={
            !isStick ?
             cx('popover-container')
             :
             cx('sticky')
            }
             >
            <div className={cx('name-phone')}>
            <ul className={cx('list-name-phone-container')}>
            {
                phones?.map((phone: any) => { 
                    return <li onClick = {() => { 
                          navigate(`/product/${phone.id}`)
                          reload()
                    }} className={cx('name-phone-item')}>{phone.name}</li>
                })
            }
            </ul>
            </div>
                
            <div>
                    <img className={cx('img')} src="https://cdn.tgdd.vn//News/Thumb/1508851/iPhone-gia%CC%81-so%CC%82%CC%81c-1200x628.jpg" alt="" />
            </div>
            
           
        </div>
    )
}