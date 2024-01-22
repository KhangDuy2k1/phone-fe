import { ConfigAxios } from "../config";

export class CategoryApi extends ConfigAxios { 
    public getAllCategory = async():Promise<any> => { 
            try {
                const result = await this.getInstanceAxios().get(`/category/categories`);
                return result.data;
            } catch (error: any) {
                throw error.response.data;
            }
    }
}