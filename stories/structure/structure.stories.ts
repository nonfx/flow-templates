import Structure from "./Structure.vue";

export default {
	title: "Introduction",
	parameters: {
		previewTabs: {
			"storybook/docs/panel": { hidden: true }
		},
		viewMode: "story",
		controls: { disabled: true },
		actions: { disabled: true },
		toolbar: {
			title: { hidden: true },
			zoom: { hidden: true },
			eject: { hidden: true },
			copy: { hidden: true },
			fullscreen: { hidden: true },
			addons: { hidden: true },
			"storybook/background": { hidden: true },
			"storybook/viewport": { hidden: true }
		}
	}
};

export const Layout_and_Structure = () => ({
	name: "Layout & Structure",
	components: { Structure },
	template: `
    <div class="storybook-component">
      <structure />
    </div>
  `,
	viewMode: "story"
});
