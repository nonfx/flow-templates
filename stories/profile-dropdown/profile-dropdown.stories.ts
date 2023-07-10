/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfileDropdown1 from "./ProfileDropdown01.vue";
import ProfileDropdownFile1 from "./ProfileDropdown01.vue?raw";
import ProfileDropdown2 from "./ProfileDropdown02.vue";
import ProfileDropdownFile2 from "./ProfileDropdown02.vue?raw";

export default {
	title: "Patterns/Profile Dropdown",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 500
		}
	}
};

export const Template01 = {
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

export const Template02 = {
	name: "ft-profile-dropdown-02",
	parameters: {
		docs: {
			source: {
				code: ProfileDropdownFile2
			}
		}
	},
	render: () => ProfileDropdown2
};
