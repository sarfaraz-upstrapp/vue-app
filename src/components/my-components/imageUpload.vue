<template>
  <div class="d-flex flex-column justify-center align-center">
    <v-avatar size="120" color="grey100" rounded="full" class="mb-6">
      <img
        v-if="preview || props.imageUrl"
        :src="preview || props.imageUrl"
        alt="File Preview"
        class="w-100 h-100 object-cover"
      />
      <img
        v-else
        src="@/assets/images/profile/user-profile-2.png"
        alt="File Preview"
        class="w-100 h-100 object-cover"
      />
    </v-avatar>

    <div>
      <input
        ref="fileUploadEle"
        id="fileUpload"
        style="display: none"
        type="file"
        @change="handleFileUpload"
        aria-label="File Upload Input"
        accept="image/png, image/jpeg, image/bmp"
        :rules="[rules.required, rules.imageSizeValidation, rules.imageTypeValidation]"
      />

      <v-btn color="primary" @click="openFileInput"> Upload </v-btn>

      <v-btn
        v-if="preview || props.imageUrl"
        :src="preview || props.imageUrl"
        @click="removeFile"
        color="error"
        class="mx-2"
        variant="outlined"
        flat
      >
        Reset
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'vue-toastification'
// import MediaService from '@/services/mediaServices/media.api'
// import { TOAST_MESSAGE } from '@/utils/toasMessage/toaster.message'
import MediaService from '../../services/mediaServices/media.api'
import { TOAST_MESSAGE } from '../../constant/toaster.message'

// const props = defineProps({ imagePath: String, imageUrl:String });

const toast = useToast()

const props: any = defineProps({
  imagePath: { type: String, default: null },
  imageUrl: { type: String, default: null },
  referenceId: { type: Number, default: null }
})

const emit = defineEmits(['onFileUploadEvent', 'onResetFileEvent'])

const fileUploadEle = ref<HTMLInputElement | null>(null)

const file: any = ref<File | null>(null)
const preview: any = ref<string | null>(null)
const serverImagePath: any = ref<string | null>(null)

const rules = {
  required: (value: any) => !!value || 'Required',
  imageSizeValidation: (value: { size: number }) =>
    !value || value.size < 2000000 || 'Image size should be less than 2 MB!',
  imageTypeValidation: (value: any) => {
    const allowedTypes = ['image/png', 'image/jpeg', 'image/bmp']
    return !value || allowedTypes.includes(value.type) || 'Unsupported file type!'
  }
}

const validateForm = () => {
  const fileValue = file.value

  const isRequiredValid: any = rules.required(fileValue)
  const isSizeValid: any = rules.imageSizeValidation(fileValue)
  const isTypeValid: any = rules.imageTypeValidation(fileValue)

  if (isRequiredValid === true && isSizeValid === true && isTypeValid === true) {
    return { valid: true }
  }

  let errors = []
  if (isRequiredValid !== true) errors.push(isRequiredValid)
  if (isSizeValid !== true) errors.push(isSizeValid)
  if (isTypeValid !== true) errors.push(isTypeValid)

  return { valid: false, errors: errors }
}

const handleFileUpload = (event: any) => {
  const target = event.target as HTMLInputElement
  const files = target.files
  if (files) {
    file.value = files[0]
    preview.value = URL.createObjectURL(file.value)

    uploadOnServer()
  }
}

const removeFile = async () => {
  if (serverImagePath.value) {
    await removeFromServer(serverImagePath.value)
  }
  // if(props.imagePath){
  //     await removeFromServer(props.imagePath)
  // }
  file.value = null
  preview.value = null
  serverImagePath.value = null
  emit('onResetFileEvent', { referenceId: props.referenceId })
}
const form: any = ref(null) // this will store the reference to your form

const uploadOnServer = async () => {
  const isValid: any = validateForm()

  if (!isValid.valid) {
    // form has validation errors, return from function early
    console.error(' Form Data Not Valid', isValid.errors)
    toast.error(isValid.errors[0], {
      timeout: 2000
    })
    preview.value = null
  } else {
    try {
      const payload = new FormData()
      payload.append('userImage', file.value)

      const response: any = await MediaService.uploadUserImage(payload)

      serverImagePath.value = response.data.imagePath
      emit('onFileUploadEvent', {
        serverImagePath: serverImagePath.value || null,
        referenceId: props.referenceId
      })

      return response
    } catch (error) {
      console.error(error || 'Wrong Services')
      return error
    }
  }
}
/*
const openFileInput = () => {
    const fileUploadEle = ref.value.$refs.fileUploadEle;
    if(fileUploadEle) fileUploadEle.click();
};

const removeFile = () => {
    file.value = null;
    preview.value = null;
};
 
*/

const removeFromServer = async (imagePath: string) => {
  try {
    const payload = {
      imagePath: imagePath
    }

    const response = await MediaService.removeUserImage(payload)
    return response
  } catch (error) {
    console.error(error || 'Wrong Services')
    return error
  }
}

const openFileInput = () => {
  console.log('IN openFileInput')
  fileUploadEle.value?.click()
}
</script>
