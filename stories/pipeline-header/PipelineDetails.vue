<template>
	<!-- Paste the below code in PipelineName.vue -->
	<f-div gap="large" width="hug-content" align="middle-left" @click="enterPipelineDetails">
		<f-pictogram
			variant="squircle"
			size="x-large"
			:source="pipeline?.icon"
			:state="state"
			clickable
		></f-pictogram>
		<f-div
			width="180px"
			direction="column"
			gap="x-small"
			height="hug-content"
			align="middle-left"
			class="pipeline-name"
		>
			<f-text variant="heading" size="large" weight="bold">{{ pipeline?.title }}</f-text>
			<f-text variant="para" size="x-small" weight="regular" state="secondary">{{
				pipeline?.subTitle
			}}</f-text>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	props: {
		pipeline: {
			type: Object as PropType<PipelineObject>,
			default: () => {
				return { title: "Title", icon: "🌏", subTitle: "sub-title" };
			}
		},
		state: {
			type: String as PropType<PipelineStateTypes>,
			default: "default"
		}
	},
	methods: {
		enterPipelineDetails() {
			console.log("Open the Popover template here - 'ft-pipeline-details-popover'");
		}
	}
});

export type PipelineObject = { title: string; subTitle: string; icon: string };
export type PipelineStateTypes = "warning" | "danger" | "default";
</script>

<style lang="scss">
@media (max-width: 768px) {
	.pipeline-name {
		display: none;
	}
}
</style>
