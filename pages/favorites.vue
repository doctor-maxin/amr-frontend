<script setup lang="ts">
import PageHeader from '~/components/page/Header.vue'
import {markRaw} from "../.nuxt/imports";
import {IBreadCrumb} from "../types/common";

const breadCrumbs = markRaw<IBreadCrumb[]>([{
	title: 'Главная',
	path: '/'
}, {
	title: 'Избранное',
	path: '/favorites'
}])
</script>

<template>
<main class="flex-1">
	<PageHeader page-name="Избранное" :bread-crumbs="breadCrumbs" />
	<div class="pt-[2.375rem] px-4 pb-[6.88rem] lg:pb-[8.75rem] lg:pt-[4.63rem]"></div>
</main>
</template>

<style scoped>

</style>