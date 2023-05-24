import RDBMSTable from "./RDBMSTable.vue";
import RDBMSTableFile from "./RDBMSTable.vue?raw";

export default {
	title: "Templates/RDBMS Table",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 120
		}
	}
};

export const Template01 = {
	name: "ft-rdbms-table",
	parameters: {
		docs: {
			iframeHeight: 700,
			source: {
				code: RDBMSTableFile
			}
		}
	},
	render: () => RDBMSTable
};
