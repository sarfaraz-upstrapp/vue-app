export const SALES_TAX_FILING_SERVICE_TYPE: number = 1
export const MEALS_TAX_FILING_SERVICE_TYPE: number = 2

// 

export const TAX_FILING_STATUS: any = [
    {
        key: 1,
        title: 'Incomplete'
    },
    {
        key: 2,
        title: 'Pending'
    },
    {
        key: 3,
        title: 'Completed'
    },
    {
        key: 4,
        title: 'Overdue'
    },

];

export const getStatusTitle = (statusKey: any) => {
    let statusObj = TAX_FILING_STATUS.find((status: any) => status.key === statusKey);
    return statusObj ? statusObj.title : 'Not Defined';
};

// TAX_FILING_STATUS

export const MANAGED_BY: any = [
    {
        key: 1,
        title: 'Adam'
    },
    {
        key: 2,
        title: 'Charlie'
    },
    {
        key: 3,
        title: 'Markus'
    },
    {
        key: 4,
        title: 'Lucas'
    },
    {
        key: 5,
        title: 'Jhone'
    }

];

export const getManagedByTitle = (statusKey: any) => {
    let statusObj = MANAGED_BY.find((status: any) => status.key === statusKey);
    return statusObj ? statusObj.title : 'Not Defined';
};

export const DUE_FEE: any = [
    {
        key: false,
        title: 'All'
    },
    {
        key: true,
        title: 'Due Fee'
    },

];
// PROVINCE

export const PROVINCE: any = [
    {
        key: 1,
        title: 'Alberta'
    },
    {
        key: 2,
        title: 'British Columbia'
    },
    {
        key: 3,
        title: 'Manitoba'
    },
    {
        key: 4,
        title: 'New Brunswick'
    },
    {
        key: 5,
        title: 'Newfoundland and Labrador'
    }

];

// CLIENT_TYPES
export const CLIENT_TYPES: any = [
    {
        key: 1,
        title: 'Personal'
    },
    {
        key: 2,
        title: 'Business'
    }
];

// CLIENT_FORM_TYPES
export const CLIENT_FORM_TYPES: any = [
    {
        key: 1,
        title: 'Form 1120'
    },
    {
        key: 2,
        title: 'Form 1120S'
    },
    {
        key: 3,
        title: 'Form 1065'
    },
    {
        key: 4,
        title: 'Form Sch C '
    },

];


// FILING_FREQUENCY_TYPES
export const FILING_FREQUENCY_TYPES: any = [
    {
        key: 1,
        title: 'Monthly'
    },
    {
        key: 4,
        title: 'Quarterly'
    },
];

// CLIENTS

export const CLIENTS: any = [
    {
        key: 1,
        title: 'Hanna Gover',
    },
    {
        key: 2,
        title: 'Daniel Kristeen',
    },
    {
        key: 3,
        title: 'Julian Josephs',
    },
    {
        key: 5,
        title: 'Leanne Graham',
    },
    {
        key: 6,
        title: 'Mrs. Dennis Schulist',
    },
    {
        key: 7,
        title: 'Kurtis Weissnat',
    },
    {
        key: 8,
        title: 'Glenna Reichert',
    },
    {
        key: 9,
        title: 'Clementina DuBuque'
    },
    {
        key: 10,
        title: 'Jhone DuBuque'
    },

];

export const getClientTitle = (clientKey: any) => {
    let clientObj = CLIENTS.find((client: any) => client.key === clientKey);
    return clientObj ? clientObj.title : 'Not Defined';
};

export const IS_EXISTING: any = [
    {
        key: 1,
        title: 'Yes'
    },
    {
        key: 0,
        title: 'No'
    },

];


export const PAYMENT_CYCLE: any = [
    {
        key: 1,
        title: 'Monthly'
    },
    {
        key: 2,
        title: 'Quartely'
    },
    {
        key: 3,
        title: 'Half Yearly'
    },
    {
        key: 4,
        title: 'Yealy'
    },

];

export const MONTH_LIST: any = [
    {
        key: 1,
        title: 'January'
    },
    {
        key: 2,
        title: 'February'
    },
    {
        key: 3,
        title: 'March'
    },
    {
        key: 4,
        title: 'April'
    },
    {
        key: 5,
        title: 'May'
    },
    {
        key: 6,
        title: 'June'
    },
    {
        key: 7,
        title: 'July'
    },
    {
        key: 8,
        title: 'August'
    },
    {
        key: 9,
        title: 'September'
    },
    {
        key: 10,
        title: 'Octomber'
    },
    {
        key: 11,
        title: 'November'
    },
    {
        key: 12,
        title: 'December'
    },

];

export const YEARS_LIST_FUN = () => {

    const todayDate: Date = new Date();

    const startYear: number = 2020;
    const endYear: number = todayDate.getFullYear();

    const yearsList: any[] = [];

    for (let year = startYear; year <= endYear; year++) {
        yearsList.push({
            key: year,
            title: `${year}`
        });
    }
    return yearsList;
}

export const YEARS_LIST: any = [
    {
        key: 2020,
        title: '2020'
    },
    {
        key: 2021,
        title: '2021'
    },
    {
        key: 2022,
        title: '2022'
    },
    {
        key: 2023,
        title: '2023'
    },
    {
        key: 2024,
        title: '2024'
    },

];

export const CLIENT_SERVICE_LIST: any = [
    {
        serviceTitle: 'Sales Tax Filing',
        serviceType: '1',
        isSelected: false
    },
    {
        serviceTitle: 'Meals Tax Filing',
        serviceType: '2',
        isSelected: false
    },
    {
        serviceTitle: 'Payroll',
        serviceType: '3',
        isSelected: false
    },
    {
        serviceTitle: 'Book Keeping',
        serviceType: '4',
        isSelected: false
    },
    {
        serviceTitle: 'Year-End Tax Returns',
        serviceType: '5',
        isSelected: false
    }

];


export const TAX_FILING_SERVICES: any = [
    {
        id: SALES_TAX_FILING_SERVICE_TYPE,
        title: 'Sales Tax Filing',
        code: 'Sales Tax',
    },
    {
        id: MEALS_TAX_FILING_SERVICE_TYPE,
        title: 'Meals Tax Filing',
        code: 'Meals Tax'

    },
];

export const getTaxFilingService = (serviceTypeKey: any) => {
    let serviceTypeObj = TAX_FILING_SERVICES.find((client: any) => client.id === serviceTypeKey);
    return serviceTypeObj ? serviceTypeObj.title : 'Not Defined';
};

export const getTaxFilingServiceCode = (serviceTypeKey: any) => {
    let serviceTypeObj = TAX_FILING_SERVICES.find((client: any) => client.id === serviceTypeKey);
    return serviceTypeObj ? serviceTypeObj.code : 'Not Defined';
};



export const ORDER_BY: any = [
    {
        id: 1,
        title: 'Client Name',
        key: 'ClientFullName',
    },
    {
        id: 2,
        title: 'Due Date First',
        key: 'dueDate'

    },
    {
        id: 3,
        title: 'Filing Date',
        key: 'taxFilingLastDate'

    },
];


// sortBy

export const SORT_BY: any = [
    {
        id: 1,
        title: 'Ascending',
    },
    {
        id: 0,
        title: 'Descending',

    },

];



// for User Type
export const USER_TYPES: any = {
    SUPER_ADMIN: 0,
    ADMIN: 1,
    MEMBER: 2,
    CLIENT: 3,
};

// for User Status
export const USER_STATUS: any = {
    PENDING: 0,
    APPROVED: 1,
    REJECTED: 2,
};



// for Service Code
export const SERVICE_CODES: any = {
    SALES_TAX_FILIING_SERVICE: 'sales_tax_filing',
    MEAL_TAX_FILIING_SERVICE: 'meal_tax_filing',
};

// for User Status


// export const TAX_FILING_STATUS: any = {

//     PENDING: 1,
//     COMPLETED: 2,
// };


// for User Status
export const CLIENT_INVOICE_STATUS: any = {
    PENDING: 1,
    COMPLETED: 2,
};



export const NOTIFICATION_TYPES: any = {
    NONE: 0,

    ADMIN_EMAIL: 1,
    CLIENT_EMAIL: 2,

    ADMIN_ALERT_NOTIFICATION: 3,
    CLIENT_ALERT_NOTIFICATION: 4,

    ADMIN_PUSH_NOTIFICATION: 5,
    CLIENT_PUSH_NOTIFICATION: 6,

}

export const NOTIFICATION_EVENTS: any = {
    NONE: 0,
    USER_SIGNUP_EVENT: 1,
    JOB_ADD_EVENT: 2,
    PROJECT_ADD_EVENT: 3,
    MILESTONE_ADD_EVENT: 4,
    COMMISSION_ADD_EVENT: 5,
    WITHDRAW_REQUEST_ADD_EVENT: 6,
    JOB_STATUS_UPDATE_EVENT: 7,
    PROJECT_STATUS_UPDATE_EVENT: 8,
    MILESTONE_STATUS_UPDATE_EVENT: 9,
    WITHDRAW_REQUEST_UPDATE_EVENT: 10,
    JOB_ADD_USER_EVENT: 11,
    INVOICE_SEND_EVENT: 12,
    PAYMENT_RECEIVED_EVENT: 13,
    USER_PASSWORD_CHANGE_EVENT: 14
}

export const NOTIFICATION_EVENTS_REDIRECTIONS: any = {
    1: '/user/profile',
    2: '/admin/job/view/{id}',
    3: '/user/projects/view/{id}',
    4: '/user/projects/view/{id}',
    5: '/user/commission/view/{id}',
    6: '/admin/wallet-withdrawal-request',
    7: '/user/jobs/view/{id}',
    8: '/user/projects/view/{id}',
    9: '/user/projects/view/{id}',
    10: '/user/wallet',
    11: '/user/jobs/view/{id}',
    12: '/user/projects/view/{id}',
    13: '/user/projects/view/{id}'
}