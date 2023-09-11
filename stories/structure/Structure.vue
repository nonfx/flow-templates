<template>
	<f-div direction="column" gap="x-large" padding="large">
		<f-div direction="column" gap="medium">
			<f-text variant="heading" size="x-large" weight="bold">Welcome to </f-text>
			<f-text variant="heading" size="large" weight="bold">Flow Template Library 🎉 </f-text>
		</f-div>
		<f-text variant="para" size="medium"
			>Flow UI ecosystem is divided into several logical groups. Flow Template Library is a part of
			this ecosystem which comprises of following sections:</f-text
		>
		<br />
		<f-div direction="column" gap="x-large" v-for="(value, key) in data">
			<template v-if="value.length > 0">
				<f-div gap="medium" direction="column">
					<f-text variant="heading" size="large">{{ key }}</f-text>
					<f-text variant="para" size="medium">{{ getLabelDesc(key.toLowerCase()) }}</f-text>
				</f-div>
				<f-grid :max-cell-width="222" gap="x-large">
					<f-div
						v-for="item in value"
						direction="column"
						@click="navigateToURL(item.title, key.toLowerCase())"
					>
						<f-div
							variant="curved"
							align="middle-center"
							class="image-container"
							state="default"
							clickable
							height="177px"
						>
							<img :src="item.img" class="custom-image-layout" />
						</f-div>
						<f-div
							padding="medium none"
							direction="column"
							gap="small"
							height="hug-content"
							class="click-text"
							><f-text variant="heading" size="medium" state="primary">{{
								hyphenToSpaceAndCapitalize(item.title)
							}}</f-text>
							<f-text variant="para" size="small">{{ descriptions[key][item.title] }}</f-text>
						</f-div>
					</f-div>
				</f-grid>
			</template>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import images from "./image-list.json";
import { updateURLParameter } from "../../utils/utils";
import { descriptions } from "../../utils/stories-title-description";

export default defineComponent({
	data() {
		return {
			data: images,
			descriptions: descriptions
		};
	},
	methods: {
		navigateToURL(name: string, key: string) {
			const parentWindow = window.parent.parent.document.defaultView;
			if (parentWindow) {
				parentWindow.location.href = updateURLParameter(
					parentWindow.location.href,
					"path",
					`/docs/${key}-${name}--${this.elementName(key)}`
				);
			}
		},
		elementName(key: string) {
			if (key === "templates") {
				return `template-01`;
			} else if (key === "patterns") {
				return `pattern-01`;
			} else {
				return `layout-01`;
			}
		},
		getLabelDesc(key: string) {
			if (key === "templates") {
				return `Templates are a combination of components and patterns.`;
			} else if (key === "patterns") {
				return `Patterns are a collection of components, guidelines, best practices, and basic interactions.`;
			} else {
				return `Layouts are a combination of patterns and templates.`;
			}
		},
		hyphenToSpaceAndCapitalize(text: string) {
			// Replace hyphens with spaces
			text = text.replace(/-/g, " ");

			// Split the text into words
			const words = text.split(" ");

			// Capitalize the first letter of each word
			for (let i = 0; i < words.length; i++) {
				if (words[i].length > 0) {
					words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
				}
			}

			// Join the words back into a single string
			return words.join(" ");
		}
	}
});
</script>

<style lang="scss">
.custom-image-layout {
	max-height: 100%;
	max-width: 100%;
}
.image-container {
	padding: 32px 0px 32px 0px !important;
}
.click-text {
	cursor: pointer;
}
/* Add your custom styles here */
</style>
