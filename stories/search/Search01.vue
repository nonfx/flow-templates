<template>
	<f-div align="middle-center">
		<f-div width="hug-content" align="middle-left" height="hug-content">
			<f-icon-button
				icon="i-search"
				variant="round"
				category="fill"
				state="neutral"
				size="small"
				class="search-icon-collapsed"
				v-if="expandedSearch === false"
				@click="searchExpand"
			></f-icon-button>
			<f-div
				width="168px"
				class="search-expanded"
				:data-expanded-search="expandedSearch"
				overflow="hidden"
				align="middle-left"
			>
				<f-search
					size="small"
					variant="round"
					placeholder="Enter search keyword"
					@focusout="closeExpandedSearch"
					:value="searchValue"
				></f-search>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			expandedSearch: false,
			searchValue: ""
		};
	},
	methods: {
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
