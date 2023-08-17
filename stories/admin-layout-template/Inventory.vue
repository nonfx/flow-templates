<template>
	<f-div direction="column" gap="medium" height="hug-content">
		<f-text variant="heading" size="small" weight="medium" state="secondary">
			{{ data.title }}
		</f-text>
		<f-div gap="medium" v-for="(value, name) in data.data" overflow="visible">
			<f-div width="40%">
				<f-text variant="para" size="small" weight="regular" state="secondary">{{ name }}</f-text>
			</f-div>
			<f-div gap="small" height="hug-content" v-if="value.type === 'git'">
				<f-icon source="p-github" size="small" state="primary"></f-icon>
				<f-div width="hug-content">
					<f-text :inline="true" variant="para" size="small" weight="regular" state="primary">{{
						value.value
					}}</f-text></f-div
				>
			</f-div>
			<f-div v-else-if="value.type === 'string'">
				<f-text variant="para" size="small" weight="regular" state="default">{{
					value.value
				}}</f-text>
			</f-div>
			<f-div gap="small" v-else>
				<f-pictogram
					v-for="item in value.value"
					:key="(item as Collaborators).name"
					:source="(item as Collaborators).profile"
					variant="circle"
					size="small"
				></f-pictogram>
				<f-text variant="para" size="small" weight="regular" state="primary"> View all</f-text>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			data: {
				title: "Inventory details",
				data: {
					Repository: {
						type: "git",
						value: "View on GitHub"
					},
					"Last published": { type: "string", value: "3 hours ago" },
					"Created on": { type: "string", value: "22 Jun 2023" },
					Collaborators: {
						type: "collaborators",
						value: [
							{
								name: "A",
								profile:
									"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80"
							},
							{
								name: "A",
								profile:
									"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80"
							},
							{
								name: "A",
								profile:
									"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80"
							},
							{
								name: "A",
								profile:
									"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80"
							},
							{
								name: "A",
								profile:
									"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80"
							},
							{
								name: "A",
								profile:
									"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&amp;w=1000&amp;q=80"
							}
						]
					}
				}
			} as InventoryData
		};
	}
});

export type Collaborators = { name: string; profile: string };
export type DataTypeValue = string | Collaborators[];
export type DataType = { type: "git" | "string" | "collaborators"; value: DataTypeValue };
export type Inventory = Record<string, DataType>;
export type InventoryData = { title: string; data: Inventory };
</script>
