import type { StorybookConfig } from "@storybook/react-webpack5";

import path from "path";
const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/preset-create-react-app",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions"
    ],
    webpackFinal: async config => {
        // Add alias for TypeScript paths
        config.resolve = {
            ...config.resolve,
            alias: {
                "@": path.resolve(__dirname, "../src")
            }
        };
        return config;
    },
    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    },
    staticDirs: ["../public"]
};
export default config;
