import { ConfigAxios } from "../config";

export class ReviewApi extends ConfigAxios{
    public infoReview = async(): Promise<any> => {
            try {
                const result = await this.getInstanceAxios().get('/review/review-info')
                return result.data
            } catch (error:any) {
                throw error.response.data
            }
    }
}