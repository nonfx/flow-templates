<template>
	<f-div
		width="642px"
		state="default"
		border="small solid default bottom"
		align="middle-center"
		height="hug-content"
		padding="medium"
		gap="medium"
		v-if="open"
	>
		<f-div gap="medium" align="middle-center" padding="none">
			<!--Start : slab-left -->
			<f-div data-f-id="slab-left" height="hug-content" width="hug-content">
				<!-- <f-icon source="stance-department" size="x-large"></f-icon> -->
				<f-div
					class="circular-block"
					height="44px"
					width="44px"
					state="subtle"
					align="middle-center"
				>
					<f-icon source="i-app" state="primary"></f-icon>
				</f-div>
				<f-icon
					class="absolute-icon-position"
					size="x-small"
					source="i-shield"
					state="warning"
				></f-icon>
			</f-div>
			<!--End : slab-left -->
			<f-div width="fill-container" gap="x-small" direction="column">
				<!--Start : slab-middle  -->
				<f-div
					data-f-id="slab-middle"
					direction="row"
					gap="medium"
					align="middle-left"
					width="fill-container"
				>
					<f-text variant="para" size="x-small" weight="regular" :inline="true" state="subtle"
						>Department</f-text
					>
				</f-div>
				<!--End : slab-middle  -->
				<!--Start : section-subtext  -->
				<f-text variant="para" size="medium" weight="medium" :inline="true">Office of CTO</f-text>
				<!--End : section-subtext -->
			</f-div>
			<!--START : slab-right -->
			<f-div data-f-id="slab-right" width="hug-content" gap="medium">
				<f-icon-button
					icon="i-delete"
					variant="block"
					category="packed"
					size="small"
					state="inherit"
				></f-icon-button>
				<f-icon-button
					icon="i-hide"
					variant="block"
					category="packed"
					size="small"
					state="inherit"
				></f-icon-button>
				<f-icon-button
					icon="i-download"
					variant="block"
					category="packed"
					size="small"
					state="inherit"
				></f-icon-button>
			</f-div>
			<!--End : slab-right -->
		</f-div>
		<f-divider state="subtle"></f-divider>
		<f-icon-button
			icon="i-close"
			variant="block"
			category="packed"
			size="small"
			state="inherit"
			@click="closeSlab"
		></f-icon-button>
	</f-div>
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
		closeSlab() {
			this.open = false;
		}
	}
});
</script>

<style lang="scss">
.circular-block {
	position: relative;
	border-radius: 50%;
}
.absolute-icon-position {
	position: absolute;
	bottom: 0;
	right: 0;
}
</style>
