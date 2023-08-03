<template>
	<f-div width="1200px" state="secondary" direction="column" height="684px">
		<f-div padding="medium" gap="auto" align="middle-left" height="hug-content">
			<f-div>
				<f-text variant="para" size="small" weight="bold">Select tables to ingest</f-text>
			</f-div>
			<f-div width="hug-content" align="middle-left">
				<f-button
					label="Help"
					variant="round"
					category="fill"
					size="x-small"
					state="neutral"
				></f-button>
				<f-icon-button
					icon="i-close"
					variant="block"
					categroy="packed"
					size="small"
					state="inherit"
				></f-icon-button>
			</f-div>
		</f-div>
		<f-div direction="row">
			<f-div direction="row" v-for="(value, name) in filteredData">
				<f-div direction="column" padding="none small">
					<f-div
						height="48px"
						width="fill-container"
						gap="medium"
						align="middle-left"
						padding="none medium"
					>
						<f-div width="hug-content" align="middle-left" v-if="name !== 'columns'">
							<f-checkbox
								size="medium"
								:value="checkColSelection(name)"
								@input="selectColumn($event, name)"
							></f-checkbox>
						</f-div>
						<f-div gap="medium" align="middle-left">
							<f-icon :source="value.icon" size="small"></f-icon>
							<f-text variant="heading" size="small" weight="bold">{{ value.title }}</f-text>
							<f-counter
								size="medium"
								:label="value.data.length"
								v-if="value.data.length > 0"
							></f-counter>
						</f-div>
						<f-div width="hug-content" align="middle-left">
							<f-icon-button
								icon="i-search"
								variant="round"
								category="fill"
								state="neutral"
								size="x-small"
								class="search-icon-collapsed"
								v-if="expandedSearch[name] === false"
								@click="searchExpand(name)"
							></f-icon-button>
							<f-div
								width="168px"
								class="search-expanded"
								:data-expanded-search="expandedSearch[name]"
								overflow="hidden"
								align="middle-left"
							>
								<f-search
									size="small"
									variant="round"
									placeholder="Enter search keyword"
									@focusout="closeExpandedSearch(name)"
									:value="searchValues[name]"
									@input="handleSearch($event, name)"
								></f-search>
							</f-div>
						</f-div>
					</f-div>
					<f-divider state="subtle"></f-divider>
					<f-div direction="column" overflow="scroll">
						<f-div
							direction="column"
							v-for="item in value.data"
							:key="item"
							height="hug-content"
							width="fill-container"
						>
							<f-div
								height="48px"
								width="fill-container"
								gap="medium"
								align="middle-left"
								padding="none medium"
								clickable
								:selected="currentSelected[name as 'schema'|'tables'] === item.id ? 'notch-right' : 'none'"
								@click="rowSelection(item.id, name as 'schema' | 'tables')"
							>
								<f-div width="hug-content" align="middle-left" v-if="name !== 'columns'">
									<f-checkbox
										size="medium"
										:value="checkIfSelected(item.id, name) ? 'checked' : 'unchecked'"
										@input="selectCheckbox($event, item.id, name)"
									></f-checkbox>
								</f-div>
								<f-div gap="medium" align="middle-left">
									<f-text variant="para" size="small" weight="regular">{{ item.title }}</f-text>
								</f-div>
								<f-div width="hug-content" align="middle-left" gap="medium">
									<f-text
										variant="para"
										size="x-small"
										weight="regular"
										state="subtle"
										v-if="name === 'tables'"
										>{{ item?.option }}</f-text
									>
									<f-text
										variant="para"
										size="x-small"
										weight="regular"
										state="subtle"
										v-if="name === 'columns'"
										>{{ item?.type }}</f-text
									>
									<f-icon
										source="i-chevron-right"
										state="subtle"
										size="x-small"
										clickable
										v-if="name !== 'columns'"
									></f-icon>
								</f-div>
							</f-div>
							<f-divider state="subtle"></f-divider>
						</f-div>
					</f-div>
				</f-div>
				<f-divider v-if="name !== 'columns'" state="subtle"></f-divider>
			</f-div>
		</f-div>
		<f-div
			state="default"
			height="hug-content"
			padding="small medium"
			:gap="footerSelection ? 'auto' : 'none'"
			:align="footerSelection ? 'middle-left' : 'middle-right'"
		>
			<f-div align="middle-left" v-if="footerSelection">
				<f-text variant="para" size="medium" weight="regular"
					><f-text v-if="selected['schema'].length > 0"
						>{{ selected["schema"].length }} Schema selected •&nbsp;
					</f-text>
					<f-text v-if="selected['tables'].length > 0">
						{{ selected["tables"].length }} Tables selected •</f-text
					>
				</f-text>
				<f-button
					label="DESELCT ALL"
					category="transparent"
					size="small"
					@click="removeSelection"
				></f-button>
			</f-div>
			<f-button label="NEXT" size="small"></f-button>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import _ from "lodash";
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			data: {
				["schema"]: {
					title: "Schema",
					icon: "i-database",
					data: [
						{ id: 1, title: "db_accessadmin" },
						{ id: 2, title: "db_backupoperator" },
						{ id: 3, title: "db_datareader" },
						{ id: 4, title: "db_ddladmin" },
						{ id: 5, title: "db_denydatareader" },
						{ id: 6, title: "db_owner" },
						{ id: 7, title: "db_accessadmin" },
						{ id: 8, title: "db_accessadmin" },
						{ id: 9, title: "db_accessadmin" },
						{ id: 10, title: "db_accessadmin" },
						{ id: 11, title: "db_accessadmin" },
						{ id: 12, title: "db_accessadmin" },
						{ id: 13, title: "db_accessadmin" },
						{ id: 14, title: "db_accessadmin" }
					]
				},
				["tables"]: {
					title: "Tables",
					icon: "i-table",
					data: [
						{ id: 1, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 2, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 3, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 4, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 5, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 6, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 7, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 8, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 9, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 10, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 11, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 12, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 13, title: "AdventureWorks_BuildingContracts", option: "Table" },
						{ id: 14, title: "AdventureWorks_BuildingContracts", option: "Table" }
					]
				},
				["columns"]: {
					title: "Columns",
					icon: "i-column",
					data: [
						{ id: 1, title: "BusinessEntityID", type: "VarChar" },
						{ id: 2, title: "BusinessEntityID", type: "VarChar" },
						{ id: 3, title: "BusinessEntityID", type: "VarChar" },
						{ id: 4, title: "BusinessEntityID", type: "VarChar" },
						{ id: 5, title: "BusinessEntityID", type: "VarChar" },
						{ id: 6, title: "BusinessEntityID", type: "VarChar" },
						{ id: 7, title: "BusinessEntityID", type: "VarChar" },
						{ id: 8, title: "BusinessEntityID", type: "VarChar" },
						{ id: 9, title: "BusinessEntityID", type: "VarChar" },
						{ id: 10, title: "BusinessEntityID", type: "VarChar" },
						{ id: 11, title: "BusinessEntityID", type: "VarChar" },
						{ id: 12, title: "BusinessEntityID", type: "VarChar" },
						{ id: 13, title: "BusinessEntityID", type: "VarChar" },
						{ id: 14, title: "BusinessEntityID", type: "VarChar" }
					]
				}
			} as DataType,
			filteredData: {} as DataType,
			selected: { schema: [], tables: [] } as SelectedDataType,
			currentSelected: { schema: 0, tables: 0 },
			expandedSearch: { schema: false, tables: false, columns: false },
			searchValues: { schema: "", tables: "", columns: "" }
		};
	},
	computed: {
		footerSelection() {
			return this.selected["schema"].length > 0 || this.selected["tables"].length > 0;
		}
	},
	mounted() {
		this.filteredData = _.cloneDeep(this.data);
	},
	methods: {
		checkIfSelected(id: number, scope: "tables" | "schema") {
			return this.selected[scope].includes(id);
		},
		selectCheckbox(event: CustomEvent, id: number, scope: "tables" | "schema") {
			if (event.detail.value === "checked") {
				this.selected[scope].push(id);
			} else {
				this.selected[scope] = this.selected[scope].filter(item => item !== id);
			}
		},
		rowSelection(id: number, scope: "tables" | "schema") {
			this.currentSelected[scope] = id;
		},
		checkColSelection(scope: Scopes) {
			return this.selected[scope as LimitedScopes].length === this.data[scope].data.length
				? "checked"
				: this.selected[scope as LimitedScopes].length === 0
				? "unchecked"
				: "indeterminate";
		},
		selectColumn(event: CustomEvent, scope: Scopes) {
			if (event.detail.value === "checked") {
				this.selected[scope as LimitedScopes] = this.data[scope].data.map(item => item.id);
			} else {
				this.selected[scope as LimitedScopes] = [];
			}
		},
		removeSelection() {
			this.selected["tables"] = [];
			this.selected["schema"] = [];
		},
		searchExpand(scope: Scopes) {
			this.expandedSearch[scope] = true;
		},
		closeExpandedSearch(scope: Scopes) {
			if (this.expandedSearch[scope]) {
				this.expandedSearch[scope] = false;
			}
		},
		handleSearch(event: CustomEvent, scope: Scopes) {
			this.searchValues[scope] = event.detail.value;
			if (event.detail.value.length > 0) {
				this.filteredData[scope].data = this.data[scope].data.filter(item =>
					item.title.toLowerCase().includes(event.detail.value.toLowerCase())
				);
			} else {
				this.filteredData[scope] = _.cloneDeep(this.data[scope]);
			}
		}
	}
});

export type Scopes = "schema" | "tables" | "columns";
export type LimitedScopes = "schema" | "tables";
export type SelectedDataType = { schema: number[]; tables: number[] };
export type DataArray = { id: number; title: string; option?: string; type?: string }[];
export type DataObject = { title: string; icon: string; data: DataArray };
export type DataType = Record<Scopes, DataObject>;
</script>

<style lang="scss">
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.search-expanded {
	&[data-expanded-search="false"] {
		width: 0px !important;
		transition: width 0.15s ease-out !important;
	}
	&[data-expanded-search="true"] {
		width: 168px !important;
		transition: width 0.15s ease-out !important;
	}
}

.search-icon-collapsed {
	animation: fadeIn 1s;
}
</style>
