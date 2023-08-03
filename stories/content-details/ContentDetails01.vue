<template>
	<f-div direction="column">
		<f-div state="subtle" height="60px">
			<f-div gap="medium" height="hug-content" align="middle-left">
				<f-pictogram source="💬" variant="hexagon" size="x-large"></f-pictogram>
				<f-div direction="column" gap="small">
					<f-div gap="medium" align="middle-left">
						<f-text variant="heading" size="small" weight="bold" :inline="true">Heading</f-text>
						<f-tag size="small" state="neutral" label="Label"></f-tag>
					</f-div>
					<f-text variant="para" size="small" weight="regular" :inline="true">Description</f-text>
				</f-div>
			</f-div>
			<f-div width="hug-content" align="middle-center" gap="medium">
				<f-div width="hug-content" gap="medium" align="middle-center" class="icon-menu-hide-mobile">
					<f-icon-button
						icon="i-star"
						variant="block"
						category="transparent"
						size="medium"
						state="inherit"
						@click="handleClickMenuItems('star')"
					></f-icon-button>
					<f-icon-button
						icon="i-app"
						variant="block"
						category="transparent"
						size="medium"
						state="inherit"
						@click="handleClickMenuItems('app')"
					></f-icon-button>
					<f-icon-button
						icon="i-share-2"
						variant="block"
						category="transparent"
						size="medium"
						state="inherit"
						@click="handleClickMenuItems('share')"
					></f-icon-button>
					<f-icon-button
						icon="i-download"
						variant="block"
						category="transparent"
						size="medium"
						state="inherit"
						@click="handleClickMenuItems('download')"
					></f-icon-button>
				</f-div>
				<f-button
					label="Button"
					variant="curved"
					@click="handleClickMenuItems('button')"
				></f-button>
				<f-icon-button
					icon="i-more"
					variant="block"
					category="transparent"
					size="medium"
					state="inherit"
					id="popoverTarget"
					@click="toggleMenu"
				></f-icon-button>
				<f-popover
					target="#popoverTarget"
					:open="menuPopoverOpen"
					@overlay-click="toggleMenu"
					size="small"
				>
					<f-div state="tertiary" direction="column">
						<!--Start : menu-list -->
						<f-div
							state="secondary"
							padding="medium"
							gap="medium"
							border="small solid default bottom"
							clickable
							v-for="item in [0, 1, 2]"
							:key="item"
							@click="handleClickMenu(item)"
						>
							<!--Start : menu-list-section-left -->
							<f-div data-f-id="menu-list-section-left" gap="medium" align="middle-left">
								<f-icon size="small" source="i-icon"></f-icon>
								<f-text variant="para" size="medium" weight="regular">Text {{ item }}</f-text>
							</f-div>
							<!--End : menu-list-section-left -->
						</f-div>
						<!--End : menu-list -->
						<!--Start : menu-list -->
						<f-div
							state="secondary"
							padding="medium"
							gap="medium"
							border="small solid default bottom"
							clickable
							class="menu-mobile-display"
							@click="handleClickMenuItems('star')"
						>
							<!--Start : menu-list-section-left -->
							<f-div data-f-id="menu-list-section-left" gap="medium" align="middle-left">
								<f-icon size="small" source="i-star"></f-icon>
								<f-text variant="para" size="medium" weight="regular">Text</f-text>
							</f-div>
							<!--End : menu-list-section-left -->
						</f-div>
						<!--End : menu-list -->
						<!--Start : menu-list -->
						<f-div
							state="secondary"
							padding="medium"
							gap="medium"
							border="small solid default bottom"
							clickable
							class="menu-mobile-display"
							@click="handleClickMenuItems('app')"
						>
							<!--Start : menu-list-section-left -->
							<f-div data-f-id="menu-list-section-left" gap="medium" align="middle-left">
								<f-icon size="small" source="i-app"></f-icon>
								<f-text variant="para" size="medium" weight="regular">Text</f-text>
							</f-div>
							<!--End : menu-list-section-left -->
						</f-div>
						<!--End : menu-list --><!--Start : menu-list -->
						<f-div
							state="secondary"
							padding="medium"
							gap="medium"
							border="small solid default bottom"
							clickable
							class="menu-mobile-display"
							@click="handleClickMenuItems('share')"
						>
							<!--Start : menu-list-section-left -->
							<f-div data-f-id="menu-list-section-left" gap="medium" align="middle-left">
								<f-icon size="small" source="i-share-2"></f-icon>
								<f-text variant="para" size="medium" weight="regular">Text</f-text>
							</f-div>
							<!--End : menu-list-section-left -->
						</f-div>
						<!--End : menu-list -->
						<!--End : menu-list --><!--Start : menu-list -->
						<f-div
							state="secondary"
							padding="medium"
							gap="medium"
							border="small solid default bottom"
							clickable
							class="menu-mobile-display"
							@click="handleClickMenuItems('download')"
						>
							<!--Start : menu-list-section-left -->
							<f-div data-f-id="menu-list-section-left" gap="medium" align="middle-left">
								<f-icon size="small" source="i-download"></f-icon>
								<f-text variant="para" size="medium" weight="regular">Text</f-text>
							</f-div>
							<!--End : menu-list-section-left -->
						</f-div>
						<!--End : menu-list -->
					</f-div>
				</f-popover>
			</f-div>
		</f-div>
		<f-div
			height="100vh"
			overflow="hidden"
			state="default"
			class="left-column-hightlight"
			:data-column-open="open"
		>
			<f-div overflow="scroll" state="default">
				<f-div overflow="visible" direction="column">
					<f-tab node-width="hug-content">
						<f-tab-node
							v-for="item in array"
							:key="item.id"
							:active="selectedTab === item.id ? true : false"
							:content-id="`tab-${item.title}`"
							@click="handleChangeTab(item.id)"
							><f-div width="100%" height="100%" align="middle-center" direction="column"
								><f-div align="middle-center" height="hug-content" width="hug-content">{{
									item.title
								}}</f-div></f-div
							></f-tab-node
						></f-tab
					>
					<f-tab-content v-for="item in array" :key="item.id" :id="`tab-${item.title}`"
						><f-div direction="column" width="100%" padding="large"
							><f-div
								><f-text variant="heading" size="x-large" weight="bold">{{
									item.title
								}}</f-text></f-div
							>
							<f-div>
								<f-text
									>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
									Ipsum has been the industry's standard dummy text ever since the 1500s, when an
									unknown printer took a galley of type and scrambled it to make a type specimen
									book. It has survived not only five centuries, but also the leap into electronic
									typesetting, remaining essentially unchanged. It was popularised in the 1960s with
									the release of Letraset sheets containing Lorem Ipsum passages, and more recently
									with desktop publishing software like Aldus PageMaker including versions of Lorem
									Ipsum.</f-text
								></f-div
							></f-div
						></f-tab-content
					>
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
				overflow="hidden"
				state="default"
				padding="none"
			>
				<f-tab node-width="hug-content">
					<f-tab-node
						v-for="item in rightArray"
						:key="item"
						:active="selectedRightTab === item ? true : false"
						:content-id="`tab-${item}`"
						@click="handleChangeRightTab(item)"
						><f-div width="100%" height="100%" align="middle-center" direction="column"
							><f-div align="middle-center" height="hug-content" width="hug-content">{{
								item
							}}</f-div></f-div
						></f-tab-node
					></f-tab
				>
				<f-tab-content v-for="item in rightArray" :key="item" :id="`tab-${item}`">
					<f-div
						overflow="scroll"
						direction="column"
						class="remove-scrollbar"
						height="hug-content"
						:padding="open ? 'large' : 'none'"
					>
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
								<f-div>
									<f-text variant="para" size="small" weight="bold">Description</f-text></f-div
								>
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
				</f-tab-content>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			array: [
				{ id: 0, title: "Data Preview" },
				{ id: 1, title: "Columns" },
				{ id: 2, title: "Queries" },
				{ id: 3, title: "Glossary" }
			],
			menuPopoverOpen: false,
			rightArray: ["Overview", "Other Details"],
			selectedTab: 0,
			selectedRightTab: "Overview",
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
		},
		handleChangeTab(num: number) {
			this.selectedTab = num;
		},
		handleChangeRightTab(item: string) {
			this.selectedRightTab = item;
		},
		toggleMenu() {
			this.menuPopoverOpen = !this.menuPopoverOpen;
		},
		handleClickMenu(item: number) {
			console.log("Menu Clicked", item);
		},
		handleClickMenuItems(str: string) {
			console.log(`${str} clicked menu!!`);
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
		z-index: 100 !important;
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
		z-index: 100 !important;
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
		z-index: 100 !important;
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

.menu-mobile-display {
	display: none !important;
}

@media (max-width: 570px) {
	.icon-menu-hide-mobile {
		display: none !important;
	}
	.menu-mobile-display {
		display: flex !important;
	}
}
</style>
