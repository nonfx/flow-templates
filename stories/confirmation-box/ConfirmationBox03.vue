<template>
	<f-popover size="medium" :open="open" :overlay="true">
		<f-div width="432px" state="secondary" direction="column" variant="curved" padding="none">
			<f-div align="middle-center" padding="medium">
				<f-div height="hug-content"
					><f-text variant="para" size="small" weight="bold">Confirmation prompt</f-text></f-div
				>
				<f-div width="hug-content" height="hug-content"
					><f-icon-button
						icon="i-close"
						variant="block"
						category="packed"
						size="small"
						state="inherit"
						@click="closePopover"
					></f-icon-button
				></f-div>
			</f-div>
			<f-div padding="medium">
				<f-text variant="para" size="small" weight="regular">--content area--</f-text>
			</f-div>
			<f-div padding="medium">
				<f-text variant="para" size="small" weight="regular">
					Are you sure you want to remove all points from the map?</f-text
				>
			</f-div>
			<f-div padding="medium" align="middle-right" gap="small">
				<f-button
					label="Cancel"
					variant="round"
					category="outline"
					size="small"
					state="neutral"
					icon-left="i-close"
					@click="closePopover"
				></f-button>
				<f-button
					label="Approve"
					variant="round"
					size="small"
					state="success"
					icon-left="i-tick-fill"
					@click="approve"
				></f-button>
			</f-div>
		</f-div>
	</f-popover>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			open: true
		};
	},
	methods: {
		closePopover() {
			this.open = false;
		},
		approve() {
			this.open = false;
		}
	}
});
</script>
