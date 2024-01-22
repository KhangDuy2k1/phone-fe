import styles from "./index.module.scss";
import { Checkbox } from 'antd';
import { MdOutlineDelete } from "react-icons/md";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { formatNumber } from "../../../utill/format";
import { OrderItemCart } from "../../../api/orderItem";
import { notification } from "antd";
import { openNotification } from "../../../utill/notification";
import { reload } from "../../../utill/action";
import { useDispatch } from "react-redux";
import { decreMoney, increMoney } from "../../../redux/orderItem";
const orderItem = new OrderItemCart();
const cx = classNames.bind(styles);
export const CartItem = (props: {cartItem: any}) => {
    const {cartItem} = props;
    const [quantityCartItem, setQuantityCartItem] = useState<number>(cartItem?.quantity)
    const [api, contextHolder] = notification.useNotification()
    const dispatch = useDispatch();
    const handleIncrea = async():Promise<any> => {
        setQuantityCartItem((quantityCartItem) => (quantityCartItem + 1))
    }
    const handleDecrea = () => {
        quantityCartItem === 1 ? setQuantityCartItem(1) : setQuantityCartItem((quantityCartItem) => quantityCartItem - 1)
        
    }
    const handleDelete = () => { 
        orderItem.deleteOrderItem(cartItem?.id).then(() => { 
                openNotification("success", "Xóa thành công", api)
                reload()
        }).catch((error:any) => {
                console.error(error)
        })
    }
    const handleCheckbox = (e: any) => {
        if(e.target.checked){
            dispatch(increMoney((100 - cartItem?.phone_variant.phone.discount.scale)/100 * cartItem?.phone_variant.price_detail*quantityCartItem))
        } else {
            dispatch(decreMoney((100 - cartItem?.phone_variant.phone.discount.scale)/100 * cartItem?.phone_variant.price_detail*quantityCartItem))
        }
       
    }
    useEffect(() => {
        orderItem.updateQuantity(cartItem?.id, quantityCartItem).then((data) => { 
            console.log("cập nhật thành công")
    }).catch((error) => {
            console.error(error);
    })
    }, [quantityCartItem])
    return (
 
        
            <tr className={cx('row-container')} >
                    {contextHolder}
            <td className={cx('column-phone')} > 
               <img style={{width: "60px", height: "80px", marginRight: "10px"}} src={cartItem?.phone_variant.phone.avatar} alt="" />
                <div>
                    <h2 style={{marginBottom: "10px"}}>{cartItem?.phone_variant.phone.name}</h2>
                    <i style={{fontSize: "15px"}}>
                    {cartItem?.phone_variant.storage.memory}, {cartItem?.phone_variant.color.name}
                    </i>
                </div>
            </td>
            <td className={cx('quantity')}>
                <button onClick={handleDecrea}>-</button>
                <input type="text" style={{textAlign: "center"}} value={quantityCartItem} />
                <button onClick={handleIncrea}>+</button>
            </td>
            <td className={cx('price')}>
               <h4>{formatNumber(cartItem?.phone_variant.price_detail)} VNĐ </h4>
            </td>
            <td className={cx('total-price')}>
               <h4>{formatNumber((100 - cartItem?.phone_variant.phone.discount.scale)/100 * cartItem?.phone_variant.price_detail*quantityCartItem)} VNĐ</h4> 
            </td>

            <td className={cx('delete')}>       
                <MdOutlineDelete onClick={handleDelete} className={cx('icon')}/>
            </td>
            <td>
                <Checkbox onChange={handleCheckbox}/>
            </td>
        </tr>
       
    )
}