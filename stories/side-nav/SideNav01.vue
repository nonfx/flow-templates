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
				<f-search v-if="open" variant="round" size="small"></f-search>
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
					v-for="item in dummyData"
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
					<f-div v-if="open" align="middle-center">
						<f-text variant="heading" size="small" weight="medium" :ellipsis="true">
							Heading {{ item.id }}</f-text
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
					<f-div v-if="open" align="middle-center">
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
			dummyData: [
				{ id: 0, hover: false },
				{ id: 1, hover: false },
				{ id: 2, hover: false },
				{ id: 3, hover: false },
				{ id: 4, hover: false },
				{ id: 5, hover: false },
				{ id: 6, hover: false },
				{ id: 7, hover: false },
				{ id: 8, hover: false },
				{ id: 9, hover: false },
				{ id: 10, hover: false },
				{ id: 11, hover: false },
				{ id: 12, hover: false }
			]
		};
	},
	methods: {
		toggleSidebar() {
			this.open = !this.open;
		},
		selectMenu(id: number) {
			this.selected = id;
		}
	}
});
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
