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

export const Template03 = {
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

export const Template04 = {
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

export const Template05 = {
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

export const TemplateSourceDetails = {
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

export const Template06 = {
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

export const Template07 = {
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

export const Template08 = {
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

export const Template09 = {
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
