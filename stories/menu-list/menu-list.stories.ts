/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StoryFn } from "@storybook/vue3";
import ExampleVue from "./Example.vue";
import exampleFile from "./Example.vue?raw";
import MenuList1 from "./MenuList01.vue";
import menuListFile1 from "./MenuList01.vue?raw";
import MenuList2 from "./MenuList02.vue";
import menuListFile2 from "./MenuList02.vue?raw";
import MenuList3 from "./MenuList03.vue";
import menuListFile3 from "./MenuList03.vue?raw";
import MenuList4 from "./MenuList04.vue";
import menuListFile4 from "./MenuList04.vue?raw";
import MenuList5 from "./MenuList05.vue";
import menuListFile5 from "./MenuList05.vue?raw";

export default {
	title: "Menu List",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 300
		}
	}
};

const ExampleTemplate: StoryFn = () => {
	return ExampleVue;
};

export const Example = ExampleTemplate.bind({});

Example.parameters = {
	docs: {
		source: {
			code: exampleFile
		}
	}
};

const Template01: StoryFn = () => {
	return MenuList1;
};

export const MenuList01 = Template01.bind({});

MenuList01.parameters = {
	docs: {
		source: {
			code: menuListFile1
		}
	}
};

const Template02: StoryFn = () => {
	return MenuList2;
};

export const MenuList02 = Template02.bind({});

MenuList02.parameters = {
	docs: {
		source: {
			code: menuListFile2
		}
	}
};

const Template03: StoryFn = () => {
	return MenuList3;
};

export const MenuList03 = Template03.bind({});

MenuList03.parameters = {
	docs: {
		source: {
			code: menuListFile3
		}
	}
};

const Template04: StoryFn = () => {
	return MenuList4;
};

export const MenuList04 = Template04.bind({});

MenuList04.parameters = {
	docs: {
		source: {
			code: menuListFile4
		}
	}
};

const Template05: StoryFn = () => {
	return MenuList5;
};

export const MenuList05 = Template05.bind({});

MenuList05.parameters = {
	docs: {
		source: {
			code: menuListFile5
		}
	}
};
