<template>
	<Layout>
		<BodySection></BodySection>
	</Layout>
</template>

<script lang="ts">
import Layout from "./Layout.vue";
import BodySection from "./BodySection.vue";
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {};
	},
	methods: {},
	components: { Layout, BodySection }
});
</script>
