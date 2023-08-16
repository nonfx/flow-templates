<template>
	<f-div gap="auto" align="middle-left">
		<f-div gap="medium" align="middle-left">
			<f-text variant="heading" size="small" weight="medium" state="secondary">
				{{ data.title }}
			</f-text>
			<f-counter :label="data.count" size="small" state="neutral"></f-counter>
		</f-div>

		<f-div width="hug-content" height="hug-content">
			<f-text variant="para" size="small" weight="regular" state="primary"> View all</f-text>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		data: {
			type: Object,
			default() {
				return { title: "Related", count: 2 };
			}
		}
	},
	data() {
		return {};
	}
});
</script>
