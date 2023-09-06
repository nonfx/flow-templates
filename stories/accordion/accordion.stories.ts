/* eslint-disable @typescript-eslint/no-explicit-any */
import Accordion1 from "./Accordion01.vue";
import AccordionFile1 from "./Accordion01.vue?raw";
import { descriptions } from "../../utils/stories-title-description";

export default {
	title: "Templates/Accordion",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 300
		}
	}
};

export const Template01 = {
	name: "ft-accordion-01",
	parameters: {
		docs: {
			source: {
				code: AccordionFile1
			},
			description: {
				component: descriptions["Templates"]["accordion"]
			}
		}
	},
	render: () => Accordion1
};
