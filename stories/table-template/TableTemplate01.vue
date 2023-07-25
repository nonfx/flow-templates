<template>
	<f-table-schema
		variant="underlined"
		size="small"
		:data.prop="data"
		:showSearchBar="false"
		@toggle-row-details="toggleRowDetails"
		part="cell"
	>
	</f-table-schema>
	<f-popover :open="openPopover" target="#more-popover" @overlay-click="togglePopover">
		<f-div state="secondary">hello</f-div>
	</f-popover>
</template>

<script lang="ts">
import { html } from "lit";
import { defineComponent } from "vue";
import { dataTable } from "./data.js";
import { innerTableData } from "./inner-data.js";

export default defineComponent({
	data() {
		return {
			openPopover: false,
			data: dataTable(this.togglePopover)
		};
	},
	methods: {
		toggleRowDetails(e: any) {
			const newdetails = function () {
				const dummy = ["options 1", "options 2"];

				return html`<f-div direction="column" gap="small">
					<f-div
						gap="auto"
						height="hug-content"
						align="middle-center"
						width="100%"
						padding="medium"
					>
						<f-text variant="heading" size="x-small" weight="regular">Showing 5 tables</f-text>
						<f-div gap="large" width="hug-content">
							<f-div width="172px">
								<f-search size="small" variant="round" placeholder="Search Tables"></f-search
							></f-div>
							<f-div width="172px">
								<f-select
									.options=${dummy}
									size="small"
									placeholder="Filter"
									icon-left="i-filter"
								></f-select>
							</f-div>
						</f-div>
					</f-div>
					<f-table-schema
						variant="underlined"
						size="small"
						.data=${innerTableData}
						.showSearchBar=${false}
						part="cell"
					>
					</f-table-schema>
				</f-div>`;
			};
			if (this.data.rows.find(item => item.id === e.detail.id)) {
				const index = this.data.rows.findIndex(item => item.id === e.detail.id);
				const tempArray = [...this.data.rows];
				tempArray.splice(index, 1, {
					...this.data.rows[index],
					details: newdetails
				});
				e.detail.details = newdetails;
				this.data = { ...this.data, rows: tempArray };
			}
		},
		togglePopover() {
			this.openPopover = !this.openPopover;
		}
	}
});
</script>
