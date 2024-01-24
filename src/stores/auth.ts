import { defineStore } from 'pinia';
import { router } from '@/router';
import { useToast } from 'vue-toastification'
import { TOAST_MESSAGE } from '@/constant/toaster.message';
import AuthService from '@/services/auth.service.api';
import { reactive } from 'vue';


const toast = useToast()


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        // @ts-ignore
        // user: JSON.parse(localStorage.getItem('user')),
        user: {
            token: null
        },
        returnUrl: null,
        access_token: null,
        resetPasswordToken: null,
    }),

    getters: {
        /*
        getUserById: (state) => {
            return (userId) => state.users.find((user) => user.id === userId)
        },
        */
        getUserData: (state: any) => {
            return state.user
        },


    },


    actions: {

        async login(payload: any) {

            AuthService.userLogin(payload)
                .then((response) => {
                    // update Pinia state
                    localStorage.setItem('access_token', JSON.stringify(response.data.access_token.token));

                    this.$state.user = response.data.user;
                    this.$state.access_token = response.data.access_token.token;

                    setTimeout(() => {
                        // redirect to previous url or default to home page
                        router.push(this.returnUrl || '/dashboards/main');
                        toast.success(TOAST_MESSAGE.LOG_IN_SUCCESS, {
                            timeout: 2000
                        });
                    }, 500);
                })
                .catch((error) => {
                    console.error(error || 'Error while logging in');
                });
        },

        async logout() {
            // this.$state.emailTemplate = response.data.items;
            // this.$state.user = 
            await AuthService.userLogout();;
            // this.$state.user =
            localStorage.removeItem('user');
            this.$state.access_token = null
            localStorage.removeItem('access_token');

            router.push('/');
            toast.success(TOAST_MESSAGE.LOG_OUT_SUCCESS, {
                timeout: 2000
            });
        },

        async forgotPassword(payload: any) {
            const response: any = await AuthService.userForgotPassword(payload);
            // resetPasswordToken

            // this.$state.user =
            //     localStorage.removeItem('user');
            router.push('/');
            toast.success(TOAST_MESSAGE.FORGOT_PASSWORD_SUCCESS, {
                timeout: 2000
            });
        },

        async getUserAccountInfo() {
            const response: any = await AuthService.userAccountInfo();
            // toast.success(TOAST_MESSAGE.FETCH_DATA_SUCCESSFULLY, {
            //     timeout: 2000
            // });

            return response

        },


        async updateUserAccountInfo(payload: any) {
            const response: any = await AuthService.updateUserAccountInfo(payload);
            console.log("updateUserAccountInfo response >>>", response);

            this.$state.user = response.data
            console.log("this.$state.user :::>>>", this.$state.user);

            // localStorage.setItem('user', JSON.stringify(response.data.user));
            return response
        },

        async changePassword(payload: any) {
            const response: any = await AuthService.changePassword(payload);
            return response
        },

        async checkResetPasswordToken(payload: any) {
            const response: any = await AuthService.checkResetPasswordToken(payload);
            return response
        },


        async resetPassword(payload: any) {
            const response: any = await AuthService.resetPassword(payload);
            return response
        },



    },
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage,
            },
        ],
    },
    // persist: {
    //     enabled: true
    // }
});
