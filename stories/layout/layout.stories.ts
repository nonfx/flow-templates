import Layout011 from "./Layout01.vue";

import file from "./Layout01.vue?raw";
import type { StoryFn } from "@storybook/vue3";
export default {
	title: "Templates/Layout",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 900
		}
	}
};

const Template: StoryFn = () => {
	return Layout011;
};

export const Layout01 = Template.bind({});

Layout01.parameters = {
	docs: {
		source: {
			code: file
		}
	}
};
