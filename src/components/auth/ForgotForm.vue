<template>
  <Form @submit="validate" v-slot="{ isSubmitting }" class="mt-5 w-100">
    <v-label class="text-subtitle-1 font-weight-semibold pb-2 text-lightText">E-mail</v-label>
    <VTextField
      v-model="email"
      :rules="emailRules"
      class="mb-8"
      required
      hide-details="auto"
    ></VTextField>

    <v-btn
      size="large"
      :loading="isSubmitting"
      color="primary"
      :disabled="valid"
      block
      type="submit"
      flat
      >Submit</v-btn
    >
  </Form>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Ref } from 'vue'
import { useAuthStore } from '@/stores/auth'

import { Form } from 'vee-validate'
import { useRoute } from 'vue-router'

// import { useToast } from 'vue-toastification';

// Get toast interface
// const toast = useToast();
const route = useRoute()

const valid = ref(false)
const email: Ref<string> = ref('')

const emailRules = ref([
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
])

async function validate(this: any, values: any, { setErrors }: any) {
  const authStore = useAuthStore()
  try {
    let params = {
      email: email.value
    }
    const response = await authStore.forgotPassword(params)
  } catch (error) {
    console.log('error >>> ', error)

    return setErrors({ apiError: error })
  }
}

onMounted(() => {
  console.log('route.query >>>', route.query)

  if (typeof route.query.email === 'string') {
    email.value = route.query.email
  } else {
    email.value = ''
  }
})
</script>
