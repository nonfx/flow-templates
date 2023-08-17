<template>
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
</template>

<style lang="scss">
.custom-big-number {
	font-size: 36px !important;
	font-weight: 400 !important;
	line-height: 43px !important;
	letter-spacing: 0em !important;
}
</style>
