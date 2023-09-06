import SystemIconPack from "@cldcvr/flow-system-icon/dist/types/icon-pack";
import ProductIconPack from "@cldcvr/flow-product-icon/dist/types/icon-pack";
import GcpIconPack from "@cldcvr/flow-gcp-icon/dist/types/icon-pack";
import AwsIconPack from "@cldcvr/flow-aws-icon/dist/types/icon-pack";

(async function () {
	await Promise.all([
		import("@cldcvr/flow-core"),
		import("@cldcvr/flow-form-builder"),
		import("@cldcvr/flow-table"),
		import("@cldcvr/flow-code-editor"),
		import("@cldcvr/flow-core/dist/style.css"),
		import("@cldcvr/flow-form-builder/dist/style.css"),
		import("@cldcvr/flow-table/dist/style.css"),
		import("@cldcvr/flow-code-editor/dist/style.css")
	]);
})();
import "./storybook.css";
import { ConfigUtil } from "@cldcvr/flow-core";

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
