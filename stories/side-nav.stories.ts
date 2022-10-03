import { Story, Meta } from "@storybook/web-components";
import { LitElement } from "lit";
import { html } from "lit-html";
import { customElement } from "lit/decorators.js";

export default {
  title: "templates/Side-Nav",
} as Meta;

@customElement("story-basic-side-nav")
class BasicStoryElement extends LitElement {
  openSidebar = false;
  expandSidebar() {
    this.openSidebar = !this.openSidebar;
    // Important to call whenever state changes
    this.requestUpdate();
  }
  // to disable shadow dom
  createRenderRoot() {
    return this;
  }
  render() {
    return this.openSidebar
      ? html`
          <style>
            .mobile-view-responsive {
              width: inherit;
            }
            @keyframes slideInFromLeft {
              0% {
                transform: translateX(-80%);
              }
              100% {
                transform: translateX(0);
              }
            }
            @keyframes slide-right {
              from {
                margin-left: -10%;
              }
              to {
                margin-left: 0%;
              }
            }
            @media (max-width: 600px) {
              .mobile-view-responsive {
                width: 100% !important;
              }
            }
            @media (min-width: 600px) {
              .mobile-view-responsive {
                width: 320px !important;
                animation: 0.4s ease-out 0s 1 slide-right;
              }
            }
          </style>
          <f-div
            align="top-center"
            border="small solid default right"
            variant="curved"
            direction="column"
            height="100%"
            width="320px"
            class="mobile-view-responsive"
            sticky="top"
            state="default"
            overflow="hidden"
          >
            <f-div padding="small" gap="small" align="middle-left" height="hug-content">
              <f-icon
                source="i-hamburger-close"
                size="large"
                @click=${this.expandSidebar}
                clickable=${true}
              ></f-icon>
              <f-icon-button
                icon="i-icon"
                size="large"
                variant="round"
                type="transparent"
                state="primary"
              ></f-icon-button>
            </f-div>
            <f-div
              padding="none"
              direction="column"
              align="top-left"
              height="75vh"
              overflow="scroll"
            >
              ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
                return html` <f-div
                  padding="medium"
                  border="small solid default bottom"
                  align="middle-left"
                  height="hug-content"
                  selected=${item === 0 && "notch-right"}
                  gap="medium"
                  state=${item === 0 && "secondary"}
                >
                  <f-pictogram
                    size="large"
                    source="💬"
                    state="default"
                    variant="square"
                  ></f-pictogram>
                  <f-text variant="heading" size="small" weight="medium">Heading ${item}</f-text>
                </f-div>`;
              })}
            </f-div>
            <f-div
              padding="none"
              direction="column"
              align="bottom-left"
              height="hug-content"
              border="small solid default top"
              sticky="bottom"
              state="default"
            >
              <f-div padding="medium" align="middle-left" height="hug-content" gap="medium">
                <f-icon source="i-icon" size="large" state="secondary"></f-icon>
                <f-text variant="heading" size="small" weight="medium">Heading</f-text>
              </f-div>
              <f-div padding="medium" align="middle-left" height="hug-content" gap="medium">
                <f-icon source="i-icon" size="large" state="secondary"></f-icon>
                <f-text variant="heading" size="small" weight="medium">Heading</f-text>
              </f-div>
              <f-div padding="medium" align="middle-left" height="hug-content" gap="medium">
                <f-icon source="i-icon" size="large" state="secondary"></f-icon>
                <f-text variant="heading" size="small" weight="medium">Heading</f-text>
              </f-div>
            </f-div>
          </f-div>
        `
      : html`
          <style>
            .hide-in-mobile-view {
              width: inherit;
            }
            @keyframes slide-left {
              from {
                margin-left: 7%;
              }
              to {
                margin-left: 0%;
              }
            }
            @keyframes slideInFromLeft {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(-80%);
              }
            }
            @media (max-width: 600px) {
              .hide-in-mobile-view {
                display: none !important;
              }
            }
            @media (min-width: 600px) {
              .hide-in-mobile-view {
                width: inherit;
                animation: 0.4s ease-out 0s 1 slide-left;
              }
            }
          </style>
          <f-div
            align="top-center"
            border="small solid default right"
            variant="curved"
            direction="column"
            height="100%"
            width="hug-content"
            class="hide-in-mobile-view"
            overflow="hidden"
          >
            <f-div
              padding="small"
              gap="small"
              direction="column"
              align="top-center"
              height="hug-content"
              sticky="top"
              state="default"
            >
              <f-icon
                source="i-hamburger"
                size="large"
                @click=${this.expandSidebar}
                clickable=${true}
              ></f-icon>
              <f-icon-button
                icon="i-icon"
                size="large"
                variant="round"
                type="transparent"
                state="primary"
              ></f-icon-button>
            </f-div>
            <f-div
              padding="none"
              direction="column"
              align="top-center"
              height="80vh"
              overflow="scroll"
              state="default"
            >
              ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
                return html` <f-div
                  padding="medium"
                  border="small solid default bottom"
                  align="middle-center"
                  height="hug-content"
                  selected=${item === 0 && "notch-right"}
                >
                  <f-pictogram
                    size="large"
                    source="💬"
                    state="default"
                    variant="square"
                  ></f-pictogram
                ></f-div>`;
              })}
            </f-div>
            <f-div
              padding="small"
              gap="medium"
              direction="column"
              align="top-center"
              height="hug-content"
              border="small solid default top"
              sticky="bottom"
              state="default"
            >
              <f-icon source="i-icon" size="large" state="secondary"></f-icon>
              <f-icon source="i-icon" size="large" state="secondary"></f-icon>
              <f-icon source="i-icon" size="large" state="secondary"></f-icon>
            </f-div>
          </f-div>
        `;
  }
}

const Template: Story<Record<string, any>> = (_args: Record<string, any>) => {
  return html`<story-basic-side-nav></story-basic-side-nav>`;
};

export const basic = Template.bind({});
