<template>
	<f-table-schema
		variant="underlined"
		size="small"
		:data.prop="data"
		:showSearchBar="false"
		@toggle-row-details="toggleRowDetails"
	>
	</f-table-schema>
</template>

<script lang="ts">
import { html } from "lit";
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			data: {
				header: {
					pipelineRun: {
						value: "Pipeline Run",
						template: function () {
							return html`<f-text state="subtle" variant="para" size="small" weight="regular"
								>${this.value}</f-text
							>`;
						}
					},
					status: {
						value: "Status/Duration",
						template: function () {
							return html`<f-text state="subtle" variant="para" size="small" weight="regular"
								>${this.value}</f-text
							>`;
						}
					},
					started: {
						value: "Started",
						template: function () {
							return html`<f-text state="subtle" variant="para" size="small" weight="regular"
								>${this.value}</f-text
							>`;
						}
					},
					ended: {
						value: "Ended",
						template: function () {
							return html`<f-text state="subtle" variant="para" size="small" weight="regular"
								>${this.value}</f-text
							>`;
						}
					}
				},
				rows: [
					{
						id: 0,
						data: {
							pipelineRun: {
								value: "Monday, 18 Jun 10:15 AM",
								template: function () {
									return html` <f-text variant="para" size="small" weight="regular"
										>${this.value}</f-text
									>`;
								}
							},
							status: {
								value: "6h 30min",
								template: function () {
									return html`<f-div gap="medium">
										<f-icon source="i-tick-fill" size="small" state="success"></f-icon>
										<f-text variant="para" size="small" weight="regular"
											>${this.value}</f-text
										></f-div
									>`;
								}
							},
							started: {
								value: "18 Jun, 10:15 AM",
								template: function () {
									return html`<f-text variant="para" size="small" weight="regular"
										>${this.value}</f-text
									>`;
								}
							},
							ended: {
								value: "18 Jun, 10:15 AM",
								template: function () {
									return html`<f-text variant="para" size="small" weight="regular"
										>${this.value}</f-text
									>`;
								},
								actions: [
									{
										icon: "i-info-fill",
										onClick: e => {
											console.log(e);
										}
									},
									{
										icon: "i-more",
										onClick: e => {
											console.log(e);
										}
									}
								]
							}
						},
						details: function () {
							return html``;
						}
					},
					{
						id: 1,
						data: {
							pipelineRun: {
								value: "Monday, 25 Jun 10:15 AM",
								template: function () {
									return html`<f-text variant="para" size="small" weight="regular"
										>${this.value}</f-text
									>`;
								}
							},
							status: {
								value: "Running",
								template: function () {
									return html`<f-div gap="medium">
										<f-icon source="i-loader" size="small" state="success" class="loading"></f-icon>
										<f-text variant="para" size="small" weight="regular"
											>${this.value}</f-text
										></f-div
									>`;
								}
							},
							started: {
								value: "18 Jun, 10:15 AM",
								template: function () {
									return html`<f-text variant="para" size="small" weight="regular"
										>${this.value}</f-text
									>`;
								}
							},
							ended: {
								value: "18 Jun, 10:15 AM",
								template: function () {
									return html`<f-text variant="para" size="small" weight="regular"
										>${this.value}</f-text
									>`;
								},
								actions: [
									{
										icon: "i-info-fill",
										onMouseOver: e => {
											console.log(e);
										}
									},
									{
										icon: "i-more",
										onClick: e => {
											console.log(e);
										}
									}
								]
							}
						},
						details: function () {
							return html``;
						}
					}
				]
			}
		};
	},
	methods: {
		toggleRowDetails(e) {
			const newdetails = function () {
				const dummy = ["options 1", "options 2"];
				const dummyTableData = {
					header: {
						tableName: {
							value: "Table Name",
							template: function () {
								return html`<f-text state="subtle" variant="para" size="small" weight="regular"
									>${this.value}</f-text
								>`;
							}
						},
						status: {
							value: "Status/Duration",
							template: function () {
								return html`<f-text state="subtle" variant="para" size="small" weight="regular"
									>${this.value}</f-text
								>`;
							}
						},
						started: {
							value: "Started",
							template: function () {
								return html`<f-text state="subtle" variant="para" size="small" weight="regular"
									>${this.value}</f-text
								>`;
							}
						},
						ended: {
							value: "Ended",
							template: function () {
								return html`<f-text state="subtle" variant="para" size="small" weight="regular"
									>${this.value}</f-text
								>`;
							}
						}
					},
					rows: [
						{
							id: 0,
							data: {
								tableName: {
									value: "school_students-repo_2022",
									template: function () {
										return html`<f-text
											variant="para"
											size="small"
											weight="regular"
											state="secondary"
											>${this.value}</f-text
										>`;
									}
								},
								status: {
									value: "6h 30min",
									template: function () {
										return html`<f-div gap="medium">
											<f-icon source="i-tick-fill" size="small" state="success"></f-icon>
											<f-text variant="para" size="small" weight="regular"
												>${this.value}</f-text
											></f-div
										>`;
									}
								},
								started: {
									value: "18 Jun, 10:15 AM",
									template: function () {
										return html`<f-text variant="para" size="small" weight="regular"
											>${this.value}</f-text
										>`;
									}
								},
								ended: {
									value: "18 Jun, 10:15 AM",
									template: function () {
										return html`<f-text variant="para" size="small" weight="regular"
											>${this.value}</f-text
										>`;
									},
									actions: [
										{
											icon: "i-history",
											onClick: e => {
												console.log(e);
											}
										},
										{
											icon: "i-more",
											onClick: e => {
												console.log(e);
											}
										}
									]
								}
							}
						},
						{
							id: 1,
							data: {
								tableName: {
									value: "school_students-repo_2023",
									template: function () {
										return html`<f-text
											variant="para"
											size="small"
											weight="regular"
											state="secondary"
											>${this.value}</f-text
										>`;
									}
								},
								status: {
									value: "6h 30min",
									template: function () {
										return html`<f-div gap="medium">
											<f-icon source="i-tick-fill" size="small" state="success"></f-icon>
											<f-text variant="para" size="small" weight="regular"
												>${this.value}</f-text
											></f-div
										>`;
									}
								},
								started: {
									value: "18 Jun, 10:15 AM",
									template: function () {
										return html`<f-text variant="para" size="small" weight="regular"
											>${this.value}</f-text
										>`;
									}
								},
								ended: {
									value: "18 Jun, 10:15 AM",
									template: function () {
										return html`<f-text variant="para" size="small" weight="regular"
											>${this.value}</f-text
										>`;
									},
									actions: [
										{
											icon: "i-history",
											onMouseOver: e => {
												console.log(e);
											}
										},
										{
											icon: "i-more",
											onClick: e => {
												console.log(e);
											}
										}
									]
								}
							}
						}
					]
				};
				return html`<f-div direction="column" padding="medium" gap="large">
					<f-div gap="auto" height="hug-content" align="middle-center" width="100%">
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
						.data=${dummyTableData}
						.showSearchBar=${false}
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
		}
	}
});
</script>

<style lang="scss">
[slot="details"] {
	width: 100% !important;
}
.loading {
	-webkit-animation: rotation 2s infinite linear !important;
	animation: rotation 2s infinite linear !important;
}

@-webkit-keyframes rotation {
	from {
		-webkit-transform: rotate(0deg);
	}
	to {
		-webkit-transform: rotate(359deg);
	}
}

@keyframes rotation {
	from {
		-webkit-transform: rotate(0deg);
	}
	to {
		-webkit-transform: rotate(359deg);
	}
}
</style>
