import { html } from "lit";

export const headerTemplate = function () {
	return html` <style>
			.header-padding-1 {
				padding-top: 4px;
			}
		</style>
		<f-text state="subtle" variant="para" size="small" weight="regular" class="header-padding-1"
			>${this.value}</f-text
		>`;
};

export const cellTemplate = function () {
	return html` <style>
			.pd-custom-1 {
				padding-top: 4px;
			}
		</style>
		<f-text variant="para" size="small" weight="regular" class="pd-custom-1"
			>${this.value}</f-text
		>`;
};

export const cellDivTemplate = function () {
	return html` <style>
			.pd-custom-2 {
				padding-top: 4px;
			}
		</style>
		<f-div gap="medium" class="pd-custom-2">
			<f-icon source="i-tick-fill" size="small" state="success"></f-icon>
			<f-text variant="para" size="small" weight="regular">${this.value}</f-text></f-div
		>`;
};

export const loaderTemplate = function () {
	return html` <style>
			.pd-custom-2 {
				padding-top: 4px;
			}
		</style>
		<f-div gap="medium" class="pd-custom-2" overflow="hidden">
			<f-icon source="i-loader" size="small" state="success" loading></f-icon>
			<f-text variant="para" size="small" weight="regular">${this.value}</f-text></f-div
		>`;
};

export function dataTable(toggelPopover) {
	return {
		header: {
			pipelineRun: {
				value: "Pipeline Run",
				template: headerTemplate
			},
			status: {
				value: "Status/Duration",
				template: headerTemplate
			},
			started: {
				value: "Started",
				template: headerTemplate
			},
			ended: {
				value: "Ended",
				template: headerTemplate
			}
		},
		rows: [
			{
				id: 0,
				expandIconPosition: "left",
				data: {
					pipelineRun: {
						value: "Monday, 18 Jun 10:15 AM",
						template: cellTemplate
					},
					status: {
						value: "6h 30min",
						template: cellDivTemplate
					},
					started: {
						value: "18 Jun, 10:15 AM",
						template: cellTemplate
					},
					ended: {
						value: "18 Jun, 10:15 AM",
						template: cellTemplate,
						actions: [
							{
								icon: "i-info-fill",
								tooltip: "This is Tooltip"
							},
							{
								id: "more-popover",
								icon: "i-more",
								onClick: e => {
									console.log(e);
									toggelPopover();
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
				expandIconPosition: "left",
				data: {
					pipelineRun: {
						value: "Monday, 25 Jun 10:15 AM",
						template: cellTemplate
					},
					status: {
						value: "Running",
						template: loaderTemplate
					},
					started: {
						value: "18 Jun, 10:15 AM",
						template: cellTemplate
					},
					ended: {
						value: "18 Jun, 10:15 AM",
						template: cellTemplate,
						actions: [
							{
								icon: "i-info-fill",
								tooltip: "This is Tooltip"
							},
							{
								icon: "i-more",
								onClick: e => {
									console.log(e);
									toggelPopover();
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
	};
}
