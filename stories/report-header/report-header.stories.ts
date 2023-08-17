/* eslint-disable @typescript-eslint/no-explicit-any */
import ReportHeader01 from "./ReportHeader01.vue";
import ReportHeader01File from "./ReportHeader01.vue?raw";

export default {
	title: "Templates/Report Header",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 200
		}
	}
};

export const Template01 = {
	name: "ft-report-header-01",
	parameters: {
		docs: {
			source: {
				code: ReportHeader01File
			}
		}
	},
	render: () => ReportHeader01
};
