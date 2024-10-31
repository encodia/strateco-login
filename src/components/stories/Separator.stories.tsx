// Separator.stories.tsx

import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Separator } from "../ui/separator"; // Adjust the import based on your project structure

// Meta object
const meta: Meta<typeof Separator> = {
    title: "Components/Separator",
    component: Separator,
    tags: ["autodocs"], // Enables automatic documentation
    argTypes: {
        orientation: {
            description: "The orientation of the separator (horizontal or vertical).",
            control: {
                type: "radio",
                options: ["horizontal", "vertical"]
            }
        },
        decorative: {
            description: "If true, the separator is for visual decoration only.",
            control: "boolean"
        },
        className: {
            description: "Custom class names for additional styles.",
            control: "text"
        }
    },
    parameters: {
        docs: {
            description: {
                component:
                    "The `Separator` component is used to visually separate content with a line, either horizontally or vertically."
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Separator>;

// Default story
export const Default: Story = {
    args: {
        orientation: "horizontal",
        decorative: true
    },
    render: args => (
        <div style={{ padding: "20px" }}>
            <div style={{ marginBottom: "10px" }}>Content above separator</div>
            <Separator {...args} />
            <div style={{ marginTop: "10px" }}>Content below separator</div>
        </div>
    )
};

// Vertical separator story
export const Vertical: Story = {
    args: {
        orientation: "vertical",
        decorative: true
    },
    render: args => (
        <div style={{ display: "flex", height: "100px", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>Left content</div>
            <Separator {...args} />
            <div style={{ marginLeft: "10px" }}>Right content</div>
        </div>
    )
};
