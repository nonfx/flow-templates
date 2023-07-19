<template>
	<f-div>
		<!-- Please Copy/paste code from here -->
		<!-- Iteration has been used here just for demo purpose -->
		<f-popover
			:open="openPopover"
			@overlay-click="openPopover = false"
			size="small"
			target="#popover-dropdown"
		>
			<f-div state="secondary" direction="column" height="432px">
				<f-div direction="column" overflow="hidden" align="middle-left">
					<f-div gap="auto" padding="medium" height="hug-content">
						<f-div gap="medium" align="middle-left">
							<f-icon-button
								variant="block"
								category="packed"
								size="small"
								state="inherit"
								icon="i-arrow-left"
							></f-icon-button>
							<f-text variant="para" size="small" weight="bold">Heading</f-text>
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
								@click="openPopover = false"
							></f-icon-button>
						</f-div>
					</f-div>
					<f-div padding="medium" direction="column" overflow="scroll" align="middle-center">
						<f-div direction="column" align="middle-center" gap="large" width="hug-content">
							<f-pictogram
								source="💬"
								variant="squircle"
								size="large"
								state="default"
							></f-pictogram>
							<f-div direction="column" gap="small" align="middle-center" height="hug-content">
								<f-text variant="heading" size="medium" weight="bold" align="center"
									>What’s the title?</f-text
								>
								<f-text variant="para" size="medium" weight="regular" align="center"
									>A brief description of the empty state goes here.</f-text
								>
							</f-div>
							<f-div align="middle-center">
								<f-button
									label="PRIMARY ACTION"
									size="small"
									variant="round"
									@click="primaryAction"
								></f-button>
							</f-div>
						</f-div>
					</f-div>
				</f-div>
			</f-div>
		</f-popover>
		<f-button id="popover-dropdown" label="Popover" @click="openPopover = true"></f-button>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			openPopover: true
		};
	},
	methods: {
		primaryAction() {
			console.log("clicked primary button");
		}
	}
});
</script>

<style lang="scss"></style>
