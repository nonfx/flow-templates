import Layout from "./Layout.vue";
import file from "./Layout.vue?raw";

import HomeSection from "./HomeSection.vue";
import HomeFile from "./HomeSection.vue?raw";

export default {
	title: "Templates/CP T8 100 days",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 900
		}
	}
};

export const Template01 = {
	name: "ft-cp-t8-100-days-01",
	parameters: {
		docs: {
			source: {
				code: file
			}
		}
	},
	render: () => Layout
};

export const Template02 = {
	name: "ft-cp-t8-100-days-02",
	parameters: {
		docs: {
			source: {
				code: HomeFile
			}
		}
	},
	render: () => HomeSection
};
