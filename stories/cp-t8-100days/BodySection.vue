<template>
	<f-tab node-width="hug-content">
		<f-tab-node
			v-for="item in array"
			:key="item.id"
			:active="selectedTab === item.id ? true : false"
			:content-id="`tab-${item.title}`"
			@click="handleChangeTab(item.id)"
			><f-div width="100%" height="100%" align="middle-center" direction="column"
				><f-div align="middle-center" height="hug-content" width="hug-content">{{
					item.title
				}}</f-div></f-div
			></f-tab-node
		></f-tab
	>
	<f-tab-content v-for="item in array" :key="item.id" :id="`tab-${item.title}`">
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
					<f-icon-button
						variant="round"
						size="small"
						state="neutral"
						icon="i-filter"
					></f-icon-button>
				</f-div>
				<f-divider state="secondary"></f-divider>
				<f-div><f-search size="small" variant="round"></f-search></f-div>
			</f-div>
			<TabContentSection1></TabContentSection1>
		</f-div>
	</f-tab-content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import TabContentSection from "./TabContentSection.vue";
import TabContentSection1 from "./TabContentSection1.vue";

export default defineComponent({
	data() {
		return {
			array: [
				{ id: 0, title: "Data Preview" },
				{ id: 1, title: "Columns" },
				{ id: 2, title: "Queries" },
				{ id: 3, title: "Glossary" }
			],
			selectedTab: 0
		};
	},
	methods: {
		handleChangeTab(num: number) {
			this.selectedTab = num;
		}
	},
	components: { TabContentSection1 }
});
</script>
