<script lang="ts" setup>
import PageHeader from '~/components/page/Header.vue';
import {IBreadCrumb, ILink} from "~/types/common";
import CartAside from "~/components/cart/CartAside.vue";
import {markRaw} from "../.nuxt/imports";
import CartList from "../components/cart/CartList.vue";

const breadCrumbs = markRaw<IBreadCrumb[]>([{
	title: 'Корзина',
	path: '/cart'
}, {
	title: 'Оформление',
	path: '/checkout',
	disabled: true
}, {
	title: 'Оплата',
	path: '/',
	disabled: true
}])

const backLink = {
	path: 'back',
	title: 'Продолжить покупки'
} satisfies ILink
</script>

<template>
	<PageHeader :bread-crumbs="breadCrumbs" :link="backLink" page-name="Корзина" progress/>
	<main
		class="max-w-[92.375rem] gap-[2.75rem] lg:gap-[1.875rem] justify-center flex flex-1 px-1 bg-white pt-[2.375rem] pb-[1.56rem] lg:pb-[8.75rem] lg:pt-[4.62rem]">
		<CartList/>
		<CartAside/>
	</main>
</template>

<style scoped>

</style>