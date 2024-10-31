import React from "react"; // Add this import at the top
import type { Preview } from "@storybook/react";
import { themes } from "@storybook/theming";
import { ModeDecorator } from "./modeDecorator";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import "./../src/styles/global.css";
import { Provider } from "react-redux";

// export const decorators = [ModeDecorator];
const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        },
        viewport: {
            viewports: MINIMAL_VIEWPORTS,
            defaultViewport: "ipad"
        }
    }
};

export default preview;
