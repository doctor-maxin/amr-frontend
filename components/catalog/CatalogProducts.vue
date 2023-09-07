<script lang="ts" setup>
import {useAppConfig, useCurrency} from "#imports";
import {IProduct} from "../../types/product";
import {useCartStore} from "../../store/cart.store";
import {useFavoritesStore} from "../../store/favorites.store";

const appConfig = useAppConfig()

type IProductPicked = Pick<IProduct, 'handle' | 'id' | 'name' | 'price' | 'images'>

defineProps<{
	items: IProductPicked[]
}>()

const getItemImage = (item: IProductPicked): string => {
	if (item.images?.length) return item.images[0].directus_files_id
	return appConfig.noImageId as string;
}
const {toMoney} = useCurrency();
const cartStore = useCartStore()
const favoritesStore = useFavoritesStore()

const addProductItem = (id: string) => {
	cartStore.addProduct(id)
}

const addProductToFavorites = (id: string) => {
	favoritesStore.addProduct(id)
}
</script>

<template>
	<div v-if="items.length" class="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-7">
		<template v-for="item of items" :key="item.id">
			<div class="rounded-[1.25rem] overflow-hidden group border relative cursor-pointer">
				<button type="button" @click="addProductToFavorites(item.id)" class="bg-system-black-600 backdrop-blur-[10px] rounded-2xl lg:rounded-[1.25rem] p-3 lg:p-5 absolute left-3 lg:left-5 top-3 lg:top-5">
					<svgo-heart filled class="text-white text-base lg:text-2xl" />
				</button>
				<nuxt-link :to="`/catalog${item.handle.toLowerCase()}`">
					<client-only>
						<NuxtImg
							:class="{
                'object-cover': item?.images?.length
                }"
							:src="getItemImage(item)"
							class="w-full object-contain h-full aspect-[21/14] lg:aspect-[574/398]"
							provider="directus"
						/>
					</client-only>
				</nuxt-link>
				<nuxt-link :to="`/catalog${item.handle.toLowerCase()}`"
				           class="font-semibold group-hover:opacity-100 z-10 lg:block hidden lg:opacity-0 transition-opacity absolute text-white left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-system-black-600 backdrop-blur-[10px] py-3 px-[1.135rem] rounded-[0.63rem]">
					Посмотреть
				</nuxt-link>
				<div
					class="flex gap-3 absolute font-semibold items-center text-white px-3 lg:px-5 bottom-3 lg:bottom-5 w-full">
					<div
						class="bg-system-black-600 gap-2 flex flex-1 items-center justify-between  backdrop-blur-[10px] rounded-2xl text-sm lg:text-base lg:rounded-[1.25rem] p-4 lg:p-5">
						<span>{{ item.name }}</span>
						<span class="whitespace-nowrap">{{ toMoney(item.price) }}</span>
					</div>
					<button
						@click="addProductItem(item.id)"
						class="bg-system-black-600 gap-1 flex items-center justify-between backdrop-blur-[10px] rounded-2xl lg:rounded-[1.25rem] p-4 lg:p-5">
						<svgo-cart filled class="text-2xl"/>
						<span class="text-sm hidden lg:block lg:text-base whitespace-nowrap">В корзину</span>
					</button>
				</div>
			</div>
		</template>
	</div>
</template>

<style scoped>

</style>