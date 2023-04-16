/* eslint-disable @typescript-eslint/no-explicit-any */
import type { StoryFn } from "@storybook/vue3";
import OnboardingSetup1 from "./OnboardingSetup01.vue";
import onboardingSetupFile1 from "./OnboardingSetup01.vue?raw";
import OnboardingSetup2 from "./OnboardingSetup02.vue";
import onboardingSetupFile2 from "./OnboardingSetup02.vue?raw";

export default {
	title: "Templates/Onboarding Popover",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 500
		}
	}
};

const Template01: StoryFn = () => {
	return OnboardingSetup1;
};

export const OnboardingSetup01 = Template01.bind({});

OnboardingSetup01.parameters = {
	docs: {
		source: {
			code: onboardingSetupFile1
		}
	}
};

const Template02: StoryFn = () => {
	return OnboardingSetup2;
};

export const OnboardingSetup02 = Template02.bind({});

OnboardingSetup02.parameters = {
	docs: {
		source: {
			code: onboardingSetupFile2
		}
	}
};
