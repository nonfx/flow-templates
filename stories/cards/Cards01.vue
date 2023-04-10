<template>
	<f-div gap="medium">
		<f-div
			v-for="item in data"
			:key="item.id"
			:id="item.id"
			width="200px"
			height="hug-content"
			state="default"
			variant="curved"
			padding="medium"
			gap="small"
		>
			<f-icon :source="item.icon" size="large"></f-icon>
			<f-div direction="column">
				<f-text variant="para" size="small" weight="medium">{{ item.title }}</f-text>
				<f-text variant="para" size="x-small" weight="regular" state="secondary">{{
					item.subTitle
				}}</f-text>
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
			] as Data
		};
	}
});

export type Data = { id: number; title: string; subTitle: string; icon: string }[];
</script>
