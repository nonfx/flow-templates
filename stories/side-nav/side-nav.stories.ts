import SideNav011 from "./SideNav01.vue";

import file from "./SideNav01.vue?raw";
import type { StoryFn } from "@storybook/vue3";
export default {
	title: "Side Nav",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 900
		}
	}
};

const Template: StoryFn = () => {
	return SideNav011;
};

export const SideNav01 = Template.bind({});

SideNav01.parameters = {
	docs: {
		source: {
			code: file
		}
	}
};
