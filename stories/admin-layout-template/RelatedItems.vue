<template>
	<f-div direction="column" gap="large" height="hug-content">
		<CounterHeader></CounterHeader>
		<f-div gap="medium" height="hug-content" direction="column">
			<f-div gap="medium" height="hug-content">
				<f-icon source="aws-database-dynamodb"></f-icon>
				<f-div gap="small" direction="column">
					<f-text variant="heading" size="x-small" weight="regular" state="subtle"
						>Storage / Database / NoSQL</f-text
					>
					<f-text variant="para" size="medium" weight="medium">DynamoDB</f-text>
				</f-div>
			</f-div>
			<f-divider state="subtle" variant="dashed"></f-divider>
			<f-div gap="medium" height="hug-content">
				<f-icon source="p-mongodb"></f-icon>
				<f-div gap="small" direction="column">
					<f-text variant="heading" size="x-small" weight="regular" state="subtle"
						>Storage / Database / NoSQL</f-text
					>
					<f-text variant="para" size="medium" weight="medium">MongoDB</f-text>
				</f-div>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CounterHeader from "./CounterHeader.vue";

export default defineComponent({
	data() {
		return {};
	},
	components: { CounterHeader }
});
</script>
