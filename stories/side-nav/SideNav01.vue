<template>
	<f-div height="100%" overflow="hidden">
		<!--Start : side-nav -->
		<f-div
			data-f-id="side-nav"
			align="top-center"
			border="small solid secondary right"
			variant="curved"
			direction="column"
			height="fill-container"
			:width="open ? '320px' : '55px'"
			:class="open ? 'sidebar-expanded' : 'sidebar-collapsed'"
			state="default"
			overflow="hidden"
		>
			<!--Start : side-nav-top  -->
			<f-div
				data-f-id="side-nav-top"
				padding="small medium"
				gap="small"
				:align="'middle-left'"
				height="hug-content"
				:direction="open ? 'row' : 'column'"
				state="default"
				overflow="hidden"
			>
				<f-div width="hug-content">
					<f-icon-button
						:icon="open ? 'i-hamburger-close' : 'i-hamburger'"
						size="large"
						category="packed"
						variant="block"
						state="inherit"
						@click="toggleSidebar"
					>
					</f-icon-button>
				</f-div>
				<f-search v-if="open" variant="round" size="small" @input="filterSidebar"></f-search>
			</f-div>
			<!--End : side-nav-top  -->
			<!--Start : side-nav-center  -->
			<f-div
				data-f-id="side-nav-center"
				padding="none"
				direction="column"
				align="top-left"
				overflow="scroll"
				class="remove-scrollbar"
			>
				<f-div
					v-for="item in filteredSidebarData"
					padding="medium"
					border="small solid secondary bottom"
					:align="'middle-left'"
					height="hug-content"
					:selected="item.id === selected ? 'notch-right' : 'none'"
					:gap="open ? 'medium' : 'none'"
					:state="item.id === selected ? 'secondary' : 'default'"
					clickable
					overflow="hidden"
					:tooltip="`Heading ${item.id}`"
					@click="selectMenu(item.id)"
				>
					<f-pictogram
						size="medium"
						source="💬"
						state="default"
						variant="square"
						clickable
					></f-pictogram>
					<f-div v-if="open" align="middle-left">
						<f-text variant="heading" size="small" weight="medium" :ellipsis="true">
							{{ item.title }}</f-text
						>
					</f-div>
				</f-div>
			</f-div>
			<!--End : side-nav-center  -->
			<!--Start : side-nav-bottom  -->
			<f-div
				data-f-id="side-nav-bottom"
				direction="column"
				:align="open ? 'bottom-left' : 'top-center'"
				height="hug-content"
				border="small solid secondary top"
			>
				<f-div
					v-for="item in [0, 1, 2]"
					padding="medium"
					:align="'middle-left'"
					height="hug-content"
					gap="medium"
					:id="item"
					overflow="hidden"
					state="default"
					tooltip="Heading"
					clickable
				>
					<f-div width="hug-content">
						<f-icon-button
							icon="i-icon"
							size="large"
							category="packed"
							variant="block"
							state="inherit"
						></f-icon-button>
					</f-div>
					<f-div v-if="open" align="middle-left">
						<f-text variant="heading" size="small" weight="medium" :ellipsis="true">Heading</f-text>
					</f-div>
				</f-div>
			</f-div>
			<!--End : side-nav-bottom  -->
		</f-div>
		<!--End : side-nav -->
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			open: false,
			selected: 0,
			sidebarData: [
				{ id: 0, title: "Heading 1" },
				{ id: 1, title: "Heading 2" },
				{ id: 2, title: "Heading 3" },
				{ id: 3, title: "Heading 4" },
				{ id: 4, title: "Heading 5" },
				{ id: 5, title: "Heading 6" },
				{ id: 6, title: "Heading 7" },
				{ id: 7, title: "Heading 8" },
				{ id: 8, title: "Heading 9" },
				{ id: 9, title: "Heading 10" },
				{ id: 10, title: "Heading 11" },
				{ id: 11, title: "Heading 12" },
				{ id: 12, title: "Heading 13" }
			] as SidebarDataType,
			filteredSidebarData: [] as filteredSidebarDataType
		};
	},
	mounted() {
		this.filteredSidebarData = [...this.sidebarData];
	},
	methods: {
		toggleSidebar() {
			this.open = !this.open;
		},
		selectMenu(id: number) {
			this.selected = id;
		},
		filterSidebar(e: CustomEvent) {
			this.filteredSidebarData = this.sidebarData.filter(item =>
				item.title.toLowerCase().includes(e.detail.value.toLowerCase())
			);
		}
	}
});

export type SidebarDataType = { id: number; title: string }[];
export type filteredSidebarDataType = SidebarDataType | [];
</script>

<!-- style custom css-->
<style lang="scss">
.sidebar-expanded {
	width: inherit;
}
@keyframes slide-right {
	from {
		width: 55px;
	}
	to {
		width: 320px;
	}
}
@media (max-width: 600px) {
	.sidebar-expanded {
		width: 100% !important;
	}
}
@media (min-width: 600px) {
	.sidebar-expanded {
		animation: 0.4s ease-out 0s 1 slide-right;
	}
}
.sidebar-collapsed {
	width: inherit;
}
@keyframes slide-left {
	from {
		width: 320px;
	}
	to {
		width: 55px;
	}
}
@media (max-width: 600px) {
	.sidebar-collapsed {
		display: none !important;
	}
}
@media (min-width: 600px) {
	.sidebar-collapsed {
		width: inherit;
		animation: 0.4s ease-out 0s 1 slide-left;
	}
}
.remove-scrollbar::-webkit-scrollbar {
	display: none;
}
.remove-scrollbar {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
</style>
