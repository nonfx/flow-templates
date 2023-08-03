/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const Template01 = {
	name: "ft-metadata-01",
	parameters: {
		docs: {
			source: {
				code: MetaDataFile1
			}
		}
	},
	render: () => MetaData1
};

export const Template02 = {
	name: "ft-metadata-02",
	parameters: {
		docs: {
			source: {
				code: MetaDataFile2
			}
		}
	},
	render: () => MetaData2
};
