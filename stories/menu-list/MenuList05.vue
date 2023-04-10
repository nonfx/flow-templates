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
				<f-pictogram source="AF" size="small" state="default" variant="circle"></f-pictogram>
				<f-div direction="column">
					<f-text variant="para" size="medium" weight="regular">Text</f-text>
					<f-text variant="para" size="x-small" weight="regular" state="secondary">Subtext</f-text>
				</f-div>
			</f-div>
			<!--End : menu-list-section-left -->
		</f-div>
		<!--End : menu-list -->
	</f-div>
</template>
