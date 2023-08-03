<template>
	<f-div width="431px" direction="column">
		<f-div
			v-for="(value, name) in metaData"
			direction="row"
			padding="medium none"
			overflow="visible"
		>
			<f-div width="33%"
				><f-text variant="para" size="small" weight="regular" state="secondary">{{
					name
				}}</f-text></f-div
			>
			<f-div
				><f-text variant="para" size="small" weight="regular">{{ value.value }}</f-text></f-div
			>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			metaData: {
				["Name"]: { type: "text", value: "Office of CTO" },
				["Id"]: { type: "text", value: "#4343943" },
				["Location"]: { type: "text", value: "Singapore" },
				["Policy(s)"]: { type: "text", value: "Monetary Authority of Singapore (MAS)" }
			} as MetaDataType
		};
	}
});

export type ConnectArrayType = { icon: string; name: string }[];
export type EntryType = {
	type: "text";
	value: string | ConnectArrayType;
};
export type MetaDataType = Record<string, EntryType>;
</script>
