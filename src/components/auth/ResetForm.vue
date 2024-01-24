<template>
    <v-col cols="12" sm="10" md="8" lg="5" xxl="3" class="d-flex align-center justify-center">
        <div class="pa-sm-7 pa-4 w-75" v-if="isValidToken">
            <h2 class="text--darken-2 text-h4 font-weight-bold">Reset your password?</h2>
            <p class="text-subtitle-1 py-4 text-10">Please enter the new password and confirm to reset your password.</p>

            <Form @submit="validate" v-slot="{ isSubmitting }" class="mt-5 w-100" ref="formRef">
                <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">New Password</v-label>
                <v-text-field v-model="formData.newPwd" :rules="passwordRules" class="mb-8" required hide-details="auto" type="password" />

                <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">Confirm Password</v-label>
                <v-text-field
                    v-model="formData.confirmPwd"
                    :rules="confirmPasswordRules"
                    class="mb-8"
                    required
                    hide-details="auto"
                    type="password"
                />
                <v-btn
                    size="large"
                    :loading="isSubmitting"
                    color="primary"
                    :disabled="isSubmitting || valid || formData.newPwd !== formData.confirmPwd"
                    block
                    type="submit"
                    flat
                >
                    Submit
                </v-btn>
            </Form>

            <v-btn size="large" color="lightprimary" to="/auth/login" block class="mt-5 text-primary" flat>Back to Login</v-btn>
        </div>

        <div class="pa-sm-7 pa-4 w-75" v-else>
            <h2 class="text--darken-2 text-h4 font-weight-bold">Password Reset link is expired</h2>
            <p class="text-subtitle-1 py-4 text-10">Please try again.</p>
        </div>
    </v-col>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { Form } from 'vee-validate';
import { useToast } from 'vue-toastification';
import { useSwal } from '@/composables/useSwal';
import { useRoute } from 'vue-router';
import { router } from '@/router';

const toast = useToast();
const Swal = useSwal();
const route = useRoute();

const authStore = useAuthStore();

const valid = ref(false);
const formData = reactive({
    currentPwd: null,
    newPwd: null,
    confirmPwd: null,
    resetPasswordToken: null
});

const formRef: any = ref(null);

const isValidToken: any = ref(false);

const rules = {
    required: (v: any) => !!v || 'Required.',
    minLength: (v: string | any[]) => (v && v.length >= 6) || 'Password must be at least 6 characters',
    matchPassword: (v: null) => (v && v === formData.newPwd) || 'Passwords must match'
};
const passwordRules = ref([(value: any) => rules.required(value), (value: any) => rules.minLength(value)]);
const confirmPasswordRules = ref([(value: any) => rules.required(value), (value: any) => rules.matchPassword(value)]);

async function validate() {
    // Ensure the form reference is not null
    if (!formRef.value) {
        console.error('Form reference is null');
        return;
    }

    // Ensure the form is valid
    if (!(await formRef.value.validate())) {
        // If there are validation errors, you can handle them here (show messages, etc.)
        console.log('Validation failed');
        return;
    }

    // If we get this far, the form is valid

    try {
        let payload = {
            password: formData.newPwd,
            token: route.params.token
        };

        const response = await authStore.resetPassword(payload);
        console.log('response >>>', response);

        if (response) {
            toast.success('Data updated', {
                timeout: 2000
            });
            router.push({ path: '/auth/login' });
        }
    } catch (error) {
        console.log('error >>> ', error);
    }
}

const fetchTokenData = async () => {
    try {
        let payload: any = {
            token: route.params.token
        };
        const response: any = await authStore.checkResetPasswordToken(payload);
        console.log('fetchTokenData response >>> ', response);
        if (response.data) {
            isValidToken.value = true;
        } else {
            isValidToken.value = false;

            router.push({ path: `/auth/login` });
        }
    } catch (error) {
        console.log('fetchTokenData error >>> ', error);
    }
};

onMounted(() => {
    if (route.params.token) {
        const resetPasswordToken = route.params.token;
        // fetch data and fill taxFiling
        fetchTokenData();
    }
});
</script>

<!-- <script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { Form } from 'vee-validate';

import { TOAST_MESSAGE } from '@/utils/toasMessage/toaster.message';
import { useToast } from 'vue-toastification';
import { useSwal } from '@/composables/useSwal';
import { tokens } from 'maska';
import { useRoute } from 'vue-router';
import { router } from '@/router';

const toast = useToast();
const Swal = useSwal();

const route = useRoute();

const valid = ref(false);
const email = ref('admin@mail.com');

const formData = reactive({
    currentPwd: null,
    newPwd: null,
    confirmPwd: null,
    resetPasswordToken: null
});

// const authStore = useAuthStore();

const rules = {
    required: (v: any) => !!v || 'Required.',
    minLength: (v: string | any[]) => (v && v.length >= 6) || 'Password must be at least 6 characters.',
    matchPassword: (v: string) => (v && v === formData.newPwd) || 'Passwords must match.'
};
const passwordRules = ref([(value: any) => rules.required(value), (value: any) => rules.minLength(value)]);
const confirmPasswordRules = ref([(value: any) => rules.required(value), (value: any) => rules.matchPassword(value)]);

// const form: any = ref(null);

async function validate() {
    // // Add a reference to your form
    const form: any = ref(null);

    // // Ensure the form is valid and stop if not
    // if (!(await form.value.validate())) return;
    // Add a reference to your form

    // Ensure the form is valid and stop if not
    if (!(await form.value.validate())) return;
    else {
        // If we get this far, the form is valid

        // Original code for API call...
        const authStore = useAuthStore();

        try {
            let payload = {
                password: formData.newPwd,
                token: route.params.token
            };

            const response = await authStore.resetPassword(payload);
            console.log('response >>>', response);

            if (response) {
                toast.success(TOAST_MESSAGE.DATA_UPDATED, {
                    timeout: 2000
                });
                router.push({ path: '/auth/login' });
            }
        } catch (error) {
            console.log('error >>> ', error);
        }
    }
}
</script> -->

<!-- <template>
    <v-form ref="form" @submit.prevent="onSubmit">
        <v-card elevation="10">
            <v-row class="ma-sm-n2 ma-n1">
                <v-col cols="12" sm="6">
                    <div>
                        <div class="mt-5">
                            <v-label class="mb-2 font-weight-medium">New Password</v-label>
                            <v-text-field
                                color="primary"
                                variant="outlined"
                                type="password"
                                v-model="formData.newPwd"
                                required
                                :rules="[rules.required, rules.minLength]"
                            />
                            <v-label class="mb-2 font-weight-medium">Confirm Password</v-label>
                            <v-text-field
                                color="primary"
                                variant="outlined"
                                type="password"
                                v-model="formData.confirmPwd"
                                required
                                :rules="[rules.required, rules.confirmPassword]"
                            />
                        </div>
                    </div>
                </v-col>
            </v-row>
            <div class="d-flex justify-start mt-5">
                <v-btn color="primary" class="mr-4" flat type="submit">Save</v-btn>
            </div>
        </v-card>
    </v-form>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
/*import tabler icons*/
import { DeviceLaptopIcon, DeviceMobileIcon, DotsVerticalIcon } from 'vue-tabler-icons';

import { TOAST_MESSAGE } from '@/utils/toasMessage/toaster.message';
import { useToast } from 'vue-toastification';
import { useSwal } from '@/composables/useSwal';
import { useAuthStore } from '@/stores/auth';
import { tokens } from 'maska';
import { useRoute } from 'vue-router';
import { router } from '@/router';

const toast = useToast();
const Swal = useSwal();

const route = useRoute();

const formData = reactive({
    currentPwd: null,
    newPwd: null,
    confirmPwd: null,
    resetPasswordToken: null
});

const authStore = useAuthStore();

const matchPassword = () => {
    return formData.newPwd === formData.confirmPwd || ` Passwords don't match'`;
};

const rules = {
    required: (value: any) => !!value || 'Required',
    minLength: (value: string | any[]) => (value && value.length >= 6) || 'Minimum 6 characters',
    confirmPassword: matchPassword
};

const form: any = ref(null); // this will store the reference to your form

const onSubmit = async () => {
    const isValid = await form.value.validate();

    console.log('isValid >>>> ', isValid.valid); // This should print true or false

    if (!isValid.valid) {
        // form has validation errors, return from function early
        console.log(' Form Data Not Valid');
        return;
    }

    try {
        let payload: any = {
            // old_password: formData.currentPwd,
            password: formData.newPwd,
            token: route.params.token
        };
        const response: any = await authStore.resetPassword(payload);
        console.log('response >>>', response);

        if (response) {
            toast.success(TOAST_MESSAGE.DATA_UPDATED, {
                timeout: 2000
            });
            router.push({ path: '/auth/login' });
        }
    } catch (error) {
        console.log('error >>> ', error);
    }
};

const fetchTokenData = async () => {
    try {
        let payload: any = {
            token: route.params.token
        };
        const response: any = await authStore.checkResetPasswordToken(payload);
        console.log('response >>> ', response);
    } catch (error) {
        console.log('error >>> ', error);
    }
};

onMounted(() => {
    if (route.params.token) {
        const resetPasswordToken = route.params.token;
        // fetch data and fill taxFiling
        fetchTokenData();
    }
});

onMounted(() => {});
</script> -->
