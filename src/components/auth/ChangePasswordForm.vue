<template>
    <v-form ref="form" v-model="valid" lazy-validation class="mt-sm-13 mt-8">
        <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">Current Password</v-label>
        <VTextField v-model="currentPassword" :rules="passwordRules" type="password" required></VTextField>

        <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">New Password</v-label>
        <VTextField v-model="newPassword" :rules="passwordRules" type="password" required></VTextField>

        <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">Confirm New Password</v-label>
        <VTextField
            v-model="confirmNewPassword"
            :rules="[...passwordRules, (v: string) => v === newPassword.value || 'Passwords must match']"
            type="password"
            required
        ></VTextField>

        <v-btn size="large" color="primary" @click="changePassword" block flat>Change Password</v-btn>
    </v-form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const valid:any = ref(true);
const currentPassword:any = ref('');
const newPassword:any = ref('');
const confirmNewPassword:any = ref('');
const passwordRules:any = ref([
    (v: string) => !!v || 'Password is required',
    (v: string) => v.length >= 6 || 'Password must be at least 6 characters'
]);

// define your password update logic
const changePassword = () => {
    // update password here
};
</script>
