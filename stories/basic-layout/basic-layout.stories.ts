import Layout011 from "./Layout01.vue";
import file from "./Layout01.vue?raw";
import { descriptions } from "../../utils/stories-title-description";

export default {
	title: "Templates/Basic Layout",
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
			},
			description: {
				component: descriptions["Templates"]["basic-layout"]
			}
		}
	},
	render: () => Layout011
};
