<script lang="ts" setup>
import {useDirectusItems} from "../../.nuxt/imports";
import {useAsyncData} from "nuxt/app";
import HeaderBlock from "../../components/blocks/HeaderBlock.vue";
import {ICustomerPageFull} from "../../types/common";
import ParagraphBlock from "../../components/blocks/ParagraphBlock.vue";
import ListBlock from "../../components/blocks/ListBlock.vue";
import TableBlock from "../../components/blocks/TableBlock.vue";
import AttachesBlock from "../../components/blocks/AttachesBlock.vue";
import QuoteBlock from "../../components/blocks/QuoteBlock.vue";
import ImageBlock from "../../components/blocks/ImageBlock.vue";

const props = defineProps<{
	id: string;
}>()

const {getItemById} = useDirectusItems()
const {data: page} = await useAsyncData<ICustomerPageFull>(() => props.id ? getItemById({
	collection: 'navBarCustomerPage',
	id: props.id
}) : null)
</script>

<template>
	<div class="py-8 lg:py-[3.25rem] page">
		<template v-for="block of page?.blocks?.blocks" :key="block.id">
			<HeaderBlock v-if="block.type === 'header'" :block="block"/>
			<ParagraphBlock v-else-if="block.type === 'paragraph'" :block="block"/>
			<ListBlock v-else-if="block.type === 'nestedlist'" :block="block" />
			<TableBlock v-else-if="block.type === 'table'" :block="block" />
			<AttachesBlock v-else-if="block.type === 'attaches'" :block="block" />
			<QuoteBlock v-else-if="block.type === 'quote'" :block="block" />
			<ImageBlock v-else-if="block.type === 'image'" :block="block" />
		</template>
	</div>
</template>

<style lang="scss">
.page {
	margin-left: auto;
	margin-right: auto;
	max-width: 54.6875rem;
}
</style>