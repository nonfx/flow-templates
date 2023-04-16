<template>
	<f-div>
		<f-icon-button
			id="more"
			icon="i-more"
			variant="block"
			category="packed"
			@click="toggle"
		></f-icon-button>
		<f-popover target="#more" :open="open" @overlay-click="toggle" size="small">
			<f-div direction="column">
				<f-div
					v-for="item in [0, 1, 2, 3, 4]"
					:key="item"
					state="secondary"
					padding="medium"
					gap="medium"
					border="small solid default bottom"
					clickable
					:selected="item === selected ? 'background' : 'none'"
					@click="select(item)"
				>
					<f-div data-f-id="menu-list-section-left" gap="medium" align="middle-left">
						<f-icon size="small" source="i-icon"></f-icon>
						<f-text variant="para" size="medium" weight="regular">Text</f-text>
					</f-div>
					<f-div data-f-id="menu-list-section-right" height="hug-content" width="hug-content">
						<f-icon-button
							icon="i-icon"
							variant="block"
							category="packed"
							state="inherit"
							size="small"
							@click="rightIconClick($event, item)"
						></f-icon-button>
					</f-div>
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
			selected: 0,
			open: true
		};
	},
	methods: {
		toggle() {
			this.open = !this.open;
		},
		select(id: number) {
			this.selected = id;
		},
		rightIconClick(event: Event, id: number) {
			event.stopPropagation();
			console.log(`Icon Clicked: ${id}`);
		}
	}
});
</script>
