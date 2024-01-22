import { ConfigAxios } from "../config";
export class AuthApi extends ConfigAxios{
    public loginHandle = async (bodyLogin: {
    username: string;
    password: string;
  }): Promise<any> => {
    try {
      const response = await this.getInstanceAxios().post("/auth/log", bodyLogin);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  };
  public register = async(bodyRegister: {
    username: string,
    email: string,
    password: string,
    phonenumber: string,
    gender: string,
    birthDay: string,
    address:string
  }): Promise<any> => { 
      try {
         const result = await this.getInstanceAxios().post('/auth/register', bodyRegister)
         return result.data
      } catch (error: any) {
         throw error.response.data
      }
  }
  public sendOtpToEmail = async(email: string):Promise<any> => { 
      try {
        const response = await this.getInstanceAxios().get(`/auth/otp?email=${email}`)
        return response.data
      } catch (error: any) {
        throw error.response.data
      }
  }
  public verifyOtp = async(otp: string):Promise<any> => { 
        try {
          const result = await this.getInstanceAxios().post(`/auth/verifyOtp`, {
            otp
          })
          return result.data;
        } catch (error:any) {
          throw error.response.data
        }
  }
  public updatePasswordForget = async(bodyUpdatePassword: {email:string, password: string, newPassword: string}):Promise<any> => { 
        try {
          const result = await this.getInstanceAxios().patch('/auth/change-forget', bodyUpdatePassword)
          return result.data
        } catch (error:any) {
         throw error.response.data
        }
  }
}

