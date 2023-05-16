<template>
	<f-div width="432px" state="secondary" direction="column" height="210px" overflow="hidden">
		<f-div padding="medium" gap="auto" align="middle-left" height="hug-content">
			<f-div height="hug-content">
				<f-text variant="para" size="small" weight="bold">Select mode of Ingestion</f-text>
			</f-div>
			<f-div width="hug-content" align="middle-left">
				<f-button
					label="Help"
					variant="round"
					category="fill"
					size="x-small"
					state="neutral"
				></f-button>
				<f-icon-button
					icon="i-close"
					variant="block"
					categroy="packed"
					size="small"
					state="inherit"
				></f-icon-button>
			</f-div>
		</f-div>
		<f-div direction="column" padding="none" overflow="hidden">
			<f-div
				direction="row"
				gap="auto"
				align="middle-left"
				v-for="item in filteredData"
				:key="item.id"
				padding="small medium"
				height="hug-content"
				clickable
				border="small solid secondary bottom"
			>
				<f-div gap="medium">
					<f-icon size="large" :source="item.icon"></f-icon>
					<f-div direction="column" gap="x-small">
						<f-text variant="heading" size="small" weight="bold">{{ item.title }}</f-text>
						<f-text variant="para" size="x-small" weight="regular" state="subtle">{{
							item.subTitle
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
			lastUsed: 1,
			data: [
				{
					id: 1,
					title: "Full",
					subTitle: "Complete one cycle of data replication",
					icon: "i-circle"
				},
				{
					id: 2,
					title: "Incremental",
					subTitle: "Time based Incremental ingestion of data",
					icon: "i-incremental"
				},
				{
					id: 3,
					title: "Databrew",
					subTitle: "Ingest data using pre-built transformation",
					icon: "aws-analytics-glue-databrew"
				}
			] as Data,
			searchValue: "",
			filteredData: [] as Data
		};
	},
	mounted() {
		this.filteredData = [...this.data];
	},
	methods: {
		searchFilter(e: CustomEvent) {
			this.searchValue = e.detail.value;
			this.filteredData = this.data.filter(item =>
				item.title.toLowerCase().includes(e.detail.value.toLowerCase())
			);
		}
	}
});

export type DataObject = { id: number; title: string; subTitle: string; icon: string };
export type Data = DataObject[];
</script>
