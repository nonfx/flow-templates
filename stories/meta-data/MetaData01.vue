<template>
	<f-div width="373px" direction="column">
		<f-div height="hug-content" align="middle-center" clickable @click="toggleAccordion">
			<f-div>
				<f-text variant="para" size="small" weight="bold">Requester details</f-text>
			</f-div>
			<f-div height="hug-content" width="hug-content">
				<f-icon-button
					:icon="open ? 'i-chevron-up' : 'i-chevron-down'"
					variant="block"
					category="transparent"
					size="small"
					state="inherit"
				></f-icon-button>
			</f-div>
		</f-div>
		<f-div direction="column" class="accordion-list" :data-accordion-open="open" overflow="hidden">
			<f-div
				v-for="(value, name) in metaData"
				direction="row"
				padding="small none"
				overflow="visible"
			>
				<f-div width="33%"
					><f-text variant="para" size="small" weight="regular" state="secondary">{{
						name
					}}</f-text></f-div
				>
				<f-div v-if="value.type === 'label-text'" align="middle-center" gap="x-small">
					<f-pictogram variant="circle" size="small" state="default" source="BC"></f-pictogram>
					<f-text variant="para" size="small" weight="regular">{{ value.value }}</f-text></f-div
				>
				<f-div v-else-if="value.type === 'text'"
					><f-text variant="para" size="small" weight="regular">{{ value.value }}</f-text></f-div
				>
				<f-div v-else direction="column" gap="small" align="middle-center">
					<f-div gap="x-small" v-for="item in (value.value as ConnectArrayType)"
						><f-icon :source="item.icon" size="small"></f-icon>
						<f-text :inline="true" variant="para" size="small" weight="medium">{{
							item.name
						}}</f-text>
					</f-div>
				</f-div>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			open: true,
			metaData: {
				["NAME"]: { type: "label-text", value: "Brendon Compliance" },
				["ROLE"]: { type: "text", value: "Senior DevOps Engineer" },
				["TEAM"]: { type: "text", value: "Office of CTO" },
				["LOCATION"]: { type: "text", value: "Singapore" },
				["ORG ID"]: { type: "text", value: "brendon.compliance@cldcvr.com" },
				["CONNECT ON"]: {
					type: "connect-array",
					value: [
						{ icon: "p-slack", name: "Slack" },
						{ icon: "i-mail", name: "Email" }
					]
				}
			} as MetaDataType
		};
	},
	methods: {
		toggleAccordion() {
			this.open = !this.open;
		}
	}
});

export type ConnectArrayType = { icon: string; name: string }[];
export type EntryType = {
	type: "label-text" | "text" | "connect-array";
	value: string | ConnectArrayType;
};
export type MetaDataType = Record<string, EntryType>;
</script>

<style lang="scss">
.accordion-list {
	&[data-accordion-open="false"] {
		max-height: 0 !important;
		transition: max-height 0.15s ease-out !important;
	}
	&[data-accordion-open="true"] {
		max-height: 500px !important;
		transition: max-height 0.25s ease-in !important;
	}
}
</style>
