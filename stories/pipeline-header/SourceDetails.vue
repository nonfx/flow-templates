<template>
	<f-div state="secondary" direction="column" width="432px">
		<f-div direction="column" class="overlay" :data-open="openSubmit">
			<f-div padding="medium" gap="auto" align="middle-left">
				<f-div gap="medium">
					<f-icon-button
						variant="block"
						category="packed"
						size="small"
						state="inherit"
						icon="i-arrow-left"
						@click="changePath"
					></f-icon-button>
					<f-text variant="para" size="small" weight="bold">Enter source details</f-text>
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
				<f-form-builder class="form-builder-custom" :field="field" :values="fieldValues">
				</f-form-builder>
			</f-div>
		</f-div>
		<f-div
			class="validation-popover"
			state="secondary"
			direction="column"
			:height="openSubmit ? '227px' : '0px'"
			:data-open="openSubmit"
		>
			<f-div gap="auto" padding="large large none large" align="middle-left" height="hug-content">
				<f-text variant="para" size="medium" weight="bold">Validating source</f-text>
				<f-div width="hug-content">
					<f-icon-button
						icon="i-close"
						variant="block"
						categroy="packed"
						size="small"
						state="inherit"
						@click="openSubmit = false"
					></f-icon-button>
				</f-div>
			</f-div>
			<f-div direction="column" gap="large" padding="large">
				<f-text state="secondary" variant="para" size="small" weight="regular"
					>This process may take a while and can run in the background. Please continue creating
					your pipeline</f-text
				>
				<f-div gap="medium" align="middle-left" overflow="hidden"
					><f-icon v-if="timeoutLoader === 0" source="i-loader" class="spin"></f-icon>
					<f-icon v-else source="i-tick-fill" state="success"></f-icon>
					<f-text variant="heading" size="small" weight="regular">Connecting to host</f-text></f-div
				>
				<f-div gap="medium" align="middle-left" overflow="hidden">
					<f-icon source="i-tick-fill" v-if="timeoutLoader > 1" state="success"></f-icon>
					<f-icon v-else source="i-loader" class="spin"></f-icon>
					<f-text variant="heading" size="small" weight="regular"
						>Validating Credentials</f-text
					></f-div
				>
				<f-div gap="medium" align="middle-left" overflow="hidden"
					><f-icon source="i-tick-fill" v-if="timeoutLoader > 2" state="success"></f-icon>
					<f-icon v-else source="i-history" class="spin"></f-icon
					><f-text variant="heading" size="small" weight="regular"
						>Checking permissions</f-text
					></f-div
				>
			</f-div>
		</f-div>
		<f-div padding="none">
			<f-button
				v-if="!openSubmit"
				label="VERIFY AND FETCH SCHEMA"
				variant="block"
				category="fill"
				@click="openSubmit = true"
			></f-button>
			<f-button
				v-else-if="timeoutLoader !== 3"
				state="neutral"
				label="VERIFYing AND FETCHing SCHEMA"
				variant="block"
				category="fill"
				:loading="true"
			></f-button>
			<f-button
				v-else
				label="NEXT - SETUP DESTINATION"
				variant="block"
				category="fill"
				state="primary"
			></f-button>
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
			openSubmit: false,
			field: {
				type: "object",
				direction: "vertical",
				isCollapsible: false,
				isCollapsed: true,
				fieldSeparator: true,
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
							},
							databaseName: {
								type: "text",
								label: {
									title: "Database Name",
									iconTooltip: "Database Name"
								},
								placeholder: "Database Name",
								validationRules: [
									{
										name: "required"
									}
								]
							}
						}
					},
					source2: {
						type: "object",
						direction: "vertical",
						fields: {
							databaseUsername: {
								type: "text",
								label: {
									title: "Database Username",
									iconTooltip: "Database Username"
								},
								placeholder: "Username or ID",
								validationRules: [
									{
										name: "required"
									}
								]
							},
							databasePort: {
								type: "password",
								label: {
									title: "Database Password",
									iconTooltip: "Database Password"
								},
								placeholder: "Enter Passowrd",
								validationRules: [
									{
										name: "required"
									}
								]
							}
						}
					},
					source3: {
						type: "object",
						direction: "vertical",
						fields: {
							sourceName: {
								type: "text",
								label: {
									title: "Name this source",
									iconTooltip: "Name this source"
								},
								placeholder: "Source name",
								suffix: "Suggested",
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
				source1: { source: "" },
				source3: { sourceName: "Source 1" }
			},
			submitDisabled: true,
			timeoutLoader: 0
		};
	},
	methods: {
		//only for demo purpose
		printNumbersForEvery3Sec(n: number) {
			this.timeoutLoader = 0;
			for (let i = 1; i <= n; i++) {
				setTimeout(() => {
					this.timeoutLoader = i;
				}, i * 3000);
			}
		},
		//only for demo purpose
		changePath() {
			changeRoute("ft-add-source-popover", "/story/templates-pipeline-header--template-05");
		}
	},
	//only for demo purpose
	watch: {
		openSubmit: {
			handler(newValue) {
				if (newValue === true) {
					this.printNumbersForEvery3Sec(3);
				}
			}
		}
	}
});

export type DataObject = { id: number; title: string; subTitle: string; icon: string };
</script>

<style lang="scss">
.form-builder-custom {
	width: 100%;
}
.overlay[data-open="true"] {
	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 10;
		top: 0;
		left: 0;
	}
}
.validation-popover {
	position: absolute;
	bottom: 36px;
	z-index: 100;
	border-radius: 4px 4px 0px 0px;
}
.validation-popover[data-open="true"] {
	animation: 0.2s ease-out 0s 1 slide-up;
}
.validation-popover[data-open="false"] {
	animation: 0.2s ease-out 0s 1 slide-down;
}
.spin {
	-webkit-animation: spin 2s linear infinite; /* Safari */
	animation: spin 2s linear infinite;
}

@keyframes slide-up {
	from {
		height: 0px;
	}
	to {
		height: 227px;
	}
}

@keyframes slide-down {
	from {
		height: 227px;
	}
	to {
		height: 0px;
	}
}

/* Safari */
@-webkit-keyframes spin {
	0% {
		-webkit-transform: rotate(0deg);
	}
	100% {
		-webkit-transform: rotate(360deg);
	}
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
