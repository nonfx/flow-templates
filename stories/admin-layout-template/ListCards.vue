<template>
	<f-div direction="column">
		<f-div padding="medium" gap="medium" border="small solid subtle bottom" height="hug-content">
			<f-icon source="i-database" size="medium"></f-icon>
			<f-text variant="heading" size="small" weight="bold">Database</f-text>
		</f-div>
		<f-div padding="medium" direction="column" overflow="scroll">
			<f-div direction="column" v-for="item in data" :key="item.id" height="hug-content">
				<ListCard :item="item" @select-list-card="selectListCard"></ListCard>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListCard from "./ListCard.vue";

export default defineComponent({
	data() {
		return {
			data: [
				{
					id: 0,
					icon: "p-postgresql",
					name: "Postgres",
					version: "V11.0 to V15.0",
					description: "A relational database management system using SQL.",
					published: "3 hours ago",
					dataQueue: ["Storage", "Database", "NOSQL"]
				},
				{
					id: 1,
					icon: "aws-database-dynamodb",
					name: "DynamoDB",
					version: "V11.0 to V15.0",
					description:
						"A NoSQL database service provided by AWS, offering high availability, automatic scaling, and low-latency access for applications with any scale of data.",
					published: "3 hours ago",
					dataQueue: ["Storage", "Database", "NOSQL"]
				},
				{
					id: 2,
					icon: "p-mongodb",
					name: "MongoDB",
					version: "V11.0 to V15.0",
					description:
						"Document-oriented database that provides high performance, scalability, and flexibility for storing and querying unstructured or semi-structured data in JSON-like documents.",
					published: "3 hours ago",
					dataQueue: ["Storage", "Database", "NOSQL"]
				},
				{
					id: 3,
					icon: "p-postgresql",
					name: "Postgres",
					version: "V11.0 to V15.0",
					description:
						"A relational database management system using SQL. A relational database management system using SQL.A relational database management system using SQL.A relational database management system using SQL.",
					published: "3 hours ago",
					dataQueue: ["Storage", "Database", "NOSQL"]
				},
				{
					id: 4,
					icon: "aws-database-dynamodb",
					name: "DynamoDB",
					version: "V11.0 to V15.0",
					description:
						"A NoSQL database service provided by AWS, offering high availability, automatic scaling, and low-latency access for applications with any scale of data.",
					published: "3 hours ago",
					dataQueue: ["Storage", "Database", "NOSQL"]
				}
			] as ListCardTypes
		};
	},
	methods: {
		selectListCard(item: Object) {
			this.$emit("select-list-card", item);
		}
	},
	components: { ListCard }
});

export type ListCard = {
	id: number;
	icon: string;
	name: string;
	version: string;
	description: string;
	published: string;
	dataQueue: string[];
};
export type ListCardTypes = ListCard[];
</script>
