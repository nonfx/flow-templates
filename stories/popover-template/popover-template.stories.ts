import PopoverTemplate01 from "./PopoverTemplate01.vue";
import PopoverTemplateFile01 from "./PopoverTemplate01.vue?raw";

import PopoverTemplate02 from "./PopoverTemplate02.vue";
import PopoverTemplateFile02 from "./PopoverTemplate02.vue?raw";

import PopoverTemplate03 from "./PopoverTemplate03.vue";
import PopoverTemplateFile03 from "./PopoverTemplate03.vue?raw";

import PopoverTemplate04 from "./PopoverTemplate04.vue";
import PopoverTemplateFile04 from "./PopoverTemplate04.vue?raw";

export default {
	title: "Templates/Popover Templates",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 120
		}
	}
};

export const Template01 = {
	name: "ft-popover-template-01",
	parameters: {
		docs: {
			source: {
				code: PopoverTemplateFile01
			}
		}
	},
	render: () => PopoverTemplate01
};

export const Template02 = {
	name: "ft-popover-template-02",
	parameters: {
		docs: {
			source: {
				code: PopoverTemplateFile02
			}
		}
	},
	render: () => PopoverTemplate02
};

export const Template03 = {
	name: "ft-popover-template-03",
	parameters: {
		docs: {
			source: {
				code: PopoverTemplateFile03
			}
		}
	},
	render: () => PopoverTemplate03
};

export const Template04 = {
	name: "ft-popover-template-04",
	parameters: {
		docs: {
			source: {
				code: PopoverTemplateFile04
			}
		}
	},
	render: () => PopoverTemplate04
};
