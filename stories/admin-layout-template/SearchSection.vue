<template>
	<f-div
		padding="medium"
		gap="medium"
		direction="row"
		height="54px"
		align="middle-left"
		border="small solid subtle bottom"
	>
		<f-div width="hug-content" class="hide-in-mobile-view">
			<f-icon-button
				variant="round"
				size="small"
				icon="i-filter"
				:state="open ? 'primary' : 'neutral'"
				@click="$emit('toggle-filter')"
			></f-icon-button>
		</f-div>
		<f-divider state="subtle" class="hide-in-mobile-view"></f-divider>
		<f-div><f-search size="small" variant="round"></f-search></f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		open: {
			type: Boolean,
			default: true
		}
	}
});
</script>

<style lang="scss">
@media (max-width: 768px) {
	.hide-in-mobile-view {
		display: none !important;
	}
}
</style>
