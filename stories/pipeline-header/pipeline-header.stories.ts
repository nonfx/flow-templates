import PipelineHeader01 from "./PipelineHeader01.vue";
import file from "./PipelineHeader01.vue?raw";

import PipelineCard from "./PipelineCard.vue";
import PipelineCardFile from "./PipelineCard.vue?raw";

import PipelineName from "./PipelineName.vue";
import PipelineNameFile from "./PipelineName.vue?raw";

export default {
	title: "Templates/Pipeline Header",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 120
		}
	}
};

export const Template01 = {
	name: "ft-pipeline-header-01",
	parameters: {
		docs: {
			source: {
				code: file
			}
		}
	},
	render: () => PipelineHeader01
};

export const Template02 = {
	name: "ft-pipeline-name",
	parameters: {
		docs: {
			source: {
				code: PipelineNameFile
			}
		}
	},
	render: () => PipelineName
};

export const Template03 = {
	name: "ft-pipeline-card",
	parameters: {
		docs: {
			source: {
				code: PipelineCardFile
			}
		}
	},
	render: () => PipelineCard
};
