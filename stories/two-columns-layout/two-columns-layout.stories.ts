/* eslint-disable @typescript-eslint/no-explicit-any */
import TwoColumnsLayout01 from "./TwoColumnsLayout01.vue";
import twoColumnsLayoutFile01 from "./TwoColumnsLayout01.vue?raw";

import TwoColumnsLayout02 from "./TwoColumnsLayout02.vue";
import twoColumnsLayoutFile02 from "./TwoColumnsLayout02.vue?raw";

import TwoColumnsLayout03 from "./TwoColumnsLayout03.vue";
import twoColumnsLayoutFile03 from "./TwoColumnsLayout03.vue?raw";

export default {
	title: "Templates/2-Column Layout",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 1000
		}
	}
};

export const Template01 = {
	name: "ft-2-column-layout-01",
	parameters: {
		docs: {
			source: {
				code: twoColumnsLayoutFile01
			}
		}
	},
	render: () => TwoColumnsLayout01
};

export const Template02 = {
	name: "ft-2-column-layout-02",
	parameters: {
		docs: {
			source: {
				code: twoColumnsLayoutFile02
			}
		}
	},
	render: () => TwoColumnsLayout02
};

export const Template03 = {
	name: "ft-2-column-layout-03",
	parameters: {
		docs: {
			source: {
				code: twoColumnsLayoutFile03
			}
		}
	},
	render: () => TwoColumnsLayout03
};
