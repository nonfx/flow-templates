<template>
	<!--Start : onboarding-popover -->
	<f-div width="432px" state="secondary" padding="medium" gap="x-large" direction="column">
		<f-text data-f-id="popover-header-section" variant="para" size="small" weight="bold"
			>Heading</f-text
		>
		<f-div data-f-id="popover-content-section" direction="column" gap="medium">
			<f-div width="fill-container" height="165px" state="subtle"></f-div>
			<f-text variant="para" size="medium" weight="regular"
				>A description of the process goes here. A description of the process goes here.</f-text
			>
			<f-text variant="para" size="medium" weight="regular">Steps to get started</f-text>
			<f-div v-for="item in [0, 1, 2]" padding="medium" gap="medium" clickable>
				<f-div height="hug-content" width="hug-content">
					<f-icon-button
						icon="i-icon"
						variant="round"
						type="outline"
						size="x-small"
						state="neutral"
					></f-icon-button>
				</f-div>
				<f-div width="fill-container" gap="x-small" direction="column">
					<f-div direction="row" gap="medium" align="middle-left">
						<f-text variant="heading" size="small" weight="medium" :inline="true">Heading</f-text>
						<f-div gap="medium" width="hug-content">
							<f-tag label="Label" size="small"></f-tag>
						</f-div>
					</f-div>
					<f-text variant="para" size="small" weight="regular" :inline="true">Description</f-text>
				</f-div>
				<f-div data-f-id="slab-section-right" width="hug-content" gap="medium">
					<f-icon-button
						icon="i-chevron-right"
						variant="block"
						category="packed"
						size="small"
						state="inherit"
					></f-icon-button>
				</f-div>
			</f-div>
		</f-div>
	</f-div>
	<!--End : onboarding-popover -->
</template>
