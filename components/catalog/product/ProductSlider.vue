<script lang="ts" setup>
import {IProduct} from "../../../types/product";
import {Swiper, SwiperSlide,} from 'swiper/vue'
import {Navigation} from 'swiper/modules';
import 'swiper/css/navigation'
import ProductSliderThumbs from "./ProductSliderThumbs.vue";

defineProps<{
	list: IProduct['images']
}>()
</script>

<template>
	<div class="w-full product-slider aspect-[945/582]">
		<Swiper :modules="[Navigation]" navigation>
			<template v-for="image of list" :key="image.directus_files_id">
				<SwiperSlide>
					<NuxtImg
						:src="image.directus_files_id"
						class="w-full h-full object-contain"
						provider="directus"
					/>
				</SwiperSlide>
			</template>
			<template #container-end>
				<ProductSliderThumbs :list="list" />
			</template>
		</Swiper>
	</div>
</template>

<style lang="scss">
.product-slider {
	.swiper-button-next, .swiper-button-prev {
		background-color: rgba(255, 255, 255, 0.4);
		border-radius: 50%;
		width: 2.8125rem;
		height: 2.8125rem;
		backdrop-filter: blur(50px);
		--swiper-navigation-sides-offset: 1rem;

		@media (min-width: 1024px) {
			--swiper-navigation-sides-offset: 4.38rem;
		}

		&:after {
			font-size: 1.375rem;
			color: hsla(223, 8%, 16%, 1);
		}
	}
}
</style>