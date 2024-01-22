import { ConfigAxios } from "../config";

export class CartApi extends ConfigAxios { 
    public addToCart = async(cartInfo:{
        phone_id: number;
        storage_id: number;
        color_id: number;
        quantity: number;
}):Promise<any> => { 
        try {
            const result = await this.getInstanceAxios().post('/orderItem/addtocart', cartInfo)
            return result.data;
        } catch (error:any) {
            throw error.response.data            
        }
    }
}