/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StoryFn } from "@storybook/vue3";
import MetaData1 from "./MetaData01.vue";
import MetaDataFile1 from "./MetaData01.vue?raw";
import MetaData2 from "./MetaData02.vue";
import MetaDataFile2 from "./MetaData02.vue?raw";

export default {
	title: "Templates/MetaData",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 300
		}
	}
};

const Template01: StoryFn = () => {
	return MetaData1;
};

export const MetaData01 = Template01.bind({});

MetaData01.parameters = {
	docs: {
		source: {
			code: MetaDataFile1
		}
	}
};

const Template02: StoryFn = () => {
	return MetaData2;
};

export const MetaData02 = Template02.bind({});

MetaData02.parameters = {
	docs: {
		source: {
			code: MetaDataFile2
		}
	}
};
