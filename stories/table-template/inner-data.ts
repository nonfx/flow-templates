import {
	FTableSchemaCell,
	FTableSchemaData,
	FTableSchemaDataRow,
	FTableSchemaHeaderCell
} from "@cldcvr/flow-table";
import { faker } from "@faker-js/faker";
import { html } from "lit";

export function getInnerData(rowCount = 3, columnCount = 4): FTableSchemaData {
	const users = [];

	for (let i = 0; i < rowCount; i++) {
		const tableName = {
			value: "school_students-repo_2022",
			template: function () {
				return html` <style>
						.pd-custom-1 {
							padding-top: 4px;
						}
					</style>
					<f-text variant="para" size="small" weight="regular" class="pd-custom-1"
						>${this.value}</f-text
					>`;
			}
		};
		const status = {
			value: "6h 30min",
			template: function () {
				return html` <style>
						.pd-custom-2 {
							padding-top: 4px;
						}
					</style>
					<f-div gap="medium" class="pd-custom-2" overflow="hidden">
						<f-icon source="i-tick-fill" size="small" state="success"></f-icon>
						<f-text variant="para" size="small" weight="regular">${this.value}</f-text></f-div
					>`;
			}
		};
		const started = {
			value: "18 Jun, 10:15 AM",
			template: function () {
				return html` <style>
						.pd-custom-1 {
							padding-top: 4px;
						}
					</style>
					<f-text variant="para" size="small" weight="regular" class="pd-custom-1"
						>${this.value}</f-text
					>`;
			}
		};

		const ended: FTableSchemaCell & { value: string } = {
			value: "18 Jun, 10:15 AM",
			template: function () {
				return html` <style>
						.pd-custom-1 {
							padding-top: 4px;
						}
					</style>
					<f-text variant="para" size="small" weight="regular" class="pd-custom-1"
						>${this.value}</f-text
					>`;
			},
			actions: [
				{
					id: "0",
					icon: "i-history",
					tooltip: "This is Tooltip"
				},
				{
					id: "more-popover",
					icon: "i-more",
					onClick: e => {
						// console.log(e);
						// toggelPopover();
					}
				}
			]
		};

		const userRow: FTableSchemaDataRow = {
			id: faker.random.alpha(10),
			expandIconPosition: "left",
			data: { tableName, status, started, ended },
			details: function () {
				return html``;
			}
		};
		users.push(userRow);
	}

	const header: Record<string, FTableSchemaHeaderCell> = {
		tableName: {
			value: "Table Name",
			template: function () {
				return html` <style>
						.header-padding-1 {
							padding-top: 4px;
						}
					</style>
					<f-text
						state="subtle"
						variant="para"
						size="small"
						weight="regular"
						class="header-padding-1"
						>${this.value}</f-text
					>`;
			}
		},
		status: {
			value: "Status/Duration",
			template: function () {
				return html` <style>
						.header-padding-1 {
							padding-top: 4px;
						}
					</style>
					<f-text
						state="subtle"
						variant="para"
						size="small"
						weight="regular"
						class="header-padding-1"
						>${this.value}</f-text
					>`;
			}
		},
		started: {
			value: "started",
			template: function () {
				return html` <style>
						.header-padding-1 {
							padding-top: 4px;
						}
					</style>
					<f-text
						state="subtle"
						variant="para"
						size="small"
						weight="regular"
						class="header-padding-1"
						>${this.value}</f-text
					>`;
			}
		},
		ended: {
			value: "ended",
			template: function () {
				return html` <style>
						.header-padding-1 {
							padding-top: 4px;
						}
					</style>
					<f-text
						state="subtle"
						variant="para"
						size="small"
						weight="regular"
						class="header-padding-1"
						>${this.value}</f-text
					>`;
			}
		}
	};

	return {
		header: Object.fromEntries(Object.entries(header).slice(0, columnCount)),
		rows: users
	};
}
