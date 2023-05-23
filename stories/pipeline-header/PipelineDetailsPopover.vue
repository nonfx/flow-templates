<template>
	<f-div width="432px" state="secondary" direction="column">
		<f-div padding="medium" gap="auto" align="middle-left">
			<f-div>
				<f-text variant="para" size="small" weight="bold">Enter pipeline details</f-text>
			</f-div>
			<f-div width="hug-content" align="middle-left">
				<f-button
					label="Help"
					variant="round"
					category="fill"
					size="x-small"
					state="neutral"
				></f-button>
				<f-icon-button
					icon="i-close"
					variant="block"
					categroy="packed"
					size="small"
					state="inherit"
				></f-icon-button>
			</f-div>
		</f-div>
		<f-div padding="medium">
			<f-form-builder
				class="form-builder-custom"
				:field.prop="field"
				:values.prop="fieldValues"
				@keydown="handleKeydown"
				@input="handleInput"
				@state-change="handleStateChange"
			>
			</f-form-builder>
		</f-div>
		<f-div padding="x-large none none none">
			<f-button
				label="NEXT - ADD SOURCE"
				variant="block"
				category="fill"
				:disabled="submitDisabled"
			></f-button>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			field: {
				type: "object",
				direction: "vertical",
				isCollapsible: false,
				isCollapsed: true,
				fields: {
					nameAndEmoji: {
						type: "object",
						direction: "horizontal",
						fields: {
							name: {
								type: "text",
								label: {
									title: "Pipeline name"
								},
								suffix: "Suggested",
								clear: false,
								validationRules: [
									{
										name: "required"
									}
								]
							},
							emoji: {
								type: "emoji",
								label: {
									title: "Icon"
								},
								recent: [
									"file_folder",
									"brain",
									"moneybag",
									"hospital",
									"earth_asia",
									"test_tube",
									"pencil2",
									"cloud",
									"chart_with_upwards_trend",
									"classical_building",
									"dollar",
									"evergreen_tree",
									"package",
									"ship",
									"truck",
									"mountain",
									"office",
									"watch"
								],
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
				nameAndEmoji: { name: "My Pipeline 1", emoji: "🌎" }
			},
			submitDisabled: true
		};
	},
	methods: {
		handleKeydown(event: Event) {
			event.stopPropagation();
			event.stopImmediatePropagation();
		},
		handleInput(event: CustomEvent) {
			console.log(event);
		},
		handleStateChange(event: CustomEvent) {
			console.log(event);
			if (event.detail.errors.length > 0) {
				this.submitDisabled = true;
			} else {
				this.submitDisabled = false;
			}
		}
	}
});
</script>

<style lang="scss">
.form-builder-custom {
	width: 100%;
}
</style>
