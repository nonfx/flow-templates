<template>
	<f-div height="100%" overflow="hidden" state="default">
		<div class="overlay" :data-column-open="open"></div>
		<f-div
			:width="open ? '300px' : '0px'"
			:class="open ? 'left-column-expanded' : 'left-column-collapsed'"
			:border="open ? 'small solid secondary right' : 'none'"
			direction="column"
			:padding="open ? 'none none none large' : 'none'"
			overflow="hidden"
			state="default"
		>
			<f-div
				direction="column"
				align="middle-center"
				height="94px"
				padding="medium medium medium none"
				gap="medium"
				overflow="hidden"
			>
				<f-div>
					<f-div align="middle-left">
						<f-text variant="heading" size="medium" weight="medium">List View</f-text>
					</f-div>
					<f-icon-button variant="round" size="small" icon="i-plus"></f-icon-button>
				</f-div>
				<f-div>
					<f-search
						variant="round"
						size="small"
						:value="leftColumnSearchValue"
						@input="filterLeftColumn"
					></f-search>
				</f-div>
			</f-div>
			<f-div overflow="scroll" direction="column" class="remove-scrollbar">
				<f-div
					:selected="selected === item.id ? 'notch-right' : 'none'"
					gap="medium"
					align="middle-left"
					height="66px"
					border="small solid secondary bottom"
					padding="medium"
					clickable
					v-for="item in filteredLeftColumnData"
					:key="item.id"
					@click="selectSlab(item.id)"
					overflow="hidden"
					state="default"
				>
					<f-pictogram variant="squircle" :source="item.picotogram" size="x-large"></f-pictogram>
					<f-div direction="column" gap="x-small" align="middle-left" overflow="hidden">
						<f-text variant="heading" size="medium" weight="medium">{{ item.title }}</f-text>
						<f-text variant="para" size="small" weight="regular" state="secondary">{{
							item.subTitle
						}}</f-text>
					</f-div>
				</f-div>
			</f-div>
		</f-div>
		<f-div
			class="notch-mobile"
			:data-column-open="open"
			width="16px"
			height="76px"
			align="middle-center"
			state="secondary"
			clickable
			@click="toggleLeftcolumn"
			overflow="hidden"
		>
			<f-icon
				source="i-notch-left"
				size="small"
				state="default"
				class="notch-icon"
				:data-column-open="open"
			></f-icon>
		</f-div>
		<f-div overflow="scroll" state="default">
			<f-div padding="medium large none large" direction="column" gap="medium" height="hug-content">
				<f-div gap="medium" direction="column" height="hug-content">
					<f-div gap="auto" align="middle-left">
						<f-text variant="heading" size="medium" weight="bold">{{
							selectedContent.title
						}}</f-text>
						<f-icon-button
							icon="i-setting"
							variant="block"
							category="packed"
							size="medium"
							state="neutral"
						></f-icon-button>
					</f-div>
					<f-text variant="para" size="small" weight="regular" state="secondary">{{
						selectedContent.description
					}}</f-text>
					<f-divider size="medium" state="secondary"></f-divider>
				</f-div>
				<f-div v-for="(value, key) in selectedContent.metaData" direction="column" :key="key">
					<f-div gap="medium" padding="large none medium none" align="middle-left">
						<f-icon size="medium" source="i-app"></f-icon>
						<f-text variant="heading" size="small" weight="medium">{{ key }}</f-text>
						<f-icon-button
							size="medium"
							icon="i-plus-fill"
							variant="block"
							category="packed"
							state="inherit"
						></f-icon-button>
					</f-div>
					<f-div
						padding="medium"
						border="small dashed secondary bottom"
						gap="medium"
						v-for="item in value"
						:key="item.title"
					>
						<f-icon source="i-icon" size="small" state="default"></f-icon>
						<f-div direction="column" gap="x-small">
							<f-text variant="heading" size="x-small" weight="medium">{{ item.title }}</f-text>
							<f-text variant="para" size="small" weight="regular" state="secondary">{{
								item.subTitle
							}}</f-text>
						</f-div>
						<f-icon-button
							icon="i-icon"
							variant="block"
							category="packed"
							size="medium"
							state="inherit"
						></f-icon-button>
					</f-div>
				</f-div>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			open: true,
			leftColumnData: [
				{ id: 1, picotogram: "💬", title: "List View 1", subTitle: "Subtext" },
				{ id: 2, picotogram: "🌐", title: "List View 2", subTitle: "Subtext" },
				{ id: 3, picotogram: "💻", title: "List View 3", subTitle: "Subtext" },
				{ id: 4, picotogram: "🗂", title: "List View 4", subTitle: "Subtext" }
			] as LeftColumnData,
			filteredLeftColumnData: [] as LeftColumnData,
			leftColumnSearchValue: "",
			selected: 1,
			showContent: {
				1: {
					title: "List Item 1",
					description:
						"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
					metaData: {
						["Heading 1"]: [
							{ title: "Sub Heading 1", subTitle: "Sub title" },
							{ title: "Sub Heading 2", subTitle: "Sub title" },
							{ title: "Sub Heading 3", subTitle: "Sub title" }
						],
						["Heading 2"]: [
							{ title: "Sub Heading 1", subTitle: "Sub title" },
							{ title: "Sub Heading 2", subTitle: "Sub title" },
							{ title: "Sub Heading 3", subTitle: "Sub title" }
						]
					}
				},
				2: {
					title: "List Item 2",
					description:
						"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
					metaData: {
						["Heading 1"]: [
							{ title: "Sub Heading 1", subTitle: "Sub title" },
							{ title: "Sub Heading 2", subTitle: "Sub title" },
							{ title: "Sub Heading 3", subTitle: "Sub title" }
						],
						["Heading 2"]: [
							{ title: "Sub Heading 1", subTitle: "Sub title" },
							{ title: "Sub Heading 2", subTitle: "Sub title" },
							{ title: "Sub Heading 3", subTitle: "Sub title" }
						],
						["Heading 3"]: [
							{ title: "Sub Heading 1", subTitle: "Sub title" },
							{ title: "Sub Heading 2", subTitle: "Sub title" },
							{ title: "Sub Heading 3", subTitle: "Sub title" }
						],
						["Heading 4"]: [
							{ title: "Sub Heading 1", subTitle: "Sub title" },
							{ title: "Sub Heading 2", subTitle: "Sub title" },
							{ title: "Sub Heading 3", subTitle: "Sub title" }
						]
					}
				},
				3: {
					title: "List Item 3",
					description:
						"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
					metaData: {
						["Heading 1"]: [
							{ title: "Sub Heading 1", subTitle: "Sub title" },
							{ title: "Sub Heading 2", subTitle: "Sub title" },
							{ title: "Sub Heading 3", subTitle: "Sub title" }
						],
						["Heading 2"]: [
							{ title: "Sub Heading 1", subTitle: "Sub title" },
							{ title: "Sub Heading 2", subTitle: "Sub title" },
							{ title: "Sub Heading 3", subTitle: "Sub title" }
						]
					}
				},
				4: {
					title: "List Item 4",
					description:
						"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
					metaData: {
						["Heading 1"]: [
							{ title: "Sub Heading 1", subTitle: "Sub title" },
							{ title: "Sub Heading 2", subTitle: "Sub title" },
							{ title: "Sub Heading 3", subTitle: "Sub title" }
						],
						["Heading 2"]: [
							{ title: "Sub Heading 1", subTitle: "Sub title" },
							{ title: "Sub Heading 2", subTitle: "Sub title" },
							{ title: "Sub Heading 3", subTitle: "Sub title" }
						]
					}
				}
			}
		};
	},
	mounted() {
		this.filteredLeftColumnData = [...this.leftColumnData];
	},
	computed: {
		selectedContent() {
			return this.showContent[this.selected as 1 | 2 | 3 | 4];
		}
	},
	methods: {
		toggleLeftcolumn() {
			this.open = !this.open;
		},
		selectSlab(id: number) {
			this.selected = id;
		},
		filterLeftColumn(e: CustomEvent) {
			this.leftColumnSearchValue = e.detail.value;
			this.filteredLeftColumnData = this.leftColumnData.filter(item =>
				item.title.toLowerCase().includes(e.detail.value.toLowerCase())
			);
		}
	}
});

export type LeftColumnDataObject = {
	id: number;
	title: string;
	subTitle: string;
	picotogram: string;
};
export type LeftColumnData = LeftColumnDataObject[];
</script>

<style lang="scss">
.notch-mobile {
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
	border-radius: 0px 8px 8px 0px;
	margin-top: 12px;
}

@keyframes slide-notch-right {
	from {
		left: 0px;
	}
	to {
		left: 300px;
	}
}

@keyframes slide-notch-left {
	from {
		left: 300px;
	}
	to {
		left: 0px;
	}
}

@media (min-width: 768px) {
	.notch-mobile {
		display: none;
	}
}

@media (max-width: 768px) {
	.notch-mobile {
		position: relative;
		z-index: 1000;
	}
	.notch-mobile[data-column-open="true"] {
		left: 300px;
		animation: 0.25s ease-out 0s 1 slide-notch-right;
	}
	.notch-mobile[data-column-open="false"] {
		left: 0px;
		animation: 0.25s ease-out 0s 1 slide-notch-left;
	}
}

.notch-icon[data-column-open="true"] {
	transform: rotate(0deg);
	transition: transform 0.25s linear;
}

.notch-icon[data-column-open="false"] {
	transform: rotate(180deg);
	transition: transform 0.25s linear;
}
.left-column-expanded {
	width: inherit;
}
@keyframes slide-right {
	from {
		width: 0px;
	}
	to {
		width: 300px;
	}
}
@media (max-width: 768px) {
	.left-column-expanded {
		position: fixed !important;
		animation: 0.25s ease-out 0s 1 slide-right;
		z-index: 1000;
		border-radius: 0px 8px 8px 0px;
		height: -webkit-fill-available !important;
	}
}

.left-column-collapsed {
	width: inherit;
}
@keyframes slide-left {
	from {
		width: 300px;
	}
	to {
		width: 0px;
	}
}
@media (max-width: 768px) {
	.left-column-collapsed {
		position: fixed !important;
		width: inherit;
		animation: 0.25s ease-out 0s 1 slide-left;
		z-index: 1000;
	}
}

.remove-scrollbar::-webkit-scrollbar {
	display: none;
}
.remove-scrollbar {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
@media (max-width: 768px) {
	.overlay[data-column-open="true"] {
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 10;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}
</style>
