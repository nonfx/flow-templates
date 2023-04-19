<template>
	<f-div direction="column" align="middle-center" gap="large" width="hug-content">
		<f-pictogram source="💬" variant="squircle" size="large" state="default"></f-pictogram>
		<f-div direction="column" gap="small" align="middle-center" width="233px">
			<f-text variant="heading" size="medium" weight="bold" align="center"
				>What’s the title?</f-text
			>
			<f-text variant="para" size="medium" weight="regular" align="center"
				>A brief description of the empty state goes here.</f-text
			>
		</f-div>
		<f-div align="middle-center">
			<f-button
				label="Secondary ACTION"
				size="small"
				variant="round"
				category="outline"
				@click="secondaryAction"
			></f-button>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	methods: {
		secondaryAction() {
			console.log("Secondary Action button clicked!!!");
		}
	}
});
</script>
