<script lang="ts" setup>

import {ref, watch} from "../../.nuxt/imports";
import {CartPopulatedItem} from "../../types/cart";
import {useCartStore} from "../../store/cart.store";
import {toast} from "vue3-toastify";

const props = defineProps<{
	line: CartPopulatedItem
}>()

const count = ref<number>(0);
const cartStore = useCartStore();
const mutateProduct = (value: number) => {
	cartStore.setLine(props.line.id, value);
};

watch(count, (_val, oldValue) => {
	if (oldValue !== _val && oldValue !== 0) {
		if (count.value > 0 && count.value <= props.line.product.count) {
			mutateProduct(count.value);
		} else if (count.value >= props.line.product.count) {
			count.value = props.line.product.count;
		} else {
			count.value = 1;
		}
	}
});

watch(
	() => props.line.count,
	() => {
		if (props.line.count !== count.value) count.value = props.line.count;
	},
	{
		immediate: true,
	}
);

const addMore = () => {
	if (count.value <= props.line.product.count) {
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
	<div class=" w-fit min-w-[6.8125rem] lg:min-w-[9.5rem] gap-1 flex items-center bg-system-gray-500 rounded-[6.88rem]">
		<button @click="removeMore" class="w-10 h-[2.5rem] lg:h-[3.375rem] lg:w-[3.375rem] flex items-center justify-center" type="button">
			<svg fill="none" height="3" viewBox="0 0 10 3" width="10" xmlns="http://www.w3.org/2000/svg">
				<path d="M0 3V0H10V3H0Z" fill="currentColor"/>
			</svg>
		</button>
		<input v-model.number="count" :max="line.product.count" class="bg-transparent flex-1 text-center font-bold text-base"
		       min="1" name="product" type="number">
		<button @click="addMore" class="w-10 h-[2.5rem] lg:h-[3.375rem] lg:w-[3.375rem] flex items-center justify-center" type="button">
			<svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
				<path d="M4.60738 12V0H7.39263V12H4.60738ZM0 7.33333V4.66667H12V7.33333H0Z" fill="currentColor"/>
			</svg>
		</button>
	</div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type=number] {
	-moz-appearance: textfield;
}
</style>