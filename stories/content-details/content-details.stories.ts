import ContentDetails01 from "./ContentDetails01.vue";
import file from "./ContentDetails01.vue?raw";
import { descriptions } from "../../utils/stories-title-description";

export default {
	title: "Layouts/Content Details",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 900
		}
	}
};

export const Layout01 = {
	name: "ft-content-details-01",
	parameters: {
		docs: {
			source: {
				code: file
			},
			description: {
				component: descriptions["Layouts"]["content-details"]
			}
		}
	},
	render: () => ContentDetails01
};
