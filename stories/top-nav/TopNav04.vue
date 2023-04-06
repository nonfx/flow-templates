<template>
	<f-div
		data-f-id="top-nav"
		padding="medium"
		gap="small"
		state="secondary"
		align="middle-left"
		height="hug-content"
		border="small solid default bottom"
	>
		<!--Start : top-nav-left -->
		<f-div data-f-id="top-nav-left" width="hug-content" align="middle-center">
			<f-icon source="p-cloudcover-dark" size="large"></f-icon>
		</f-div>
		<!--End : top-nav-left -->
		<!--Start : top-nav-middle -->
		<f-div data-f-id="top-nav-middle" gap="small" align="middle-left">
			<f-div width="hug-content" gap="small">
				<f-button size="small" label="label" category="transparent" state="neutral"></f-button>
				<f-button size="small" label="label" category="transparent" state="neutral"></f-button>
				<f-button size="small" label="label" category="transparent" state="neutral"></f-button>
				<f-button size="small" label="label" category="transparent" state="neutral"></f-button>
			</f-div>
		</f-div>
		<!--End : top-nav-middle -->
		<!--START : top-nav-right -->
		<f-div data-f-id="top-nav-right" gap="large" width="hug-content">
			<f-div width="240px">
				<f-search size="small" variant="round" placeholder="Enter search keyword"></f-search>
			</f-div>
			<f-div gap="small" width="hug-content">
				<f-icon-button
					icon="i-icon"
					variant="round"
					size="large"
					state="neutral"
					category="packed"
				></f-icon-button>
				<f-icon-button
					icon="i-icon"
					variant="round"
					size="large"
					state="neutral"
					category="packed"
				></f-icon-button>
				<f-icon-button
					icon="i-icon"
					variant="round"
					size="large"
					state="neutral"
					category="packed"
				></f-icon-button>
			</f-div>
			<f-icon-button
				icon="i-user"
				size="small"
				state="neutral"
				id="profile-popover"
				@click="toggle"
			></f-icon-button>
			<f-popover size="small" @overlay-click="toggle" :open="open" target="#profile-popover">
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
			theme: "f-dark"
		};
	},
	methods: {
		toggle() {
			this.open = !this.open;
		},
		setTheme(theme: "f-dark" | "f-light") {
			ConfigUtil.setConfig({ theme });
			this.theme = theme;
		}
	}
});
</script>
