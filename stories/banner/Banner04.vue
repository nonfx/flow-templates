<template>
	<f-div direction="column" gap="large">
		<!-- Please Copy/paste code from here -->
		<!-- Iteration has been used here just for demo purpose -->
		<f-div
			v-for="item in states"
			:key="item"
			:id="item"
			padding="medium"
			gap="auto"
			:state="item"
			align="middle-left"
		>
			<f-div gap="medium" align="middle-left" state="inherit">
				<f-icon source="i-icon" size="medium" state="inherit"></f-icon>
				<f-text variant="heading" size="medium" weight="regular" state="inherit"
					>Your notification text goes here.</f-text
				></f-div
			>
			<f-div width="hug-content" align="middle-left">
				<f-icon-button
					variant="block"
					category="packed"
					icon="i-close"
					size="small"
					state="neutral"
					@click="actionButton"
				></f-icon-button>
			</f-div>
		</f-div>
		<!-- End Snippet -->
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			states: ["primary", "success", "danger", "warning"]
		};
	},
	methods: {
		actionButton() {
			console.log("Action Button Clicked!!!");
		}
	}
});
</script>
