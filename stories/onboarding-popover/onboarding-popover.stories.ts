/* eslint-disable @typescript-eslint/no-explicit-any */
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

export const Template01 = {
	name: "ft-onboarding-01",
	parameters: {
		docs: {
			source: {
				code: onboardingSetupFile1
			}
		}
	},
	render: () => OnboardingSetup1
};

export const Template02 = {
	name: "ft-onboarding-02",
	parameters: {
		docs: {
			source: {
				code: onboardingSetupFile2
			}
		}
	},
	render: () => OnboardingSetup2
};
