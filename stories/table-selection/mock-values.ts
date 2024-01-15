import { faker } from "@faker-js/faker";
import { FPopover, html } from "@ollion/flow-core";
import type {
	FTableSchemaData,
	FTableSchemaDataRow,
	FTableSchemaCell,
	FTableSchemaHeaderCell
} from "@ollion/flow-table";
import { Ref } from "vue";

export function getSchemaList() {
	const schemaList = [];
	for (let index = 0; index < 25; index++) {
		schemaList.push(`db-${Math.random().toString(36).substring(2, 7)}`);
	}
	return schemaList;
}

export function getMockTableData(
	rowCount = 100,
	popoverRef: Ref<FPopover | null>
): FTableSchemaData {
	const tableRows = [];
	const handleClick = (target: EventTarget | null) => {
		if (popoverRef.value && target) {
			popoverRef.value.target = target as HTMLElement;
			popoverRef.value.open = true;
		}
	};

	for (let i = 0; i < rowCount; i++) {
		const tableName: FTableSchemaCell<string> = {
			value: faker.word.noun(),
			align: "middle-left"
		};
		const errorHandling: FTableSchemaCell<string> = {
			value: faker.helpers.arrayElement(["Abort", "Skip at 25%", "Continue"])
		};
		const incrementalColumn: FTableSchemaCell<string> = {
			value: faker.database.column()
		};
		const dedupColumn: FTableSchemaCell<string> = {
			value: faker.database.column(),
			template: function () {
				return html`<f-div
					@click=${(e: PointerEvent) => {
						e.stopPropagation();
						handleClick(e.target);
					}}
					align="middle-left"
					><f-text>${this.value}</f-text
					><f-icon-button icon="i-caret-down" state="neutral" category="packed"></f-icon-button
				></f-div>`;
			}
		};
		const normalised: FTableSchemaCell<boolean> = {
			value: faker.helpers.arrayElement([true, false]),
			template: function () {
				return html`<f-switch .value=${this.value}></f-switch>`;
			}
		};

		const dRow: FTableSchemaDataRow = {
			id: faker.random.alpha(10),
			expandIconPosition: "left",
			data: { tableName, errorHandling, incrementalColumn, dedupColumn, normalised }
		};
		tableRows.push(dRow);
	}

	const header: Record<string, FTableSchemaHeaderCell> = {
		tableName: {
			value: "Table name",
			disableSort: true
		},
		errorHandling: {
			value: "Error handling",
			disableSort: true
		},
		incrementalColumn: {
			value: "Incremental column",
			disableSort: true
		},
		dedupColumn: {
			value: "Dedup column",
			disableSort: true
		},
		normalised: {
			value: "Normalised",
			disableSort: true
		}
	};

	return {
		header,
		rows: tableRows
	};
}
