<script lang="ts" setup>
import {Swiper, SwiperSlide} from 'swiper/vue'
import {shallowRef, markRaw} from '#imports';
import 'swiper/css';
import IdeasBlockCard from "~/components/blocks/ideas/IdeasBlockCard.vue";
import UiLink from "~/components/ui/UiLink.vue";
import {IIdeaItem} from "~/types/ideas";

const breakpoints = shallowRef({
	320: {
		slidesPerView: 1.2,
		spaceBetween: 14
	},
	640: {
		slidesPerView: 2,
		spaceBetween: 18
	},
	768: {
		slidesPerView: 2.5,
		spaceBetween: 20
	},
	1024: {
		slidesPerView: 3,
		spaceBetween: 30
	},
})

const lastPosts = markRaw<IIdeaItem[]>([
	{
		id: 1,
		type: 'news',
		post: {
			'title': 'Новые решения',
			date: '18.06.2023',
			text: `Новый дизайнерская коллекция мебели, разработанная специально для создания уникальных и неповторимых интерьеров, теперь доступна у нас в магазине.`
		},
		link: '#',
		image: 'images/posts/slide1.png'
	},
	{
		id: 2,
		type: 'projects',
		post: {
			date: '18.06.2023',
			'title': 'Экологичный проект',
			text: `Новый проект по производству экологичной и функциональной мебели стартует в ближайшее время! Он будет ориентирован на тех, кто ценит здоровый образ жизни и современный стиль.`
		},
		link: '#',
		image: 'images/posts/slide1.png'
	},
	{
		id: 3,
		type: 'ideas',
		post: {
			date: '18.06.2023',
			'title': 'Инновационная идея',
			text: `Новый проект в сфере мебели заключается в создании инновационных дизайнерских идей, которые станут прорывными в сфере интерьера и не оставят равнодушными ценителей.`
		},
		link: '#',
		image: 'images/posts/slide1.png'
	},
])

</script>

<template>
	<section class="lg:px-[4.37rem]">
		<h4 class="subhead text-center lg:text-left">ИДЕИ И ТРЕНДЫ</h4>
		<div class="flex items-end mb-7 lg:mb-[2.5rem] lg:justify-between justify-center">
			<h2 class="head xl:flex lg:px-0 max-w-[28rem] lg:text-left">Современные решения и не только</h2>
			<UiLink title="Блог" to="/catalog" variant="filled" class="hidden lg:flex"/>
		</div>
		<div>
			<Swiper :breakpoints="breakpoints"
			>
				<SwiperSlide v-for="item of lastPosts" :key="item.id">
					<IdeasBlockCard :item="item"/>
				</SwiperSlide>
			</Swiper>
		</div>
	</section>
</template>
<style scoped>
</style>