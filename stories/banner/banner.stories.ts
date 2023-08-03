/* eslint-disable @typescript-eslint/no-explicit-any */
import Banner01 from "./Banner01.vue";
import BannerFile01 from "./Banner01.vue?raw";
import Banner02 from "./Banner02.vue";
import BannerFile02 from "./Banner02.vue?raw";
import Banner03 from "./Banner03.vue";
import BannerFile03 from "./Banner03.vue?raw";
import Banner04 from "./Banner04.vue";
import BannerFile04 from "./Banner04.vue?raw";

export default {
	title: "Templates/Banner",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 300
		}
	}
};

export const Template01 = {
	name: "ft-banner-01",
	parameters: {
		docs: {
			source: {
				code: BannerFile01
			}
		}
	},
	render: () => Banner01
};

export const Template02 = {
	name: "ft-banner-02",
	parameters: {
		docs: {
			source: {
				code: BannerFile02
			}
		}
	},
	render: () => Banner02
};

export const Template03 = {
	name: "ft-banner-03",
	parameters: {
		docs: {
			source: {
				code: BannerFile03
			}
		}
	},
	render: () => Banner03
};


export const Template04 = {
	name: "ft-banner-04",
	parameters: {
		docs: {
			source: {
				code: BannerFile04
			}
		}
	},
	render: () => Banner04
};