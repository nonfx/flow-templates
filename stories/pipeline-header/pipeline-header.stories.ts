import PipelineHeader01 from "./PipelineHeader01.vue";
import file from "./PipelineHeader01.vue?raw";

import PipelineCard from "./PipelineCard.vue";
import PipelineCardFile from "./PipelineCard.vue?raw";

import PipelineName from "./PipelineDetails.vue";
import PipelineNameFile from "./PipelineDetails.vue?raw";

import PipelineDetailsPopover from "./PipelineDetailsPopover.vue";
import PipelineDetailsPopoverFile from "./PipelineDetailsPopover.vue?raw";

import AddSourcePopover from "./AddSourcePopover.vue";
import AddSourcePopoverFile from "./AddSourcePopover.vue?raw";

import SelectSourcePopover from "./SelectSourcePopover.vue";
import SelectSourcePopoverFile from "./SelectSourcePopover.vue?raw";

import IngestionModePopover from "./IngestionModePopover.vue";
import IngestionModePopoverFile from "./IngestionModePopover.vue?raw";

import ConfigurePopover from "./ConfigurePopover.vue";
import ConfigurePopoverFile from "./ConfigurePopover.vue?raw";

import TimeSchedulePopover from "./TimeSchedulePopover.vue";
import TimeSchedulePopoverFile from "./TimeSchedulePopover.vue?raw";

import SourceDetails from "./SourceDetails.vue";
import SourceDetailsFile from "./SourceDetails.vue?raw";

export default {
	title: "Layouts/Pipeline Header",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 120
		}
	}
};

export const Template01 = {
	name: "pipeline-header-walkthrough",
	parameters: {
		docs: {
			iframeHeight: 500,
			source: {
				code: null
			},

			description: {
				component:
					"The pipeline header is a responsive interactive wizard for creating and managing an ingestion pipeline. The pipeline header template is a cumulative of Details, Source, Destination and mode of ingestion cards, which also pose as steps of the pipeline."
			}
		}
	},
	render: () => ({
		template: `<img src="gifs/pipeline-header.gif" width="950" height="480" />`
	})
};

export const Template02 = {
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

export const Template03 = {
	name: "_pipeline-details",
	parameters: {
		docs: {
			source: {
				code: PipelineNameFile
			}
		}
	},
	render: () => PipelineName
};

export const Template04 = {
	name: "_pipeline-card",
	parameters: {
		docs: {
			source: {
				code: PipelineCardFile
			}
		}
	},
	render: () => PipelineCard
};

export const Template05 = {
	name: "ft-pipeline-details-popover",
	parameters: {
		docs: {
			iframeHeight: 420,
			source: {
				code: PipelineDetailsPopoverFile
			}
		}
	},
	render: () => PipelineDetailsPopover
};

export const Template06 = {
	name: "ft-add-source-popover",
	parameters: {
		docs: {
			iframeHeight: 600,
			source: {
				code: AddSourcePopoverFile
			}
		}
	},
	render: () => AddSourcePopover
};

export const Template07 = {
	name: "ft-source-details",
	parameters: {
		docs: {
			iframeHeight: 700,
			source: {
				code: SourceDetailsFile
			}
		}
	},
	render: () => SourceDetails
};

export const Template08 = {
	name: "ft-select-source-popover",
	parameters: {
		docs: {
			iframeHeight: 400,
			source: {
				code: SelectSourcePopoverFile
			}
		}
	},
	render: () => SelectSourcePopover
};

export const Template09 = {
	name: "ft-ingestion-mode-popover",
	parameters: {
		docs: {
			iframeHeight: 400,
			source: {
				code: IngestionModePopoverFile
			}
		}
	},
	render: () => IngestionModePopover
};

export const Template10 = {
	name: "ft-configure-popover",
	parameters: {
		docs: {
			iframeHeight: 400,
			source: {
				code: ConfigurePopoverFile
			}
		}
	},
	render: () => ConfigurePopover
};

export const Template11 = {
	name: "ft-time-schedule-popover",
	parameters: {
		docs: {
			iframeHeight: 500,
			source: {
				code: TimeSchedulePopoverFile
			}
		}
	},
	render: () => TimeSchedulePopover
};
