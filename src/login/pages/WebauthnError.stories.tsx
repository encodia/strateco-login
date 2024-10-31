import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "webauthn-error.ftl" });

const meta = {
    title: "login/webauthn-error.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
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
