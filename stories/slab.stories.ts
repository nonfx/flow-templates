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
    <f-div>
          <f-div width="382px" state="secondary" padding="medium" :gap="'medium'" align="middle-left">
             <!--Start : slab-left -->
            <f-div data-f-id="slab-left" height="hug-content" width="hug-content">
              <f-icon source="i-icon"></f-icon>
            </f-div>
             <!--SEnd : slab-left -->
             <!--Start : slab-middle  -->
            <f-div data-f-id="slab-middle" width="fill-container" :gap="'medium'" align="middle-left">
              <f-text variant="heading" size="small" weight="bold" :inline="true">Heading</f-text>
              <f-div :gap="'medium'" width="hug-content">
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
          </f-div>
          </f-div>`
	});

export const SingleLineSlab02 = () =>
	defineComponent({
		template: /*html*/ `
            <!--Start : single-line slab -->
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
                <f-counter label="88"></f-counter>
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
          </f-div>
        <!--End : single-line slab -->
    `
	});

export const SingleLineSlab03 = () =>
	defineComponent({
		template: /*html*/ `
            <!--Start : single-line slab -->
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
              <f-tag label="Label" size="small"></f-tag>
            </f-div>
            <!--End : slab-right -->
          </f-div>
        <!--End : single-line slab -->
    `
	});

export const SingleLineSlab04 = () =>
	defineComponent({
		template: /*html*/ `
            <!--Start : single-line slab -->
          <f-div width="382px" state="secondary" padding="medium" gap="medium" align="middle-left">
             <!--Start : slab-left -->
            <f-div data-f-id="slab-left" height="hug-content" width="hug-content">
              <f-icon source="i-icon"></f-icon>
            </f-div>
             <!--SEnd : slab-left -->
             <!--Start : slab-middle  -->
            <f-div data-f-id="slab-middle" width="fill-container" gap="medium" align="middle-left">
              <f-text variant="heading" size="small" weight="bold" :inline="true">Heading</f-text>
            </f-div>
            <!--End : slab-middle  -->
            <!--START : slab-right -->
            <f-div data-f-id="slab-right" width="hug-content" gap="medium">
              <f-text variant="para" size="small" weight="regular">Text</f-text>
            </f-div>
            <!--End : slab-right -->
          </f-div>
        <!--End : single-line slab -->
    `
	});

export const MultiLineSlab01 = () =>
	defineComponent({
		template: /*html*/ `
            <!--Start : multi-line slab -->
          <f-div width="382px" state="secondary" padding="medium" gap="medium">
            <!--Start : slab-left -->
            <f-div data-f-id="slab-left" height="hug-content" width="hug-content">
              <f-icon source="i-icon" size="x-large"></f-icon>
            </f-div>
            <!--End : slab-left -->
            <f-div width="fill-container" gap="x-small" direction="column">
            <!--Start : slab-middle  -->
            <f-div data-f-id="slab-middle" direction="row" gap="medium" align="middle-left" width="fill-container">
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
                <!--Start : section-subtext  -->
                <f-text variant="para" size="medium" weight="regular" :inline="true">Description</f-text>
                <!--End : section-subtext -->
            </f-div>
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
          </f-div>
        <!--End : multi-line slab -->
    `
	});

export const MultiLineSlab02 = () =>
	defineComponent({
		template: /*html*/ `
             <!--Start : multi-line slab -->
          <f-div width="382px" state="secondary" padding="medium" gap="medium">
            <!--Start : slab-left -->
            <f-div data-f-id="slab-left" height="hug-content" width="hug-content">
              <f-icon source="i-icon" size="x-large"></f-icon>
            </f-div>
            <!--End : slab-left -->
            <f-div width="fill-container" gap="x-small" direction="column">
            <!--Start : slab-middle  -->
            <f-div data-f-id="slab-middle" direction="row" gap="medium" align="middle-left" width="fill-container">
              <f-text variant="heading" size="small" weight="bold" :inline="true">Heading</f-text>
              <f-div gap="medium" width="hug-content">
               <f-counter label="88"></f-counter>
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
          </f-div>
        <!--End : multi-line slab -->
    `
	});

export const MultiLineSlab03 = () =>
	defineComponent({
		template: /*html*/ `
       <!--Start : multi-line slab -->
          <f-div width="382px" state="secondary" padding="medium" gap="medium">
            <!--Start : slab-left -->
            <f-div data-f-id="slab-left" height="hug-content" width="hug-content">
              <f-icon source="i-icon" size="x-large"></f-icon>
            </f-div>
            <!--End : slab-left -->
            <f-div width="fill-container" gap="x-small" direction="column">
            <!--Start : slab-middle  -->
            <f-div data-f-id="slab-middle" direction="row" gap="medium" align="middle-left" width="fill-container">
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
          </f-div>
        <!--End : multi-line slab -->
           `
	});
