import { ConfigAxios } from "../config";

export class SlideApi extends ConfigAxios { 
    public getAllSlide = async():Promise<any> => { 
        try {
            const result = await this.getInstanceAxios().get('/slide/slides')
            return result.data;
        } catch (error: any) {
            throw error.response.data;
        }
    }
}