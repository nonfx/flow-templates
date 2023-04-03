/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent } from "vue";

export default {
	title: "Vue Slab",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 100
		}
	}
};

export const SingleLineSlab01 = () =>
	defineComponent({
		template: /*html*/ `
          <f-div width="382px" state="secondary" padding="medium" gap="medium" align="middle-left">
             <!--Start : slab-left -->
            <f-div data-f-id="slab-left" height="hug-content" width="hug-content">
              <f-icon source="i-icon"></f-icon>
            </f-div>
             <!--SEnd : slab-left -->
             <!--Start : slab-middle  -->
            <f-div data-f-id="slab-middle" width="fill-container" gap="medium" align="middle-left">
              <f-text variant="heading" size="small" weight="bold" :inline="true">Heading</f-text>
              <f-div gap="medium" width="hug-content">
                <f-icon-button
                  icon="i-icon"
                  variant="block"
                  type="packed"
                  size="small"
                  state="inherit"
                ></f-icon-button>
                <f-icon-button
                  icon="i-icon"
                  variant="block"
                  type="packed"
                  size="small"
                  state="inherit"
                ></f-icon-button>
                <f-icon-button
                  icon="i-icon"
                  variant="block"
                  type="packed"
                  size="small"
                  state="inherit"
                ></f-icon-button>
              </f-div>
            </f-div>
            <!--End : slab-middle  -->
            <!--START : slab-right -->
            <f-div data-f-id="slab-right" width="hug-content" gap="medium">
              <f-icon-button
                icon="i-icon"
                variant="block"
                type="packed"
                size="medium"
                state="inherit"
              ></f-icon-button>
              <f-icon-button
                icon="i-icon"
                variant="block"
                type="packed"
                size="medium"
                state="inherit"
              ></f-icon-button>
              <f-icon-button
                icon="i-icon"
                variant="block"
                type="packed"
                size="medium"
                state="inherit"
              ></f-icon-button>
            </f-div>
            <!--End : slab-right -->
          </f-div>`
	});

export const text = () =>
	defineComponent({
		template: /*html*/ `<f-div padding="large" align="middle-center" direction="column">
        <!--Start : menu-list -->
          <f-div width="220px" state="secondary" padding="medium" gap="medium" border="small solid default bottom" clickable>
            <!--Start : menu-list-section-left : This data-f-id=\"menu-list-section-left\" is swappable, Find examples in \`Swappable items\`  -->
            <f-div data-f-id="menu-list-section-left" gap="medium" align="middle-left">
              <f-text variant="para" size="medium" weight="regular">Text</f-text>
            </f-div>
            <!--End : menu-list-section-left : This data-f-id=\"menu-list-section-left\" is swappable, Find examples in \`Swappable items\`  -->
          </f-div>
        <!--End : menu-list -->
        </f-div>`
	});

export const icon_text = () =>
	defineComponent({
		template: /*html*/ `<f-div padding="large" align="middle-center">
        <!--Start : menu-list -->
          <f-div width="220px" state="secondary" padding="medium" gap="medium" border="small solid default bottom" clickable>
            <!--Start : menu-list-section-left : This data-f-id=\"menu-list-section-left\" is swappable, Find examples in \`Swappable items\`  -->
            <f-div data-f-id="menu-list-section-left" gap="medium" align="middle-left">
                <f-icon size="small" source="i-icon"></f-icon>
              <f-text variant="para" size="medium" weight="regular">Text</f-text>
            </f-div>
            <!--End : menu-list-section-left : This data-f-id=\"menu-list-section-left\" is swappable, Find examples in \`Swappable items\`  -->
          </f-div>
        <!--End : menu-list -->
        </f-div>`
	});
export const text_icon_button = () =>
	defineComponent({
		template: /*html*/ `   <f-div padding="large" align="middle-center">
        <!--Start : menu-list -->
          <f-div width="220px" state="secondary" padding="medium" gap="medium" border="small solid default bottom" clickable>
            <!--Start : menu-list-section-left : This data-f-id=\"menu-list-section-left\" is swappable, Find examples in \`Swappable items\`  -->
            <f-div data-f-id="menu-list-section-left" gap="medium" align="middle-left">
              <f-text variant="para" size="medium" weight="regular">Text</f-text>
            </f-div>
            <!--End : menu-list-section-left : This data-f-id=\"menu-list-section-left\" is swappable, Find examples in \`Swappable items\`  -->
            <!--Start : menu-list-section-right : This data-f-id=\"menu-list-section-right\" is swappable, Find examples in \`Swappable items\`  -->
            <f-div data-f-id="menu-list-section-right" height="hug-content" width="hug-content">
                <f-icon-button icon="i-icon" variant="block" type="packed" state="inherit" size="small"></f-icon-button>
            </f-div>
            <!--End : menu-list-section-right : This data-f-id=\"menu-list-section-right\" is swappable, Find examples in \`Swappable items\`  -->
          </f-div>
        <!--End : menu-list -->
        </f-div>`
	});
export const icon_text_icon_button = () =>
	defineComponent({
		template: /*html*/ `   <f-div padding="large" align="middle-center">
        <!--Start : menu-list -->
          <f-div width="220px" state="secondary" padding="medium" gap="medium" border="small solid default bottom" clickable>
            <!--Start : menu-list-section-left : This data-f-id=\"menu-list-section-left\" is swappable, Find examples in \`Swappable items\`  -->
            <f-div data-f-id="menu-list-section-left" gap="medium" align="middle-left">
                <f-icon size="small" source="i-icon"></f-icon>
              <f-text variant="para" size="medium" weight="regular">Text</f-text>
            </f-div>
            <!--End : menu-list-section-left : This data-f-id=\"menu-list-section-left\" is swappable, Find examples in \`Swappable items\`  -->
            <!--Start : menu-list-section-right : This data-f-id=\"menu-list-section-right\" is swappable, Find examples in \`Swappable items\`  -->
            <f-div data-f-id="menu-list-section-right" height="hug-content" width="hug-content">
                <f-icon-button icon="i-icon" variant="block" type="packed" state="inherit" size="small"></f-icon-button>
            </f-div>
            <!--End : menu-list-section-right : This data-f-id=\"menu-list-section-right\" is swappable, Find examples in \`Swappable items\`  -->
          </f-div>
        <!--End : menu-list -->
        </f-div>`
	});
