<script setup lang="ts">

import {ref, useField, watch} from "../../.nuxt/imports";
import {CartPopulatedItem} from "../../types/cart";
import {useCartStore} from "../../store/cart.store";
import {toast} from "vue3-toastify";

const props = defineProps<{
	line: CartPopulatedItem
}>()

const count= ref<number>(0);
const cartStore = useCartStore();
const mutateProduct = (value: number) => {
	cartStore.setLine(props.line.id, value);
};

watch(count, (_val, oldValue) => {
	if (oldValue !== _val && oldValue !== 0) {
		if (count.value > 0 && count.value <= props.line.count) {
			mutateProduct(count.value);
		} else if (count.value >= props.line.count) {
			count.value = props.line.count;
		} else {
			count.value = 1;
		}
	}
});

watch(
	() => props.line.count,
	() => {
		count.value = props.line.count;
	},
	{
		immediate: true,
	}
);

const addMore = () => {
	if (count.value <= props.line.count) {
		count.value = count.value + 1;
	} else toast.error('Нет больше в наличии');
};
const removeMore = () => {
	if (count.value > 0) {
		count.value = count.value - 1;
	}
};
</script>

<template>
<div class="px-4 py-2.5 gap-1 flex items-center bg-system-gray-500 rounded-[6.88rem]">
	<button type="button">
		<svg xmlns="http://www.w3.org/2000/svg" width="10" height="3" viewBox="0 0 10 3" fill="none">
			<path d="M0 3V0H10V3H0Z" fill="#33363C"/>
		</svg>
	</button>
	<input name="product" v-model.number="count" type="number" :max="line.product.count" min="1" >
	<button type="button">
		<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
			<path d="M4.60738 12V0H7.39263V12H4.60738ZM0 7.33333V4.66667H12V7.33333H0Z" fill="#33363C"/>
		</svg>
	</button>
</div>
</template>

<style scoped>

</style>