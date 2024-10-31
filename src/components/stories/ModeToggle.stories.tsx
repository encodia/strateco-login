// src/stories/ModeToggle.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import { ModeToggle } from "../ui/mode-toggle"; // Adjust the path to your component

const meta: Meta<typeof ModeToggle> = {
    title: "Components/ModeToggle",
    component: ModeToggle,
    tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof ModeToggle>;

export const Default: Story = {
    render: () => <ModeToggle />
};
