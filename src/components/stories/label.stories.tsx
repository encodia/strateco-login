import { Meta, StoryObj } from "@storybook/react";
import { Label } from "../ui/label";

// Define metadata for the Label component
const meta: Meta<typeof Label> = {
    title: "Components/Label",
    component: Label,
    tags: ["autodocs"],
    argTypes: {
        children: {
            control: "text"
        },
        className: {
            control: "text"
        }
    }
};

export default meta;

// Define storyObj for the default Label story
export const Default: StoryObj = {
    args: {
        children: "Label Text"
    }
};

// Define storyObj for a custom class variant
export const CustomClass: StoryObj = {
    args: {
        children: "Custom Label",
        className: "text-red-500" // Custom class to change label color
    }
};

// Define storyObj for a disabled label (simulating peer-disabled state)
export const Disabled: StoryObj = {
    args: {
        children: "Disabled Label",
        className: "peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    }
};
