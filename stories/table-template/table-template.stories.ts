/* eslint-disable @typescript-eslint/no-explicit-any */
import TableTemplate01 from "./TableTemplate01.vue";
import TableTemplateFile01 from "./TableTemplate01.vue?raw";

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
