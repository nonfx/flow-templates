/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StoryFn } from "@storybook/vue3";
import Cards1 from "./Cards01.vue";
import cardsFile1 from "./Cards01.vue?raw";

export default {
	title: "Templates/Cards",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 300
		}
	}
};

const Template01: StoryFn = () => {
	return Cards1;
};

export const CardGrid01 = Template01.bind({});

CardGrid01.parameters = {
	docs: {
		source: {
			code: cardsFile1
		}
	}
};
