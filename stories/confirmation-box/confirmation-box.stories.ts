/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const Template01 = {
	name: "ft-confirmation-box-01",
	parameters: {
		docs: {
			source: {
				code: ConfirmationBoxFile1
			}
		}
	},
	render: () => ConfirmationBox1
};

export const Template02 = {
	name: "ft-confirmation-box-02",
	parameters: {
		docs: {
			source: {
				code: ConfirmationBoxFile2
			}
		}
	},
	render: () => ConfirmationBox2
};

export const Template03 = {
	name: "ft-confirmation-box-03",
	parameters: {
		docs: {
			source: {
				code: ConfirmationBoxFile3
			}
		}
	},
	render: () => ConfirmationBox3
};

export const Template04 = {
	name: "ft-confirmation-box-04",
	parameters: {
		docs: {
			source: {
				code: ConfirmationBoxFile4
			}
		}
	},
	render: () => ConfirmationBox4
};
