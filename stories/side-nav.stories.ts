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
  //toggle sidebar (expand & collapse)
  toggleSidebar() {
    this.openSidebar = !this.openSidebar;
    // Important to call whenever state changes
    this.requestUpdate();
  }
  // to disable shadow dom
  createRenderRoot() {
    return this;
  }
  render() {
    return html`
      <!-- css snippet to be copied - start-->
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
        .remove-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .remove-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      </style>
      <!-- css snippet to be copied - end-->
      <!-- template snippet to be copied - start-->

      <f-div
        align="top-center"
        border="small solid default right"
        variant="curved"
        direction="column"
        height="100%"
        .width=${this.openSidebar ? "320px" : "55px"}
        class=${this.openSidebar ? "mobile-view-responsive" : "hide-in-mobile-view"}
        state="default"
        overflow="hidden"
      >
        <f-div
          padding="small"
          gap="small"
          .align=${this.openSidebar ? "middle-left" : "middle-center"}
          height="hug-content"
          .direction=${this.openSidebar ? "row" : "column"}
          state="default"
          overflow="hidden"
        >
          <f-icon
            source=${this.openSidebar ? "i-hamburger-close" : "i-hamburger"}
            size="large"
            @click=${this.toggleSidebar}
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
          overflow="scroll"
          class="remove-scrollbar"
        >
          ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => {
            return html` <f-div
              padding="medium"
              border="small solid default bottom"
              .align=${this.openSidebar ? "middle-left" : "middle-center"}
              height="hug-content"
              selected=${item === 0 && "notch-right"}
              .gap=${this.openSidebar && "medium"}
              state=${item === 0 && "secondary"}
            >
              <f-pictogram size="medium" source="💬" state="default" variant="square"></f-pictogram>
              ${this.openSidebar
                ? html` <f-text variant="heading" size="small" weight="medium"
                    >Heading ${item}</f-text
                  >`
                : null}
            </f-div>`;
          })}
        </f-div>
        <f-div
          .padding=${this.openSidebar ? "none" : "small"}
          direction="column"
          .align=${this.openSidebar ? "bottom-left" : "top-center"}
          height="hug-content"
          border="small solid default top"
          state="default"
        >
          ${[0, 1, 2].map((item) => {
            return html` <f-div
              padding="medium"
              .align=${this.openSidebar ? "middle-left" : "middle-center"}
              height="hug-content"
              gap="medium"
              id=${item}
              overflow="hidden"
            >
              <f-icon source="i-icon" size="large" state="secondary"></f-icon>
              ${this.openSidebar
                ? html` <f-text variant="heading" size="small" weight="medium">Heading</f-text>`
                : null}
            </f-div>`;
          })}
        </f-div>
      </f-div>
      <!--template snippet to be copied - end -->
    `;
  }
}

const Template: Story<Record<string, any>> = (_args: Record<string, any>) => {
  return html`<story-basic-side-nav></story-basic-side-nav>`;
};

export const basic = Template.bind({});
