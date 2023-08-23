<template>
	<f-div state="subtle" padding="medium" gap="auto" height="hug-content">
		<f-div gap="auto" align="middle-left" height="hug-content">
			<f-div gap="small" align="middle-left" width="hug-content">
				<f-icon source="p-cloudcover-dark" size="large"></f-icon>
				<f-text :inline="true" variant="heading" size="medium" weight="bold"
					>CC Core Platform</f-text
				>
				<f-icon source="i-verified" size="small" state="primary"></f-icon>
				<!-- <f-icon source="i-git" size="small" state="primary" class="visible-on-mobile"></f-icon> -->
			</f-div>
			<f-div width="hug-content" padding="none medium none none">
				<f-text variant="para" size="small" weight="regular" :inline="true" state="subtle">
					Published 3 hours ago by
					<f-text variant="para" size="small" weight="regular" :inline="true" state="primary"
						>CloudCover</f-text
					>
				</f-text>
			</f-div>
		</f-div>
		<f-div
			gap="medium"
			width="hug-content"
			align="middle-center"
			height="hug-content"
			class="visible-on-desktop"
		>
			<f-div width="hug-content" height="hug-content">
				<f-select
					:options.prop="versions"
					:value="selectedVersion"
					size="small"
					@input="handleSelect"
				></f-select
			></f-div>
			<f-divider state="secondary"></f-divider>
			<f-div gap="small" align="middle-center" height="hug-content">
				<f-icon source="p-github" size="small" state="primary"></f-icon>
				<f-div align="middle-center">
					<f-text :inline="true" variant="para" size="small" weight="regular" state="primary"
						>View on GitHub</f-text
					></f-div
				>
			</f-div>
			<f-div variant="curved" width="hug-content" height="hug-content">
				<f-div state="tertiary" gap="small" width="hug-content" class="custom-tag-label">
					<f-icon source="i-star-outline" size="small"></f-icon>
					<f-text variant="para" weight="medium" size="medium" state="secondary">Star</f-text>
				</f-div>
				<f-div state="secondary" width="hug-content" class="custom-tag-counter">
					<f-text variant="para" weight="medium" size="medium" state="secondary">123</f-text>
				</f-div>
			</f-div>
		</f-div>

		<f-div
			gap="medium"
			align="middle-right"
			height="hug-content"
			class="visible-on-mobile"
			direction="column"
			width="hug-content"
		>
			<f-div width="hug-content" height="hug-content">
				<f-select
					:options.prop="versions"
					:value="selectedVersion"
					size="small"
					@input="handleSelect"
				></f-select
			></f-div>
			<f-div variant="curved" width="hug-content" height="hug-content">
				<f-div state="tertiary" gap="small" width="hug-content" class="custom-tag-label">
					<f-icon source="i-star-outline" size="small"></f-icon>
					<f-text variant="para" weight="medium" size="medium" state="secondary">Star</f-text>
				</f-div>
				<f-div state="secondary" width="hug-content" class="custom-tag-counter">
					<f-text variant="para" weight="medium" size="medium" state="secondary">123</f-text>
				</f-div>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			versions: ["v11", "v12", "v13"],
			selectedVersion: "v11"
		};
	},
	methods: {
		handleSelect(e: CustomEvent) {
			this.selectedVersion = e.detail.value;
		}
	}
});
</script>

<style lang="scss">
.custom-tag-label {
	padding: 4px 8px 4px 8px !important;
	border-radius: 4px 0px 0px 4px !important;
}
.custom-tag-counter {
	padding: 4px 8px 4px 8px !important;
	border-radius: 0px 4px 4px 0px !important;
}
.cp-min-width {
	min-width: 150px !important;
}

.visible-on-desktop {
	display: flex;
}
.visible-on-mobile {
	display: none !important;
}

@media screen and (max-width: 768px) {
	.visible-on-desktop {
		display: none !important;
	}
	.visible-on-mobile {
		display: flex !important;
	}
}
</style>
