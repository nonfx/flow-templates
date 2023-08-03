<template>
	<!-- Paste the below code in PipelineCard.vue -->
	<f-div
		:width="hasTitle ? (isCollapsed ? '46px' : '225px') : 'hug-content'"
		:class="hasTitle ? (isCollapsed ? 'expand-header' : 'collapse-header') : ''"
		padding="x-small small"
		gap="medium"
		align="middle-left"
		:border="
			selectedSlab === label?.title
				? 'none'
				: isLoading
				? 'small solid secondary'
				: 'small dashed secondary'
		"
		variant="curved"
		overflow="hidden"
		:state="state"
		:clickable="selectedSlab === label?.title ? false : true"
		@click="$emit('action', label?.title)"
		:selected="selectedSlab === label?.title ? 'background' : 'none'"
	>
		<f-pictogram
			size="medium"
			variant="square"
			source="i-icon"
			:clickable="selectedSlab === label?.title ? false : true"
			:loading="isLoading"
			:state="state"
		></f-pictogram>
		<f-div
			align="middle-left"
			v-if="hasTitle"
			class="responsive-slab-title"
			gap="auto"
			overflow="hidden"
		>
			<f-div align="middle-left" overflow="hidden" direction="column">
				<f-text variant="heading" size="small" weight="medium">{{ label?.title }}</f-text>
				<f-text
					v-if="label?.subTitle"
					variant="para"
					size="x-small"
					weight="regular"
					state="secondary"
					>{{ label?.subTitle }}</f-text
				>
			</f-div>
			<f-div
				gap="large"
				align="middle-left"
				width="hug-content"
				v-if="state !== 'default'"
				overflow="hidden"
			>
				<f-icon
					size="x-small"
					source="i-alert"
					:state="state"
					class="state-icon-size"
					tooltip="error"
				></f-icon>
				<f-icon size="x-small" source="i-icon" class="state-icon-size"></f-icon>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
	props: {
		label: {
			type: Object as PropType<LabelType>,
			default: () => {
				return { title: "Title", subTitle: "sub-title" };
			}
		},
		isCollapsed: {
			type: Boolean,
			default: false
		},
		selectedSlab: {
			type: String,
			default: ""
		},
		hasTitle: {
			type: Boolean,
			default: true
		},
		isLoading: {
			type: Boolean,
			default: false
		},
		state: {
			type: String as PropType<PipelineStateTypes>,
			default: "default"
		}
	}
});

export type PipelineStateTypes = "warning" | "danger" | "default";
export type LabelType = { title: string; subTitle?: string };
</script>

<style lang="scss">
@keyframes slide-to-left {
	from {
		width: 225px;
	}
	to {
		width: 46px;
	}
}

@keyframes slide-to-right {
	from {
		width: 46px;
	}
	to {
		width: 225px;
	}
}

.collapse-header {
	width: inherit;
	animation: 0.4s ease-out 0s 1 slide-to-right;
}
.expand-header {
	width: inherit;
	animation: 0.4s ease-out 0s 1 slide-to-left;
}

@media (max-width: 1200px) {
	.responsive-slab-title {
		display: none !important;
	}
	.collapse-header {
		width: 46px !important;
	}
}
</style>
