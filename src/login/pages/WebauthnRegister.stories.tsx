import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "webauthn-register.ftl" });

const meta = {
    title: "login/webauthn-register.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                isAppInitiatedAction: true
            }}
        />
    )
};

export const WithoutAppInitiatedAction: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                isAppInitiatedAction: false
            }}
        />
    )
};
