import Layout011 from "./Layout01.vue";
import file from "./Layout01.vue?raw";

export default {
	title: "Templates/Layout",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 900
		}
	}
};

export const Template01 = {
	name: "ft-layout-01",
	parameters: {
		docs: {
			source: {
				code: file
			}
		}
	},
	render: () => Layout011
};
