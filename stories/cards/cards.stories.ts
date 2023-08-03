/* eslint-disable @typescript-eslint/no-explicit-any */
import Cards1 from "./Cards01.vue";
import cardsFile1 from "./Cards01.vue?raw";

export default {
	title: "Templates/Cards",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 300
		}
	}
};

export const Template01 = {
	name: "ft-card-grid-01",
	parameters: {
		docs: {
			source: {
				code: cardsFile1
			}
		}
	},
	render: () => Cards1
};
