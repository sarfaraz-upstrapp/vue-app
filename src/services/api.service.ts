import type { AxiosInstance, AxiosResponse } from "axios";
import { useRouter } from "vue-router";
import axios from "axios";
import { useToast } from 'vue-toastification';


interface QParams {
    [key: string]: any;
}

const toast: any = useToast();


// create Axios Instance
const createAxiosInstance = () => {
    // Create a new axios instance
    const instance = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
        // headers: {
        //     Authorization: localStorage.getItem("access_token") ? `Bearer ${localStorage.getItem("access_token")}` : ''
        // }

    });

    // if (localStorage.getItem("access_token")) {

    //     let token = localStorage.getItem("access_token");
    //     let parsedToken = token ? JSON.parse(token) : null;

    //     if (parsedToken) {
    //         console.log(parsedToken);
    //         instance.defaults.headers.common["Authorization"] = `Bearer ${parsedToken}`;
    //     } else {
    //         console.log("No token found in local storage!");
    //     }

    // }

    // Add a request interceptor
    // instance.interceptors.request.use(
    //     config => {
    //         // This function will be called before sending the request
    //         // You can modify the request config here if needed
    //         return config;
    //     },
    //     error => {
    //         // Handle request error here
    //         console.error('Request Error:', error);
    //         return Promise.reject(error);
    //     }
    // );
    instance.interceptors.request.use(  // New Interceptor
        (config: any) => {
            const token = localStorage.getItem('access_token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
            }
            return config;
        },
        error => {
            Promise.reject(error)
        });

    // Add a response interceptor
    instance.interceptors.response.use(
        response => {
            // This function will be called after receiving the response
            // You can modify the response here if needed
            return response;
        },
        error => {
            // Handle response error here
            console.error('Response Error:', error);

            // Check for different error types and handle them accordingly
            if (error) {

                // toast.error(`${error?.message || error}`);
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Response Data:', error.response.data);
                console.error('Response Status:', error.response.status);
                console.error('Response Headers:', error.response.headers);

                // toast.error(`${error?.response?.data?.message || error?.response?.data || error?.message || error}`);

                /********************************************************************************************
                 * The modified code still displays the error message in a toast notification,              *
                 * but also audibly annunciates the error using the browser's speech synthesis capabilities.* 
                 ********************************************************************************************/

                const errorMsg = `${error?.response?.data?.message || error?.response?.data || error?.message || error}`;
                toast.error(errorMsg);

                const synth = window.speechSynthesis;
                let utterThis = new SpeechSynthesisUtterance(errorMsg);
                synth.speak(utterThis);

                if (error.response.status === 404) {
                    // Redirect the user to the 404 page
                    const router = useRouter();
                    router.push("/404");
                }





            } else if (error.request) {
                // The request was made but no response was received
                console.error('Request:', error.request);
                toast.error(`Error: Request was made but no response was received, ${error.message}`);

            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error Message:', error.message);
                toast.error(`Error: Something went wrong, ${error.message}`);
            }

            return Promise.reject(error);
        }
    );

    return instance;
};

const axiosInstance = createAxiosInstance();



const ApiService = {


    async get(path: string, qParams: QParams = {}): Promise<AxiosResponse> {
        let config = {
            params: qParams
        }
        const response = await axiosInstance.get(path, config);
        console.log("GET API response >>> ", response);
        return response;
    },
    async getwithResponseType(path: string, qParams: QParams = {}, config = {}): Promise<AxiosResponse> {
        const axiosConfig = {
            params: qParams,
            ...config
        }
        const response = await axiosInstance.get(path, axiosConfig);
        console.log("GET API response >>> ", response);
        return response;

    },


    async post(path: string, data: any): Promise<AxiosResponse> {
        const response = await axiosInstance.post(path, data);
        console.log("POST API response >>> ", response);
        return response;
    },

    // async postWithCredentials(path: string, data: any): Promise<AxiosResponse> {
    //     const response = await axiosInstance.post(path, data, {
    //     });
    //     return response;
    // },

    async put(path: string, data: any): Promise<AxiosResponse> {
        const response = await axiosInstance.put(path, data);
        console.log("PUT API response >>> ", response);
        return response;
    },

    async patch(path: string, data: any): Promise<AxiosResponse> {

        const response = await axiosInstance.patch(path, data);
        console.log("PATCH API response >>> ", response);
        return response;
    },

    async update(
        path: string,
        slug: string,
        params: any
    ): Promise<AxiosResponse> {
        const response = await axiosInstance.put(`${path}/${slug}`, params);
        console.log("UPDATE API response >>> ", response);
        return response;
    },

    async delete(path: string): Promise<AxiosResponse> {
        const response = await axiosInstance.delete(path);
        console.log("delete API response >>> ", response);
        return response;
    },
};

export default ApiService;