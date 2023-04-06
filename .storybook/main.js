const litcss = require("rollup-plugin-postcss-lit");

module.exports = {
	stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"storybook-addon-themes",
		"@storybook/addon-storysource"
	],
	framework: "@storybook/vue3",
	core: {
		builder: "@storybook/builder-vite"
	},
	async viteFinal(config, { configType }) {
		// customize the Vite config here

		if (configType === "PRODUCTION") {
			config.base = "/templates/";
		}
		if (!config.optimizeDeps) {
			config.optimizeDeps = {};
		}
		config.optimizeDeps.include = [...(config.optimizeDeps?.include ?? []), "@storybook/vue3"];
		config.optimizeDeps.exclude = [...(config.optimizeDeps?.exclude ?? []), "lit", "lit-html"];
		config.plugins = [
			...config.plugins,
			{
				...litcss(),
				enforce: "post"
			}
		];
		// return the customized config
		return config;
	}
};
