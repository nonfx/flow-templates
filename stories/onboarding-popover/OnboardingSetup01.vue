<template>
	<!--Start : onboarding-popover -->
	<f-div width="320px" state="secondary" padding="large" gap="large" direction="column">
		<f-text variant="heading" size="medium" weight="bold">Step 1: Heading</f-text>
		<f-div direction="column" gap="x-large">
			<f-text variant="para" size="small" weight="regular"
				>Welcome to the schema / table selection screen. Here you can select which tables you would
				like to prepare for ingestion.
			</f-text>
			<f-div direction="column">
				<f-text variant="para" size="small" weight="regular" state="primary"
					><li>Wiki Link 1</li></f-text
				>
				<f-text variant="para" size="small" weight="regular" state="primary"
					><li>Wiki Link 2</li></f-text
				>
			</f-div>
		</f-div>
		<f-button
			variant="round"
			size="small"
			icon-left="👍"
			counter="88"
			label="GOT IT"
			@click="confirm"
		></f-button>
	</f-div>
	<!--End : onboarding-popover -->
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	methods: {
		confirm() {
			console.log("'GOT IT' button clicked!!");
		}
	}
});
</script>
