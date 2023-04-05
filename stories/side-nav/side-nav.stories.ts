/* eslint-disable @typescript-eslint/no-explicit-any */
import sideNavCode from "./side-nav-code";
import SideNav011 from "./SideNav01.vue";

export default {
	title: "Side Nav",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 900
		}
	}
};

const Template = () => {
	return SideNav011;
};

export const SideNav01 = Template.bind({});

SideNav01.parameters = {
	docs: {
		source: {
			code: sideNavCode
		}
	}
};
