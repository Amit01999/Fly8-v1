import axios, {
  AxiosRequestHeaders,
  AxiosRequestConfig,
  AxiosResponse,
  Method,
} from 'axios';

export const axiosInstance = axios.create({});

export const apiConnector = async <T = any>(
  method: Method,
  url: string,
  bodyData?: any,
  headers?: AxiosRequestHeaders,
  params?: Record<string, any>
): Promise<AxiosResponse<T>> => {
  const config: AxiosRequestConfig = {
    method,
    url,
    data: bodyData ?? null,
    headers: headers ?? undefined,
    params: params ?? undefined,
  };

  return axiosInstance<T>(config);
};
