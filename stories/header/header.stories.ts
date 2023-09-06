/* eslint-disable @typescript-eslint/no-explicit-any */
import Header1 from "./Header01.vue";
import HeaderFile1 from "./Header01.vue?raw";
import { descriptions } from "../../utils/stories-title-description";

export default {
	title: "Patterns/Header",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 150
		}
	}
};

export const Pattern01 = {
	name: "ft-slab-header-01",
	parameters: {
		docs: {
			source: {
				code: HeaderFile1
			},
			description: {
				component: descriptions["Patterns"]["header"]
			}
		}
	},
	render: () => Header1
};
