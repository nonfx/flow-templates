<template>
	<f-div direction="column">
		<f-div state="subtle" direction="column" padding="large" gap="medium">
			<f-div gap="auto">
				<img src="./p-cloudcover-dark-full.svg" />
				<img src="./p-cloudcover-dark-full.svg" />
			</f-div>
			<f-div gap="x-small" direction="column">
				<f-text variant="heading" weight="medium" size="medium" state="primary"
					>Accounting engine compliance report</f-text
				>
				<f-text variant="heading" size="small" weight="regular" state="secondary"
					>August, 2023</f-text
				>
			</f-div>
		</f-div>
		<f-div padding="large" state="default" gap="x-large" direction="column">
			<f-div gap="small">
				<f-text variant="heading" size="x-small" weight="medium" state="secondary"
					>ACCOUNTING ENGINE</f-text
				>
				<f-text variant="heading" size="x-small" weight="regular" state="secondary"
					>(accounting-engine-1)</f-text
				>
			</f-div>
			<f-div gap="auto" padding="none medium">
				<f-div direction="column" gap="x-large" class="custom-report-width" width="450px">
					<f-div gap="small" direction="column">
						<f-text variant="heading" size="x-small" weight="medium" state="subtle">
							BELONGS TO
						</f-text>

						<f-div direction="column">
							<f-div
								v-for="(value, name) in metaData"
								direction="row"
								padding="small none"
								overflow="visible"
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
						</f-div></f-div
					>
					<f-div direction="column">
						<f-div
							v-for="(value, name) in metaData2"
							direction="row"
							padding="small none"
							overflow="visible"
						>
							<f-div width="33%"
								><f-text variant="para" size="small" weight="regular" state="subtle">{{
									name
								}}</f-text></f-div
							>
							<f-div direction="column" gap="small" align="middle-left">
								<f-div
									gap="x-small"
									v-for="item in (value.value as ConnectArrayType)"
									:key="item.name"
								>
									{{ item.icon }}
									<f-text :inline="true" variant="para" size="small" weight="medium">{{
										item.name
									}}</f-text>
								</f-div>
							</f-div>
						</f-div>
					</f-div>
				</f-div>
				<f-div direction="column" gap="medium" width="hug-content">
					<f-div
						height="hug-content"
						width="180px"
						variant="curved"
						gap="x-small"
						state="secondary"
						direction="column"
						align="middle-left"
						padding="large medium"
					>
						<f-text variant="heading" size="x-small" weight="medium" state="subtle"
							>Overall compliance score</f-text
						>
						<f-text class="custom-big-number" state="warning">90/143</f-text>
						<f-div gap="small">
							<f-icon source="i-arrow-down" size="x-small" state="danger"></f-icon>
							<f-text variant="para" size="small" weight="regular">8.0%</f-text>
						</f-div>
					</f-div>

					<f-div
						height="hug-content"
						width="180px"
						variant="curved"
						gap="x-small"
						state="secondary"
						direction="column"
						align="middle-left"
						padding="large medium"
					>
						<f-text variant="heading" size="x-small" weight="medium" state="subtle"
							>Risk level</f-text
						>
						<f-text class="custom-big-number" state="warning">High</f-text>
					</f-div>
				</f-div>
			</f-div>
			<f-divider state="subtle"></f-divider>
			<f-text variant="heading" size="x-small" weight="medium" state="secondary"
				>IN SCOPE REGULATIONS</f-text
			>
			<f-div padding="none medium" gap="x-large" direction="column">
				<f-div direction="column" gap="x-small" v-for="(value, name) in table">
					<f-text variant="heading" size="x-small" weight="medium" state="subtle">
						{{ name }}
					</f-text>
					<f-table
						:highlightSelected="false"
						:highlightHover="false"
						variant="underlined"
						size="small"
					>
						<f-trow slot="header">
							<f-tcell v-for="item in value.headers">
								<f-text variant="para" size="x-small" weight="bold" state="secondary">{{
									item
								}}</f-text></f-tcell
							>
						</f-trow>
						<f-trow v-for="values in value.rows">
							<f-tcell v-for="(item, index) in values">
								<f-div :class="index === 0 ? 'table-cell-custom' : ''">
									<f-text
										v-if="index === 0"
										variant="para"
										size="small"
										weight="regular"
										state="secondary"
										>{{ item }}</f-text
									>
									<f-text v-else variant="para" size="small" weight="medium">{{ item }}</f-text>
								</f-div>
							</f-tcell>
						</f-trow>
					</f-table>
				</f-div>
			</f-div>
			<f-divider state="subtle"></f-divider>
			<f-text variant="heading" size="x-small" weight="medium" state="secondary"
				>APPLICATION COMPONENTS</f-text
			>
			<f-div padding="none medium" gap="x-large">
				<f-div direction="column" gap="x-small" v-for="(value, name) in table2">
					<f-table
						:highlightSelected="false"
						:highlightHover="false"
						variant="underlined"
						size="small"
					>
						<f-trow v-for="values in value.rows">
							<f-tcell v-for="(item, index) in values">
								<f-div v-if="index === 0" gap="small">
									<f-icon source="i-circle" size="x-small" :state="item.icon"></f-icon>
									<f-text variant="para" size="small" weight="medium">{{ item.name }}</f-text>
								</f-div>
								<f-div v-else width="hug-content">
									<f-text variant="para" size="small" weight="medium" state="primary">VIEW</f-text>
								</f-div>
							</f-tcell>
						</f-trow>
					</f-table>
				</f-div>
			</f-div>
			<f-div direction="column" gap="medium">
				<f-text variant="heading" size="x-small" weight="medium" state="subtle">
					TESTED BEST PRACTICES
				</f-text>
				<f-div gap="medium">
					<f-div width="50%">
						<f-text variant="para" size="small" weight="regular" state="primary"
							>Release train</f-text
						>
					</f-div>
					<f-div>
						<f-text variant="para" size="small" weight="regular" state="primary"
							>AWS Compute Services</f-text
						>
					</f-div>
				</f-div>
				<f-div gap="medium">
					<f-div width="50%">
						<f-text variant="para" size="small" weight="regular" state="primary"
							>Amazon Elastic Kubernetes Service (EKS)</f-text
						>
					</f-div>
					<f-div>
						<f-text variant="para" size="small" weight="regular" state="primary">PostgreSQL</f-text>
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
			metaData: {
				["LOB"]: { type: "text", value: "CIB" },
				["Sub-LOB"]: { type: "text", value: "Equities" },
				["Department"]: { type: "text", value: "Equities" },
				["Team"]: { type: "text", value: "Singapore-Cash Equities" }
			} as MetaDataType,
			metaData2: {
				["Deployed at"]: { type: "icon-text", value: [{ name: "Singapore", icon: "🇸🇬" }] },
				["Serving"]: {
					type: "icon-text",
					value: [
						{ name: "Singapore", icon: "🇸🇬" },
						{ name: "India", icon: "🇮🇳" }
					]
				}
			} as MetaDataType,
			table: {
				["AUTHORITIES"]: {
					headers: ["Name", "Country"],
					rows: [
						["Monetary Authority of Singapore", "🇸🇬 Singapore"],
						["The Association of banks in Singapore", "🇸🇬 Singapore"],
						["Reserve Bank of India", "🇮🇳 India"]
					]
				},
				["COMPLIANCE OBLIGATIONS"]: {
					headers: ["Document name", "Country"],
					rows: [
						["Technology Risk Management Guidelines", "🇸🇬 Singapore"],
						["ABS Cloud Computing Implementation Guide 2.0", "🇸🇬 Singapore"],
						[
							"Guidelines on Information security, Electronic banking, Technology risk management and Cyber frauds",
							"🇮🇳 India"
						]
					]
				}
			},
			table2: {
				["Table1"]: {
					rows: [
						[{ icon: "warning", name: "EKS", link: "" }, { link: "" }],
						[{ icon: "warning", name: "EKS" }, { link: "" }],
						[{ icon: "warning", name: "EKS" }, { link: "" }]
					]
				},
				["Table2"]: {
					rows: [
						[{ icon: "warning", name: "EKS", link: "" }, { link: "" }],
						[{ icon: "warning", name: "EKS" }, { link: "" }],
						[{ icon: "warning", name: "EKS" }, { link: "" }]
					]
				}
			}
		};
	}
});

export type ConnectArrayType = { icon: string; name: string }[];
export type EntryType = {
	type: "text" | "icon-text";
	value: string | ConnectArrayType;
};
export type MetaDataType = Record<string, EntryType>;
</script>

<style lang="scss">
.custom-big-number {
	font-size: 36px !important;
	font-weight: 400 !important;
	line-height: 43px !important;
	letter-spacing: 0em !important;
}
.table-cell-custom {
	width: 300px !important;
}

@media (max-width: 768px) {
	.custom-report-width {
		width: 300px !important;
	}
}
</style>
