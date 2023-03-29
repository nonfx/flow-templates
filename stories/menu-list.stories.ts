/* eslint-disable @typescript-eslint/no-explicit-any */
import { defineComponent } from "vue";

export default {
	title: "Vue Menu List",
	parameters: {
		docs: {
			inlineStories: false,
			iframeHeight: 300
		}
	}
};

export const Example = () =>
	defineComponent({
		data() {
			return {
				open: true
			};
		},
		methods: {
			toggle() {
				this.open = !this.open;
			}
		},
		template: /*html*/ `<f-div>
          <f-icon-button
            id="more"
            icon="i-more"
            variant="block"
            type="packed"
            @click="toggle"
          ></f-icon-button>
          <f-popover target="#more" :open="open" @overlay-click="toggle" size="small">
            <f-div direction="column">
    			<f-div v-for="item in [0,1,2,3,4]" :key="item" state="secondary" padding="medium" gap="medium" border="small solid default bottom" clickable>
    				<f-div data-f-id="menu-list-section-left" gap="medium" align="middle-left">
    				<f-icon size="small" source="i-icon"></f-icon>
    			<f-text variant="para" size="medium" weight="regular">Text</f-text>
    			</f-div>
    				<f-div data-f-id="menu-list-section-right" height="hug-content" width="hug-content">
    				<f-icon-button icon="i-icon" variant="block" type="packed" state="inherit" size="small"></f-icon-button>
    			</f-div>
    		</f-div>
            </f-div>
          </f-popover>
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
