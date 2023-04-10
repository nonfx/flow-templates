/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StoryFn } from "@storybook/vue3";
import Popover1 from "./Popover01.vue";
import PopoverFile1 from "./Popover01.vue?raw";
import Popover2 from "./Popover02.vue";
import PopoverFile2 from "./Popover02.vue?raw";
import Popover3 from "./Popover03.vue";
import PopoverFile3 from "./Popover03.vue?raw";
import Popover4 from "./Popover04.vue";
import PopoverFile4 from "./Popover04.vue?raw";

export default {
	title: "Popover",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 150
		}
	}
};

const Template01: StoryFn = () => {
	return Popover1;
};

export const ConfirmationPrimaryPopover = Template01.bind({});

ConfirmationPrimaryPopover.parameters = {
	docs: {
		source: {
			code: PopoverFile1
		}
	}
};

const Template02: StoryFn = () => {
	return Popover2;
};

export const ConfirmationDangerPopover = Template02.bind({});

ConfirmationDangerPopover.parameters = {
	docs: {
		source: {
			code: PopoverFile2
		}
	}
};

const Template03: StoryFn = () => {
	return Popover3;
};

export const ConfirmationSuccessPopover = Template03.bind({});

ConfirmationSuccessPopover.parameters = {
	docs: {
		source: {
			code: PopoverFile3
		}
	}
};

const Template04: StoryFn = () => {
	return Popover4;
};

export const ConfirmationWarningPopover = Template04.bind({});

ConfirmationWarningPopover.parameters = {
	docs: {
		source: {
			code: PopoverFile4
		}
	}
};
