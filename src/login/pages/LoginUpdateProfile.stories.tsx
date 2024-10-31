import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

// Create KcPageStory for the "login-update-profile.ftl" page
const { KcPageStory } = createKcPageStory({ pageId: "login-update-profile.ftl" });

const meta = {
    title: "login/login-update-profile.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story without any errors or special conditions
export const Default: Story = {
    render: () => <KcPageStory />
};

// Story with App-Initiated Action where a cancel button is shown
export const AppInitiatedAction: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                isAppInitiatedAction: true
            }}
        />
    )
};
