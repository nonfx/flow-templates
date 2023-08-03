<template>
	<!--Start : single-line slab -->
	<f-div
		width="382px"
		state="secondary"
		padding="medium"
		gap="medium"
		align="middle-left"
		clickable
	>
		<!--Start : slab-left -->
		<f-div data-f-id="slab-left" height="hug-content" width="hug-content">
			<f-icon source="i-icon"></f-icon>
		</f-div>
		<!--SEnd : slab-left -->
		<!--Start : slab-middle  -->
		<f-div data-f-id="slab-middle" width="fill-container" gap="medium" align="middle-left">
			<f-text variant="heading" size="small" weight="bold" :inline="true">Heading</f-text>
			<f-div gap="medium" width="hug-content">
				<f-counter label="88"></f-counter>
			</f-div>
		</f-div>
		<!--End : slab-middle  -->
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
	<!--End : single-line slab -->
</template>
