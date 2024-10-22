<template>
	<f-div
		:class="customOverflow"
		state="default"
		class="left-column-hightlight-filter"
		:data-column-open="open"
	>
		<FilterSection :open="open" @close-filter="closeFilter"></FilterSection>
		<f-icon-button
			:icon="open ? 'i-close' : 'i-filter'"
			class="fab-toggle-filter"
			@click="$emit('toggle-filter')"
		></f-icon-button>
		<f-div :class="customOverflow" state="default">
			<template v-if="step === 0">
				<GridCards @select-card="selectCard"></GridCards>
			</template>
			<template v-else-if="step === 1">
				<ListCards @select-list-card="selectCardFromList"></ListCards>
			</template>
			<template v-else>
				<StorageDetails @move-back="moveBack"></StorageDetails>
			</template>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GridCards from "./GridCards.vue";
import FilterSection from "./FilterSection.vue";
import ListCards from "./ListCards.vue";
import StorageDetails from "./StorageDetails.vue";

export default defineComponent({
	props: {
		open: {
			type: Boolean,
			default: true
		},
		step: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			selectedCard: null as null | object,
			selectedListCard: null as null | object
		};
	},
	computed: {
		customOverflow() {
			return this.step === 2 ? "custom-overflow-visible" : "";
		}
	},
	methods: {
		closeFilter() {
			this.$emit("toggle-filter");
		},
		selectCard(item: object) {
			this.selectedCard = item;
			this.$emit("change-step", 1);
		},
		selectCardFromList(item: object) {
			this.selectedListCard = item;
			this.$emit("change-step", 2);
		},
		moveBack() {
			this.$emit("change-step", 1);
		}
	},
	components: { GridCards, FilterSection, ListCards, StorageDetails }
});
</script>

<style lang="scss">
@media (max-width: 768px) {
	.custom-overflow-visible {
		overflow: visible !important;
	}
	.left-column-hightlight-filter[data-column-open="true"] {
		&::before {
			content: "";
			position: fixed;
			width: 100vw;
			height: 100vh;
			background-color: rgba(0, 0, 0, 0.5);
			z-index: 1400;
			top: 0;
			left: 0;
		}
	}
	.fab-toggle-filter {
		display: block !important;
		position: fixed;
		bottom: 20px;
		left: 20px;
		z-index: 1700;
	}
}

.fab-toggle-filter {
	display: none;
}
</style>
