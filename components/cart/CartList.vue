<script lang="ts" setup>
import {useCartStore} from "../../store/cart.store";
import {reactive, useCurrency, useDirectusItems} from "../../.nuxt/imports";
import {IProduct} from "../../types/product";
import UiPlusMinusInput from "../ui/UiPlusMinusInput.vue";
import {CartPopulatedItem} from "../../types/cart";

const {getItems} = useDirectusItems()
const cartStore = useCartStore()
const lines = reactive<Map<string, CartPopulatedItem>>(new Map())

const products = await getItems<IProduct>({
	collection: 'products',
	params: {
		filter: {
			id: {
				_in: cartStore.items.map(item => item.id)
			}
		}
	}
})

for (const item of cartStore.items) {
	const product = products.find(p => p.id === item.id)
	lines.set(item.id, {
		product,
		...item
	})
}
const {toMoney} = useCurrency()
</script>

<template>
	<div class="max-w-[64.125rem]">
		<div
			class="bg-system-gray-500 rounded-[1.25rem] py-5 px-6 hidden lg:grid grid-cols-4 text-lg text-system-black-900 font-semibold gap-4">
			<span>Товар</span>
			<span>Количество</span>
			<span>Цена</span>
			<span/>
		</div>
		<div class="py-8 px-6">
			<template v-for="item of lines.values()" :key="item.id">
				<div>
					<div>
						<nuxt-link><span>{{ item.product.title }}</span></nuxt-link>
					</div>
					<div><UiPlusMinusInput /></div>
					<div class="font-semibold text-xl">{{toMoney(item.product.price)}}</div>
					<div>
						<button class="flex items-center gap-2.5 p-2 lg:gap-2 lg:p-0 rounded-[6.88rem] bg-system-gray-500 lg:bg-transparent">
							<svgo-close filled class="text-2xl" />
							<span
							class="text-system-gray-800 font-medium lg:font-semibold">Удалить</span></button>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<style scoped>

</style>