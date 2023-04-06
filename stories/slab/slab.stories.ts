/* eslint-disable @typescript-eslint/no-explicit-any */
import { StoryFn } from "@storybook/web-components";

import SingleLineSlab1 from "./SingleLineSlab01.vue";
import singleLineSlabFile1 from "./SingleLineSlab01.vue?raw";
import SingleLineSlab2 from "./SingleLineSlab02.vue";
import singleLineSlabFile2 from "./SingleLineSlab02.vue?raw";
import SingleLineSlab3 from "./SingleLineSlab03.vue";
import singleLineSlabFile3 from "./SingleLineSlab03.vue?raw";
import SingleLineSlab4 from "./SingleLineSlab04.vue";
import singleLineSlabFile4 from "./SingleLineSlab04.vue?raw";

import MultiLineSlab1 from "./MultiLineSlab01.vue";
import multiLineSlabFile1 from "./MultiLineSlab01.vue?raw";
import MultiLineSlab2 from "./MultiLineSlab02.vue";
import multiLineSlabFile2 from "./MultiLineSlab02.vue?raw";
import MultiLineSlab3 from "./MultiLineSlab03.vue";
import multiLineSlabFile3 from "./MultiLineSlab03.vue?raw";

export default {
	title: "Slab",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 100
		}
	}
};

const SingleLineSlabTemplate01: StoryFn = () => {
	return SingleLineSlab1;
};

export const SingleLineSlab01 = SingleLineSlabTemplate01.bind({});

SingleLineSlab01.parameters = {
	docs: {
		source: {
			code: singleLineSlabFile1
		}
	}
};

const SingleLineSlabTemplate02: StoryFn = () => {
	return SingleLineSlab2;
};

export const SingleLineSlab02 = SingleLineSlabTemplate02.bind({});

SingleLineSlab02.parameters = {
	docs: {
		source: {
			code: singleLineSlabFile2
		}
	}
};

const SingleLineSlabTemplate03: StoryFn = () => {
	return SingleLineSlab3;
};

export const SingleLineSlab03 = SingleLineSlabTemplate03.bind({});

SingleLineSlab03.parameters = {
	docs: {
		source: {
			code: singleLineSlabFile3
		}
	}
};

const SingleLineSlabTemplate04: StoryFn = () => {
	return SingleLineSlab4;
};

export const SingleLineSlab04 = SingleLineSlabTemplate04.bind({});

SingleLineSlab04.parameters = {
	docs: {
		source: {
			code: singleLineSlabFile4
		}
	}
};

const MultiLineSlabTemplate01: StoryFn = () => {
	return MultiLineSlab1;
};

export const MultiLineSlab01 = MultiLineSlabTemplate01.bind({});

MultiLineSlab01.parameters = {
	docs: {
		source: {
			code: multiLineSlabFile1
		}
	}
};

const MultiLineSlabTemplate02: StoryFn = () => {
	return MultiLineSlab2;
};

export const MultiLineSlab02 = MultiLineSlabTemplate02.bind({});

MultiLineSlab02.parameters = {
	docs: {
		source: {
			code: multiLineSlabFile2
		}
	}
};

const MultiLineSlabTemplate03: StoryFn = () => {
	return MultiLineSlab3;
};

export const MultiLineSlab03 = MultiLineSlabTemplate03.bind({});

MultiLineSlab03.parameters = {
	docs: {
		source: {
			code: multiLineSlabFile3
		}
	}
};
