<template>
	<f-div>
		<!-- Please Copy/paste code from here -->
		<!-- Iteration has been used here just for demo purpose -->
		<f-popover
			:open="openPopover"
			@overlay-click="openPopover = false"
			size="small"
			target="#popover-dropdown"
		>
			<f-div state="secondary" direction="column" height="432px">
				<f-div direction="column" overflow="hidden" align="middle-left">
					<f-div gap="auto" padding="medium" height="hug-content">
						<f-div gap="medium" align="middle-left">
							<f-icon-button
								variant="block"
								category="packed"
								size="small"
								state="inherit"
								icon="i-arrow-left"
							></f-icon-button>
							<f-text variant="para" size="small" weight="bold">Heading</f-text>
						</f-div>
						<f-div width="hug-content" align="middle-left" gap="medium">
							<f-icon-button
								variant="block"
								category="packed"
								size="small"
								state="inherit"
								icon="i-icon"
							></f-icon-button>
							<f-icon-button
								variant="block"
								category="packed"
								size="small"
								state="inherit"
								icon="i-icon"
							></f-icon-button
							><f-icon-button
								variant="block"
								category="packed"
								size="small"
								state="inherit"
								icon="i-icon"
							></f-icon-button>
							<f-icon-button
								icon="i-close"
								variant="block"
								categroy="packed"
								size="small"
								state="inherit"
								@click="openPopover = false"
							></f-icon-button>
						</f-div>
					</f-div>
					<f-div padding="medium" height="hug-content">
						<f-tab>
							<f-tab-node
								v-for="item in list"
								:active="selected === item.id ? true : false"
								:content-id="`tab-${item.id}`"
								@click="selected = item.id"
								><f-div width="100%" height="100%" align="middle-center" direction="column"
									><f-div align="middle-center" height="hug-content" width="hug-content">{{
										item.title
									}}</f-div></f-div
								></f-tab-node
							></f-tab
						>
					</f-div>
					<f-div direction="column" overflow="scroll">
						<f-tab-content v-for="item in list" :id="`tab-${item.id}`"
							><f-div direction="column" width="100%" padding="large"
								><f-div
									><f-text variant="heading" size="x-large" weight="bold">{{
										item.title
									}}</f-text></f-div
								>
								<f-div>
									<f-text
										>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										when an unknown printer took a galley of type and scrambled it to make a type
										specimen book. It has survived not only five centuries, but also the leap into
										electronic typesetting, remaining essentially unchanged. It was popularised in
										the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
										and more recently with desktop publishing software like Aldus PageMaker
										including versions of Lorem Ipsum.</f-text
									></f-div
								></f-div
							></f-tab-content
						>
					</f-div>
				</f-div>
				<f-div padding="none" height="hug-content">
					<f-button label="LABEL" variant="block" category="fill" state="success"></f-button>
				</f-div>
			</f-div>
		</f-popover>
		<f-button id="popover-dropdown" label="Popover" @click="openPopover = true"></f-button>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			openPopover: true,
			selected: 0,
			list: [
				{ id: 0, title: "Tab 1" },
				{ id: 1, title: "Tab 2" },
				{ id: 2, title: "Tab 3" }
			] as ListDataType
		};
	}
});

export type ListDataType = { id: number; title: string }[];
</script>

<style lang="scss"></style>
