import SearchTemplate01 from "./SearchTemplate01.vue";
import file from "./SearchTemplate01.vue?raw";

export default {
	title: "Templates/Search",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 600
		}
	}
};

export const Template01 = {
	name: "ft-search-template-01",
	parameters: {
		docs: {
			source: {
				code: file
			}
		}
	},
	render: () => SearchTemplate01
};
