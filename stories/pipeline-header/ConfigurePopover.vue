<template>
	<f-div width="432px" state="secondary" direction="column">
		<f-div padding="medium" gap="auto" align="middle-left" height="hug-content">
			<f-div gap="medium" height="hug-content" align="middle-left">
				<f-icon-button
					variant="block"
					category="packed"
					size="small"
					state="inherit"
					icon="i-arrow-left"
				></f-icon-button>
				<f-text variant="para" size="small" weight="bold">Configure</f-text>
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
		<f-div direction="column" padding="none">
			<f-tab>
				<f-tab-node
					:active="selectedTab === 'schedule'"
					content-id="schedule-tab"
					@click="selectedTab = 'schedule'"
					><f-div
						align="middle-center"
						height="hug-content"
						width="hug-content"
						padding="none large"
						><f-text variant="para" size="medium" weight="medium">Schedule</f-text></f-div
					></f-tab-node
				>
				<f-tab-node
					:active="selectedTab === 'details'"
					content-id="details-tab"
					@click="selectedTab = 'details'"
					><f-div
						align="middle-center"
						height="hug-content"
						width="hug-content"
						padding="none large"
						><f-text variant="para" size="medium" weight="medium">Details</f-text></f-div
					></f-tab-node
				>
			</f-tab>
			<f-tab-content id="schedule-tab">
				<f-div padding="large" direction="column">
					<f-div padding="none none medium none">
						<f-text variant="para" size="medium" weight="regular" state="secondary"
							>Define a schedule for this pipeline to ingest data or skip to begin ingestion
							immediately</f-text
						>
					</f-div>
					<f-divider state="secondary" size="medium" variant="dashed"></f-divider>
					<f-accordion :open="openTimeAccordion" @toggle="handleToggleTimeAccordion">
						<f-div width="90%" gap="auto" align="middle-left">
							<f-div align="middle-left">
								<f-text variant="para" size="small" weight="bold">Time Based</f-text></f-div
							>
							<f-div width="hug-content" align="middle-left">
								<f-icon-button
									icon="i-plus"
									variant="block"
									category="packed"
									state="inherit"
									@click="changePage"
								></f-icon-button
							></f-div>
						</f-div>

						<f-div slot="body" direction="column" width="370px" padding="none none small none">
							<f-div
								state="tertiary"
								variant="curved"
								height="44px"
								align="middle-left"
								padding="small"
								gap="auto"
							>
								<f-text variant="heading" size="small" weight="medium"
									>Every Monday at 3:36 PM SGT</f-text
								>
								<f-div width="hug-content" gap="medium" align="middle-left">
									<f-switch state="success"></f-switch>
									<f-icon-button
										icon="i-edit"
										variant="block"
										category="packed"
										state="inherit"
										size="small"
									></f-icon-button>
								</f-div>
							</f-div>
						</f-div>
					</f-accordion>
					<f-divider state="secondary" size="medium" variant="dashed"></f-divider>
					<f-accordion :open="openEventAccordion" @toggle="handleToggleEventAccordion">
						<f-div width="90%" gap="auto" align="middle-left">
							<f-div align="middle-left">
								<f-text variant="para" size="small" weight="bold">Event Based</f-text></f-div
							>
							<f-div width="hug-content" align="middle-left"
								><f-icon-button
									icon="i-plus"
									variant="block"
									category="packed"
									state="inherit"
								></f-icon-button
							></f-div>
						</f-div>

						<f-div slot="body" direction="column" width="370px"> </f-div>
					</f-accordion>
					<f-divider state="secondary" size="medium" variant="dashed"></f-divider>
				</f-div>
			</f-tab-content>
			<f-tab-content id="details-tab">
				<f-div direction="column" padding="large" gap="medium">
					<f-text variant="para" size="medium" weight="bold">Pipeline Details</f-text>
					<f-div direction="column">
						<f-div
							v-for="(value, name) in metaData"
							direction="row"
							padding="x-small none"
							overflow="visible"
						>
							<f-div width="33%"
								><f-text variant="para" size="small" weight="regular" state="secondary">{{
									name
								}}</f-text></f-div
							>
							<f-div
								><f-text variant="para" size="small" weight="regular">{{
									value.value
								}}</f-text></f-div
							>
						</f-div></f-div
					></f-div
				>
			</f-tab-content>
		</f-div>
		<f-div padding="x-large none none none">
			<f-button
				v-if="selectedTab === 'schedule'"
				label="SKIP, VERIFY DETAILS"
				variant="block"
				category="fill"
				@click="selectedTab = 'details'"
			></f-button>
			<f-button
				v-else
				label="SAVE AND SELECT TABLES"
				variant="block"
				category="fill"
				state="success"
			></f-button>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { changeRoute } from "../../utils/utils";

export default defineComponent({
	data() {
		return {
			openTimeAccordion: false,
			openEventAccordion: false,
			selectedTab: "schedule",
			metaData: {
				["NAME"]: { type: "text", value: "Pipeline Name" },
				["SOURCE"]: { type: "text", value: "source-name" },
				["DESTINATION"]: { type: "text", value: "destination-name" },
				["INGESTION MODE"]: { type: "text", value: "bin)" },
				["SCHEDULE"]: { type: "text", value: "None, run immediately" }
			}
		};
	},
	methods: {
		handleToggleTimeAccordion() {
			this.openTimeAccordion = !this.openTimeAccordion;
		},
		handleToggleEventAccordion() {
			this.openEventAccordion = !this.openEventAccordion;
		},
		timeScheduling(event: MouseEvent) {
			event.stopPropagation();
		},
		changePage(e: MouseEvent) {
			e.stopPropagation();
			changeRoute("ft-time-schedule-popover", "/story/templates-pipeline-header--template-09");
		}
	}
});

export type DataObject = { id: number; title: string; subTitle: string; icon: string };
export type Data = DataObject[];
</script>
