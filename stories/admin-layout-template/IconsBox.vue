<template>
	<f-div direction="column" gap="medium" height="hug-content">
		<f-text variant="heading" size="small" weight="medium" state="secondary">
			Compatible with
		</f-text>
		<f-div
			state="secondary"
			border="small solid subtle"
			variant="curved"
			direction="column"
			width="hug-content"
		>
			<f-div border="small solid subtle bottom" height="hug-content">
				<f-div
					v-for="item in headers"
					:border="item === 'Cloud' ? 'small solid subtle right' : 'none'"
					width="44px"
					height="30px"
					align="middle-center"
					><f-text variant="para" size="x-small" weight="medium">{{ item }}</f-text></f-div
				>
			</f-div>
			<f-div overflow="hidden" v-for="item in rows">
				<f-div border="small solid subtle right" width="44px" height="44px" align="middle-center"
					><f-icon-button
						variant="block"
						category="packed"
						size="medium"
						:icon="item.cloud"
						state="neutral"
					></f-icon-button
				></f-div>
				<f-div width="44px" height="44px" align="middle-center"
					><f-pictogram :source="item.dev" size="medium" variant="hexagon"></f-pictogram
				></f-div>
				<f-div width="44px" height="44px" align="middle-center"
					><f-pictogram :source="item.stage" size="medium" variant="hexagon"></f-pictogram
				></f-div>
				<f-div width="44px" height="44px" align="middle-center"
					><f-pictogram :source="item.prod" size="medium" variant="hexagon"></f-pictogram
				></f-div>
			</f-div>
		</f-div>
	</f-div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			headers: ["Cloud", "Dev", "Stage", "Prod"] as Headers,
			rows: [
				{ cloud: "p-aws-dark", dev: "🧰", stage: "⚙️", prod: "👑" },
				{ cloud: "p-gcp", dev: "🧰", stage: "⚙️", prod: "👑" },
				{ cloud: "p-azure", dev: "🧰", stage: "⚙️", prod: "👑" }
			] as RowsType
		};
	}
});

export type Headers = string[];
export type RowsType = { cloud: string; dev: string; stage: string; prod: string }[];
</script>
