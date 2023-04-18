/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StoryFn } from "@storybook/vue3";
import EmptyStateSmall1 from "./EmptyStateSmall01.vue";
import EmptyStateFile1 from "./EmptyStateSmall01.vue?raw";
import EmptyStateSmall2 from "./EmptyStateSmall02.vue";
import EmptyStateFile2 from "./EmptyStateSmall02.vue?raw";
import EmptyStateSmall3 from "./EmptyStateSmall03.vue";
import EmptyStateFile3 from "./EmptyStateSmall03.vue?raw";

export default {
	title: "Templates/Empty States",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 200
		}
	}
};

const Template01: StoryFn = () => {
	return EmptyStateSmall1;
};

export const EmptyStateSmall01 = Template01.bind({});

EmptyStateSmall01.parameters = {
	docs: {
		source: {
			code: EmptyStateFile1
		}
	}
};

const Template02: StoryFn = () => {
	return EmptyStateSmall2;
};

export const EmptyStateSmall02 = Template02.bind({});

EmptyStateSmall02.parameters = {
	docs: {
		source: {
			code: EmptyStateFile2
		}
	}
};

const Template03: StoryFn = () => {
	return EmptyStateSmall3;
};

export const EmptyStateSmall03 = Template03.bind({});

EmptyStateSmall03.parameters = {
	docs: {
		source: {
			code: EmptyStateFile3
		}
	}
};
