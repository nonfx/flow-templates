<template>
	<f-div direction="column">
		<f-div
			padding="medium"
			gap="medium"
			direction="row"
			height="54px"
			align="middle-left"
			border="small solid default bottom"
		>
			<f-div width="hug-content">
				<f-icon-button variant="round" size="small" state="neutral" icon="i-filter"></f-icon-button>
			</f-div>
			<f-divider state="secondary"></f-divider>
			<f-div><f-search size="small" variant="round"></f-search></f-div>
		</f-div>
		<f-div direction="column">
			<f-div padding="large">
				<f-text variant="heading" size="large" weight="medium">
					What inventory are you looking for?</f-text
				>
			</f-div>
			<f-div padding="large">
				<f-grid :max-cell-width="295">
					<f-div
						v-for="item in data"
						:key="item.id"
						:id="item.id"
						height="hug-content"
						state="default"
						variant="curved"
						padding="medium"
						gap="large"
						clickable
						direction="column"
					>
						<f-icon :source="item.icon" size="large" state="secondary"></f-icon>
						<f-text variant="heading" size="large" weight="medium">{{ item.title }}</f-text>
						<f-text variant="para" size="medium" weight="regular" state="secondary">{{
							item.description
						}}</f-text>
						<f-div>
							<f-grid :min-cell-width="100">
								<f-div
									gap="small"
									v-for="obj in item.db"
									:key="obj.name"
									:id="obj.name"
									align="middle-left"
								>
									<f-icon :source="obj.icon" size="small"></f-icon>
									<f-text variant="para" size="medium" weight="regular" state="secondary">{{
										obj.name
									}}</f-text>
								</f-div>
							</f-grid>
						</f-div>
						<f-button
							label="View All"
							icon-right="i-arrow-right"
							size="small"
							category="transparent"
						></f-button>
					</f-div>
				</f-grid>
			</f-div>
		</f-div>
	</f-div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			data: [
				{
					id: 0,
					title: "Cache",
					description:
						"Store frequently accessed data in-memory to avoid repetitive queries to the primary data store.",
					icon: "i-cache",
					db: [
						{ icon: "aws-database-dynamodb", name: "DynamoDB" },
						{ icon: "p-postgresql", name: "Postgres" },
						{ icon: "p-mongodb", name: "MongoDB" }
					]
				},
				{
					id: 1,
					title: "Database",
					description:
						"Store frequently accessed data in-memory to avoid repetitive queries to the primary data store.",
					icon: "i-database",
					db: [
						{ icon: "aws-database-dynamodb", name: "DynamoDB" },
						{ icon: "p-postgresql", name: "Postgres" },
						{ icon: "p-mongodb", name: "MongoDB" }
					]
				},
				{
					id: 2,
					title: "Services",
					description:
						"Store frequently accessed data in-memory to avoid repetitive queries to the primary data store.",
					icon: "i-globe",
					db: [
						{ icon: "aws-database-dynamodb", name: "DynamoDB" },
						{ icon: "p-postgresql", name: "Postgres" },
						{ icon: "p-mongodb", name: "MongoDB" }
					]
				},
				{
					id: 3,
					title: "Pub/sub",
					description:
						"Store frequently accessed data in-memory to avoid repetitive queries to the primary data store.",
					icon: "i-chat",
					db: [
						{ icon: "aws-database-dynamodb", name: "DynamoDB" },
						{ icon: "p-postgresql", name: "Postgres" },
						{ icon: "p-mongodb", name: "MongoDB" }
					]
				}
			],
			selectedTab: 0
		};
	},
	methods: {
		handleChangeTab(num: number) {
			this.selectedTab = num;
		}
	}
});
</script>
