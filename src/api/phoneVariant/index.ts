import { ConfigAxios } from "../config";

export class PhoneVariantApi extends ConfigAxios {
    public priceSelect = async(bodySelect:{phone_id: any, color_id: any, storage_id: any}) => {
        
      try {
          const result = await this.getInstanceAxios().get(`/pvariant/price?phone_id=${bodySelect.phone_id}&color_id=${bodySelect.color_id}&storage_id=${bodySelect.storage_id}`)
          return result.data 
      } catch (error:any) {
         throw error.response.data
      }
    }
}