<template>
	<!-- layout start -->
	<f-div height="100%" direction="column">
		<!-- navbar start -->
		<f-div
			v-if="checkWindowSizeStatus()"
			data-f-id="top-nav"
			padding="medium"
			gap="small"
			state="default"
			align="middle-left"
			height="hug-content"
			border="small solid default bottom"
		>
			<!--Start : top-nav-left -->
			<f-div data-f-id="top-nav-left" width="hug-content" align="middle-center" gap="medium">
				<f-icon-button
					icon="i-hamburger"
					variant="round"
					size="large"
					state="inherit"
					category="packed"
					class="top-nav-hamburger"
					@click="clickOpenSidebar"
				></f-icon-button>
				<f-icon source="p-cloudcover-dark" size="large" clickable></f-icon>
			</f-div>
			<!--End : top-nav-left -->
			<!--Start : top-nav-middle -->
			<f-div data-f-id="top-nav-middle" gap="small" align="middle-left">
				<f-icon source="i-arrow-left" class="top-nav-middle" clickable></f-icon>
				<f-div class="top-nav-middle" align="middle-left">
					<f-text size="small" :ellipsis="true"
						>Home / Project / Environment / Application / Logs
					</f-text>
				</f-div>
			</f-div>
			<!--End : top-nav-middle -->
			<!--START : top-nav-right -->
			<f-div data-f-id="top-nav-right" gap="large" width="hug-content" align="middle-right">
				<f-div
					width="240px"
					class="nav-responsive-search-bar"
					:data-expanded-search="expandedSearch"
					overflow="hidden"
				>
					<f-search
						size="small"
						variant="round"
						placeholder="Enter search keyword"
						:result="navSearch"
						ref="searchRef"
						@input="handleNavSearchInput"
						@focusout="closeExpandedSearch"
					></f-search>
				</f-div>
				<f-div gap="small" width="hug-content">
					<f-icon-button
						v-if="expandedSearch === false"
						icon="i-search"
						variant="round"
						size="small"
						state="neutral"
						category="fill"
						class="nav-responsive-search-icon"
						@click="searchExpand()"
					></f-icon-button>
					<f-icon-button
						icon="i-user"
						size="small"
						state="neutral"
						id="profilePopoverMobile"
						@click="toggle"
						class="profile-popover-mobile"
					></f-icon-button>
					<f-popover
						size="small"
						@overlay-click="toggle"
						:open="open"
						target="#profilePopoverMobile"
						class="profile-popover-content-mobile"
					>
						<f-div direction="column" state="secondary">
							<f-div padding="medium" gap="small" border="small solid default bottom">
								<f-pictogram source="i-user" variant="circle"></f-pictogram>
								<f-div direction="column">
									<f-text size="x-small" state="secondary">Logged in as</f-text>
									<f-text>no@email.com</f-text>
								</f-div>
								<f-div align="top-right">
									<f-icon source="i-edit" state="secondary"></f-icon>
								</f-div>
							</f-div>
							<f-div
								padding="medium"
								gap="small"
								clickable
								state="default"
								:selected="theme === 'f-dark' ? 'background' : 'none'"
								@click="setTheme('f-dark')"
							>
								<f-text>Dark theme</f-text>
								<f-icon v-if="theme === 'f-dark'" source="i-tick" state="success"></f-icon>
							</f-div>
							<f-div
								padding="medium"
								gap="small"
								border="small solid default bottom"
								clickable
								.selected="theme === 'f-light' ? 'background' : 'none'"
								@click="setTheme('f-light')"
							>
								<f-text>Light theme</f-text>
								<f-icon v-if="theme === 'f=light'" source="i-tick" state="success"></f-icon>
							</f-div>
							<f-div padding="medium" gap="small" clickable>
								<f-text>Logout</f-text>
							</f-div>
						</f-div>
					</f-popover>
					<f-icon-button
						icon="i-icon"
						variant="block"
						size="large"
						state="inherit"
						category="packed"
						class="nav-menu-options"
					></f-icon-button>
					<f-icon-button
						icon="i-icon"
						variant="block"
						size="large"
						state="inherit"
						category="packed"
						class="nav-menu-options"
					></f-icon-button>
					<f-icon-button
						icon="i-icon"
						variant="block"
						size="large"
						state="inherit"
						category="packed"
						class="nav-menu-options"
					></f-icon-button>
					<f-icon-button
						icon="i-more"
						variant="block"
						size="large"
						state="inherit"
						category="packed"
						class="nav-menu-options-mobile"
						id="more-items-mobile"
						@click="toggleMenuMobile"
					></f-icon-button>
					<f-popover
						size="stretch"
						@overlay-click="toggleMenuMobile"
						:open="openMenuMobile"
						target="#more-items-mobile"
					>
						<f-div direction="column" state="secondary" padding="medium">
							<f-div
								v-for="item in [0, 1, 2]"
								:key="item"
								padding="medium"
								gap="small"
								clickable
								state="secondary"
								align="middle-left"
								border="small solid default bottom"
							>
								<f-icon source="i-icon" size="medium" state="default"></f-icon>
								<f-div>
									<f-text>Heading {{ item }}</f-text></f-div
								>
								<f-div width="hug-content" height="hug-content"
									><f-icon-button
										icon="i-chevron-right"
										variant="block"
										category="packed"
										size="small"
										state="inherit"
									></f-icon-button
								></f-div>
							</f-div>
						</f-div>
					</f-popover>
				</f-div>
				<f-icon-button
					icon="i-user"
					size="small"
					state="neutral"
					id="profilePopover"
					@click="toggle"
					class="profile-popover"
				></f-icon-button>
				<f-popover
					size="small"
					@overlay-click="toggle"
					:open="open"
					target="#profilePopover"
					class="profile-popover-content"
				>
					<f-div direction="column" state="secondary">
						<f-div padding="medium" gap="small" border="small solid default bottom">
							<f-pictogram source="i-user" variant="circle"></f-pictogram>
							<f-div direction="column">
								<f-text size="x-small" state="secondary">Logged in as</f-text>
								<f-text>no@email.com</f-text>
							</f-div>
							<f-div align="top-right">
								<f-icon source="i-edit" state="secondary"></f-icon>
							</f-div>
						</f-div>
						<f-div
							padding="medium"
							gap="small"
							clickable
							state="default"
							:selected="theme === 'f-dark' ? 'background' : 'none'"
							@click="setTheme('f-dark')"
						>
							<f-text>Dark theme</f-text>
							<f-icon v-if="theme === 'f-dark'" source="i-tick" state="success"></f-icon>
						</f-div>
						<f-div
							padding="medium"
							gap="small"
							border="small solid default bottom"
							clickable
							.selected="theme === 'f-light' ? 'background' : 'none'"
							@click="setTheme('f-light')"
						>
							<f-text>Light theme</f-text>
							<f-icon v-if="theme === 'f=light'" source="i-tick" state="success"></f-icon>
						</f-div>
						<f-div padding="medium" gap="small" clickable>
							<f-text>Logout</f-text>
						</f-div>
					</f-div>
				</f-popover>
			</f-div>
			<!--END : top-nav-right -->
		</f-div>
		<!-- navbar end -->
		<!-- body start -->
		<f-div direction="row">
			<!--Start : side-nav -->
			<f-div
				data-f-id="side-nav"
				align="top-center"
				border="small solid secondary right"
				variant="curved"
				direction="column"
				height="fill-container"
				:width="openSidebar ? '320px' : '55px'"
				:class="openSidebar ? 'sidebar-expanded' : 'sidebar-collapsed'"
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
					:direction="openSidebar ? 'row' : 'column'"
					state="default"
					overflow="hidden"
				>
					<f-div width="hug-content">
						<f-icon-button
							:icon="openSidebar ? 'i-hamburger-close' : 'i-hamburger'"
							size="large"
							category="packed"
							variant="block"
							state="inherit"
							@click="toggleSidebar"
						>
						</f-icon-button>
					</f-div>
					<f-search
						v-if="openSidebar"
						variant="round"
						size="small"
						:value="sidebarSearchValue"
						@input="filterSidebar"
					></f-search>
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
						:gap="openSidebar ? 'medium' : 'none'"
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
						<f-div v-if="openSidebar" align="middle-left">
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
					:align="openSidebar ? 'bottom-left' : 'top-center'"
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
						<f-div v-if="openSidebar" align="middle-left">
							<f-text variant="heading" size="small" weight="medium" :ellipsis="true"
								>Heading</f-text
							>
						</f-div>
					</f-div>
				</f-div>
				<!--End : side-nav-bottom  -->
			</f-div>
			<!--End : side-nav -->
			<!-- content start -->
			<f-div align="middle-center"
				><f-text variant="heading" size="large" weight="bold" state="subtle" :inline="true"
					>Content Here</f-text
				></f-div
			>
			<!-- content end -->
		</f-div>
		<!-- body end -->
	</f-div>
	<!-- layout end -->
</template>

<script lang="ts">
import { ConfigUtil, FSearch } from "@cldcvr/flow-core";
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			openSidebar: false,
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
			open: false,
			theme: "f-dark",
			expandedSearch: false,
			openMenuMobile: false,
			navSearch: ["Search 1", "Search 2", "Search 3", "Search 4", "Search 5", "Search 6"],
			filteredSidebarData: [] as filteredSidebarDataType,
			sidebarSearchValue: ""
		};
	},
	mounted() {
		this.filteredSidebarData = [...this.sidebarData];
	},
	methods: {
		toggleSidebar() {
			this.openSidebar = !this.openSidebar;
		},
		clickOpenSidebar() {
			this.openSidebar = true;
		},
		selectMenu(id: number) {
			this.selected = id;
		},
		toggle() {
			this.open = !this.open;
		},
		toggleMenuMobile() {
			this.openMenuMobile = !this.openMenuMobile;
		},
		setTheme(theme: "f-dark" | "f-light") {
			ConfigUtil.setConfig({ theme });
			this.theme = theme;
		},
		searchExpand() {
			this.expandedSearch = true;
		},
		closeExpandedSearch() {
			if (this.expandedSearch) {
				this.expandedSearch = false;
			}
		},
		checkWindowSizeStatus(): boolean {
			return this.openSidebar ? !window.matchMedia("(max-width: 600px)").matches : true;
		},
		filterSidebar(e: CustomEvent) {
			this.sidebarSearchValue = e.detail.value;
			this.filteredSidebarData = this.sidebarData.filter(item =>
				item.title.toLowerCase().includes(e.detail.value.toLowerCase())
			);
		},
		handleNavSearchInput(e: CustomEvent) {
			console.log(e.detail.value);
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

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

@media screen and (max-width: 768px) {
	.nav-responsive-search-bar {
		&[data-expanded-search="false"] {
			width: 0px !important;
			transition: width 0.15s ease-out !important;
		}
		&[data-expanded-search="true"] {
			width: 240px !important;
			transition: width 0.15s ease-out !important;
		}
	}
	.nav-responsive-search-icon {
		display: inline-block;
		animation: fadeIn 1s;
	}
}
@media screen and (min-width: 768px) {
	.nav-responsive-search-bar {
		&[data-expanded-search="false"] {
			display: flex;
		}
	}
	.nav-responsive-search-icon {
		display: none;
	}
}

@media screen and (max-width: 600px) {
	.profile-popover {
		display: none;
	}
	.profile-popover-mobile {
		display: inline-block;
	}
	.nav-menu-options {
		display: none;
	}
	.nav-menu-options-mobile {
		display: flex;
	}
	.profile-popover-content {
		display: none;
	}
	.profile-popover-content-mobile {
		display: flex;
	}
	.top-nav-middle {
		display: none;
	}
	.top-nav-hamburger {
		display: flex;
	}
}
@media screen and (min-width: 600px) {
	.profile-popover {
		display: flex;
	}
	.profile-popover-mobile {
		display: none;
	}
	.nav-menu-options {
		display: flex;
	}
	.nav-menu-options-mobile {
		display: none;
	}
	.profile-popover-content {
		display: flex;
	}
	.profile-popover-content-mobile {
		display: none;
	}
	.top-nav-middle {
		display: flex;
	}
	.top-nav-hamburger {
		display: none;
	}
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
	-ms-overflow-style: none;
	scrollbar-width: none;
}
</style>
