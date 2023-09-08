<script lang="ts" setup>
import CatalogBlock from "~/components/blocks/catalog/CatalogBlock.vue";
import FeedbackBlock from "~/components/main/FeedbackBlock.vue";
import Banner from "~/components/banner/Banner.vue";
import Advantages from "~/components/advantages/Advantages.vue";
import LazyBlocksIdeasIdeiasBlock from '~/components/blocks/ideas/IdeiasBlock.vue'
import CallBackForm from "../components/common/CallBackForm.vue";
</script>

<template>
	<div class="w-full">
		<div class="mb-[2.4rem] lg:mb-[7.7rem]">
			<Banner />
		</div>
		<div class="mb-[4.25rem] lg:mb-[10rem]">
			<Advantages />
		</div>
		<div class="mb-[4.25rem] lg:mb-[7.125rem]">
			<CatalogBlock />
		</div>
		<div class="mb-[4.25rem] lg:mb-[8rem]">
			<FeedbackBlock />
		</div>
		<div class="mb-[4.25rem] lg:mb-[7.125rem]">
			<LazyBlocksIdeasIdeiasBlock />
		</div>
		<CallBackForm />
	</div>
</template>

<style scoped>

</style>