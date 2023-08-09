<template>
	<f-div align="middle-center" width="500px">
		<f-search :result="results" :value="searchValue" @input="handleInput"></f-search>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { html } from "lit";

export default defineComponent({
	data() {
		return {
			expandedSearch: false,
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
					template: function (value) {
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
					template: function (value) {
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
		handleInput(e) {
			this.searchValue = e.detail?.value?.title;
		},
		searchExpand() {
			this.expandedSearch = true;
		},
		closeExpandedSearch() {
			if (this.expandedSearch) {
				this.expandedSearch = false;
			}
		}
	}
});
</script>

<!-- style custom css-->
<style lang="scss">
@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
.search-expanded {
	&[data-expanded-search="false"] {
		width: 0px !important;
		transition: width 0.15s ease-out !important;
	}
	&[data-expanded-search="true"] {
		width: 168px !important;
		transition: width 0.15s ease-out !important;
	}
}

.search-icon-collapsed {
	animation: fadeIn 1s;
}
</style>
