import axios from "axios";

const createMainAxiosInstance = () => {
  return axios.create({
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 900000,
  });
};

const createRequestInterceptorAuth = (instanse) => {
  instanse.interceptors.request.use(
    async (config) => {
      return config;
    },
    (err) => Promise.reject(err)
  );
};
const createResponseInterceptorAuth = (instanse) => {
  instanse.interceptors.response.use(
    (response) => response.data,
    async (err) => {
      return Promise.reject(new Error(err));
    }
  );
};

const axiosInstance = createMainAxiosInstance();

createRequestInterceptorAuth(axiosInstance);
createResponseInterceptorAuth(axiosInstance);

export { axiosInstance };
