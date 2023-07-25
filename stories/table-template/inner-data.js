import { cellDivTemplate, cellTemplate, headerTemplate } from "./data";

export const innerTableData = {
	header: {
		tableName: {
			value: "Table Name",
			template: headerTemplate
		},
		status: {
			value: "Status/Duration",
			template: headerTemplate
		},
		started: {
			value: "Started",
			template: headerTemplate
		},
		ended: {
			value: "Ended",
			template: headerTemplate
		}
	},
	rows: [
		{
			id: 0,
			data: {
				tableName: {
					value: "school_students-repo_2022",
					template: cellTemplate
				},
				status: {
					value: "6h 30min",
					template: cellDivTemplate
				},
				started: {
					value: "18 Jun, 10:15 AM",
					template: cellTemplate
				},
				ended: {
					value: "18 Jun, 10:15 AM",
					template: cellTemplate,
					actions: [
						{
							icon: "i-history",
							onClick: e => {
								console.log(e);
							}
						},
						{
							icon: "i-more",
							onClick: e => {
								console.log(e);
							}
						}
					]
				}
			}
		},
		{
			id: 1,
			data: {
				tableName: {
					value: "school_students-repo_2023",
					template: cellTemplate
				},
				status: {
					value: "6h 30min",
					template: cellDivTemplate
				},
				started: {
					value: "18 Jun, 10:15 AM",
					template: cellTemplate
				},
				ended: {
					value: "18 Jun, 10:15 AM",
					template: cellTemplate,
					actions: [
						{
							icon: "i-history",
							onMouseOver: e => {
								console.log(e);
							}
						},
						{
							icon: "i-more",
							onClick: e => {
								console.log(e);
							}
						}
					]
				}
			}
		}
	]
};
