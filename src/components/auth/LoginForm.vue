<template>
  <v-form ref="form" @submit.prevent="onSubmit">
    <v-card elevation="10">
      <h5 class="text-h5 px-1">Login</h5>
      <v-row class="ma-sm-n2 ma-n1 flex-column-reverse flex-md-row justify-space-between">
        <v-col cols="12" md="8" lg="7" xl="">
          <v-card-item class="pa-0">
            <v-row class="pa-0">
              <v-col cols="12">
                <v-label class="mb-2 font-weight-medium">Username</v-label>
                <v-text-field
                  color="primary"
                  variant="outlined"
                  type="text"
                  v-model="formData.username"
                  required
                  :rules="[rules.required, rules.minLength]"
                />
              </v-col>
              <v-col cols="12">
                <v-label class="mb-2 font-weight-medium">Password</v-label>
                <v-text-field
                  color="primary"
                  variant="outlined"
                  type="password"
                  v-model="formData.password"
                  required
                  :rules="[rules.required, rules.minLength]"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-item>
        </v-col>
      </v-row>

      <div class="d-flex justify-start mt-5">
        <v-btn color="primary" class="mr-4" flat type="submit">Login</v-btn>
        <v-btn class="bg-lighterror text-error" flat @click="onBack">Cancel</v-btn>
      </div>
    </v-card>
  </v-form>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { router } from '@/router'
import { TOAST_MESSAGE } from '@/constant/toaster.message'
import { toast } from '@/plugins/toaster'

const authStore = useAuthStore()

let formData: any = reactive({
  username: '',
  password: ''
})

const rules: any = {
  required: (value: any) => !!value || 'Required',
  minLength: (value: string | any[]) => !value || value.length >= 3 || 'Minimum 3 characters'
}

const form: any = ref(null)

const onSubmit = async () => {
  const isValid = await form.value.validate()
  if (!isValid.valid) {
    console.log('Form Data Not Valid')
    return
  }

  console.log('isValid >>>> ', isValid.valid)

  let payloadFormData: any = {
    username: formData.username,
    password: formData.password
  }

  try {
    // Call your authentication method here
    // const response = await authStore.authenticateUser(payloadFormData);

    // Simulating a successful login
    const response = { success: true }

    if (response.success) {
      // Redirect to the dashboard or another page after successful login
      router.push({ path: '/dashboard' })

      // Show a success message
      toast.success(TOAST_MESSAGE.LOGIN_SUCCESSFUL, { timeout: 2000 })
    } else {
      // Show an error message
      toast.error(TOAST_MESSAGE.LOGIN_FAILED, { timeout: 2000 })
    }
  } catch (error) {
    console.log('error >>> ', error)
    toast.error(TOAST_MESSAGE.LOGIN_FAILED, { timeout: 2000 })
  }
}

const onBack = () => {
  // Redirect to the home page or another page on cancel
  router.push({ path: '/' })
}
</script>
