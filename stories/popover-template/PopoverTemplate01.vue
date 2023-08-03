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
						<f-search
							variant="round"
							size="small"
							:value="searchValue"
							@input="filterList"
						></f-search>
					</f-div>
					<f-div padding="medium" direction="column" overflow="scroll">
						<f-div
							direction="column"
							v-for="items in filteredList"
							:key="items.id"
							height="hug-content"
						>
							<f-accordion>
								<f-div
									gap="medium"
									align="middle-left"
									padding="none"
									height="hug-content"
									width="248px"
									><f-icon size="medium" state="default" source="i-icon"></f-icon>
									<f-text variant="heading" size="x-small" weight="bold">{{ items.title }}</f-text>
									<f-counter label="88" size="medium"></f-counter>
								</f-div>
								<f-div
									slot="body"
									direction="column"
									padding="x-small none medium x-large"
									height="hug-content"
								>
									<f-div
										height="hug-content"
										direction="column"
										gap="medium"
										padding="none none none small"
									>
										<f-text
											variant="para"
											size="x-small"
											weight="medium"
											v-for="item in [0, 1, 2, 3]"
											:key="item"
										>
											Item {{ item + 1 }}</f-text
										>
									</f-div>
								</f-div>
							</f-accordion>
							<f-divider state="secondary"></f-divider>
						</f-div>
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
			list: [
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
				{ id: 10, title: "Heading 11" }
			] as ListDataType,
			filteredList: [] as FilteredListDataType,
			searchValue: ""
		};
	},
	mounted() {
		this.filteredList = [...this.list];
	},
	methods: {
		filterList(e: CustomEvent) {
			this.searchValue = e.detail.value;
			this.filteredList = this.list.filter(item =>
				item.title.toLowerCase().includes(e.detail.value.toLowerCase())
			);
		}
	}
});

export type ListDataType = { id: number; title: string }[];
export type FilteredListDataType = ListDataType | [];
</script>

<style lang="scss"></style>
