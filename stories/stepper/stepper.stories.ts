import Stepper01 from "./Stepper01.vue";
import Stepper01Code from "./Stepper01.vue?raw";

export default {
	title: "Patterns/Stepper",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 100
		}
	}
};

export const Pattern01 = {
	name: "ft-stepper-01",
	parameters: {
		docs: {
			source: {
				code: Stepper01Code
			}
		}
	},
	render: () => Stepper01
};
