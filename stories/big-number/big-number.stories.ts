/* eslint-disable @typescript-eslint/no-explicit-any */
import BigNumber01 from "./BigNumber01.vue";
import bigNumber01File from "./BigNumber01.vue?raw";

import BigNumber02 from "./BigNumber02.vue";
import bigNumber02File from "./BigNumber02.vue?raw";

export default {
	title: "Templates/Big Number",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 200
		}
	}
};

export const Template01 = {
	name: "ft-big-number-01",
	parameters: {
		docs: {
			source: {
				code: bigNumber01File
			}
		}
	},
	render: () => BigNumber01
};

export const Template02 = {
	name: "ft-big-number-02",
	parameters: {
		docs: {
			source: {
				code: bigNumber02File
			}
		}
	},
	render: () => BigNumber02
};
