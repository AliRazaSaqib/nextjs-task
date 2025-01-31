import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { NEXT_PUBLIC_BACKEND_BASE_URL } from "./envVariables";

export const axiosInstance = axios.create({
  baseURL: NEXT_PUBLIC_BACKEND_BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export enum API_METHOD_TYPE {
  GET = "GET",
  POST = "POST",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
  PUT = "PUT",
}

export enum STATUS_CODE {
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  NOT_OPERATIONAL = 451,
  NOT_AVAILABLE = 410,
}

type BodyType = Record<string, any> | Array<any> | FormData | null;

export const isApiSuccess = (status: number) => status >= 200 && status <= 299;

export const apiManager = async (
  url: string,
  body: BodyType,
  method: AxiosRequestConfig["method"],
  header: AxiosRequestConfig["headers"] = {},
  baseURL = NEXT_PUBLIC_BACKEND_BASE_URL
): Promise<AxiosResponse> => {
  const defaultHeaders = {
    ...axiosInstance.defaults.headers.common,
    ...header,
  };

  console.log(body, method, baseURL, header);

  try {
    return await axiosInstance({
      method: method,
      url: url,
      data: body,
      baseURL: baseURL,
      headers: defaultHeaders,
    });
  } catch (e: any) {
    return e.response;
  }
};
