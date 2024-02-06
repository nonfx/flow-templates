<template>
	<f-div direction="column" width="320px">
		<f-div height="hug-content" padding="large"
			><f-text variant="heading" size="medium" weight="medium">List View</f-text>
			<f-icon-button icon="i-plus" size="small"></f-icon-button>
		</f-div>
		<f-div height="hug-content" padding="none large large large">
			<f-search variant="round" size="small"></f-search>
		</f-div>
		<f-div overflow="scroll" direction="column">
			<f-div
				v-for="item in items"
				:key="item.id"
				height="hug-content"
				border="small solid secondary bottom"
				padding="small"
				gap="small"
				align="middle-left"
				:selected="item.selected ? 'notch-right' : undefined"
				:state="item.selected ? 'tertiary' : 'default'"
				clickable
				@click="() => handleItemClick(item)"
			>
				<f-pictogram :source="item.emoji"></f-pictogram>
				<f-div direction="column">
					<f-text variant="heading" weight="medium" size="medium">{{ item.name }}</f-text>
					<f-text size="small">{{ item.description }}</f-text>
				</f-div>
			</f-div>
		</f-div>
	</f-div>
</template>
<script setup lang="ts">
import { faker } from "@faker-js/faker";
import { onMounted, ref } from "vue";

export type LeftItem = {
	id: number;
	name: string;
	description: string;
	emoji: string;
	selected: boolean;
};
const items = ref<LeftItem[]>([]);

const handleItemClick = (item: LeftItem) => {
	items.value.forEach(it => {
		it.selected = false;
	});
	item.selected = !item.selected;
};

onMounted(() => {
	for (let index = 0; index < 20; index++) {
		items.value.push({
			id: index,
			name: faker.internet.domainWord(),
			description: faker.internet.url(),
			emoji: faker.internet.emoji(),
			selected: index === 0 ? true : false
		});
	}
});
</script>
