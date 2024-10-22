const fs = require("fs");
const path = require("path");

const litcss = require("rollup-plugin-postcss-lit");

const copyDir = (src, dest, callback) => {
	const copy = (copySrc, copyDest) => {
		fs.readdir(copySrc, (err, list) => {
			if (err && callback) {
				callback(err);
				return;
			}
			list.forEach(item => {
				const ss = path.resolve(copySrc, item);
				fs.stat(ss, (err, stat) => {
					if (err && callback) {
						callback(err);
					} else {
						const curSrc = path.resolve(copySrc, item);
						const curDest = path.resolve(copyDest, item);

						if (stat.isFile()) {
							fs.createReadStream(curSrc).pipe(fs.createWriteStream(curDest));
						} else if (stat.isDirectory()) {
							fs.mkdirSync(curDest, { recursive: true });
							copy(curSrc, curDest);
						}
					}
				});
			});
		});
	};

	fs.access(dest, err => {
		if (err) {
			fs.mkdirSync(dest, { recursive: true });
		}
		copy(src, dest);
	});
};

copyDir("node_modules/@ollion/flow-code-editor/dist/assets", "assets");

module.exports = {
	stories: ["../stories/**/*.stories.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],

	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"storybook-addon-themes",
		"@storybook/addon-storysource",
		"@storybook/addon-mdx-gfm"
	],

	framework: {
		name: "@storybook/vue3-vite",
		options: {}
	},

	async viteFinal(config, { configType }) {
		// customize the Vite config here
		config.assetsInclude = ["assets"];
		if (configType === "PRODUCTION") {
			config.base = "/templates/";
		}
		if (!config.optimizeDeps) {
			config.optimizeDeps = {};
		}
		config.optimizeDeps.include = [
			...(config.optimizeDeps?.include ?? []),
			"@storybook/vue3",
			"react/jsx-runtime"
		];
		config.optimizeDeps.exclude = [...(config.optimizeDeps?.exclude ?? []), "lit", "lit-html"];
		config.resolve.alias = {
			...(config.resolve.alias ?? {}),
			"react/jsx-runtime": "react/jsx-runtime.js"
		};
		config.plugins = [
			...config.plugins,
			{
				...litcss(),
				enforce: "post"
			}
		];
		// return the customized config
		return config;
	},

	staticDirs: ["../assets"]
};
