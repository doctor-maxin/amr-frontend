<script setup lang="ts">
import {CartPopulatedItem} from "../../types/cart";
import {useCartStore} from "../../store/cart.store";
import {storeToRefs} from "pinia";
import {useCurrency} from "../../composables/useCurrency";
import {computed} from "../../.nuxt/imports";
import UiButton from "../ui/UiButton.vue";

const cartStore = useCartStore()
const {delivery, discount} = storeToRefs(cartStore)

const props = defineProps<{
	lines: Map<string, CartPopulatedItem>
}>()

const {toMoney} = useCurrency()

const sum = computed<number>(() => {
	let sum = 0
	for (const line of props.lines.values()) {
		sum += line.product.price
	}
	return sum;
})

const total = computed(() => {
	let amount = sum.value;
	if (delivery.value.calculated) amount += delivery.value.amount;
	if (discount.value.promoCode) amount -= discount.value.amount;
	return amount;
})
</script>

<template>
<aside class="rounded-[1.25rem]  flex-1 text-system-gray-800 bg-system-gray-500 px-[1.135rem] pt-[1.69rem] pb-[2.375rem] flex flex-col gap-3">
	<div class="flex justify-between gap-2 lg:text-lg">
		<span class="font-medium">Промежуточный итог</span>
		<span class=" text-right font-bold">{{toMoney(sum)}}</span>
	</div>
	<div v-if="delivery.calculated" class="flex justify-between gap-2 lg:text-lg">
		<span class="font-medium">Доставка</span>
		<span class="text-right font-bold">{{toMoney(delivery.amount)}}</span>
	</div>
	<div v-if="discount.promoCode" class="flex justify-between gap-2 lg:text-lg">
		<span class="font-medium">Скидка</span>
		<span class="text-right font-bold">{{toMoney(discount.amount)}}</span>
	</div>
	<div class="flex lg:mt-4 justify-between lg:text-xl gap-2">
		<span class="font-bold ">Итого</span>
		<span class="text-right font-bold">{{toMoney(total)}}</span>
	</div>
	<UiButton class="fixed lg:mt-2 lg:static bottom-4 z-20 left-4 w-[calc(100%_-_2rem)] lg:w-full" type="button" variant="dark" title="Перейти к оформлению" title-class="!text-base" />
</aside>
</template>

<style scoped>

</style>