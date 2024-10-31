// src/components/Button.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../ui/button";

// Define metadata for Storybook
const meta: Meta<ButtonProps> = {
    title: "Components/Button", // Title to organize your components
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "destructive", "outline", "secondary", "ghost", "link"]
        },
        size: {
            control: "select",
            options: ["default", "sm", "lg", "icon"]
        },
        asChild: {
            control: "boolean"
        },
        disabled: {
            control: "boolean"
        }
    },
    args: {
        children: "Button",
        variant: "default",
        size: "default",
        disabled: false
    }
};

export default meta;

type Story = StoryObj<ButtonProps>;

// Default button story
export const Default: Story = {};

// Destructive button story
export const Destructive: Story = {
    args: {
        variant: "destructive",
        children: "Delete"
    }
};

// Outline button story
export const Outline: Story = {
    args: {
        variant: "outline",
        children: "Outline"
    }
};

// Secondary button story
export const Secondary: Story = {
    args: {
        variant: "secondary",
        children: "Secondary"
    }
};

// Ghost button story
export const Ghost: Story = {
    args: {
        variant: "ghost",
        children: "Ghost"
    }
};

// Link button story
export const Link: Story = {
    args: {
        variant: "link",
        children: "Link"
    }
};

// Small button story
export const Small: Story = {
    args: {
        size: "sm",
        children: "Small Button"
    }
};

// Large button story
export const Large: Story = {
    args: {
        size: "lg",
        children: "Large Button"
    }
};

// Icon button story
export const Icon: Story = {
    args: {
        size: "icon",
        children: "🔔"
    }
};
