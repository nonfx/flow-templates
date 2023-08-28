<template>
	<f-div direction="column">
		<f-accordion :open="open" @toggle="handleToggle">
			<f-div><f-text variant="para" size="small" weight="bold">Requester details</f-text></f-div>
			<f-div slot="body" direction="column" width="100%">
				<f-div
					v-for="(value, name) in metaData"
					direction="row"
					padding="small none"
					height="hug-content"
				>
					<f-div width="33%"
						><f-text variant="para" size="small" weight="regular" state="secondary">{{
							name
						}}</f-text></f-div
					>
					<f-div v-if="value.type === 'label-text'" align="middle-left" gap="x-small">
						<f-pictogram variant="circle" size="small" state="default" source="BC"></f-pictogram>
						<f-text variant="para" size="small" weight="regular">{{ value.value }}</f-text></f-div
					>
					<f-div v-else-if="value.type === 'text'"
						><f-text
							variant="para"
							size="small"
							weight="regular"
							:editable="true"
							@input="($event:CustomEvent)=>handleTextEdit($event, name)"
							>{{ value.value }}</f-text
						></f-div
					>
					<f-div v-else direction="column" gap="small" align="middle-left">
						<f-div gap="x-small" v-for="item in (value.value as ConnectArrayType)" :key="item.name"
							><a @click="connectOn(item.name)"
								><f-icon :source="item.icon" size="small" clickable></f-icon
							></a>
							<f-text :inline="true" variant="para" size="small" weight="medium" :editable="true">{{
								item.name
							}}</f-text>
						</f-div>
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
		connectOn(app: string) {
			console.log(`Connect On: ${app}`);
		},
		handleToggle(e: CustomEvent) {
			console.log(e.detail.value);
			this.open = e.detail.value;
		},
		handleTextEdit(e: CustomEvent, name: string) {
			this.metaData[name].value = e.detail.value;
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
