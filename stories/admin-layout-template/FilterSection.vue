<template>
	<f-div
		:width="open ? '300px' : '0px'"
		:class="open ? 'left-column-expanded-filter' : 'left-column-collapsed-filter'"
		:border="open ? 'small solid subtle right' : 'none'"
		direction="column"
		state="default"
		overflow="hidden"
	>
		<f-div padding="medium" gap="auto" height="hug-content" border="small solid subtle bottom">
			<f-div gap="medium" align="middle-left">
				<f-icon source="i-filter" size="small" state="subtle"></f-icon>
				<f-text variant="heading" size="small" weight="regular" state="subtle"
					>Filter by categories</f-text
				>
			</f-div>
			<f-div width="hug-content">
				<f-icon-button
					icon="i-close"
					variant="block"
					category="packed"
					size="small"
					@click="$emit('close-filter')"
					state="neutral"
				></f-icon-button>
			</f-div>
		</f-div>
		<f-div overflow="scroll">
			<f-div direction="column" height="hug-content">
				<template v-for="item in filterData" :key="item.id">
					<f-accordion :icon="item.accordion.length > 0 ? 'chevron' : 'none'">
						<f-div gap="medium">
							<f-icon :source="item.icon" size="small" state="subtle"></f-icon>
							<f-text variant="heading" size="small" weight="regular">{{ item.title }}</f-text>
						</f-div>
						<f-div slot="body" width="100%" direction="column" v-if="item.accordion.length > 0">
							<f-div
								padding="none none none small"
								direction="row"
								clickable
								state="default"
								v-for="obj in item.accordion"
							>
								<f-divider class="accordion-template-divider" state="subtle"></f-divider>
								<f-div direction="column" padding="none">
									<f-div gap="medium" padding="medium x-large">
										<f-icon :source="obj.icon" size="small" state="subtle"></f-icon>
										<f-text variant="heading" size="small" weight="regular" state="secondary">{{
											obj.title
										}}</f-text>
									</f-div>
								</f-div>
							</f-div>
						</f-div>
					</f-accordion>
				</template>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		open: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			filterData: [
				{
					id: 0,
					icon: "i-bucket",
					title: "Storage",
					accordion: [
						{ title: "Databse", icon: "i-database" },
						{ title: "Cache", icon: "i-database" }
					]
				},
				{
					id: 1,
					icon: "i-box",
					title: "All inventory",
					accordion: [
						{ title: "Databse", icon: "i-database" },
						{ title: "Cache", icon: "i-database" }
					]
				},
				{
					id: 2,
					icon: "i-globe",
					title: "Services",
					accordion: []
				},
				{
					id: 3,
					icon: "i-firewall",
					title: "Web application firewall",
					accordion: [
						{ title: "Databse", icon: "i-database" },
						{ title: "Cache", icon: "i-database" }
					]
				},
				{
					id: 4,
					icon: "i-box",
					title: "All inventory",
					accordion: [
						{ title: "Databse", icon: "i-database" },
						{ title: "Cache", icon: "i-database" }
					]
				},
				{
					id: 5,
					icon: "i-bucket",
					title: "Storage",
					accordion: [
						{ title: "Databse", icon: "i-database" },
						{ title: "Cache", icon: "i-database" }
					]
				}
			] as FilterData
		};
	}
});

export type AccordionType = { title: string; icon: string }[] | [];
export type FilterData = { id: number; icon: string; title: string; accordion: AccordionType }[];
</script>

<style lang="scss">
.left-column-expanded-filter {
	width: inherit;
}

@keyframes slide-right-filter {
	from {
		width: 0px;
	}
	to {
		width: 300px;
	}
}
@media (max-width: 768px) {
	.left-column-expanded-filter {
		position: fixed !important;
		z-index: 1500;
		border-radius: 0px 8px 8px 0px;
		height: 100%;
		top: 0;
		animation: 0.25s ease-out 0s 1 slide-right-filter;
	}
}
@media (min-width: 768px) {
	.left-column-expanded-filter {
		animation: 0.25s ease-out 0s 1 slide-right-filter;
	}
}
.left-column-collapsed-filter {
	width: inherit;
}
@keyframes slide-left-filter {
	from {
		width: 300px;
	}
	to {
		width: 0px;
	}
}
@media (max-width: 768px) {
	.left-column-collapsed-filter {
		position: fixed !important;
		width: inherit;
		animation: 0.25s ease-out 0s 1 slide-left-filter;
		z-index: 1500;
		top: 0;
	}
}
@media (min-width: 768px) {
	.left-column-collapsed-filter {
		width: inherit;
		animation: 0.25s ease-out 0s 1 slide-left-filter;
	}
}
.remove-scrollbar::-webkit-scrollbar {
	display: none;
}
.remove-scrollbar {
	-ms-overflow-style: none;
	scrollbar-width: none;
}
</style>
