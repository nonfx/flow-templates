/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfileDropdown1 from "./ProfileDropdown01.vue";
import ProfileDropdownFile1 from "./ProfileDropdown01.vue?raw";
import ProfileDropdown2 from "./ProfileDropdown02.vue";
import ProfileDropdownFile2 from "./ProfileDropdown02.vue?raw";
import { descriptions } from "../../utils/stories-title-description";

export default {
	title: "Patterns/Profile Dropdown",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 500
		}
	}
};

export const Pattern01 = {
	name: "ft-profile-dropdown-01",
	parameters: {
		docs: {
			source: {
				code: ProfileDropdownFile1
			}
		}
	},
	render: () => ProfileDropdown1
};

export const Pattern02 = {
	name: "ft-profile-dropdown-02",
	parameters: {
		docs: {
			source: {
				code: ProfileDropdownFile2
			},
			description: {
				component: descriptions["Patterns"]["profile-dropdown"]
			}
		}
	},
	render: () => ProfileDropdown2
};
