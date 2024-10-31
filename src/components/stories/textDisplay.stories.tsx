// stories/TextDisplay.stories.tsx
import { Meta, StoryObj } from "@storybook/react";
import { TextDisplay } from "../ui/TextDisplay";

const meta: Meta<typeof TextDisplay> = {
    title: "Components/TextDisplay",
    component: TextDisplay,
    tags: ["autodocs"],
    argTypes: {
        children: { control: "text" },
        className: { control: "text" }
    }
};

export default meta;

type Story = StoryObj<typeof TextDisplay>;

// Default Story
export const Default: Story = {
    args: {
        children: "123456" // Example OTP
    }
};

// Custom Styled Story
export const CustomStyled: Story = {
    args: {
        children: "Custom Styled OTP",
        className: "text-red-500 bg-yellow-100"
    }
};
