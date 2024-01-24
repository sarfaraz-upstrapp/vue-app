// import { RouteRecordRaw } from "vue-router";


const MainRoutes = {
    path: '/main',
    meta: {
        requiresAuth: true
    },
    redirect: '/main',
    // component: () => import('@/layouts/full/FullLayout.vue'),
    component: () => import('@/views/dashboard/modern/index.vue'),
    children: [
        {
            name: 'Dashboard',
            path: '/dashboard',
            component: () => import('@/views/dashboard/modern/index.vue')
        },

        /****************************************************************
        * *******************       UserProfile       *******************
        ***************************************************************/


        {
            name: 'Users Profile',
            path: '/apps/user/profile',
            // component: () => import('@/views/pages/account-settings/AccountSettings.vue')
        },
        {
            name: 'Update Users Profile',
            path: '/apps/user/profile-update/:id',
            // // component: () => import('@/components/apps/user-profile/ProfilePageUpdate.vue')
        },



        /****************************************************************
         * *******************          Clients       *******************
         ***************************************************************/

        {
            name: 'Clients',
            path: '/apps/clients',
            // component: () => import('@/views/apps/clients/clients.vue'),

        },
        {
            name: 'Add Clients',
            path: '/apps/clients/add',
            // component: () => import('@/views/apps/clients/addClients.vue')
        },
        {
            name: 'Edit Clients',
            path: '/apps/clients/edit/:id',
            // component: () => import('@/views/apps/clients/addClients.vue')
        },
        {
            name: 'Edit Owner',
            path: '/apps/owners/edit/:parentId/:clientId',
            // component: () => import('@/views/apps/clients/editOwnerDetails.vue')
        },
        {
            name: 'View Clients',
            path: '/apps/clients/view/:id',
            // component: () => import('@/views/apps/clients/viewClients .vue')
        },


        /****************************************************************
         * *******************        Tax Filing     *******************
         ***************************************************************/

        {
            name: 'Tax Filing',
            path: '/apps/tax-filing',
            // component: () => import('@/views/apps/taxFiling/taxFiling.vue'),

        },

        {
            name: 'Excel View',
            path: '/apps/tax-filing/excel-view',
            // component: () => import('@/views/apps/taxFiling/listAllTaxFiling.vue')

        },

        {
            name: 'Add Tax Filing',
            path: '/apps/tax-filing/add',
            // component: () => import('@/views/apps/taxFiling/addTaxFiling.vue')

        },

        {
            name: 'Edit Tax Filing ',
            path: '/apps/tax-filing/edit/:id',
            // component: () => import('@/views/apps/taxFiling/addTaxFiling.vue')
            // component: () => import('@/views/apps/taxFiling/editTaxFiling.vue')
        },
        {
            name: 'View Tax Filing ',
            path: '/apps/tax-filing/view/:id',
            // component: () => import('@/views/apps/taxFiling/viewTaxFiling.vue')
        },


        /****************************************************************
        * *******************      Client Invoice     *******************
        ***************************************************************/


        {
            name: 'Client Invoice',
            path: '/apps/client-invoice',
            // component: () => import('@/views/apps/clientsInvoice/clientInvoice.vue'),

        },
        {
            name: 'Add Clients Invoice',
            path: '/apps/client-invoices/add',
            // component: () => import('@/views/apps/clientsInvoice/addClientInvoice.vue')
        },
        {
            name: 'Edit Clients Invoice ',
            path: '/apps/client-invoice/edit/:id',
            // component: () => import('@/views/apps/clientsInvoice/editClientInvoice.vue')
        },
        {
            name: 'View Clients Invoice ',
            path: '/apps/client-invoice/view/:id',
            // component: () => import('@/views/apps/clientsInvoice/viewClientInvoice.vue')
        },

        /****************************************************************
        * *******************          Members       *******************
        ***************************************************************/

        {
            name: 'Staff',
            path: '/apps/members',
            // component: () => import('@/views/apps/members/members.vue'),

        },
        {
            name: 'Add Staff',
            path: '/apps/members/add',
            // component: () => import('@/views/apps/members/addMembers.vue')
        },
        {
            name: 'Edit Staff',
            path: '/apps/members/edit/:id',
            // component: () => import('@/views/apps/members/addMembers.vue')
        },

        /****************************************************************
       * *******************       Email Template       *******************
       ***************************************************************/

        {
            name: 'Email Template',
            path: '/apps/email-template',
            // component: () => import('@/views/apps/emailTemplate/emailTemplate.vue'),

        },
        {
            name: 'Add Email Template',
            path: '/apps/email-template/add/',
            // component: () => import('@/views/apps/emailTemplate/editEmailTemplate.vue'),
        },
        {
            name: 'Edit Email Template',
            path: '/apps/email-template/edit/:id',
            // component: () => import('@/views/apps/emailTemplate/editEmailTemplate.vue'),
        },
        {
            name: 'Send Email Template',
            path: '/apps/email-template/send/:id',
            // component: () => import('@/views/apps/emailTemplate/sendEmailTemplate.vue'),
        },
        /****************************************************************
       * *******************       Notification       *******************
       ***************************************************************/

        {
            name: 'Notification',
            path: '/apps/notification',
            // component: () => import('@/views/apps/notification/Notification.vue'),

        },
        {
            name: 'View Notification',
            path: '/apps/notification/view/:id',
            // component: () => import('@/views/apps/notification/Comments.vue'),

        },

        /****************************************************************
       * *******************       Account Setting       *******************
       ***************************************************************/

        {
            name: 'Account Setting',
            path: '/pages/account-settings',
            // component: () => import('@/views/pages/account-settings/AccountSettings.vue')
        },

        /****************************************************************
       * *******************       Setting       *******************
       ***************************************************************/

        {
            name: 'Setting',
            path: '/pages/settings',
            // component: () => import('@/views/pages/settings/Settings.vue')
        },

        /****************************************************************
       * *******************       State       *******************
       ***************************************************************/

        {
            name: 'State',
            path: '/apps/province',
            // component: () => import('@/views/apps/province/province.vue')
        },


    ]
};

export default MainRoutes;
