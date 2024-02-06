import SystemIconPack from "@ollion/flow-system-icon/dist/types/icon-pack";
import ProductIconPack from "@ollion/flow-product-icon/dist/types/icon-pack";
import GcpIconPack from "@ollion/flow-gcp-icon/dist/types/icon-pack";
import AwsIconPack from "@ollion/flow-aws-icon/dist/types/icon-pack";
import "@ollion/flow-core";
import "@ollion/flow-form-builder";
import "@ollion/flow-table";
import "@ollion/flow-code-editor";

import "./storybook.css";
import { ConfigUtil } from "@ollion/flow-core";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds: { disable: true },
	//   themes: {
	//     default: "f-light",
	//     clearable: false,
	//     list: [
	//       { name: "f-dark", color: "#000" },
	//       { name: "f-light", color: "#fff" },
	//     ],
	//   },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	options: {
		storySort: {
			order: ["Introduction", "Patterns", "Templates"]
		}
	},
	previewTabs: {
		"storybook/docs/panel": { index: -1 }
	},
	viewMode: "docs",
	docs: {
		source: {
			language: "html"
		}
	}
};

export const decorators = [
	() => {
		window.onmessage = function (e) {
			if (e.data && typeof e.data === "string") {
				const message = JSON.parse(e.data);

				if (message.event.type === "storybook-addon-themes/change") {
					ConfigUtil.setConfig({ theme: message.event.args[0] });
				}
			}
		};
		ConfigUtil.setConfig({
			theme: "f-ollion-dark",
			iconPack: {
				...SystemIconPack,
				...ProductIconPack,
				...GcpIconPack,
				...AwsIconPack
			}
		});
		return {
			template: `<div style="color:var(--color-text-default);font-family:var(--flow-font);height:inherit;"><story/></div>`
		};
	}
];
