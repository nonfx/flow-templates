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
					@click="changePage"
				></f-icon-button>

				<f-text variant="para" size="small" weight="bold">Time based schedule</f-text>
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
		<f-div direction="column" padding="medium" gap="medium">
			<f-text variant="para" size="medium" weight="regular" state="secondary"
				>Schedule this pipeline to</f-text
			>
			<f-select :options="runOptions" :value="runValue" :clear="false" @input="handleRunInput">
				<f-div slot="label">Run</f-div>
			</f-select>
			<f-div direction="column" gap="medium">
				<f-div><f-text variant="heading" size="x-small" weight="medium">On</f-text></f-div>
				<f-div direction="row" gap="medium">
					<f-button
						v-for="item in week"
						:key="item.id"
						:label="item.value"
						size="x-small"
						:state="selectedWeekDay === item.id ? 'primary' : 'neutral'"
						@click="selectedWeekDay = item.id"
					></f-button>
				</f-div>
			</f-div>
			<f-div direction="column" gap="medium">
				<f-div><f-text variant="heading" size="x-small" weight="medium">At</f-text></f-div>
				<f-div direction="row" gap="x-small">
					<f-div width="82px">
						<f-select :options="hours" :value="hourValue" :clear="false" @input="handleHourValue">
						</f-select>
					</f-div>
					<f-div width="82px">
						<f-select
							:options="minutes"
							:value="minuteValue"
							:clear="false"
							@input="handleMinuteValue"
						>
						</f-select>
					</f-div>
					<f-div width="82px">
						<f-select
							:options="meridiem"
							:value="meridiemValue"
							:clear="false"
							@input="handleMeridiemValue"
						>
						</f-select>
					</f-div>
				</f-div>
			</f-div>
			<f-div width="hug-content" gap="medium" align="middle-left">
				<f-div width="hug-content">
					<f-button
						:label="`TIME ZONE : ${timeZoneValue}`"
						variant="block"
						size="x-small"
						category="transparent"
						state="primary"
						@click="isTimeZoneOpen = true"
					></f-button
				></f-div>
				<f-icon-button
					v-if="isTimeZoneOpen"
					variant="block"
					category="packed"
					size="x-small"
					state="neutral"
					icon="i-close"
					@click="isTimeZoneOpen = false"
				></f-icon-button>
			</f-div>
			<f-select
				v-if="isTimeZoneOpen"
				:options="timeZones"
				:value="timeZoneValue"
				@input="handleSelectTimeZone"
				:clear="false"
			></f-select>
		</f-div>
		<f-div padding="x-large none none none">
			<f-button label="ADD SCHEDULE" variant="block" category="fill"></f-button>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

//only for demo purpose -- please remove this import
import { changeRoute } from "../../utils/utils";

export default defineComponent({
	data() {
		return {
			isTimeZoneOpen: false,
			runOptions: ["Every Day", "Every Week", "Every Month"],
			runValue: "Every Week",
			week: [
				{ id: "Sun", value: "S" },
				{ id: "Mon", value: "M" },
				{ id: "Tue", value: "T" },
				{ id: "Wed", value: "W" },
				{ id: "Thu", value: "T" },
				{ id: "Fri", value: "F" },
				{ id: "Sat", value: "S" }
			],
			selectedWeekDay: "Mon",
			hourValue: 1,
			minuteValue: 43,
			meridiemValue: "AM",
			meridiem: ["AM", "PM"],
			timeZones: [
				"SINGAPORE (UTC + 8:00)",
				"Fernando de Noronha (UTC - 2:00)",
				"Azores (UTC - 1:00)",
				"Cabo Verde Islands (UTC - 1:00)",
				"Dublin (UTC)"
			],
			timeZoneValue: "SINGAPORE (UTC + 8:00)",
			hours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
			minutes: [
				"00",
				"01",
				"02",
				"03",
				"04",
				"05",
				"06",
				"07",
				"08",
				"09",
				"10",
				11,
				12,
				13,
				14,
				15,
				16,
				17,
				18,
				19,
				20,
				21,
				22,
				23,
				24,
				25,
				26,
				27,
				28,
				29,
				30,
				31,
				32,
				33,
				34,
				35,
				36,
				37,
				38,
				39,
				40,
				41,
				42,
				43,
				44,
				45,
				46,
				47,
				48,
				49,
				50,
				51,
				52,
				53,
				54,
				55,
				56,
				57,
				58,
				59
			]
		};
	},
	methods: {
		handleRunInput(event: CustomEvent) {
			this.runValue = event.detail.value;
		},
		handleHourValue(event: CustomEvent) {
			this.hourValue = event.detail.value;
		},
		handleMinuteValue(event: CustomEvent) {
			this.minuteValue = event.detail.value;
		},
		handleMeridiemValue(event: CustomEvent) {
			this.meridiemValue = event.detail.value;
		},
		handleSelectTimeZone(event: CustomEvent) {
			this.timeZoneValue = event.detail.value;
		},
		//only for demo purpose
		changePage() {
			changeRoute("ft-configure-popover", "/story/templates-pipeline-header--template-08");
		}
	}
});

export type DataObject = { id: number; title: string; subTitle: string; icon: string };
export type Data = DataObject[];
</script>
