export const validationRules: any = {
    required: (value: any) => !!value || 'Required',
    minLength: (value: string | any[]) => !value || value.length >= 3 || 'Minimum 3 characters',
    nameValidation: (value: string) => !value || /^[a-zA-Z0-9\s\-]+$/.test(value) || 'Please Enter Valid Name',
    referenceNo: (value: string | any[]) => !value || value.length >= 3 || 'Minimum 3 characters',
    amountValidation: (value: number) => !value || value >= 0 || 'Must be a positive number',
    amount: (value: string) => !value || /^\d*\.?\d+$/.test(value) || 'Please enter valid positive number',
    email: (v: any) => !v || /.+@.+\..+/.test(v) || 'Please enter valid  e-mail',
    phoneNumber: (v: string) => !v || /^\+?[0-9]{10,15}$/.test(v) || 'Invalid phone number'
};