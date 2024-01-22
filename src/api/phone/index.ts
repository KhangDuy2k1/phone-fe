import { ConfigAxios } from "../config"
export class PhoneApi extends ConfigAxios { 
    public bestSellingPhone = async():Promise<any> => { 
        try {
            const result = await this.getInstanceAxios().get('/orderItem/best')
            return result.data;
        } catch (error: any) {
            throw error.response.data
        }
    }
    public massiveDiscount = async():Promise<any> => { 
         try {
            const result = await this.getInstanceAxios().get('/phone/massive-discount')
            return result.data;
         } catch (error: any) {
            throw error.response.data
         }
    }
    public getPhoneDetail  = async (id: number): Promise<any> => {
        try {
            const result = await this.getInstanceAxios().get(`/phone/phone?id=${id}`)
  
            return result.data;
        } catch (error:any) {
            throw error.response.data;
        }
    }
    public getColorsAndStorages = async(id_phone: number):Promise<any> => { 
        
            try {
                const result = await this.getInstanceAxios().get(`/phone/color_store/${id_phone}`)
                console.log(result, "===================ss")
                return result.data;
            } catch (error:any) {
                throw error.response.data
            }
    }
}