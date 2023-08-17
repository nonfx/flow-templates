<template>
	<f-div width="hug-content" gap="small" align="middle-left" height="hug-content">
		<f-tag :label="data[0]"></f-tag><f-icon source="i-chevron-right" size="x-small"></f-icon>
		<f-tag :label="data[1]"></f-tag><f-icon source="i-chevron-right" size="x-small"></f-icon>
		<f-tag :label="data[2]"></f-tag>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		data: {
			type: Array,
			default() {
				return ["Storage", "Database", "NOSQL"];
			}
		}
	},
	data() {
		return {};
	}
});
</script>
