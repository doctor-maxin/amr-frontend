<script setup lang="ts">
import {IQuoteBlock} from "../../types/common";

defineProps<{
	block: IQuoteBlock;
}>()
</script>

<template>
	<figure class="border-l-4 bg-gray-50 p-4 flex flex-col mb-4 lg:mb-[2.5rem]">
		<svg class="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
			<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
		</svg>
		<blockquote class="font-medium italic">
			<p :align="block.data.alignment" v-html="block.data.text"></p>
		</blockquote>
		<figcaption  v-if="block.data.caption" class="ml-auto">
			<span>{{block.data.caption}}</span>
		</figcaption>
	</figure>
</template>

<style scoped>

</style>