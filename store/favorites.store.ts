import {defineStore} from "pinia";
import {FavoritesStore} from "../types/favorites";
import {useAppConfig} from "nuxt/app";
import {CartItem} from "../types/cart";
import {toast} from "vue3-toastify";
import { useFetch } from '@vueuse/core'
import {AppConfigInput} from "../types/common";

export const useFavoritesStore = defineStore('favorites', {
    state: (): FavoritesStore => ({
        items: []
    }),
    getters: {
        favoritesTotalLength: (state) => state.items.length
    },
    actions: {
        async getList() {
            const {data} = await useFetch('/api/favorites').json<string[]>()
            console.log(data.value?.length)
            if (data.value?.length) this.items = data.value
        },
        async addProduct(id: string) {
            const appConfig: AppConfigInput = useAppConfig()

            const {data} = await useFetch('/api/favorites/' + id).post().json<string[]>()
            if (data.value?.length) {
                this.items = data.value
                toast.success(appConfig.messages?.productAdded)
            }
        }
    }
})