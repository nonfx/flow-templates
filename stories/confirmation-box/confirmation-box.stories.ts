/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StoryFn } from "@storybook/vue3";
import ConfirmationBox1 from "./ConfirmationBox01.vue";
import ConfirmationBoxFile1 from "./ConfirmationBox01.vue?raw";
import ConfirmationBox2 from "./ConfirmationBox02.vue";
import ConfirmationBoxFile2 from "./ConfirmationBox02.vue?raw";
import ConfirmationBox3 from "./ConfirmationBox03.vue";
import ConfirmationBoxFile3 from "./ConfirmationBox03.vue?raw";
import ConfirmationBox4 from "./ConfirmationBox04.vue";
import ConfirmationBoxFile4 from "./ConfirmationBox04.vue?raw";

export default {
	title: "Templates/Confirmation Box",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 250
		}
	}
};

const Template01: StoryFn = () => {
	return ConfirmationBox1;
};

export const ConfirmationBoxPrimary = Template01.bind({});

ConfirmationBoxPrimary.parameters = {
	docs: {
		source: {
			code: ConfirmationBoxFile1
		}
	}
};

const Template02: StoryFn = () => {
	return ConfirmationBox2;
};

export const ConfirmationBoxDanger = Template02.bind({});

ConfirmationBoxDanger.parameters = {
	docs: {
		source: {
			code: ConfirmationBoxFile2
		}
	}
};

const Template03: StoryFn = () => {
	return ConfirmationBox3;
};

export const ConfirmationBoxSuccess = Template03.bind({});

ConfirmationBoxSuccess.parameters = {
	docs: {
		source: {
			code: ConfirmationBoxFile3
		}
	}
};

const Template04: StoryFn = () => {
	return ConfirmationBox4;
};

export const ConfirmationBoxWarning = Template04.bind({});

ConfirmationBoxWarning.parameters = {
	docs: {
		source: {
			code: ConfirmationBoxFile4
		}
	}
};
