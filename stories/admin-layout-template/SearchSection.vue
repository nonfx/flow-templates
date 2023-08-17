<template>
	<f-div
		padding="medium"
		gap="medium"
		direction="row"
		height="54px"
		align="middle-left"
		border="small solid subtle bottom"
	>
		<f-div width="hug-content" class="hide-in-mobile-view">
			<f-icon-button
				variant="round"
				size="small"
				icon="i-filter"
				:state="open ? 'primary' : 'neutral'"
				@click="$emit('toggle-filter')"
			></f-icon-button>
		</f-div>
		<f-divider state="subtle" class="hide-in-mobile-view"></f-divider>
		<f-div
			><f-search
				size="small"
				variant="round"
				:result="results"
				:value="searchValue"
				@input="handleInput"
			></f-search
		></f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { html } from "lit";

export default defineComponent({
	props: {
		open: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			searchValue: "",
			results: [
				{
					value: {
						title: "Storage / Database / RDBMS",
						subTitle: "Postgres",
						icon: "p-postgresql",
						version: "V11.0 to V.15.0",
						verified: true
					},
					template: function (value: unknown) {
						return html`<f-div gap="medium" padding="medium" align="top-center">
							<f-icon .source=${this.value.icon} size="large"></f-icon>
							<f-div gap="small" direction="column">
								<f-text
									variant="para"
									size="medium"
									weight="regular"
									highlight=${value}
									state="secondary"
									>${this.value.title}</f-text
								>
								<f-div gap="small" align="middle-center" width="hug-content">
									<f-text size="medium" variant="heading" weight="medium" ?inline=${true}
										>${this.value.subTitle}</f-text
									>
									<f-text
										variant="heading"
										size="x-small"
										weight="regular"
										state="subtle"
										?inline=${true}
									>
										${this.value.version}
									</f-text>
									${this.value.verified
										? html` <f-icon source="i-verified" size="small"></f-icon>`
										: null}
								</f-div>
							</f-div>
						</f-div>`;
					},
					toString: function () {
						return "Storage / Database / RDBMS";
					}
				},
				{
					value: {
						title: "Storage / Database / NoSQL",
						subTitle: "DynamoDB",
						icon: "aws-database-dynamodb",
						version: "V2017.11.29 to V2019.11.21",
						verified: true
					},
					template: function (value: unknown) {
						return html`<f-div gap="medium" padding="medium" align="top-center">
							<f-icon .source=${this.value.icon} size="large"></f-icon>
							<f-div gap="small" direction="column">
								<f-text
									variant="para"
									size="medium"
									weight="regular"
									highlight=${value}
									state="secondary"
									>${this.value.title}</f-text
								>
								<f-div gap="small" align="middle-center" width="hug-content">
									<f-text size="medium" variant="heading" weight="medium" ?inline=${true}
										>${this.value.subTitle}</f-text
									>
									<f-text
										variant="heading"
										size="x-small"
										weight="regular"
										state="subtle"
										?inline=${true}
									>
										${this.value.version}
									</f-text>
									${this.value.verified
										? html` <f-icon source="i-verified" size="small"></f-icon>`
										: null}
								</f-div>
							</f-div>
						</f-div>`;
					},
					toString: function () {
						return "Storage / Database / NoSQL";
					}
				}
			]
		};
	},

	methods: {
		handleInput(e: CustomEvent) {
			this.searchValue = e.detail?.value?.title;
		}
	}
});
</script>

<style lang="scss">
@media (max-width: 768px) {
	.hide-in-mobile-view {
		display: none !important;
	}
}
</style>
