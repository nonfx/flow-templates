<template>
	<f-div
		height="hug-content"
		width="hug-content"
		variant="curved"
		gap="x-small"
		state="secondary"
		direction="column"
		align="middle-left"
		padding="large medium"
	>
		<f-text variant="heading" size="x-small" weight="medium" state="subtle">Risk level</f-text>
		<f-text class="custom-big-number" state="warning">High</f-text>
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
