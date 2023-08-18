<template>
	<f-div overflow="hidden" state="default" class="about-platform-column" :data-column-open="open">
		<f-div direction="column" padding="medium" gap="x-large" overflow="scroll">
			<f-text variant="heading" size="medium" weight="bold">CC Core Platform</f-text>
			<f-text variant="para" size="small" weight="regular">
				This platform to focuses on managing and orchestrating various data-related operations,
				including relational databases, caches, static websites, web services, and background tasks.
				The CC Core Platform suggests a centralized system that enables efficient and streamlined
				management of data operations, providing capabilities for data storage, caching, web
				services, and background processing.
			</f-text>
			<f-text variant="para" size="small" weight="regular">
				Components in the platform are organized using a taxonomy and categorization system. Each
				component is associated with relevant tags and categories, enabling easy discovery and
				filtering based on specific functionalities or use cases.
			</f-text>
			<f-divider state="subtle"></f-divider>
			<f-text variant="heading" size="medium" weight="bold">Typical use cases</f-text>
			<f-div height="hug-content" direction="column">
				<f-text variant="para" size="small" weight="regular">
					This platform provides versatile foundation & infrastructure capabilities for:
				</f-text>
				<f-text variant="para" size="small" weight="regular">
					<ul>
						<li>Building and managing data-centric applications</li>
						<li>Streamlining data operations</li>
						<li>Enhancing system performance</li>
						<li>Web application hosting</li>
						<li>Background task processing</li>
						<li>Task automation</li>
					</ul>
				</f-text>
			</f-div>
			<f-divider state="subtle"></f-divider>
			<f-text variant="heading" size="medium" weight="bold">Platform attributes</f-text>
			<f-div border="small solid subtle" variant="curved" height="hug-content">
				<f-table
					:highlightSelected="false"
					:highlightHover="false"
					variant="underlined"
					size="small"
				>
					<f-trow slot="header">
						<f-tcell v-for="item in headers">
							<f-text variant="para" size="small" weight="regular" state="secondary">{{
								item
							}}</f-text></f-tcell
						>
					</f-trow>
					<f-trow v-for="values in rows">
						<f-tcell v-for="item in values">
							<f-text variant="para" size="small" weight="regular">{{ item }}</f-text>
						</f-tcell>
					</f-trow>
				</f-table>
			</f-div>
		</f-div>
		<f-icon-button
			:icon="open ? 'i-close' : 'i-info-solo'"
			class="fab-toggle-platform"
			@click="toggleLeftcolumn"
		></f-icon-button>
		<f-div
			:width="open ? '320px' : '0px'"
			:class="open ? 'platform-column-expanded' : 'platform-column-collapsed'"
			:border="open ? 'small solid subtle left' : 'none'"
			direction="column"
			state="default"
			overflow="scroll"
		>
			<f-div
				direction="column"
				class="remove-scrollbar"
				height="hug-content"
				padding="medium"
				gap="x-large"
			>
				<f-div direction="column" gap="large" height="hug-content">
					<CounterHeader :data="{ title: 'Tags', count: 8 }"></CounterHeader>
					<f-div gap="small" height="hug-content">
						<f-tag v-for="item in tags" :key="item" :label="item" size="small"></f-tag>
					</f-div>
				</f-div>
				<f-divider state="subtle"></f-divider>
				<Inventory></Inventory>
				<f-divider state="subtle"></f-divider>
				<f-div direction="column" gap="large" height="hug-content">
					<f-text variant="heading" size="small" weight="medium" state="secondary">
						Compatible with
					</f-text>
					<f-div gap="medium">
						<f-icon source="p-aws-dark" size="medium"></f-icon>
						<f-icon source="p-gcp" size="medium"></f-icon>
						<f-icon source="p-azure" size="medium"></f-icon>
					</f-div>
				</f-div>
				<f-divider state="subtle"></f-divider>
				<Links></Links>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CounterHeader from "./CounterHeader.vue";
import Inventory from "./Inventory.vue";
import Links from "./Links.vue";

export default defineComponent({
	data() {
		return {
			open: true,
			headers: ["Inputs", "Type", "Description"],
			rows: [
				["Availability", "High", "24/7 accessibility, minimal downtime"],
				["Availability", "High", "24/7 accessibility, minimal downtime"],
				["Availability", "High", "24/7 accessibility, minimal downtime"],
				["Availability", "High", "24/7 accessibility, minimal downtime"]
			],
			tags: ["storage", "database", "mysql", "cache", "services", "rdbms", "in-memory"]
		};
	},
	methods: {
		toggleLeftcolumn() {
			this.open = !this.open;
		}
	},
	components: { Inventory, Links, CounterHeader }
});
</script>

<style lang="scss">
.fab-toggle-platform {
	display: none;
}

@media (max-width: 768px) {
	.fab-toggle-platform {
		display: block !important;
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 1100;
	}
}

.platform-column-expanded {
	width: inherit;
}
@keyframes slide-column-right-cp {
	from {
		width: 0px;
	}
	to {
		width: 320px;
	}
}
@media (max-width: 768px) {
	.platform-column-expanded {
		position: fixed !important;
		right: 0px;
		animation: 0.25s ease-out 0s 1 slide-column-right-cp;
		z-index: 1000;
		border-radius: 0px 8px 8px 0px;
		top: 0;
	}
}
@media (min-width: 768px) {
	.platform-column-expanded {
		animation: 0.25s ease-out 0s 1 slide-column-right-cp;
	}
}
.platform-column-collapsed {
	width: inherit;
}
@keyframes slide-column-left-cp {
	from {
		width: 320px;
	}
	to {
		width: 0px;
	}
}
@media (max-width: 768px) {
	.platform-column-collapsed {
		position: fixed !important;
		right: 0px;
		width: inherit;
		animation: 0.25s ease-out 0s 1 slide-column-left-cp;
		z-index: 1000;
		top: 0;
	}
}
@media (min-width: 768px) {
	.platform-column-collapsed {
		width: inherit;
		animation: 0.25s ease-out 0s 1 slide-column-left-cp;
	}
}
.remove-scrollbar::-webkit-scrollbar {
	display: none;
}
.remove-scrollbar {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
@media (max-width: 768px) {
	.about-platform-column[data-column-open="true"] {
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
