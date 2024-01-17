// ./storybook/manager.ts
import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

const theme = create({
	base: "dark", // this will inherit the base properties of Storybooks'light theme

	// Base color
	colorSecondary: "deepskyblue",

	// UI
	appBg: "#202A36",
	appContentBg: "#FFFFFF",
	appBorderColor: "#5C708A",
	appBorderRadius: 4,

	// Typography
	fontBase: '"Open Sans", sans-serif',
	fontCode: "monospace",

	// Text colors
	textColor: "#FFFFFF",
	textInverseColor: "#FFFFFF",
	textMutedColor: "#666666",

	// Toolbar default and active colors
	barTextColor: "#FFFFFF",
	barSelectedColor: "deepskyblue",
	barBg: "#131920",
	barBorderColor: "#5C708A",

	// Form colors
	inputBg: "white",
	inputBorder: "white",
	inputTextColor: "black",
	inputBorderRadius: 4,

	// Brand assets
	brandTitle: "Flow Template Library",
	brandUrl: "https://flow.ollion.com/templates/index.html"
});

addons.setConfig({
	theme
});
