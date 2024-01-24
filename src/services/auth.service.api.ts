// import ApiService from "@/services/auth.service.api"
import type { AxiosResponse } from "axios";
import apiPath from "./api.path";
import ApiService from "./api.service";

interface AuthResponse {
    access_token: any;
    response: any;
    refresh: AuthResponse;
    ip: AuthResponse;
    access: AuthResponse;
    user: AuthResponse;
    result: any;
    // Define the properties of the authentication response
}

const AuthService = {
    // async userRegister(data: any): Promise<AxiosResponse<AuthResponse>> {
    //     return await ApiService.post(apiPath.user_register, data);
    // },
    // async getAccessTokenByRefreshToken(): Promise<AxiosResponse<AuthResponse>> {
    //     return await ApiService.postWithCredentials(
    //         apiPath.get_access_token_by_refresh_token,
    //         {}
    //     );
    // },

    async userLogin(data: any): Promise<AxiosResponse<AuthResponse>> {
        return await ApiService.post(apiPath.auth_login, data);
    },

    async userLogout(): Promise<AxiosResponse<AuthResponse>> {
        return await ApiService.get(apiPath.auth_logout);
    },

    async userForgotPassword(data: any): Promise<AxiosResponse<AuthResponse>> {
        return await ApiService.post(apiPath.auth_forgot_password, data);
    },


    // 
    async userAccountInfo(): Promise<AxiosResponse<AuthResponse>> {
        const response = await ApiService.get(apiPath.auth_get_user_info,);

        return response
    },

    // 

    async updateUserAccountInfo(data: any): Promise<AxiosResponse<AuthResponse>> {
        return await ApiService.post(apiPath.auth_get_user_info, data);
        // return response
    },

    async changePassword(data: any): Promise<AxiosResponse<AuthResponse>> {
        return await ApiService.post(apiPath.auth_change_password, data);
    },

    async checkResetPasswordToken(data: any): Promise<AxiosResponse<AuthResponse>> {
        return await ApiService.post(apiPath.auth_check_reset_password_token, data);
    },

    async resetPassword(data: any): Promise<AxiosResponse<AuthResponse>> {
        return await ApiService.post(apiPath.auth_reset_password, data);
    },




    // ------------------------------Pending----------------------------//

    async resetJwtToken(data: any): Promise<AxiosResponse<AuthResponse>> {
        return await ApiService.post(apiPath.refresh_jwt_token, data);
    },

    async passwordRecovery(data: any): Promise<AxiosResponse<AuthResponse>> {
        return await ApiService.post(apiPath.password_recovery, data);
    },
    // ------------------------------Pending----------------------------//
};

export default AuthService;

