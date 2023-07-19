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
					<f-div height="hug-content" direction="column">
						<f-div height="hug-content" padding="medium"
							><f-search
								variant="round"
								size="small"
								:value="searchValue"
								@input="filterList"
							></f-search
						></f-div>
						<f-div padding="large medium">
							<f-checkbox :value="selectAll" @input="handleSelectAll">
								<f-div slot="label"
									><f-text variant="para" size="small" weight="regular">Select All</f-text></f-div
								>
							</f-checkbox>
						</f-div>
					</f-div>
					<f-div direction="column" overflow="scroll">
						<f-div
							direction="column"
							v-for="items in filteredList"
							:key="items.id"
							height="hug-content"
							clickable
						>
							<f-div padding="medium">
								<f-div>
									<f-checkbox
										@input="$event => handleCheckboxInput($event, items)"
										:value="items.value"
									>
										<f-div slot="label"
											><f-text variant="heading" size="small" weight="bold">{{
												items.title
											}}</f-text></f-div
										>
										<f-div slot="help"
											><f-text variant="para" size="small" weight="regular"
												>Description</f-text
											></f-div
										>
										<f-div slot="subtitle">
											<f-tag size="small" label="label" state="neutral"></f-tag>
										</f-div>
									</f-checkbox>
								</f-div>
								<f-div width="hug-content" gap="medium">
									<f-icon-button
										variant="block"
										category="packed"
										size="medium"
										state="inherit"
										icon="i-icon"
									></f-icon-button>
									<f-icon-button
										variant="block"
										category="packed"
										size="medium"
										state="inherit"
										icon="i-icon"
									></f-icon-button
									><f-icon-button
										variant="block"
										category="packed"
										size="medium"
										state="inherit"
										icon="i-icon"
									></f-icon-button>
								</f-div>
							</f-div>
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
				{ id: 0, title: "Heading 1", value: "unchecked" },
				{ id: 1, title: "Heading 2", value: "unchecked" },
				{ id: 2, title: "Heading 3", value: "unchecked" },
				{ id: 3, title: "Heading 4", value: "unchecked" },
				{ id: 4, title: "Heading 5", value: "unchecked" },
				{ id: 5, title: "Heading 6", value: "unchecked" },
				{ id: 6, title: "Heading 7", value: "unchecked" },
				{ id: 7, title: "Heading 8", value: "unchecked" },
				{ id: 8, title: "Heading 9", value: "unchecked" },
				{ id: 9, title: "Heading 10", value: "unchecked" },
				{ id: 10, title: "Heading 11", value: "unchecked" }
			] as ListDataType,
			filteredList: [] as FilteredListDataType,
			searchValue: "",
			selectAll: "unchecked"
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
		},
		handleCheckboxInput(e: CustomEvent, item) {
			this.list.find(el => el.id === item.id).value = e.detail.value;
			console.log(this.list);
			if (this.list.every(item => item.value === "unchecked")) {
				this.selectAll = "unchecked";
			} else if (this.list.every(item => item.value === "checked")) {
				this.selectAll = "checked";
			} else {
				this.selectAll = "indeterminate";
			}
		},
		handleSelectAll(e) {
			this.selectAll = e.detail.value;
			this.list.forEach(item => {
				item.value = e.detail.value;
			});
		}
	}
});

export type ListDataType = {
	id: number;
	title: string;
	value: "checked" | "unchecked" | "intermediate";
}[];
export type FilteredListDataType = ListDataType | [];
</script>

<style lang="scss"></style>
