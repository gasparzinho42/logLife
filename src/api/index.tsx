import axios, { AxiosRequestConfig } from "axios";
import { APIresponse, response } from "../types";
import { authApiRequest, verifyUserAPI } from "./types";

const apiInstance = axios.create({
  baseURL: "https://loglifelogin.herokuapp.com/",
});

export const AuthAPI = async (data: authApiRequest): Promise<response> => {
  const config: AxiosRequestConfig<any> = {
    url: "/auth",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: false,
    data: data,
  };
  try {
    const response: APIresponse = await apiInstance.request(config);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const VerifyUserAPI = async (data: verifyUserAPI): Promise<response> => {
  const config: AxiosRequestConfig<any> = {
    url: "/verifyUserExists",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: false,
    data: data,
  };
  try {
    const response: APIresponse = await apiInstance.request(config);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
export const resetPasswordAPI = async (
  data: authApiRequest
): Promise<response> => {
  const config: AxiosRequestConfig<any> = {
    url: "/passwordReset",
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: false,
    data: data,
  };
  const response: APIresponse = await apiInstance.request(config);
  return response.data;
};
