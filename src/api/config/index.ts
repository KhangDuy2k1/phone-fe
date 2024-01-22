import axios from "axios";
import { getToken } from "../../utill/token";
const defaultConfig = {
  baseURL: "http://localhost:3002/api",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getToken()}`
  },
}
export class ConfigAxios {
  private defaultConfig: any = defaultConfig;
  getInstanceAxios = () => {
       return axios.create(this.defaultConfig)
  }
}
