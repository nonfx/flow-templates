<template>
	<f-div
		overflow="hidden"
		state="default"
		class="left-column-hightlight-cps"
		:data-column-open="open"
	>
		<f-div direction="column" padding="medium" gap="x-large" overflow="scroll">
			<f-div gap="medium" direction="column" height="hug-content">
				<f-div align="middle-left" height="hug-content">
					<f-div align="middle-left">
						<f-text variant="heading" size="small" weight="medium"> Usage Example </f-text>
					</f-div>
					<f-div
						height="28px"
						gap="medium"
						width="hug-content"
						variant="curved"
						border="small solid subtle"
						padding="small"
						align="middle-center"
						overflow="hidden"
					>
						<f-icon source="i-terminal-outline" size="x-small" state="subtle"></f-icon>
						<f-text variant="para" size="small" weight="regular" :inline="true" state="subtle"
							>cli</f-text
						>
						<f-divider state="subtle"></f-divider>
						<f-text variant="code" size="small" weight="regular" :inline="true"
							>> t8 i redis@7.2</f-text
						>
						<f-icon
							source="i-copy"
							size="x-small"
							state="primary"
							clickable
							@click="() => copyText('>t8 i redis@7.2')"
						></f-icon>
					</f-div>
				</f-div>
				<f-div height="150px" overflow="hidden">
					<f-code-editor
						:code="code"
						language="yaml"
						state="subtle"
						:comments="true"
						:copy-button="true"
						title="YAML"
						:show-line-numbers="undefined"
						:read-only="true"
					></f-code-editor>
				</f-div>
			</f-div>

			<f-div gap="medium" direction="column" height="hug-content">
				<f-div align="middle-left" height="hug-content" gap="medium">
					<f-text variant="heading" size="small" weight="medium"> Inputs </f-text>
					<f-text variant="heading" size="small" weight="regular" state="subtle">
						Each input has a defined range of values inherited from the platform
					</f-text>
				</f-div>
				<f-div border="small solid subtle" variant="curved" height="hug-content">
					<f-table
						:highlightSelected="false"
						:highlightHover="false"
						variant="underlined"
						size="small"
					>
						<f-trow slot="header">
							<f-tcell v-for="item in headers">
								<f-text variant="para" size="small" weight="regular" state="secondary">{{
									item
								}}</f-text></f-tcell
							>
						</f-trow>
						<f-trow v-for="values in rows">
							<f-tcell v-for="item in values">
								<f-text
									v-if="item.type === 'custom'"
									variant="code"
									size="small"
									weight="regular"
									state="success"
								>
									{{ item.value }}
									<f-text variant="code" size="small" weight="regular" :inline="true" state="danger"
										>*</f-text
									>
								</f-text>
								<f-switch v-else-if="item.type === 'switch'" size="small"></f-switch>
								<f-text v-else variant="para" size="small" weight="regular">{{
									item.value
								}}</f-text>
							</f-tcell>
						</f-trow>
					</f-table>
				</f-div>
			</f-div>

			<f-div gap="medium" direction="column" height="hug-content">
				<f-div align="middle-left" height="hug-content" gap="medium">
					<f-text variant="heading" size="small" weight="medium"> Outputs </f-text>
					<f-text variant="heading" size="small" weight="regular" state="subtle">
						Each input has a defined range of values inherited from the platform
					</f-text>
				</f-div>
				<f-div border="small solid subtle" variant="curved" height="hug-content">
					<f-table
						:highlightSelected="false"
						:highlightHover="false"
						variant="underlined"
						size="small"
					>
						<f-trow slot="header">
							<f-tcell v-for="item in headers">
								<f-text variant="para" size="small" weight="regular" state="secondary">{{
									item
								}}</f-text></f-tcell
							>
						</f-trow>
						<f-trow v-for="values in rows">
							<f-tcell v-for="item in values">
								<f-text
									v-if="item.type === 'custom'"
									variant="code"
									size="small"
									weight="regular"
									state="success"
								>
									{{ item.value }}
									<f-text variant="code" size="small" weight="regular" :inline="true" state="danger"
										>*</f-text
									>
								</f-text>
								<f-switch v-else-if="item.type === 'switch'" size="small"></f-switch>
								<f-text v-else variant="para" size="small" weight="regular">{{
									item.value
								}}</f-text>
							</f-tcell>
						</f-trow>
					</f-table>
				</f-div>
			</f-div>
		</f-div>
		<f-icon-button
			:icon="open ? 'i-close' : 'i-info-solo'"
			class="fab-toggle-cps"
			@click="toggleLeftcolumn"
		></f-icon-button>

		<f-div
			:width="open ? '320px' : '0px'"
			:class="open ? 'column-expanded-right-cps' : 'column-collapsed-right-cps'"
			:border="open ? 'small solid subtle left' : 'none'"
			direction="column"
			state="default"
			overflow="scroll"
		>
			<f-div
				direction="column"
				class="remove-scrollbar"
				height="hug-content"
				padding="medium"
				gap="x-large"
			>
				<IconsBox></IconsBox>
				<f-divider state="subtle"></f-divider>
				<Inventory></Inventory>
				<f-divider state="subtle"></f-divider>
				<RelatedItems></RelatedItems>
				<f-divider state="subtle"></f-divider>
				<Links></Links>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Inventory from "./Inventory.vue";
import Links from "./Links.vue";
import RelatedItems from "./RelatedItems.vue";
import IconsBox from "./IconsBox.vue";

export default defineComponent({
	data() {
		return {
			open: true,
			code: `- id: ledger_cache
  # Specify the type of the component as "cache.redis"
  type: cache.redis`,
			headers: [
				"Inputs",
				"Type",
				"Description",
				"Default values",
				"Config range",
				"Add"
			] as HeadersTableType,
			rows: [
				[
					{ type: "custom", value: "version" },
					{ type: "string", value: "String" },
					{ type: "string", value: "The version of Redis to use." },
					{ type: "string", value: "7.2" },
					{ type: "string", value: "6.0 to 7.2" },
					{ type: "switch", value: "" }
				],
				[
					{ type: "custom", value: "version" },
					{ type: "string", value: "String" },
					{ type: "string", value: "The version of Redis to use." },
					{ type: "string", value: "7.2" },
					{ type: "string", value: "6.0 to 7.2" },
					{ type: "switch", value: "" }
				]
			] as RowsTableType
		};
	},
	computed: {
		checkWindowSizeStatus(): boolean {
			return window.matchMedia("(max-width: 768px)").matches;
		}
	},
	mounted() {
		if (this.checkWindowSizeStatus) {
			this.open = false;
		}
	},
	methods: {
		toggleLeftcolumn() {
			this.open = !this.open;
		},
		copyText(text: string) {
			try {
				navigator.clipboard.writeText(text);
				console.log("Content copied to clipboard");
			} catch (err) {
				console.error("Failed to copy: ", err);
			}
		}
	},
	components: { Inventory, Links, RelatedItems, IconsBox }
});

export type HeadersTableType = string[];
export type Rows = { type: "custom" | "string" | "switch"; value?: string }[];
export type RowsTableType = Rows[];
</script>

<style lang="scss">
.fab-toggle-cps {
	display: none;
}
.fab-scroll-up {
	display: none;
}

@media (max-width: 1100px) {
	.fab-toggle-cps {
		display: block !important;
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 1400;
	}
	.fab-scroll-up {
		display: block !important;
		position: fixed;
		bottom: 70px;
		right: 20px;
		z-index: 100;
	}
}

.column-expanded-right-cps {
	width: inherit;
}
@keyframes slide-column-right-cps {
	from {
		width: 0px;
	}
	to {
		width: 320px;
	}
}
@media (max-width: 1100px) {
	.column-expanded-right-cps {
		position: fixed !important;
		right: 0px;
		animation: 0.25s ease-out 0s 1 slide-column-right-cps;
		z-index: 1300;
		border-radius: 0px 8px 8px 0px;
		top: 0;
	}
}
@media (min-width: 1100px) {
	.column-expanded-right-cps {
		animation: 0.25s ease-out 0s 1 slide-column-right-cps;
	}
}
.column-collapsed-right-cps {
	width: inherit;
}
@keyframes slide-column-left-cps {
	from {
		width: 320px;
	}
	to {
		width: 0px;
	}
}
@media (max-width: 1100px) {
	.column-collapsed-right-cps {
		position: fixed !important;
		right: 0px;
		width: inherit;
		animation: 0.25s ease-out 0s 1 slide-column-left-cps;
		z-index: 1300;
		top: 0;
	}
}
@media (min-width: 1100px) {
	.column-collapsed-right-cps {
		width: inherit;
		animation: 0.25s ease-out 0s 1 slide-column-left-cps;
	}
}
.remove-scrollbar::-webkit-scrollbar {
	display: none;
}
.remove-scrollbar {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
@media (max-width: 1100px) {
	.left-column-hightlight-cps[data-column-open="true"] {
		&::before {
			content: "";
			position: fixed;
			width: 100vw;
			height: 100vh;
			background-color: rgba(0, 0, 0, 0.5);
			z-index: 1200;
			top: 0;
			left: 0;
		}
	}
}
</style>
