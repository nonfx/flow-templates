<template>
	<f-div
		height="100%"
		overflow="hidden"
		state="default"
		class="left-column-hightlight"
		:data-column-open="open"
	>
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
		<f-div
			class="notch-right"
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
				class="notch-right-icon"
				:data-column-open="open"
			></f-icon>
		</f-div>
		<f-div
			:width="open ? '320px' : '0px'"
			:class="open ? 'column-expanded-right' : 'column-collapsed-right'"
			:border="open ? 'small solid secondary left' : 'none'"
			direction="column"
			:padding="open ? 'large' : 'none'"
			overflow="hidden"
			state="default"
		>
			<f-div overflow="scroll" direction="column" class="remove-scrollbar" height="hug-content">
				<f-accordion :open="open" @toggle="handleToggleAccordion($event, 1)" icon="chevron">
					<f-div gap="auto" width="90%">
						<f-div>
							<f-text variant="heading" size="medium" weight="bold">Item details</f-text></f-div
						>
						<f-icon source="i-plus"></f-icon>
					</f-div>
					<f-div slot="body" direction="column" padding="small none large none">
						<f-div
							v-for="(value, name) in metaData"
							direction="row"
							padding="small none"
							overflow="visible"
							gap="x-large"
						>
							<f-div width="33%"
								><f-text variant="para" size="small" weight="regular" state="secondary">{{
									name
								}}</f-text></f-div
							>
							<f-div
								><f-text variant="para" size="small" weight="regular">{{
									value.value
								}}</f-text></f-div
							>
						</f-div>
					</f-div>
				</f-accordion>
				<f-divider state="subtle" variant="dashed" size="medium"></f-divider>
				<f-accordion :open="open" @toggle="handleToggleAccordion($event, 2)" icon="chevron">
					<f-div gap="auto" width="90%">
						<f-div> <f-text variant="para" size="small" weight="bold">Owner</f-text></f-div>
						<f-icon source="i-plus"></f-icon>
					</f-div>
					<f-div slot="body" direction="column" width="260px">
						<f-div gap="medium" padding="small none large none">
							<f-pictogram source="VP" variant="circle"></f-pictogram>
							<f-div direction="column" gap="x-small">
								<f-text variant="heading" size="small" weight="medium">John Doe</f-text>
								<f-text variant="para" size="x-small" weight="regular" state="secondary"
									>john@noname.com</f-text
								>
							</f-div>
							<f-icon-button
								variant="block"
								category="packed"
								icon="i-close"
								size="x-small"
								state="inherit"
							></f-icon-button>
						</f-div>
					</f-div>
				</f-accordion>
				<f-divider state="subtle" variant="dashed" size="medium"></f-divider>
				<f-accordion :open="open" @toggle="handleToggleAccordion($event, 3)" icon="chevron">
					<f-div gap="auto" width="90%">
						<f-div> <f-text variant="para" size="small" weight="bold">Description</f-text></f-div>
						<f-icon source="i-edit"></f-icon>
					</f-div>
					<f-div slot="body" direction="column" width="260px" padding="small none large none">
						<f-text variant="para" size="small" weight="regular" state="secondary"
							>A detailed description of the left column goes here.
						</f-text>
					</f-div>
				</f-accordion>
				<f-divider state="subtle" variant="dashed" size="medium"></f-divider>
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
			openAccordion: { 1: true, 2: true, 3: true },
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
			},
			metaData: {
				["TYPE"]: { type: "text", value: "Table" },
				["NAME"]: { type: "text", value: "diabetes_apply_table_v2_2022_atest" },
				["ALIAS"]: { type: "text", value: "diabetes_apply_table_v2" },
				["CERTIFICATION"]: { type: "text", value: "verified" },
				["ROWS"]: { type: "text", value: "30,113,445" },
				["COLUMNS"]: { type: "text", value: "12" },
				["SIZE"]: { type: "text", value: "12 MB" },
				["CREATED"]: { type: "text", value: "timestamp" },
				["UPDATED"]: { type: "text", value: "timestamp" },
				["SENSITIVITY"]: { type: "text", value: "none" },
				["SECURITY"]: { type: "text", value: "none" }
			} as MetaDataLeftType
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
		},
		handleToggleAccordion(e: CustomEvent, index: 1 | 2 | 3) {
			console.log(e.detail.value);
			this.openAccordion[index] = e.detail.value;
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
export type ConnectArrayType = { icon: string; name: string }[];
export type EntryType = {
	type: "text";
	value: string | ConnectArrayType;
};
export type MetaDataLeftType = Record<string, EntryType>;
</script>

<style lang="scss">
.notch-right {
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.16);
	border-radius: 8px 0px 0px 8px;
	margin-top: 12px;
}

@keyframes slide-col-notch-right {
	from {
		right: 0px;
	}
	to {
		right: 310px;
	}
}

@keyframes slide-col-notch-left {
	from {
		right: 310px;
	}
	to {
		right: 0px;
	}
}

@media (max-width: 768px) {
	.notch-right {
		position: relative;
		z-index: 1000;
	}
	.notch-right[data-column-open="true"] {
		right: 310px;
		animation: 0.25s ease-out 0s 1 slide-col-notch-right;
	}
	.notch-right[data-column-open="false"] {
		right: 0px;
		animation: 0.25s ease-out 0s 1 slide-col-notch-left;
	}
}

.notch-right-icon[data-column-open="false"] {
	transform: rotate(0deg);
	transition: transform 0.25s linear;
}

.notch-right-icon[data-column-open="true"] {
	transform: rotate(180deg);
	transition: transform 0.25s linear;
}
.column-expanded-right {
	width: inherit;
}
@keyframes slide-column-right {
	from {
		width: 0px;
	}
	to {
		width: 320px;
	}
}
@media (max-width: 768px) {
	.column-expanded-right {
		position: fixed !important;
		right: 0px;
		animation: 0.25s ease-out 0s 1 slide-column-right;
		z-index: 1000;
		border-radius: 0px 8px 8px 0px;
	}
}
@media (min-width: 768px) {
	.column-expanded-right {
		animation: 0.25s ease-out 0s 1 slide-column-right;
	}
}
.column-collapsed-right {
	width: inherit;
}
@keyframes slide-column-left {
	from {
		width: 320px;
	}
	to {
		width: 0px;
	}
}
@media (max-width: 768px) {
	.column-collapsed-right {
		position: fixed !important;
		right: 0px;
		width: inherit;
		animation: 0.25s ease-out 0s 1 slide-column-left;
		z-index: 1000;
	}
}
@media (min-width: 768px) {
	.column-collapsed-right {
		width: inherit;
		animation: 0.25s ease-out 0s 1 slide-column-left;
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
	.left-column-hightlight[data-column-open="true"] {
		&::before {
			content: "";
			position: fixed;
			width: 100vw;
			height: 100vh;
			background-color: rgba(0, 0, 0, 0.5);
			z-index: 10;
			top: 0;
			left: 0;
		}
	}
}
</style>
