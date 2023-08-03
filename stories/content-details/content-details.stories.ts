import ContentDetails01 from "./ContentDetails01.vue";
import file from "./ContentDetails01.vue?raw";

export default {
	title: "Templates/Content Details Layout",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 900
		}
	}
};

export const Template01 = {
	name: "ft-content-details-01",
	parameters: {
		docs: {
			source: {
				code: file
			}
		}
	},
	render: () => ContentDetails01
};
