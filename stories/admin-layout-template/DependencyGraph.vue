<template>
	<f-div
		overflow="hidden"
		state="default"
		class="dependency-graph-detail-cp"
		:data-column-open="open"
	>
		<f-div direction="column" padding="medium" gap="x-large" overflow="scroll">
			Coming Soon.......
		</f-div>
		<f-icon-button
			:icon="open ? 'i-close' : 'i-arrow-left'"
			class="fab-toggle-cp"
			@click="toggleLeftcolumn"
		></f-icon-button>
		<f-div
			:width="open ? '400px' : '0px'"
			:class="open ? 'graph-expanded-detail-cp' : 'graph-collapsed-detail-cp'"
			:border="open ? 'small solid subtle left' : 'none'"
			direction="column"
			state="subtle"
			overflow="scroll"
		>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			open: true
		};
	},
	methods: {
		toggleLeftcolumn() {
			this.open = !this.open;
		}
	}
});
</script>

<style lang="scss">
.fab-toggle-cp {
	display: none;
}

@media (max-width: 1100px) {
	.fab-toggle-cp {
		display: block !important;
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 1100;
	}
}

.graph-expanded-detail-cp {
	width: inherit;
}
@keyframes slide-graph-detail-right {
	from {
		width: 0px;
	}
	to {
		width: 400px;
	}
}
@media (max-width: 1100px) {
	.graph-expanded-detail-cp {
		position: fixed !important;
		right: 0px;
		animation: 0.25s ease-out 0s 1 slide-graph-detail-right;
		z-index: 1000;
		border-radius: 0px 8px 8px 0px;
		top: 0;
	}
}
@media (min-width: 1100px) {
	.graph-expanded-detail-cp {
		animation: 0.25s ease-out 0s 1 slide-graph-detail-right;
	}
}
.graph-collapsed-detail-cp {
	width: inherit;
}
@keyframes slide-graph-detail-left {
	from {
		width: 400px;
	}
	to {
		width: 0px;
	}
}
@media (max-width: 1100px) {
	.graph-collapsed-detail-cp {
		position: fixed !important;
		right: 0px;
		width: inherit;
		animation: 0.25s ease-out 0s 1 slide-graph-detail-left;
		z-index: 1000;
		top: 0;
	}
}
@media (min-width: 1100px) {
	.graph-collapsed-detail-cp {
		width: inherit;
		animation: 0.25s ease-out 0s 1 slide-graph-detail-left;
	}
}
.remove-scrollbar::-webkit-scrollbar {
	display: none;
}
.remove-scrollbar {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
@media (max-width: 1100px) {
	.dependency-graph-detail-cp[data-column-open="true"] {
		&::before {
			content: "";
			position: fixed;
			width: 100vw;
			height: 100vh;
			background-color: rgba(0, 0, 0, 0.5);
			z-index: 10;
			top: 0;
			left: 0;
		}
	}
}
</style>
