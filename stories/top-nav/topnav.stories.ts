/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StoryFn } from "@storybook/vue3";
import TopNav1 from "./TopNav01.vue";
import topNavFile1 from "./TopNav01.vue?raw";
import TopNav2 from "./TopNav02.vue";
import topNavFile2 from "./TopNav02.vue?raw";
import TopNav3 from "./TopNav03.vue";
import topNavFile3 from "./TopNav03.vue?raw";
import TopNav4 from "./TopNav04.vue";
import topNavFile4 from "./TopNav04.vue?raw";
import TopNav5 from "./TopNav05.vue";
import topNavFile5 from "./TopNav05.vue?raw";

export default {
	title: "Top Nav",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 300
		}
	}
};

const Template1: StoryFn = () => {
	return TopNav1;
};

export const TopNav01 = Template1.bind({});

TopNav01.parameters = {
	docs: {
		source: {
			code: topNavFile1
		}
	}
};

const Template2: StoryFn = () => {
	return TopNav2;
};

export const TopNav02 = Template2.bind({});

TopNav02.parameters = {
	docs: {
		source: {
			code: topNavFile2
		}
	}
};

const Template3: StoryFn = () => {
	return TopNav3;
};

export const TopNav03 = Template3.bind({});

TopNav03.parameters = {
	docs: {
		source: {
			code: topNavFile3
		}
	}
};

const Template4: StoryFn = () => {
	return TopNav4;
};

export const TopNav04 = Template4.bind({});

TopNav04.parameters = {
	docs: {
		source: {
			code: topNavFile4
		}
	}
};

const Template5: StoryFn = () => {
	return TopNav5;
};

export const TopNav05 = Template5.bind({});

TopNav05.parameters = {
	docs: {
		source: {
			code: topNavFile5
		}
	}
};
