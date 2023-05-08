<template>
	<f-div
		width="hug-content"
		height="69px"
		padding="medium"
		gap="x-large"
		align="middle-left"
		state="default"
	>
		<!-- Start: PipelineName Card Component story is mentioned below -->
		<!-- From a seperate Component file with name as 'PipelineName.vue' and paste the below story template inside it -->
		<PipelineName
			:pipeline="{ title: 'Title', subTitle: 'Status, date and time', icon: '🌏' }"
		></PipelineName>
		<!-- End: PipelineName Card Component story is mentioned below -->
		<f-divider state="secondary"></f-divider>
		<!-- Start: PipelineCard Component story is mentioned below -->
		<!-- From a seperate Component file with name as 'PipelineCard.vue' and paste the below story template inside it -->
		<PipelineCard
			:label="{ title: 'Title 1', subTitle: 'Sub Title' }"
			:is-collapsed="isCollapsed"
			:has-title="true"
			:is-loading="true"
			:selected-slab="selectedSlab"
			state="danger"
			@action="pipelineAction"
		></PipelineCard>
		<!-- End: PipelineCard Component story is mentioned below -->
		<f-icon source="i-arrow-right" size="small"></f-icon>
		<!-- Start: PipelineCard Component story is mentioned below -->
		<!-- From a seperate Component file with name as 'PipelineCard.vue' and paste the below story template inside it -->
		<PipelineCard
			:label="{ title: 'Title 2' }"
			:is-collapsed="isCollapsed"
			:has-title="true"
			:selected-slab="selectedSlab"
			state="warning"
			@action="pipelineAction"
		></PipelineCard>
		<!-- End: PipelineCard Component story is mentioned below -->
		<f-icon source="i-plus" size="small"></f-icon>
		<!-- Start: PipelineCard Component story is mentioned below -->
		<!-- From a seperate Component file with name as 'PipelineCard.vue' and paste the below story template inside it -->
		<PipelineCard
			:label="{ title: 'Title 3' }"
			:is-collapsed="isCollapsed"
			:selected-slab="selectedSlab"
			:has-title="false"
			@action="pipelineAction"
		></PipelineCard>
		<!-- End: PipelineCard Component story is mentioned below -->
		<f-icon
			source="i-chevron-left"
			size="small"
			clickable
			@click="collapseHeader"
			class="toggle-icon"
			:header-collapsed="isCollapsed"
		></f-icon>
		<f-divider state="secondary"></f-divider>
		<f-button
			variant="round"
			size="medium"
			label="Label"
			icon-left="i-icon"
			state="success"
			@click="successAction"
		></f-button>
		<f-icon source="i-icon" size="medium" clickable @click="iconAction"></f-icon>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PipelineCard from "./PipelineCard.vue";
import PipelineName from "./PipelineName.vue";

export default defineComponent({
	data() {
		return {
			isCollapsed: false,
			selectedSlab: ""
		};
	},
	methods: {
		collapseHeader() {
			this.isCollapsed = !this.isCollapsed;
		},
		pipelineAction(value: any) {
			console.log(value);
			this.selectedSlab = value;
		},
		successAction() {
			console.log("success button clicked!!!");
		},
		iconAction() {
			console.log("clicked icon!!");
		}
	},
	components: { PipelineCard, PipelineName }
});
</script>

<style lang="scss">
.toggle-icon[header-collapsed="true"] {
	transform: rotate(180deg);
	transition: transform 0.25s linear;
}

.toggle-icon[header-collapsed="false"] {
	transform: rotate(0deg);
	transition: transform 0.25s linear;
}
@media (max-width: 1200px) {
	.toggle-icon {
		display: none;
	}
}
</style>
