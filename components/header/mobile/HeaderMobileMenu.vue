<script lang="ts" setup>
import TelLink from "~/components/helpers/TelLink.vue";
import EmailLink from "~/components/helpers/EmailLink.vue";
import {ISettings} from "~/types/common";
import {useAsyncData, useDirectusItems, useNuxtData} from "#imports";

const {getSingletonItem} = useDirectusItems();

const {data: pages} = await useAsyncData<{
	title: string;
	id: string;
	handle: string;
}>('customerPages', () => getSingletonItem({
	collection: 'customerPage',
	params: {
		fields: ['navBars.title', 'navBars.id', 'navBars.handle']
	}
}))
const {data: settings} = useNuxtData<ISettings>('settings')
</script>

<template>
	<div class="">
		<nav class="pb-8" itemscope itemtype="http://schema.org/SiteNavigationElement">
			<ul class="header-mobile-menu flex flex-col gap-[1.375rem]" itemprop="about" itemscope
			    itemtype="http://schema.org/ItemList">
				<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ItemList">
					<nuxt-link itemprop="url" to="/blog">Идеи и тренды</nuxt-link>
					<meta content="Идеи и тренды" itemprop="name"/>
				</li>
				<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ItemList">
					<nuxt-link itemprop="url" to="/about">О нас</nuxt-link>
					<meta content="О нас" itemprop="name"/>
				</li>
				<li itemprop="itemListElement" itemscope itemtype="http://schema.org/ItemList">
					<nuxt-link itemprop="url" to="/contacts">Контакты</nuxt-link>
					<meta content="Контакты" itemprop="name"/>
				</li>
				<li v-for="page of pages.navBars" :key="page.id" itemprop="itemListElement" itemscope
				    itemtype="http://schema.org/ItemList">
					<nuxt-link :to="page.handle" itemprop="url">
						{{ page.title }}
					</nuxt-link>
					<meta :content="page.title" itemprop="name"/>
				</li>
			</ul>
		</nav>
		<div class="" itemscope itemtype="http://schema.org/Organization">
			<address class="flex flex-col gap-5 not-italic">
				<div class="flex flex-col gap-3">
					<span class="text-system-gray-900 text-base">Адрес шоурума</span>
					<span class="text-lg font-medium text-system-black-900" itemprop="address" itemscope
					      itemtype="http://schema.org/PostalAddress">{{ settings?.adressShowRoom }}</span>
				</div>
				<div class="flex flex-col gap-3">
					<span class="text-system-gray-900 text-base">Поддержка</span>
					<EmailLink :email="settings?.Email" class="text-lg"/>
					<TelLink :tel="settings?.phone" class="-mt-2 text-lg"/>
				</div>
			</address>
		</div>
	</div>
</template>

<style scoped>
.header-mobile-menu a {
	@apply text-xl font-semibold text-system-gray-800;
}
</style>