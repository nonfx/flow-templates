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
	<f-popover
		ref="popoverRef"
		@overlay-click="closeRefPopover"
		size="small"
		class="custom-popover-table"
	>
		<f-div state="secondary" direction="column">
			<f-div padding="medium small" clickable @click="closePopover">
				<f-text variant="para" size="medium" weight="regular">Download all table logs</f-text>
			</f-div>
			<f-divider></f-divider>
			<f-div padding="medium small" clickable="">
				<f-text variant="para" size="medium" weight="regular">Email all table logs</f-text>
			</f-div>
		</f-div>
	</f-popover>
	<f-popover size="medium" :open="openPopover" :overlay="true" @overlay-click="togglePopover">
		<f-div width="432px" state="secondary" direction="column" variant="curved" padding="none">
			<f-div align="middle-center" padding="medium">
				<f-div height="hug-content"
					><f-text variant="para" size="small" weight="bold"
						>Download all table logs?</f-text
					></f-div
				>
				<f-div width="hug-content" height="hug-content"
					><f-icon-button
						icon="i-close"
						variant="block"
						category="packed"
						size="small"
						state="inherit"
						@click="togglePopover"
					></f-icon-button
				></f-div>
			</f-div>
			<f-div padding="medium">
				<f-text variant="para" size="small" weight="regular">
					Are you sure you want to download all table logs for Monday, 18Jun 10:15 AM pipeline run?
					Depending on the size of the logs it make take up to 15mins.
				</f-text>
			</f-div>
			<f-div padding="medium" align="middle-right" gap="small">
				<f-button
					label="Cancel"
					variant="round"
					category="outline"
					size="small"
					state="neutral"
					icon-left="i-close"
					@click="togglePopover"
				></f-button>
				<f-button
					label="Download"
					variant="round"
					size="small"
					state="primary"
					@click="togglePopover"
				></f-button>
			</f-div>
		</f-div>
	</f-popover>
</template>

<script lang="ts">
import { FPopover } from "@ollion/flow-core";
import { FTableSchemaData } from "@ollion/flow-table";
import { html } from "lit";
import { defineComponent } from "vue";
import { getFakeUsers } from "./data";
import { getInnerData } from "./inner-data";

export default defineComponent({
	data() {
		return {
			openPopover: false,
			data: null as FTableSchemaData | null
		};
	},
	mounted() {
		this.data = getFakeUsers(3, 4, this.$refs.popoverRef as FPopover);
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
						.data=${getInnerData()}
						.showSearchBar=${false}
						part="cell"
					>
					</f-table-schema>
				</f-div>`;
			};
			if (this.data !== null && this.data.rows.find(item => item.id === e.detail.id)) {
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
		},
		closePopover() {
			(this.$refs.popoverRef as FPopover).open = false;
			this.openPopover = true;
		},
		closeRefPopover() {
			(this.$refs.popoverRef as FPopover).open = false;
		}
	}
});
</script>

<style lang="scss">
.custom-popover-table {
	width: 220px !important;
}
</style>
