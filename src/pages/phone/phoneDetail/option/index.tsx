import { formatNumber, pricePromotional } from "../../../../utill/format";
import { FaCartPlus } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { SelectOption } from "./select";
import { notification } from "antd";
import { useEffect, useState } from "react";
import { PhoneApi } from "../../../../api/phone";

import { PhoneVariantApi } from "../../../../api/phoneVariant";
import { CartApi } from "../../../../api/cart";
const cartApi = new CartApi();
const phoneApi = new PhoneApi();
const phoneVariantApi = new PhoneVariantApi();
const cx = classNames.bind(styles);
type NotificationType = "success" | "warning";
export const Option = (props: {phone: any}) => { 
    const {phone} = props
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type: NotificationType, message: string) => {
        if(type === "success"){
            api[type]({
                message: 'Thông báo',
                description:
                message,
              });
        }else {
            api[type]({
                message: 'Thông báo',
                description:
                message,
              });
        }
       
      };
    const [quantity, setQuantity] = useState<number>(0);
    const [colorStore, setColorStore] = useState<{colors: [], storages: []}>();
    const [idColor, setIdColor] = useState<number>()
    const [idStore, setIdStote] = useState<number>()
    const [price, setPrice] = useState<number>(0);
    const handleIncrese = () => {
        setQuantity((quantity) => quantity + 1)
    }
    useEffect(() => { 
        phoneApi.getColorsAndStorages(phone?.id).then((data) => {
              setColorStore(data)
        }).catch((error) => { 
              console.error(error);
        })
    }, [])

    useEffect(() => {
        try {
            if(idColor && idStore) {
                phoneVariantApi.priceSelect({phone_id: phone?.id, color_id: idColor, storage_id: idStore}).then((data) => {
                   setPrice(data?.price)
                })
        }
        } catch (error) {
            console.error(error)
        }
       
    }, [idColor, idStore])  

    const handleAddCart = async():Promise<any> => {
        try {
            if(idColor && idStore && quantity !== 0){
               const result =  await cartApi.addToCart({
                    phone_id: phone.id,
                    storage_id: idStore,
                    color_id: idColor,
                    quantity: quantity
                })
                openNotificationWithIcon("success", "Thêm giỏ hàng thành công")
            }else {
                openNotificationWithIcon("warning", "Thêm thông tin điện thoại để thêm vào giỏ hàng")
            }
        } catch (error:any) {
            console.log(error)
            if(error.mes === "jwt malformed"){
                    openNotificationWithIcon("warning", "bạn cần đăng nhập");
            }
        }
       
    }
    const handleDecrese = () => { 
        setQuantity((quantity) => {
             if(quantity <= 0){
                return 0;
             }else {
                return quantity - 1;
             }
        })
    }
    const handleInputQuantity = (e: any) => {
        if(!isNaN(e.target.value)){
            setQuantity(parseInt(e.target.value));
        }else {
            setQuantity(0)
        }
    }
    return (
    <div className={cx('option-conainer')}>
        {contextHolder}
        <div className={cx('price-container')}>
               <p>
                <strong className={cx('price-discount')}>
                    {price !== 0 ?  formatNumber(pricePromotional(price, phone?.discount.scale)): 
                    formatNumber(pricePromotional(phone?.price, phone?.discount.scale))
                     } đ
                </strong>
                <i>
                    <span className={cx('price')}>
                    {
                       price !==0 ? formatNumber(price) : formatNumber(phone?.price) 
                    }
                    đ
                    </span>
                </i>
                 <i className={cx("vat")}>
                    Giá đã bao gồm VAT
                 </i>
                </p>
                
        </div>
      
        <div className={cx('config')}>
            <div className={cx('color')}>
                 <span>LỰA CHỌN MÀU SẮC : </span>
                 <div  className={cx('list-store')}>
                    {
                        colorStore?.colors.map((color: {id: number;name: string}) => {
                            return <SelectOption id={color?.id} idClick={idColor} clickHandle={() => {
                                setIdColor(color?.id);
                            }}>
                            {color?.name.toUpperCase()}
                         </SelectOption>
                        })
                    }
                 </div>

            </div>
            <div className={cx('store')}>
                    <span>LỰA CHỌN PHIÊN BẢN :</span>
                    <div className={cx('list-store')}>
                    {
                        colorStore?.storages.map((store: {id: number; memory: string}) => {
                            return(
                                <SelectOption 
                                
                                clickHandle={() => {
                                        setIdStote(store?.id)
                                }}
                                idClick={idStore}
                                id={store?.id}>
                                {store?.memory}GB
                             </SelectOption>
                            )
                        })
                    }
                     </div>
            </div>
        </div>

         <p className={cx('delivery-truck')}>
            <TbTruckDelivery className={cx('icon')}/> 
            <i>Giao hàng miễn phí, vận chuyển toàn quốc</i>
         </p> 
        
        <h5 className={cx('phone-remaining')}>Còn lại {phone?.inventory_number} sản phẩm</h5>

         <div className={cx('btn-order-container')}>

            <div className={cx('quantity-container')}>
              <button onClick={handleDecrese} className={cx('btn-decrease')}>-</button>
              <input onChange={handleInputQuantity} className={cx('input-quantity')} type="text" value={quantity}/>
              <button onClick={handleIncrese} className={cx("btn-increase")}>+</button> 
            </div>
            
            <button onClick={handleAddCart} className={cx('btn-add-cart')}> 
                <FaCartPlus className= {cx('icon')}/> 
                <p>Thêm vào giỏ hàng</p>
            </button>
         </div>
          
    </div>)
}