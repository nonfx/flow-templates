<template>
	<f-div width="432px" state="secondary" direction="column" height="299px" overflow="hidden">
		<f-div padding="medium medium none medium" gap="auto" align="middle-left" height="hug-content">
			<f-div height="hug-content">
				<f-text variant="para" size="small" weight="bold">Your Sources</f-text>
			</f-div>
			<f-div width="hug-content" align="middle-left">
				<f-button
					label="Add New"
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
		<f-div direction="column" gap="medium" padding="none">
			<f-div height="hug-content" padding="medium medium none medium">
				<f-search
					variant="round"
					:value="searchValue"
					@input="searchFilter"
					placeholder="Search Sources"
					size="small"
				></f-search>
			</f-div>
			<f-div direction="column" overflow="scroll" padding="none">
				<f-div
					direction="row"
					gap="auto"
					align="middle-left"
					v-for="item in filteredData"
					:key="item.id"
					padding="small medium"
					height="hug-content"
					clickable
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
					<f-div width="hug-content" align="middle-left" v-if="lastUsed === item.id">
						<f-tag label="Last Used" size="small"></f-tag>
					</f-div>
					<f-div width="hug-content" align="top-left" v-if="lastUsed !== item.id && item.id === 4">
						<f-icon-button
							icon="i-loader"
							variant="block"
							category="packed"
							size="small"
						></f-icon-button>
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
				{ id: 1, title: "MySQL_staging", subTitle: "MySQL_staging", icon: "p-mysql" },
				{
					id: 2,
					title: "Postgress_new_source",
					subTitle: "Postgress_new_source",
					icon: "p-postgresql"
				},
				{ id: 3, title: "SQL_source1", subTitle: "SQL_source1", icon: "p-sql-server" },
				{
					id: 4,
					title: "Oracle source_staging",
					subTitle: "Oracle source_staging",
					icon: "p-oracle"
				},
				{ id: 5, title: "AWS IoT Core", subTitle: "stream", icon: "aws-storage-S3" },
				{ id: 6, title: "S3 Bucket", subTitle: "File", icon: "aws-storage-S3" },
				{ id: 7, title: "GCS", subTitle: "File", icon: "gcp-storage-gcs" },
				{ id: 8, title: "CSV", subTitle: "File", icon: "i-file-csv" },
				{ id: 9, title: "Rest", subTitle: "API", icon: "aws-storage-S3" },
				{ id: 10, title: "SFTP", subTitle: "SFTP", icon: "i-file-SFTP" }
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
