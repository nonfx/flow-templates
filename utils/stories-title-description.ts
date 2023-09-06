export type ElementType = Record<string, string>;
export type DescriptionType = Record<"Templates" | "Layouts" | "Patterns", ElementType>;

export const descriptions: DescriptionType = {
	["Templates"]: {
		["basic-layout"]: `Serves as a foundational structure or framework for organising and presenting your content within a digital application.`,
		accordion: `Provide possible use-cases of f-accordion component for your application.`
	},
	["Layouts"]: {
		["admin-layout"]: `
Here we present an Admin Layout Template for multiple uses:
1. The below story acts as the main working story and representation of mock.
2. All the other components can be used to build various sections of the admin template.
3. The components initiate with an underscore '_'. 
`,
		["content-details"]: `Provides you a fully functional page with a header and a 2 column content area with multiple tabs.`
	},
	["Patterns"]: {
		["header"]: `Provides a skeleton for the top element of your design`,
		["menu-list"]: `Displays a list of options or choices that users can select from.`,
		["profile-dropdown"]: `Provides users with quick access to their user profile and related actions or settings.`
	}
};
