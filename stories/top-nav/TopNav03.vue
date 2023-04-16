<template>
	<f-div
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
			></f-icon-button>
			<f-icon source="p-cloudcover-dark" size="large" clickable></f-icon>
		</f-div>
		<!--End : top-nav-left -->
		<!--Start : top-nav-middle -->
		<f-div data-f-id="top-nav-middle" gap="small" align="middle-left">
			<f-div
				class="nav-responsive-search-bar"
				:data-expanded-search="expandedSearch"
				overflow="hidden"
			>
				<f-search
					size="small"
					variant="round"
					placeholder="Enter search keyword"
					@blur="closeExpandedSearch"
				></f-search>
			</f-div>
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
		</f-div>
		<!--End : top-nav-middle -->
		<!--START : top-nav-right -->
		<f-div data-f-id="top-nav-right" gap="large" width="hug-content" align="middle-right">
			<f-div gap="small" width="hug-content">
				<f-button
					size="small"
					label="label"
					variant="curved"
					class="top-nav-right-labels"
				></f-button>
				<f-button
					size="small"
					label="label"
					variant="curved"
					state="neutral"
					class="top-nav-right-labels"
				></f-button>
			</f-div>
			<f-div gap="small" width="hug-content">
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
							padding="medium"
							gap="small"
							state="secondary"
							align="middle-left"
							border="small solid default bottom"
						>
							<f-button size="small" label="label" variant="curved"></f-button>
						</f-div>
						<f-div
							padding="medium"
							gap="small"
							state="secondary"
							align="middle-left"
							border="small solid default bottom"
						>
							<f-button size="small" label="label" variant="curved" state="neutral"></f-button>
						</f-div>
						<f-div
							v-for="item in [0, 1, 2]"
							:key="item"
							padding="medium"
							gap="small"
							clickable
							state="secondary"
							align="middle-center"
							border="small solid default bottom"
						>
							<f-icon source="i-icon" size="medium" state="default"></f-icon>
							<f-text>Heading {{ item }}</f-text>
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
</template>

<script lang="ts">
import { ConfigUtil } from "@cldcvr/flow-core";
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			open: false,
			theme: "f-dark",
			expandedSearch: false,
			openMenuMobile: false
		};
	},
	methods: {
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
		}
	}
});
</script>

<style lang="scss">
.nav-responsive-search-bar {
	max-width: 320px !important;
}
@media screen and (max-width: 768px) {
	.nav-responsive-search-bar {
		&[data-expanded-search="false"] {
			max-width: 0px !important;
		}
		&[data-expanded-search="true"] {
			max-width: 320px !important;
			transition: max-width 0.15s ease-out !important;
		}
	}
	.nav-responsive-search-icon {
		display: inline-block;
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
	.top-nav-right-labels {
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
	.top-nav-right-labels {
		display: flex;
	}
	.top-nav-hamburger {
		display: none;
	}
}
</style>
