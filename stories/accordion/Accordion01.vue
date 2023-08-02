<template>
	<f-div direction="column">
		<f-accordion v-for="item in [1, 2]" :key="item">
			<f-div gap="medium">
				<f-icon :source="item === 1 ? 'i-bucket' : 'i-app'" size="small" state="default"></f-icon>
				<f-text variant="heading" size="small" weight="regular">Storage {{ item }}</f-text>
			</f-div>
			<f-div slot="body" width="100%" direction="column">
				<f-div padding="none none none small" direction="row" clickable>
					<f-divider class="accordion-template-divider" state="secondary"></f-divider>
					<f-div direction="column" padding="none">
						<f-div gap="medium" padding="medium x-large">
							<f-icon source="i-database" size="small" state="default"></f-icon>
							<f-text variant="heading" size="small" weight="regular" state="secondary"
								>Database {{ item }}</f-text
							>
						</f-div>
					</f-div>
				</f-div>
				<f-div padding="none none none small" direction="row" clickable>
					<f-divider class="accordion-template-divider" state="secondary"></f-divider>
					<f-div direction="column" padding="none">
						<f-div gap="medium" padding="medium x-large">
							<f-icon source="i-database" size="small" state="default"></f-icon>
							<f-text variant="heading" size="small" weight="regular" state="secondary"
								>Cache {{ item }}</f-text
							>
						</f-div>
					</f-div>
				</f-div>
			</f-div>
		</f-accordion>
	</f-div>
</template>
