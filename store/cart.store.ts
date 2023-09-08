import {defineStore} from "pinia";
import {useAppConfig} from "nuxt/app";
import {CartItem, CartState} from "../types/cart";
import {toast} from "vue3-toastify";
import {useFetch} from "@vueuse/core";

export const useCartStore = defineStore('cart', {
    state: (): CartState => ({
        items: [],
    }),
    getters: {
        cartTotalLength: (state) => state.items.length
    },
    actions: {
        async getCart() {
            const {data} = await useFetch<CartItem[]>('/api/cart').json()
            if (data.value?.length) this.items = data.value
        },
        async setLine(id: string, count: number) {
            const {data} = await useFetch<CartItem[]>('/api/cart').patch({
                id, count
            })
            console.log('set line', data.value)
        },
        async addProduct(id: string, count = 1) {
            const appConfig = useAppConfig()

            const {data} = await useFetch<CartItem[]>('/api/cart').post({
                id,
                count
            }).json()
            if (data.value?.length) {
                this.items = data.value
                toast.success(appConfig.messages?.productAdded)
            }
        }
    }
})