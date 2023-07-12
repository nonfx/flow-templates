<template>
	<f-div state="secondary" direction="column" width="432px">
		<f-div direction="column" class="overlay">
			<f-div gap="auto" align="middle-left" padding="medium">
				<f-div gap="medium">
					<f-icon-button
						variant="block"
						category="packed"
						size="small"
						state="inherit"
						icon="i-arrow-left"
					></f-icon-button>
					<f-text variant="para" size="small" weight="bold">Heading</f-text>
					<f-icon-button
						variant="block"
						category="packed"
						size="small"
						state="inherit"
						icon="i-icon"
					></f-icon-button>
					<f-icon-button
						variant="block"
						category="packed"
						size="small"
						state="inherit"
						icon="i-icon"
					></f-icon-button
					><f-icon-button
						variant="block"
						category="packed"
						size="small"
						state="inherit"
						icon="i-icon"
					></f-icon-button>
				</f-div>
				<f-div width="hug-content" align="middle-left" gap="medium">
					<f-icon-button
						variant="block"
						category="packed"
						size="small"
						state="inherit"
						icon="i-icon"
					></f-icon-button>
					<f-icon-button
						variant="block"
						category="packed"
						size="small"
						state="inherit"
						icon="i-icon"
					></f-icon-button
					><f-icon-button
						variant="block"
						category="packed"
						size="small"
						state="inherit"
						icon="i-icon"
					></f-icon-button>
					<f-icon-button
						icon="i-close"
						variant="block"
						categroy="packed"
						size="small"
						state="inherit"
						@click="openBanner = true"
					></f-icon-button>
				</f-div>
			</f-div>
			<f-div direction="column" gap="large" v-if="openBanner">
				<!-- Please Copy/paste code from here -->
				<!-- Iteration has been used here just for demo purpose -->
				<f-div padding="medium" gap="auto" align="middle-left" state="warning">
					<f-div gap="medium" align="middle-left" state="inherit" padding="none medium none none"
						><f-text variant="heading" size="small" weight="regular" state="inherit"
							>The changes will be lost. Are you sure to close this?</f-text
						></f-div
					>
					<f-div width="hug-content" align="middle-left">
						<f-button
							label="YES, CLOSE"
							category="outline"
							variant="round"
							size="small"
							state="warning"
							@click="openBanner = false"
						></f-button>
					</f-div>
				</f-div>
				<!-- End Snippet -->
			</f-div>
			<f-div padding="medium">
				<f-form-builder class="form-builder-custom" :field.prop="field" :values.prop="fieldValues">
				</f-form-builder>
			</f-div>
		</f-div>
		<f-div padding="none">
			<f-button label="SUBMIT" variant="block" category="fill"></f-button>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//only for demo purpose -- please remove this import
import { changeRoute } from "../../utils/utils";

export default defineComponent({
	data() {
		return {
			openBanner: false,
			field: {
				type: "object",
				direction: "vertical",
				isCollapsible: false,
				isCollapsed: true,
				fieldSeparator: true,
				label: {
					title: "Form title",
					description: "A description will show here (optional)"
				},
				fields: {
					source1: {
						type: "object",
						direction: "vertical",
						fields: {
							source: {
								type: "text",
								label: {
									title: "Source",
									iconTooltip: "Source"
								},
								placeholder: "Source",
								iconLeft: "",
								validationRules: [
									{
										name: "required"
									}
								]
							},
							databaseHost: {
								type: "text",
								label: {
									title: "Database Host",
									iconTooltip: "Database Host"
								},
								placeholder: "Database Host Name",
								validationRules: [
									{
										name: "required"
									}
								]
							},
							databasePort: {
								type: "text",
								label: {
									title: "Database Port",
									iconTooltip: "Database Port"
								},
								placeholder: "Database Port Name",
								validationRules: [
									{
										name: "required"
									}
								]
							}
						}
					}
				}
			},
			fieldValues: {
				source1: { source: "" }
			},
			submitDisabled: true,
			timeoutLoader: 0
		};
	},
	methods: {}
});

export type DataObject = { id: number; title: string; subTitle: string; icon: string };
</script>

<style lang="scss">
.form-builder-custom {
	width: 100%;
}
</style>
