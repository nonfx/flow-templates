<template>
	<f-div direction="column" class="custom-overflow-visible">
		<f-div
			direction="column"
			height="hug-content"
			sticky="top"
			class="custom-overflow-visible"
			state="default"
		>
			<f-div gap="medium" height="hug-content" padding="medium">
				<f-div width="hug-content">
					<f-icon-button
						icon="i-arrow-left"
						variant="block"
						category="packed"
						state="neutral"
						@click="$emit('move-back')"
					></f-icon-button>
				</f-div>
				<f-div gap="x-large">
					<f-div
						direction="column"
						gap="x-small"
						class="custom-width-applicable"
						height="hug-content"
					>
						<f-div align="middle-left" gap="medium">
							<f-text variant="heading" size="medium" weight="medium" :inline="true"
								>Postgres</f-text
							>
							<f-text variant="heading" size="small" weight="medium" :inline="true" state="subtle"
								>V11.0 to V15.0</f-text
							>
							<f-icon source="i-info-fill" state="subtle"></f-icon>

							<f-icon source="i-verified" state="primary"></f-icon>
						</f-div>
						<f-text variant="heading" size="small" weight="regular" :inline="true" state="subtle">
							Published 3 hours ago by
							<f-text variant="heading" size="small" weight="regular" :inline="true" state="primary"
								>CloudCover</f-text
							>
						</f-text>
					</f-div>
					<TagsQueue></TagsQueue>
				</f-div>
			</f-div>
			<f-div height="hug-content" padding="medium none none none">
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
		</f-div>

		<f-div direction="column" v-if="selectedTab !== 3">
			<UsageExample></UsageExample>
		</f-div>
		<f-div v-else> <DependencyGraph /> </f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UsageExample from "./UsageExample.vue";
import DependencyGraph from "./DependencyGraph.vue";
import TagsQueue from "./TagsQueue.vue";

export default defineComponent({
	data() {
		return {
			array: [
				{ id: 0, title: "Usage Example" },
				{ id: 1, title: "Inputs" },
				{ id: 2, title: "Outputs" },
				{ id: 3, title: "Dependency Graph" }
			] as Data,
			selectedTab: 0
		};
	},
	computed: {
		checkWindowSizeStatus(): boolean {
			return window.matchMedia("(max-width: 768px)").matches;
		}
	},
	methods: {
		handleChangeTab(num: number) {
			this.selectedTab = num;
		}
	},
	components: { UsageExample, DependencyGraph, TagsQueue }
});

export type Data = { id: number; title: string }[];
</script>

<style lang="scss">
.custom-width-applicable {
	min-width: 400px !important;
}

@media (max-width: 768px) {
	.custom-width-applicable {
		min-width: 150px !important;
	}
	.custom-overflow-visible {
		overflow: visible !important;
	}
}
</style>
