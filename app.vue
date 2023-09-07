<template>
	<div class="lg:pt-[5.3125rem] pt-[3.875rem] page-layout relative flex flex-col min-h-screen">
		<TheHeader/>
		<NuxtPage/>
		<TheFooter/>
		<ToTopBtn/>
	</div>
</template>
<script lang="ts" setup>
import TheHeader from "~/components/TheHeader.vue";
import TheFooter from "~/components/TheFooter.vue";
import ToTopBtn from "./components/common/ToTopBtn.vue";
import {useCartStore} from "./store/cart.store";
import {useAsyncData, useDirectusItems} from "#imports";
import {useFavoritesStore} from "./store/favorites.store";

const {getItems, getSingletonItem} = useDirectusItems();
const cartStore = useCartStore()
const favoritesStore = useFavoritesStore()

await Promise.all([
	cartStore.getCart(),
	favoritesStore.getList(),
	useAsyncData("categories", () =>
		getItems({
			collection: 'category',
			params: {
				fields: ['id', 'name', 'childrens', 'handle', 'parentId']
			}
		})
	),
	useAsyncData('settings', () => getSingletonItem({
		collection: 'settings'
	})),
	useAsyncData('customerPages', () => getSingletonItem({
		collection: 'customerPage',
		params: {
			fields: ['navBars.title', 'navBars.id', 'navBars.handle', 'title']
		}
	}))
]);
</script>