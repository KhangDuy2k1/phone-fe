import { ConfigAxios } from "../config";

export class OrderItemCart extends ConfigAxios {
    getOrderItemCart = async():Promise<any> => {
            try {
                const result = await this.getInstanceAxios().get('/cart/order-item-cart')
                console.log(result.data, "============")
                return result.data;
            } catch (error:any) {
                throw error.response.data;
            }
    }
    updateQuantity = async(id_item: number, quantity: number):Promise<any> => {
            console.log(id_item, quantity,"============");
            try {
                const result = await this.getInstanceAxios().patch(`/orderItem/update_quantity/${id_item}`, {
                    quantity: quantity
                })
                return result.data
            } catch (error:any) {
                throw error.response.data
            }
    }
    deleteOrderItem = async(id_item: number):Promise<any> => {
        console.log(id_item, "===================");
            try {
                const result = await this.getInstanceAxios().delete(`/orderItem/delete/${id_item}`)
                return result.data;
            } catch (error:any) {
                throw error.response.data;
            }
    }
}