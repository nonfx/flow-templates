/* eslint-disable @typescript-eslint/no-explicit-any */
import EmptyStateSmall1 from "./EmptyStateSmall01.vue";
import EmptyStateFile1 from "./EmptyStateSmall01.vue?raw";
import EmptyStateSmall2 from "./EmptyStateSmall02.vue";
import EmptyStateFile2 from "./EmptyStateSmall02.vue?raw";
import EmptyStateSmall3 from "./EmptyStateSmall03.vue";
import EmptyStateFile3 from "./EmptyStateSmall03.vue?raw";

export default {
	title: "Patterns/Empty States",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 200
		}
	}
};

export const Pattern01 = {
	name: "ft-empty-state-small-01",
	parameters: {
		docs: {
			source: {
				code: EmptyStateFile1
			}
		}
	},
	render: () => EmptyStateSmall1
};

export const Pattern02 = {
	name: "ft-empty-state-small-02",
	parameters: {
		docs: {
			source: {
				code: EmptyStateFile2
			}
		}
	},
	render: () => EmptyStateSmall2
};

export const Pattern03 = {
	name: "ft-empty-state-small-03",
	parameters: {
		docs: {
			source: {
				code: EmptyStateFile3
			}
		}
	},
	render: () => EmptyStateSmall3
};
