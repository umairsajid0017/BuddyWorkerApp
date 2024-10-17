import axios, { AxiosRequestConfig } from "axios";
import * as endPoints from "./Urls";
import { HTTP_METHODS } from "@/constants/HTTP_Methods";
import { API_ENDPOINTS } from "@/constants/API_EndPoints";


const apiRequest = async (
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  formData?: any,
  headers?: Record<string, string>,
  signal?: AbortSignal
) => {
  const baseURL = "http://54.179.188.209/BuddyAppBackend/api"; // Replace with your base API URL

  try {
    const config: AxiosRequestConfig = {
      method,
      url: `${baseURL}/${endpoint}`,
      headers: {
        "Content-Type": "multipart/form-data",
        // 'Content-Type': formData ? 'multipart/form-data' : 'application/json',
        ...headers,
      },
      data: formData,
      signal, 
    };

    const response = await axios(config);

    return response.data;
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
};

 export const login = async (data: any) => {
  let formData = new FormData();

  formData.append("email", data.email);
  formData.append("password", data.password);
  formData.append("loginType", "phone");

  return await apiRequest(HTTP_METHODS.POST, API_ENDPOINTS.LOGIN, formData);
};


export const getSearch = async (data: any) => {

  const params = {
    "query": 'sage'
  }
 
  // let formData = new FormData();

  // formData.append(); 
  // formData.append("query", data.query); 
  // formData.append("category_id", data.password);
  // formData.append("price_from", data.price_from);
  // formData.append("price_to", data.price_to);
  // formData.append("rating", data.rating);

  // console.log(formData)

  return await apiRequest(HTTP_METHODS.GET, API_ENDPOINTS.GET_SEARCH, params);
};



 export const Register =async (data: any) => {

  let formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("phone", data.phone);
  formData.append("password", data.password);
 
  return await apiRequest(HTTP_METHODS.POST, API_ENDPOINTS.REGISTER, formData);

};

export const getServices = async (categoryId: any,signal : any) => {
  let formData = new FormData();

  formData.append("category_id", categoryId);


  return await apiRequest(HTTP_METHODS.GET, API_ENDPOINTS.GET_SERVICES, formData, undefined, signal);
};
