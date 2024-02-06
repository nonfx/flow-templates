<template>
	<f-div direction="column" width="320px">
		<f-div height="hug-content" padding="large" border="small solid secondary bottom"
			><f-text variant="heading" size="medium" weight="medium">Evidence</f-text>
			<f-icon-button icon="i-more" size="medium" state="neutral" category="packed"></f-icon-button>
		</f-div>
		<f-div height="hug-content" state="warning" padding="small" align="middle-center" gap="small">
			<f-icon source="i-alert" state="inherit" size="small"></f-icon>
			<f-text state="inherit" size="small">Adding evidence for multiple statements</f-text>
		</f-div>
		<f-div padding="large" gap="small" direction="column">
			<f-div align="middle-left" height="hug-content" gap="small">
				<f-text size="small" inline>Adding eveidence for </f-text>
				<f-tag label="1.2" size="small" state="neutral"></f-tag>
				<f-tag label="1.3" size="small" state="neutral"></f-tag
			></f-div>
			<f-text-area placeholder="Justification/explanation goes here..."></f-text-area>
			<f-icon-button
				icon="i-paper-clip"
				variant="curved"
				category="outline"
				state="neutral"
				size="small"
			></f-icon-button>
			<f-div padding="small medium" state="secondary" variant="curved" height="hug-content">
				<f-text weight="bold"><a>isms-practice.pdf (2.5MB)</a></f-text>
				<f-icon-button
					icon="i-close"
					state="neutral"
					category="packed"
					size="small"
				></f-icon-button>
			</f-div>
			<f-div
				padding="small medium"
				state="secondary"
				variant="curved"
				height="hug-content"
				gap="small"
				align="middle-left"
			>
				<f-icon loading source="i-loader"></f-icon>
				<f-text state="subtle" weight="bold">logs.jpg (346K)</f-text>
				<f-icon-button
					icon="i-close"
					state="neutral"
					category="packed"
					size="small"
				></f-icon-button>
			</f-div>
		</f-div>
		<f-div padding="small" height="hug-content" align="middle-center">
			<f-button
				variant="block"
				state="success"
				category="outline"
				label="RESOLVE 2 STATEMENTS"
			></f-button>
		</f-div>
	</f-div>
</template>
