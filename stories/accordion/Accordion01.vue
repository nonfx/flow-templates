<template>
	<f-div direction="column">
		<f-accordion v-for="item in [1, 2]" :key="item">
			<f-div gap="medium">
				<f-icon :source="item === 1 ? 'i-bucket' : 'i-app'" size="small" state="default"></f-icon>
				<f-text variant="heading" size="small" weight="regular">Storage {{ item }}</f-text>
			</f-div>
			<f-div slot="body" width="400px" direction="row" padding="none">
				<f-divider class="accordion-template-divider" state="secondary"></f-divider>
				<f-div direction="column" padding="none">
					<f-div gap="medium" padding="medium x-large" clickable>
						<f-icon source="i-database" size="small" state="default"></f-icon>
						<f-text variant="heading" size="small" weight="regular" state="secondary"
							>Database {{ item }}</f-text
						>
					</f-div>
					<f-div gap="medium" padding="medium x-large" clickable>
						<f-icon source="i-data-lake" size="small" state="default"></f-icon>
						<f-text variant="heading" size="small" weight="regular" state="secondary"
							>Cache {{ item }}</f-text
						>
					</f-div>
				</f-div>
			</f-div>
		</f-accordion>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {};
	}
});
</script>

<style lang="scss">
.accordion-template-divider {
	position: absolute;
	left: 7px;
	z-index: 100;
}
</style>
