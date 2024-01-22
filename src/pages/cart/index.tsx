import classNames from "classnames/bind";
import { getToken } from "../../utill/token";
import styles from "./index.module.scss";
import { CartItem } from "./cartItem";
import { OrderItemCart } from "../../api/orderItem";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const orderItemCart = new OrderItemCart();
const cx = classNames.bind(styles);
export const Cart = () => {
    const [litsItemCarts, setListItemCarts] = useState<any>([]);
    const orderItem = useSelector((state:any) => state.orderItem)
    useEffect(() => { 
        orderItemCart.getOrderItemCart().then((data) => {
                setListItemCarts(data["orderItem"].orderItems)
        }).catch((error) => {
                console.error(error);
        })
    }, [])
    return (
        !getToken() ? <div style={{fontSize: "20px",opacity: "0.5", textAlign: "center", marginTop: "20px", height: "800px"}}>
            <i> Cần đăng nhập để xem giỏ hàng</i>
           
        </div>
         : <div className={cx('cart-container')}>
        <h2>Giỏ hàng</h2>
        <div>
            
        </div>
        <table className={cx('cart-info-container')}>
                         <tr>
                                 <th className={cx('column-phone')}>Điện thoại</th>
                                 <th className={cx('column-quantity')}>Số lượng</th>
                                 <th className={cx('column-price')}>Giá tiền</th>
                                 <th className={cx('column-total')}>Tổng tiền (đã giảm giá)</th>
                                 <th className={cx('column-delete')}>Xóa</th>
                                 <th className={cx('column-select')}>Chọn</th>
                        </tr>
                        {
                            litsItemCarts?.map((cartItem: any) => { 
                               return <CartItem cartItem = {cartItem}/>
                            })
                        }
                   
                        

            </table>
            <div className={cx("total-order-container")}>   
               <h2>Tổng tiền đơn hàng : <span>{orderItem.totalMoney}</span></h2>
            </div>
          
           
    </div>
    )
        
    
}