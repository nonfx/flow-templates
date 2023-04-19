/* eslint-disable @typescript-eslint/no-explicit-any */
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
	title: "Templates/Top Nav",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 300
		}
	}
};

export const Template01 = {
	name: "ft-top-nav-01",
	parameters: {
		docs: {
			source: {
				code: topNavFile1
			}
		}
	},
	render: () => TopNav1
};

export const Template02 = {
	name: "ft-top-nav-02",
	parameters: {
		docs: {
			source: {
				code: topNavFile2
			}
		}
	},
	render: () => TopNav2
};

export const Template03 = {
	name: "ft-top-nav-03",
	parameters: {
		docs: {
			source: {
				code: topNavFile3
			}
		}
	},
	render: () => TopNav3
};

export const Template04 = {
	name: "ft-top-nav-04",
	parameters: {
		docs: {
			source: {
				code: topNavFile4
			}
		}
	},
	render: () => TopNav4
};

export const Template05 = {
	name: "ft-top-nav-05",
	parameters: {
		docs: {
			source: {
				code: topNavFile5
			}
		}
	},
	render: () => TopNav5
};
