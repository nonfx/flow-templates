/* eslint-disable @typescript-eslint/no-explicit-any */
import ReportTemplate01 from "./ReportTemplate01.vue";
import ReportTemplate01File from "./ReportTemplate01.vue?raw";

export default {
	title: "Templates/Report Template",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 900
		}
	}
};

export const Template01 = {
	name: "ft-report-01",
	parameters: {
		docs: {
			source: {
				code: ReportTemplate01File
			}
		}
	},
	render: () => ReportTemplate01
};
