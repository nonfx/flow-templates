import Search011 from "./Search01.vue";
import file from "./Search01.vue?raw";

export default {
	title: "Patterns/Search",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 100
		}
	}
};

export const Template01 = {
	name: "ft-search-01",
	parameters: {
		docs: {
			source: {
				code: file
			}
		}
	},
	render: () => Search011
};
