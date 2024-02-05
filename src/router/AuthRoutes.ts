const AuthRoutes = {
    path: '/auth',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    meta: {
        requiresAuth: false
    },
    children: [
        // {
        //     name: 'Landing Page',
        //     path: '/',
        //     component: () => import('@/views/pages/landingpage/index.vue')
        // },
        {
            name: 'vueApp-upstrapp.co.in', // landing page change to log-in-page
            path: '/',
            component: () => import('@/views/authentication/SideLogin.vue')
        },
        {
            name: 'Login',
            path: '/auth/login',
            // component: () => import('@/views/authentication/SideLogin.vue')
        },
        // {
        //     name: 'Boxed Login',
        //     path: '/auth/login2',
        //     component: () => import('@/views/authentication/BoxedLogin.vue')
        // },
        {
            name: 'Register',
            path: '/auth/register',
            // component: () => import('@/views/authentication/SideRegister.vue')
        },
        // {
        //     name: 'Boxed Register',
        //     path: '/auth/register2',
        // component: () => import('@/views/authentication/BoxedRegister.vue')
        // },
        {
            name: 'Forgot Password',
            path: '/auth/forgot-password',
            // component: () => import('@/views/authentication/SideForgotPassword.vue')
        },
        {
            name: 'Change Password',
            path: '/auth/change-password',
            // component: () => import('@/views/authentication/SideChangePassword.vue')
        },

        {
            name: 'Reset Password',
            path: '/auth/reset-password/:token',
            // component: () => import('@/views/authentication/SideResetPassword.vue')
        },

        // {
        //     name: 'Side Two Steps',
        //     path: '/auth/two-step',
        // component: () => import('@/views/authentication/SideTwoStep.vue')
        // },

        {
            name: 'Error',
            path: '/auth/404',
            // component: () => import('@/views/authentication/Error.vue')
        },
        {
            name: 'Maintenance',
            path: '/auth/maintenance',
            // component: () => import('@/views/authentication/Maintenance.vue')
        }
    ]
};

export default AuthRoutes;
