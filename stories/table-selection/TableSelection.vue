<template>
	<f-div width="100%" height="100%">
		<f-popover open size="custom(80vw,80vh)">
			<f-div state="secondary" width="100%" height="100%" direction="column">
				<!--Start :top bar-->
				<f-div padding="medium" align="middle-left" gap="medium" height="hug-content">
					<f-text variant="para" size="small" weight="bold"> Add tables </f-text>
					<f-button label="help" state="neutral" size="x-small" variant="round"></f-button>
					<f-icon-button
						icon="i-close"
						state="neutral"
						size="small"
						category="packed"
					></f-icon-button>
				</f-div>
				<!--End :top bar-->
				<f-div>
					<f-div data-qa="left-section" direction="column" overflow="scroll" width="240px">
						<f-div height="hug-content" padding="medium" align="middle-left" gap="small">
							<f-icon source="i-database" size="small"></f-icon>
							<f-text variant="heading" inline size="small">Schema</f-text>
							<f-counter :label="24" size="medium"></f-counter>
						</f-div>
						<f-div height="hug-content" padding="medium">
							<f-search variant="round" placeholder="Search schema" size="small"></f-search
						></f-div>
						<f-div overflow="scroll" hide-scrollbar direction="column">
							<f-div
								align="middle-left"
								border="small solid secondary bottom"
								v-for="(schema, idx) in schemaList"
								height="hug-content"
								:key="schema"
								padding="medium"
								gap="medium"
								clickable
								:state="selectedSchema === idx ? 'tertiary' : 'transparent'"
								:selected="selectedSchema === idx ? 'notch-right' : 'none'"
							>
								<f-text size="small" inline>{{ schema }}</f-text>
								<f-counter v-if="selectedSchema === idx" :label="23" state="primary"></f-counter>
							</f-div>
						</f-div>
					</f-div>
					<f-divider></f-divider>
					<f-div data-qa="right-section" direction="column">
						<f-div height="hug-content" padding="large" gap="auto">
							<f-div width="hug-content" gap="small" align="middle-left">
								<f-icon source="i-table"></f-icon>
								<f-text variant="heading" size="small">Tables</f-text>
								<f-counter :label="10"></f-counter>
							</f-div>
							<f-div width="250px"
								><f-search placeholder="Search table" variant="round" size="small"></f-search
							></f-div>
						</f-div>
						<f-div data-qa="table-container">
							<f-table-schema
								selectable="multiple"
								variant="underlined"
								:data="tableData"
								:show-search-bar="false"
								sticky-cell-background="secondary"
								sticky-header
								@row-click="closeOptions"
							></f-table-schema>
							<f-popover
								@overlay-click="closeOptions"
								size="small"
								ref="columnOptions"
								:overlay="false"
							>
								<f-div direction="column" state="tertiary" height="100%" width="100%">
									<f-div
										clickable
										padding="medium"
										gap="medium"
										border="small solid default bottom"
										@click="closeOptions"
									>
										<f-icon state="danger" source="i-arrow-up"></f-icon>
										<f-text>High resource demand</f-text>
									</f-div>
									<f-div
										clickable
										padding="medium"
										gap="medium"
										border="small solid default bottom"
										@click="closeOptions"
									>
										<f-icon state="warning" source="i-arrow-up"></f-icon>
										<f-text>Balanced resource demand</f-text>
									</f-div>
									<f-div @click="closeOptions" clickable padding="medium" gap="medium">
										<f-icon state="success" source="i-arrow-up"></f-icon>
										<f-text>Low resource demand</f-text>
									</f-div>
								</f-div>
							</f-popover>
						</f-div>
						<f-div
							state="tertiary"
							gap="medium"
							data-qa="footer-section"
							height="hug-content"
							padding="medium"
							align="middle-left"
						>
							<f-text state="secondary">3 Tables selected </f-text>
							<f-button label="bulk edit" size="small" category="transparent"></f-button>
							<f-button label="save changes" size="small"></f-button>
						</f-div>
					</f-div>
				</f-div>
			</f-div>
		</f-popover>
	</f-div>
</template>
<script setup lang="ts">
import type { FPopover } from "@ollion/flow-core";
import { FTableSchemaData } from "@ollion/flow-table";
import { onMounted, ref } from "vue";
import { getSchemaList, getMockTableData } from "./mock-values";
const columnOptions = ref<FPopover | null>(null);
const schemaList = ref<string[]>(getSchemaList());
const tableData = ref<FTableSchemaData>({ header: {}, rows: [] });
const selectedSchema = ref(3);

const closeOptions = (_event: CustomEvent) => {
	if (columnOptions.value) {
		columnOptions.value.open = false;
	}
};
onMounted(() => {
	tableData.value = getMockTableData(100, columnOptions);
});
</script>
