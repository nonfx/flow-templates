<template>
	<div>
		<f-text variant="code" size="small">
			<pre>{{ JSON.stringify(data, replacer, 2) }}</pre>
		</f-text>
	</div>
</template>

<script lang="ts">
import { FTableSchemaData } from "@cldcvr/flow-table";
import { defineComponent } from "vue";
import { getInnerData } from "./inner-data";

export default defineComponent({
	data() {
		return {
			data: null as FTableSchemaData | null
		};
	},
	mounted() {
		this.data = getInnerData(3, 4);
	},
	methods: {
		replacer(_key: string, value: any): any {
			if (typeof value === "function") {
				return value.toString().replace(/\n/g, " ").replace(/\t/g, "").replace(/\"/g, "'"); // Remove newline characters from the function string
			}
			return value; // For other types, return the original value
		}
	}
});
</script>
