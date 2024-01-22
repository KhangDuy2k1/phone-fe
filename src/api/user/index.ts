import { ConfigAxios } from "../config";

export class UserApi extends ConfigAxios {
    getUserLogin = async(): Promise<any> =>  {
            try {
                const result = await this.getInstanceAxios().get("/user/get-user-login")
                return result.data;
            } catch (error: any) {
                console.error(error.response.data)
                throw error.response.data;
            }
    } 
}