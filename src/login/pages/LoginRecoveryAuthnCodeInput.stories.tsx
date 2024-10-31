import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-recovery-authn-code-input.ftl" });

const meta = {
    title: "login/login-recovery-authn-code-input.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};
// Error case where the user enters an incorrect recovery code
export const WithError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (fieldName: string) => fieldName === "recoveryCodeInput",
                    get: (fieldName: string) => (fieldName === "recoveryCodeInput" ? "Invalid recovery code. Please try again." : undefined)
                },
                recoveryAuthnCodesInputBean: {
                    codeNumber: 3
                }
            }}
        />
    )
};
