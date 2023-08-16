<template>
	<f-div direction="column" class="custom-parent-overflow">
		<f-div height="hug-content">
			<f-tab :node-width="checkWindowSizeStatus ? 'fill' : 'hug-content'">
				<f-tab-node
					v-for="item in array"
					:key="item.id"
					:active="selectedTab === item.id ? true : false"
					:content-id="`tab-${item.title}`"
					@click="handleChangeTab(item.id)"
					><f-div width="100%" height="100%" align="middle-center" direction="column"
						><f-div align="middle-center" height="hug-content" width="hug-content">{{
							item.title
						}}</f-div></f-div
					></f-tab-node
				></f-tab
			>
		</f-div>
		<f-div
			:class="step === 2 ? 'custom-height-content' : 'custom-height-common'"
			height="hug-content"
		>
			<f-div direction="column" v-if="selectedTab === 0">
				<SearchSection :open="open" @toggle-filter="toggleFilter"></SearchSection>
				<TabContentSection
					:step="step"
					:open="open"
					@toggle-filter="toggleFilter"
					@change-step="changeStep"
				></TabContentSection>
			</f-div>
			<f-div direction="column" v-else-if="selectedTab === 1">
				<AboutPlatform></AboutPlatform>
			</f-div>
			<f-div direction="column" v-else> Coming Soon... </f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TabContentSection from "./TabContentSection.vue";
import SearchSection from "./SearchSection.vue";
import AboutPlatform from "./AboutPlatform.vue";

export default defineComponent({
	data() {
		return {
			open: true,
			array: [
				{ id: 0, title: "Platform inventory" },
				{ id: 1, title: "About platform" },
				{ id: 2, title: "Advance configurations" }
			] as TabsType,
			selectedTab: 0,
			step: 0
		};
	},
	computed: {
		checkWindowSizeStatus(): boolean {
			return window.matchMedia("(max-width: 768px)").matches;
		}
	},
	mounted() {
		if (this.checkWindowSizeStatus) {
			this.open = false;
		}
	},
	methods: {
		handleChangeTab(num: number) {
			this.selectedTab = num;
		},
		toggleFilter() {
			this.open = !this.open;
		},
		changeStep(id: number) {
			this.step = id;
		}
	},
	components: { TabContentSection, SearchSection, AboutPlatform }
});

export type TabsType = { id: number; title: string }[];
</script>

<style>
.custom-height-common {
	height: 100% !important;
	flex: 1 1 !important;
}
.custom-height-content {
	height: 100% !important;
	flex: 1 1 !important;
}
@media (max-width: 768px) {
	.custom-parent-overflow {
		overflow: auto !important;
		flex-wrap: nowrap !important;
	}
	.custom-height-content {
		height: fit-content !important;
		flex: none !important;
	}
}
</style>
