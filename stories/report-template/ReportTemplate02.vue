<template>
	<f-div direction="column" state="default">
		<f-div state="subtle" direction="column" padding="large" gap="medium">
			<f-div gap="x-small" direction="column">
				<f-text variant="heading" weight="medium" size="medium" state="primary"
					>Relational Database Service (RDS)</f-text
				>
				<f-text variant="heading" size="small" weight="regular" state="secondary"
					>accounting-engine-1-rdb-1
				</f-text>
			</f-div>
		</f-div>

		<f-div direction="column" padding="large">
			<f-div
				v-for="(value, name) in metaData2"
				direction="row"
				padding="small none"
				overflow="visible"
			>
				<f-div width="33%"
					><f-text
						variant="para"
						size="small"
						weight="regular"
						:state="name === 'TYPE' ? 'secondary' : 'default'"
						>{{ name }}</f-text
					></f-div
				>
				<f-div
					><f-text
						variant="para"
						size="small"
						weight="regular"
						:state="value.type === 'secondary' ? 'secondary' : 'default'"
						>{{ value.value }}</f-text
					></f-div
				>
			</f-div>
		</f-div>

		<f-div direction="row" align="middle-center" padding="large">
			<f-div direction="column">
				<f-divider variant="dashed" state="secondary"> </f-divider>
			</f-div>
			<f-div padding="x-small medium" width="hug-content">
				<f-text variant="heading" size="x-small" weight="medium" state="secondary"
					>APPLICATION COMPLIANCE</f-text
				>
			</f-div>
			<f-div direction="column">
				<f-divider variant="dashed" state="secondary"> </f-divider>
			</f-div>
		</f-div>
		<!-- start meta-data section -->
		<f-div direction="column" padding="large">
			<f-div v-for="(value, name) in metaData" direction="column">
				<!-- logic outer meta data -->
				<f-div
					direction="row"
					padding="medium none"
					overflow="visible"
					border="small solid secondary bottom"
					v-if="value.type !== 'group'"
				>
					<f-div width="33%"
						><f-text variant="para" size="small" weight="regular">{{ name }}</f-text></f-div
					>
					<f-div
						><f-text
							variant="para"
							size="small"
							:state="value.type === 'secondary' ? 'secondary' : 'default'"
							weight="regular"
							>{{ value.value }}</f-text
						></f-div
					>
				</f-div>
				<!-- logic for outer meta data -->
				<!-- loop for inner meta-data group -->
				<f-div direction="column" border="small solid secondary bottom" v-else>
					<f-div
						direction="row"
						padding="small none"
						overflow="visible"
						v-for="(data, key) in value.value"
					>
						<f-div width="33%"
							><f-text variant="para" size="small" weight="regular">{{ key }}</f-text></f-div
						>
						<f-div
							><f-text variant="para" size="small" weight="regular" state="secondary">{{
								data
							}}</f-text></f-div
						>
					</f-div>
				</f-div>
				<!-- loop for inner meta-data group -->
			</f-div>
		</f-div>
		<!-- end meta-data section -->
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			metaData: {
				["Best Practice -ID"]: { type: "text", value: "Best Practice statement" },
				["5.1"]: {
					type: "secondary",
					value: "Ensure login via local UNIX Domain Socket is configured correctly Manual"
				},
				["Reg. Statement - ID"]: { type: "text", value: "Reg. Statement" },
				["11.2.4"]: {
					type: "secondary",
					value:
						"The FI should implement network access controls to detect and prevent unauthorised devices from connecting to its network"
				},
				[""]: { type: "text", value: "Evidence details" },
				group: {
					type: "group",
					value: {
						["Location"]: "/stance.coauth.io/evidence/id1",
						["Type"]: "Auto Collected",
						["Approval Location"]: "/stance.coauth.io/approval/id1",
						["Approval Type"]: "Manual"
					}
				}
			} as MetaDataType,

			metaData2: {
				["TYPE"]: { type: "secondary", value: "CLASSIFICATION" },
				["Database"]: {
					type: "text",
					value:
						"/Service/Public Cloud/Infrastructure/Database as Service/SQL/Relational Database Service/Postgre SQL"
				}
			} as MetaDataType
		};
	}
});

export type GroupType = Record<string, string>;
export type EntryType = {
	type: "text" | "secondary" | "group";
	value: string | GroupType;
};
export type MetaDataType = Record<string, EntryType>;
</script>
