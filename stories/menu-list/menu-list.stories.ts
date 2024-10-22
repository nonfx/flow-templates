/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { descriptions } from "../../utils/stories-title-description";

export default {
	title: "Patterns/Menu List",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 300
		}
	}
};

export const Pattern01 = {
	name: "ft-example",
	parameters: {
		docs: {
			source: {
				code: exampleFile
			},
			description: {
				component: descriptions["Patterns"]["menu-list"]
			}
		}
	},
	render: () => ExampleVue
};

export const Pattern02 = {
	name: "ft-menu-list-01",
	parameters: {
		docs: {
			source: {
				code: menuListFile1
			}
		}
	},
	render: () => MenuList1
};

export const Pattern03 = {
	name: "ft-menu-list-02",
	parameters: {
		docs: {
			source: {
				code: menuListFile2
			}
		}
	},
	render: () => MenuList2
};

export const Pattern04 = {
	name: "ft-menu-list-03",
	parameters: {
		docs: {
			source: {
				code: menuListFile3
			}
		}
	},
	render: () => MenuList3
};

export const Pattern05 = {
	name: "ft-menu-list-04",
	parameters: {
		docs: {
			source: {
				code: menuListFile4
			}
		}
	},
	render: () => MenuList4
};

export const Pattern06 = {
	name: "ft-menu-list-05",
	parameters: {
		docs: {
			source: {
				code: menuListFile5
			}
		}
	},
	render: () => MenuList5
};
