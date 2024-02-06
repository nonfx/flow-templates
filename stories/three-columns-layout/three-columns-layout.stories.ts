/* eslint-disable @typescript-eslint/no-explicit-any */
import ThreeColumnLayout01 from "./ThreeColumnsLayout01.vue";
import ThreeColumnLayout01Code from "./ThreeColumnsLayout01.vue?raw";

export default {
	title: "Templates/3-Column Layout",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 1000
		}
	}
};

export const Template01 = {
	name: "ft-3-column-layout-01",
	parameters: {
		docs: {
			source: {
				code: ThreeColumnLayout01Code
			}
		}
	},
	render: () => ThreeColumnLayout01
};
