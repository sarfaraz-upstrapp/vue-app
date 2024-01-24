import type { AxiosResponse } from "axios";
import apiPath from "../api.path";
import ApiService from "../api.service";

interface AuthResponse {
    meta: {};
    items: never[];
    services: never[];
    access_token: any;
    response: any;
    refresh: AuthResponse;
    ip: AuthResponse;
    access: AuthResponse;
    user: AuthResponse;
    result: any;
    // Define the properties of the authentication response
}

const MediaService = {

    async uploadUserImage(payload: any): Promise<AxiosResponse<AuthResponse>> {
        return await ApiService.post(apiPath.users_upload_image, payload);
    },

    async removeUserImage(payload: any): Promise<AxiosResponse<AuthResponse>> {
        return await ApiService.post(apiPath.users_remove_image, payload);
    },

};

export default MediaService;

