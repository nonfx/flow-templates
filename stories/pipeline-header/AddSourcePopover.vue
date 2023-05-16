<template>
	<f-div width="864px" state="secondary" direction="column" height="305px">
		<f-div padding="medium" gap="auto" align="middle-left" height="hug-content">
			<f-div>
				<f-text variant="para" size="small" weight="bold"
					>What source would you like to ingest?</f-text
				>
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
		<f-div padding="medium" direction="column">
			<f-div gap="large" padding="none none medium none" height="hug-content">
				<f-div width="199px"
					><f-search variant="round" :value="searchValue" @input="searchFilter"></f-search
				></f-div>
				<f-div width="184px"
					><f-select
						:options="options"
						:value="filterValue"
						:clear="false"
						@input="selectFilter"
					></f-select
				></f-div>
			</f-div>
			<f-grid>
				<f-div
					v-for="item in filteredData"
					:key="item.id"
					:id="item.id"
					height="hug-content"
					state="tertiary"
					variant="curved"
					padding="medium"
					gap="small"
					:clickable="true"
					@click="changePath"
				>
					<f-icon :source="item.icon" size="large"></f-icon>
					<f-div direction="column">
						<f-text variant="para" size="small" weight="medium">{{ item.title }}</f-text>
						<f-text variant="para" size="x-small" weight="regular" state="secondary">{{
							item.subTitle
						}}</f-text>
					</f-div>
				</f-div>
			</f-grid>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//ignore this import -- only for demo purpose
import { changeRoute } from "../../utils/utils";

export default defineComponent({
	data() {
		return {
			data: [
				{ id: 1, title: "AWS IoT Core", subTitle: "stream", icon: "aws-storage-S3" },
				{ id: 2, title: "PostgresSQL", subTitle: "RDBMS", icon: "p-postgresql" },
				{ id: 3, title: "Oracle", subTitle: "RDBMS", icon: "p-oracle" },
				{ id: 4, title: "SQLServer", subTitle: "RDBMS", icon: "p-sql-server" },
				{ id: 5, title: "MySQL", subTitle: "RDBMS", icon: "p-mysql" },
				{ id: 6, title: "S3 Bucket", subTitle: "File", icon: "aws-storage-S3" },
				{ id: 7, title: "GCS", subTitle: "File", icon: "gcp-storage-gcs" },
				{ id: 8, title: "CSV", subTitle: "File", icon: "i-file-csv" },
				{ id: 9, title: "Rest", subTitle: "API", icon: "aws-storage-S3" },
				{ id: 10, title: "SFTP", subTitle: "SFTP", icon: "i-file-SFTP" }
			] as Data,
			options: ["All", "stream", "RDBMS", "File", "API", "SFTP"],
			filterValue: "All",
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
			if (this.filterValue !== "All") {
				this.filteredData = this.data.filter(
					item =>
						item.title.toLowerCase().includes(e.detail.value.toLowerCase()) &&
						item.subTitle.toLowerCase().includes(this.filterValue.toLowerCase())
				);
			} else {
				this.filteredData = this.data.filter(item =>
					item.title.toLowerCase().includes(e.detail.value.toLowerCase())
				);
			}
		},
		selectFilter(e: CustomEvent) {
			this.filterValue = e.detail.value;
			if (e.detail.value !== "All") {
				if (this.searchValue) {
					this.filteredData = this.data.filter(
						item =>
							item.title.toLowerCase().includes(this.searchValue.toLowerCase()) &&
							item.subTitle.toLowerCase().includes(e.detail.value.toLowerCase())
					);
				} else {
					this.filteredData = this.data.filter(item =>
						item.subTitle.toLowerCase().includes(e.detail.value.toLowerCase())
					);
				}
			} else {
				if (this.searchValue) {
					this.filteredData = this.data.filter(item =>
						item.title.toLowerCase().includes(this.searchValue.toLowerCase())
					);
				} else {
					this.filteredData = [...this.data];
				}
			}
		},
		//only for demo purpose
		changePath() {
			changeRoute("ft-source-details", "/story/templates-pipeline-header--template-source-details");
		}
	}
});

export type DataObject = { id: number; title: string; subTitle: string; icon: string };
export type Data = DataObject[];
</script>
