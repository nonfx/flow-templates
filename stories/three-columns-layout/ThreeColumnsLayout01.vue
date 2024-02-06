<template>
	<f-div
		height="100%"
		width="100%"
		:data-overlay="isLeftOpen || isRightOpen"
		class="f-three-columns"
		border="small solid secondary around"
	>
		<!--Start : left column-->
		<f-div
			width="320px"
			:data-open="isLeftOpen"
			border="small solid secondary right"
			state="default"
			class="f-left-column"
		>
			<LeftColumn />
		</f-div>
		<f-div
			class="f-left-notch"
			height="76px"
			state="tertiary"
			width="hug-content"
			align="middle-center"
			clickable
			:data-open="isLeftOpen"
			@click="toggleLeftColumn"
		>
			<f-icon
				:source="isLeftOpen ? 'i-notch-left' : 'i-notch-right'"
				size="small"
				state="secondary"
			></f-icon>
		</f-div>
		<!--End : left column-->
		<!--Start : middle column-->
		<f-div class="f-middle-column" padding="x-large">
			<MiddleColumn />
		</f-div>
		<!--End : middle column-->
		<!--Start : right column-->
		<f-div
			clickable
			class="f-right-notch"
			height="76px"
			state="tertiary"
			width="16px"
			align="middle-center"
			:data-open="isRightOpen"
			@click="toggleRightColumn"
		>
			<f-icon
				:source="isRightOpen ? 'i-notch-right' : 'i-notch-left'"
				size="small"
				state="secondary"
			></f-icon>
		</f-div>
		<f-div
			width="320px"
			:data-open="isRightOpen"
			state="default"
			class="f-right-column"
			border="small solid secondary left"
		>
			<RightColumn />
		</f-div>
		<!--End : right column-->
	</f-div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import MiddleColumn from "./MiddleColumn.vue";
import LeftColumn from "./LeftColumn.vue";
import RightColumn from "./RightColumn.vue";

const isLeftOpen = ref(true);
const isRightOpen = ref(true);
const toggleLeftColumn = () => {
	isLeftOpen.value = !isLeftOpen.value;
};
const toggleRightColumn = () => {
	isRightOpen.value = !isRightOpen.value;
};
</script>
<style lang="scss">
@import "./three-columns-layout";
</style>
