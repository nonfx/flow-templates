<template>
	<f-div padding="large">
		<!--Start : menu-list -->
		<f-div
			width="220px"
			state="secondary"
			padding="medium"
			gap="medium"
			border="small solid default bottom"
			clickable
		>
			<!--Start : menu-list-section-left -->
			<f-div data-f-id="menu-list-section-left" gap="medium" align="middle-left">
				<f-text variant="para" size="medium" weight="regular">Text</f-text>
			</f-div>
			<!--End : menu-list-section-left -->
			<!--Start : menu-list-section-right-->
			<f-div data-f-id="menu-list-section-right" height="hug-content" width="hug-content">
				<f-icon-button
					icon="i-icon"
					variant="block"
					category="packed"
					state="inherit"
					size="small"
				></f-icon-button>
			</f-div>
			<!--End : menu-list-section-right-->
		</f-div>
		<!--End : menu-list -->
	</f-div>
</template>
