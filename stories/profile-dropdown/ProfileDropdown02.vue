<template>
	<f-div>
		<f-pictogram
			id="more"
			@click="toggle"
			size="large"
			variant="circle"
			source="A"
			clickable
		></f-pictogram>
		<f-popover target="#more" :open="open" @overlay-click="toggle" size="small">
			<f-div direction="column">
				<f-div
					height="hug-content"
					border="small solid secondary bottom"
					state="secondary"
					padding="medium"
					gap="medium"
				>
					<f-pictogram
						size="large"
						variant="circle"
						source="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
					></f-pictogram>
					<f-div direction="column" gap="x-small" height="hug-content" align="middle-left">
						<f-text variant="para" size="x-small" weight="regular" state="secondary"
							>Logged in as</f-text
						>
						<f-text variant="para" size="medium" weight="regular">John.doe@email.com</f-text>
					</f-div>
					<f-div width="hug-content" align="top-left">
						<f-icon-button
							icon="i-edit"
							category="packed"
							variant="block"
							state="inherit"
							size="small"
						></f-icon-button>
					</f-div>
				</f-div>
				<f-div
					v-for="item in [0, 1]"
					:key="item"
					state="secondary"
					padding="medium"
					gap="medium"
					:border="item === 1 ? 'small solid default bottom' : 'none'"
					clickable
					@click="select(item)"
					align="middle-left"
				>
					<f-text variant="para" size="medium" weight="regular">Heading</f-text>
				</f-div>

				<f-div
					v-for="item in [2, 3, 4]"
					:key="item"
					state="secondary"
					padding="medium"
					gap="medium"
					:border="item === 4 ? 'small solid default bottom' : 'none'"
					clickable
					@click="select(item)"
					align="middle-left"
				>
					<f-text variant="para" size="medium" weight="regular">Heading</f-text>
				</f-div>

				<f-div
					state="secondary"
					padding="medium"
					gap="medium"
					border="small solid default bottom"
					clickable
					@click="select(5)"
					align="middle-left"
				>
					<f-div align="middle-left">
						<f-text variant="para" size="medium" weight="regular">Heading</f-text>
					</f-div>
					<f-div data-f-id="menu-list-section-right" height="hug-content" width="hug-content">
						<f-switch @input="handleInput" :value="value" @click.stop></f-switch>
					</f-div>
				</f-div>

				<f-div
					state="secondary"
					padding="medium"
					gap="medium"
					clickable
					@click="logout()"
					align="middle-left"
				>
					<f-text variant="para" size="medium" weight="regular">Logout</f-text>
				</f-div>
			</f-div>
		</f-popover>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			open: true,
			value: false
		};
	},
	methods: {
		toggle() {
			this.open = !this.open;
		},
		select(id: number) {
			console.log("option clicked!!");
		},
		logout() {
			console.log("logout!!");
		},
		handleInput(e) {
			console.log(e.detail.value);
		}
	}
});
</script>
