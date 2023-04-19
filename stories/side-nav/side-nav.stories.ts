import SideNav011 from "./SideNav01.vue";
import file from "./SideNav01.vue?raw";

export default {
	title: "Templates/Side Nav",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 900
		}
	}
};

export const Template01 = {
	name: "ft-side-nav-01",
	parameters: {
		docs: {
			source: {
				code: file
			}
		}
	},
	render: () => SideNav011
};
