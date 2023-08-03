<template>
	<!--Start : multi-line slab -->
	<f-div width="382px" state="secondary" padding="medium" gap="medium">
		<!--Start : slab-left -->
		<f-div data-f-id="slab-left" height="hug-content" width="hug-content">
			<f-icon source="i-icon" size="x-large"></f-icon>
		</f-div>
		<!--End : slab-left -->
		<f-div width="fill-container" gap="x-small" direction="column">
			<!--Start : slab-middle  -->
			<f-div
				data-f-id="slab-middle"
				direction="row"
				gap="medium"
				align="middle-left"
				width="fill-container"
			>
				<f-text variant="heading" size="small" weight="bold" :inline="true">Heading</f-text>
				<f-div gap="medium" width="hug-content">
					<f-tag label="Label" size="small"></f-tag>
				</f-div>
			</f-div>
			<!--End : slab-middle  -->
			<!--Start : section-subtext  -->
			<f-text variant="para" size="medium" weight="regular" :inline="true">Description</f-text>
			<!--End : section-subtext -->
		</f-div>
		<!--START : slab-right -->
		<f-div data-f-id="slab-right" width="hug-content" gap="medium">
			<f-icon-button
				icon="i-icon"
				variant="block"
				category="packed"
				size="medium"
				state="inherit"
			></f-icon-button>
			<f-icon-button
				icon="i-icon"
				variant="block"
				category="packed"
				size="medium"
				state="inherit"
			></f-icon-button>
			<f-icon-button
				icon="i-icon"
				variant="block"
				category="packed"
				size="medium"
				state="inherit"
			></f-icon-button>
		</f-div>
		<!--End : slab-right -->
	</f-div>
	<!--End : multi-line slab -->
</template>
