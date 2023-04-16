/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StoryFn } from "@storybook/vue3";
import Header1 from "./Header01.vue";
import HeaderFile1 from "./Header01.vue?raw";

export default {
	title: "Patterns/Header",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 150
		}
	}
};

const Template01: StoryFn = () => {
	return Header1;
};

export const SlabHeader = Template01.bind({});

SlabHeader.parameters = {
	docs: {
		source: {
			code: HeaderFile1
		}
	}
};
