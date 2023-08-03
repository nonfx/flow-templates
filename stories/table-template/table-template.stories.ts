/* eslint-disable @typescript-eslint/no-explicit-any */
import TableTemplate01 from "./TableTemplate01.vue";
import TableTemplateFile01 from "./TableTemplate01.vue?raw";

import TableSchema1 from "./TableSchema.vue";
import SlotTableSchema1 from "./SlotTableSchema.vue";

export default {
	title: "Templates/Table Template",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 500
		}
	}
};

export const Template01 = {
	name: "ft-template-template-01",
	parameters: {
		docs: {
			source: {
				code: TableTemplateFile01
			}
		}
	},
	render: () => TableTemplate01
};

export const TableSchema = {
	name: "_table-schema",
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	},
	render: () => TableSchema1
};

export const SlotTableSchema = {
	name: "_slot-table-schema",
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	},
	render: () => SlotTableSchema1
};
