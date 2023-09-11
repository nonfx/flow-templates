/* eslint-disable @typescript-eslint/no-explicit-any */
import ReportTemplate01 from "./ReportTemplate01.vue";
import ReportTemplate01File from "./ReportTemplate01.vue?raw";

import ReportTemplate02 from "./ReportTemplate02.vue";
import ReportTemplate02File from "./ReportTemplate02.vue?raw";

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

export const Template02 = {
	name: "ft-report-02",
	parameters: {
		docs: {
			source: {
				code: ReportTemplate02File
			}
		}
	},
	render: () => ReportTemplate02
};
