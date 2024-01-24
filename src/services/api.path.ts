interface ApiPath {
   [key: string]: string;
}

const apiPath: ApiPath = {
   /** 
    * Auth Pages */

   auth_login: "/auth/login", //POST
   auth_logout: "/auth/logout", //GET
   auth_forgot_password: "/auth/forgot-password", // POST
   auth_check_reset_password_token: "/auth/check-reset-password-token", //POST
   auth_reset_password: "/auth/reset-password", //POST
   auth_change_password: "/auth/change-password", //POST 
   auth_get_user_info: "auth/profile", //GET
   auth_edit_profile: "auth/profile", //POST

   /** 
    * Setting Tab */

   settings_services: `/services`,
   settings_services_update: `/services`, //PUT: /services/{id}
   settings_services_change_status: `/services`, //PATCH: /services/{id}

   settings_taxes: `/tax`,
   settings_taxes_update: `/tax`, //PUT: /tax/{id}
   settings_taxes_change_status: `/tax`, //PATCH: /tax/{id}
   settings_delete: `/tax`, //PATCH: /tax/{id}

   settings_province_add: '/province',   //Add
   settings_province_update: '/province',    //Update
   settings_province: '/province',   //GET List province?page=1&limit=10' \
   settings_province_change_status: '', //ChangeStatus
   settings_delete_province: '/province',    //Delete

   settings_province_active_list: '/province/active/list',   //Add


   settings_province_tax_value_list: '/province/province/taxe-value-list', //GET And POST

   /**
    * Email Template :
       POST    /email-template
       GET     /email-template
       GET     /email-template/{id}
       PUT     /email-template/{id}
       PATCH   /email-template/{id}
       DELETE  /email-template/{id}
    */
   email_template: `/email-template`,     //GET     /email-template
   // email_template_by_id: `/email-template`,     //GET     /email-template/{id}
   // email_template_update_by_id: `/email-template`, //PUT     /email-template/{id}

   email_send: `/mail/send`,     //GET     /email-template

   /**
    * 
    * Members :
       POST        /members
       GET     /members
       GET     /members/{id}
       PUT     /members/{id}
       PATCH       /members/{id}
       DELETE      /members/{id}
    */
   members: `/members`,

   members_active_list: `/members/active/list`,


   /**
    * DashBoard
    * 
    *   
       GET     /dashboard/client-counts
       GET     /dashboard/tax-filing-counts
       GET     /dashboard/member-counts
       GET     /dashboard/revenue

       GET     /dashboard/client-counts
       GET     /dashboard/pending-tax-filing-counts
       GET     /dashboard/overdue-tax-filing-counts
       GET     /dashboard/member-counts
       GET     /dashboard/revenue
    * 
    */

   dashboard_client_counts: `/dashboard/client-counts`,
   // dashboard_tax_filing_counts: `/dashboard/tax-filing-counts`,
   dashboard_pending_tax_filing_counts: `/dashboard/pending-tax-filing-counts`,
   dashboard_overdue_tax_filing_counts: `/dashboard/overdue-tax-filing-counts`,
   dashboard_member_counts: `/dashboard/member-counts`,
   dashboard_revenue: `/dashboard/revenue`,


   /**
    * Notification
    * GET      /notification
    * GET      /notification/{id}
    * PATCH    /notification/{id}
    * DELETE   /notification/{id}
    * GET      /notification/my/unread
    */

   notification: `/notification`,
   notification_unread: `/notification/my/unread`,


   /**
    * Clients
    * POST       /clients
    * GET        /clients
    * GET        /clients/{id}
    * PUT        /clients/{id}
    * PATCH      /clients/{id}
    * DELETE     /clients/{id}
    * PUT        /clients/{id}/update-business-owners
    * GET        /clients/tax-filing/list
    */

   clients: `/clients`,
   business_owners: `business-owners`,
   update_business_owners: `update-business-owners`,
   clients_active_list: `/clients/active/list`,
   clients_active_owners_list: `/clients/active-owners/list`,
   client_list_for_tax_filing: `/clients/list/for-tax-filing`,
   client_list_for_excel_view: `/tax-filing/excel-view`,
   clients_service_list: `servies/list`,

   // 


   /**
    * Tax Filing
    * 
    * POST     /tax-filing
    * GET      /tax-filing
    * GET      /tax-filing/{id}
    * PUT      /tax-filing/{id}
    * PATCH    /tax-filing/{id}
    * DELETE   /tax-filing/{id}
    */
   tax_filing: `/tax-filing`,




   users_upload_image: `/users/upload-image`,
   users_remove_image: `/users/remove-image`,




   /**
    * Client installment:
    * 
    * GET      /client-installment
    * PUT      /client-installment/{id}/pay-installment-payment
    */

   clientInstallment: `/client-installment`,
   pay_installment_payment: `/pay-installment-payment`



}


export default apiPath;