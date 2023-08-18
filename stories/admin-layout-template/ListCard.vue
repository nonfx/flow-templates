<template>
	<f-div
		gap="medium"
		height="hug-content"
		border="small solid subtle bottom"
		padding="medium none"
		clickable
		@click="$emit('select-list-card', item)"
	>
		<f-div gap="medium">
			<f-icon :source="item.icon" size="x-large"></f-icon>
			<f-div gap="x-large">
				<f-div
					direction="column"
					gap="large"
					class="custom-min-width"
					overflow="visible"
					height="hug-content"
				>
					<f-div align="middle-left" gap="medium">
						<f-text variant="heading" size="large" weight="medium" :inline="true">{{
							item.name
						}}</f-text>
						<f-text variant="heading" size="medium" weight="medium" :inline="true" state="subtle">{{
							item.version
						}}</f-text>
						<f-icon source="i-verified" state="primary"></f-icon>
					</f-div>
					<f-text variant="heading" size="small" weight="regular" state="secondary">
						{{ item.description }}
					</f-text>
					<f-text variant="heading" size="small" weight="regular" :inline="true" state="subtle">
						Published {{ item.published }} by
						<f-text variant="heading" size="small" weight="regular" :inline="true" state="primary"
							>CloudCover</f-text
						>
					</f-text>
				</f-div>
				<TagsQueue :data="item.dataQueue"></TagsQueue>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import TagsQueue from "./TagsQueue.vue";

export default defineComponent({
	props: {
		item: {
			type: Object as PropType<ListCard>,
			default() {
				return {
					id: 0,
					icon: "p-postgresql",
					name: "Postgres",
					version: "V11.0 to V15.0",
					description: "A relational database management system using SQL.",
					published: "3 hours ago",
					dataQueue: ["Storage", "Database", "NOSQL"]
				};
			}
		}
	},
	data() {
		return {};
	},
	components: { TagsQueue }
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
</script>

<style lang="scss">
.custom-min-width {
	min-width: 400px !important;
}

@media (max-width: 768px) {
	.custom-min-width {
		min-width: 150px !important;
	}
}
</style>
