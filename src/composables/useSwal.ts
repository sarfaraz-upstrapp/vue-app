// import { getCurrentInstance } from 'vue';

// export const useSwal = ()=> {
//     const {
//         proxy: { $swal }
//     } = getCurrentInstance();
//     return $swal;
// }

import { getCurrentInstance } from 'vue';

export const useSwal: any = () => {
    const instance: any = getCurrentInstance();
    if (!instance || !instance.proxy?.$swal) {
        throw new Error('No instance found or Swal is not correctly initialized in main setup file');
    }
    const { proxy: { $swal } } = instance;
    return $swal;
}