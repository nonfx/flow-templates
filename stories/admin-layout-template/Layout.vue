<template>
	<f-div direction="column" height="100%" state="default">
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
				<f-icon-button
					icon="i-question-filled"
					size="medium"
					state="neutral"
					category="transparent"
					variant="block"
				></f-icon-button>
				<f-icon-button
					icon="i-user"
					size="medium"
					state="neutral"
					id="profilePopover"
					@click="toggle"
					category="transparent"
					variant="block"
				></f-icon-button>
				<f-popover size="small" @overlay-click="toggle" :open="open" target="#profilePopover">
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
		<f-div>
			<slot></slot>
		</f-div>
		<f-div
			border="small solid subtle top"
			align="middle-right"
			gap="medium"
			height="hug-content"
			padding="small large"
		>
			<f-text variant="heading" size="x-small" weight="regular" state="subtle"
				>CloudCover © 2015-2023, All rights reserved. • 115 Amoy St, #02-00, Singapore
				069935</f-text
			>
			<f-text variant="heading" size="x-small" weight="regular" state="primary">Contribute</f-text>
			<f-text variant="heading" size="x-small" weight="regular" state="primary"
				>Terms of use</f-text
			>
			<f-text variant="heading" size="x-small" weight="regular" state="primary"
				>Privacy policy</f-text
			>
			<f-text variant="heading" size="x-small" weight="regular" state="primary"
				>Cookie policy</f-text
			>
		</f-div>
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
			openMenuMobile: false,
			navSearch: ["Search 1", "Search 2", "Search 3", "Search 4", "Search 5", "Search 6"]
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
		},
		handleNavSearchInput(e: CustomEvent) {
			console.log(e.detail.value);
		}
	}
});
</script>

<style lang="scss">
@media screen and (max-width: 600px) {
	.top-nav-middle {
		display: none;
	}
}
@media screen and (min-width: 600px) {
	.top-nav-middle {
		display: flex;
	}
}
</style>
