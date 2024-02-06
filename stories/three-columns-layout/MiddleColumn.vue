<template>
	<f-div direction="column" gap="medium" overflow="scroll">
		<f-div height="hug-content">
			<f-text variant="heading" size="medium" weight="bold">List item 1</f-text>
			<f-icon-button icon="i-setting" state="neutral" category="packed"></f-icon-button>
		</f-div>
		<f-text state="secondary">
			Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
			Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
			mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat
			massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
		</f-text>
		<f-divider></f-divider>
		<f-div overflow="scroll" direction="column">
			<f-div
				v-for="header in 3"
				:key="header"
				height="hug-content"
				direction="column"
				gap="medium"
				padding="small none"
			>
				<f-div gap="medium" height="hug-content">
					<f-icon size="medium" source="i-app"></f-icon>
					<f-text size="medium" inline weight="medium" variant="heading"
						>Heading {{ header }}</f-text
					>
					<f-icon-button icon="i-plus" size="x-small" state="neutral"></f-icon-button>
				</f-div>
				<f-div
					v-for="item in 3"
					:key="item"
					height="hug-content"
					:border="item === 3 ? 'small solid secondary bottom' : 'small dashed secondary bottom'"
					padding="small"
					gap="small"
					align="top-left"
				>
					<f-icon source="i-icon"></f-icon>
					<f-div direction="column">
						<f-text variant="heading" weight="medium" size="small">Heading {{ item }}</f-text>
						<f-text size="small">Title</f-text>
					</f-div>
					<f-icon source="i-icon" size="large" state="secondary"></f-icon>
				</f-div>
			</f-div>
		</f-div>
	</f-div>
</template>
