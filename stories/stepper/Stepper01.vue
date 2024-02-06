<template>
	<f-div align="middle-center" overflow="visible" gap="small">
		<f-div
			v-for="step in steps"
			:key="step.name"
			align="middle-center"
			width="hug-content"
			height="hug-content"
			gap="small"
			overflow="visible"
		>
			<f-div
				gap="small"
				overflow="visible"
				align="middle-center"
				width="hug-content"
				height="hug-content"
			>
				<f-icon-button
					:icon="step.icon.name"
					category="packed"
					:state="step.icon.state"
					:effect="step.status === 'ongoing' ? 'pulse' : undefined"
				></f-icon-button>
				<f-text :state="getTextState(step)">{{ step.name }}</f-text>
			</f-div>
			<f-icon state="secondary" source="i-arrow-right"></f-icon>
		</f-div>
		<f-button
			label="publish"
			size="small"
			category="outline"
			state="neutral"
			disabled
			icon-left="i-arrow-up"
		></f-button>
	</f-div>
</template>

<script setup lang="ts">
import { FIconButtonState } from "@ollion/flow-core";
import { onMounted, ref } from "vue";

export type Step = {
	name: string;
	icon: {
		name: string;
		state: FIconButtonState;
	};
	status: "pending" | "blocked" | "completed" | "ongoing" | "alert";
};

const steps = ref<Step[]>([]);

const getTextState = (step: Step) => {
	if (step.status === "completed") {
		return "success";
	}
	if (step.status === "ongoing") {
		return "default";
	}
	return "secondary";
};

onMounted(() => {
	steps.value.push({
		name: "Pending",
		icon: {
			name: "i-history",
			state: "warning"
		},
		status: "pending"
	});
	steps.value.push({
		name: "Blocked",
		icon: {
			name: "i-lock",
			state: "neutral"
		},
		status: "blocked"
	});
	steps.value.push({
		name: "Completed",
		icon: {
			name: "i-tick-fill",
			state: "success"
		},
		status: "completed"
	});
	steps.value.push({
		name: "Ongoing",
		icon: {
			name: "i-circle",
			state: "primary"
		},
		status: "ongoing"
	});
	steps.value.push({
		name: "Alert",
		icon: {
			name: "i-alert",
			state: "danger"
		},
		status: "alert"
	});
});
</script>
