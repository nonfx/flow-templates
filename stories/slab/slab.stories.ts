/* eslint-disable @typescript-eslint/no-explicit-any */
import SingleLineSlab1 from "./SingleLineSlab01.vue";
import singleLineSlabFile1 from "./SingleLineSlab01.vue?raw";
import SingleLineSlab2 from "./SingleLineSlab02.vue";
import singleLineSlabFile2 from "./SingleLineSlab02.vue?raw";
import SingleLineSlab3 from "./SingleLineSlab03.vue";
import singleLineSlabFile3 from "./SingleLineSlab03.vue?raw";
import SingleLineSlab4 from "./SingleLineSlab04.vue";
import singleLineSlabFile4 from "./SingleLineSlab04.vue?raw";

import MultiLineSlab1 from "./MultiLineSlab01.vue";
import multiLineSlabFile1 from "./MultiLineSlab01.vue?raw";
import MultiLineSlab2 from "./MultiLineSlab02.vue";
import multiLineSlabFile2 from "./MultiLineSlab02.vue?raw";
import MultiLineSlab3 from "./MultiLineSlab03.vue";
import multiLineSlabFile3 from "./MultiLineSlab03.vue?raw";

export default {
	title: "Patterns/Slab",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 100
		}
	}
};

export const Pattern01 = {
	name: "ft-single-line-slab-01",
	parameters: {
		docs: {
			source: {
				code: singleLineSlabFile1
			}
		}
	},
	render: () => SingleLineSlab1
};

export const Pattern02 = {
	name: "ft-single-line-slab-02",
	parameters: {
		docs: {
			source: {
				code: singleLineSlabFile2
			}
		}
	},
	render: () => SingleLineSlab2
};

export const Pattern03 = {
	name: "ft-single-line-slab-03",
	parameters: {
		docs: {
			source: {
				code: singleLineSlabFile3
			}
		}
	},
	render: () => SingleLineSlab3
};

export const Pattern04 = {
	name: "ft-single-line-slab-04",
	parameters: {
		docs: {
			source: {
				code: singleLineSlabFile4
			}
		}
	},
	render: () => SingleLineSlab4
};

export const Pattern05 = {
	name: "ft-multi-line-slab-01",
	parameters: {
		docs: {
			source: {
				code: multiLineSlabFile1
			}
		}
	},
	render: () => MultiLineSlab1
};

export const Pattern06 = {
	name: "ft-multi-line-slab-02",
	parameters: {
		docs: {
			source: {
				code: multiLineSlabFile2
			}
		}
	},
	render: () => MultiLineSlab2
};

export const Pattern07 = {
	name: "ft-multi-line-slab-03",
	parameters: {
		docs: {
			source: {
				code: multiLineSlabFile3
			}
		}
	},
	render: () => MultiLineSlab3
};
