import Structure from "./Structure.vue";

export default {
	title: "Introduction",
	parameters: {
		previewTabs: {
			"storybook/docs/panel": { hidden: true }
		},
		viewMode: "story"
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
