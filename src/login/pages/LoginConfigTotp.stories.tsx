// TODO: TO Contribute to the main repo
import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-config-totp.ftl" });

const meta = {
    title: "login/login-config-totp.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Case
export const Default: Story = {
    render: () => <KcPageStory />
};

// With Manual Setup Mode
export const WithManualSetUp: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                mode: "manual"
            }}
        />
    )
};

// With TOTP Error
export const WithError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    get: (fieldName: string) => (fieldName === "totp" ? "Invalid TOTP" : undefined),
                    exists: (fieldName: string) => fieldName === "totp",
                    existsError: (fieldName: string) => fieldName === "totp",
                    printIfExists: <T,>(fieldName: string, x: T) => (fieldName === "totp" ? x : undefined)
                }
            }}
        />
    )
};

// With No TOTP Error
export const WithNoTOTPError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    get: (fieldName: string) => undefined, // No errors for TOTP
                    exists: () => false,
                    existsError: () => false,
                    printIfExists: <T,>(_fieldName: string, x: T) => undefined
                }
            }}
        />
    )
};

// With User Label Error
export const WithUserLabelError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    get: (fieldName: string) => (fieldName === "userLabel" ? "User label is required" : undefined),
                    exists: (fieldName: string) => fieldName === "userLabel",
                    existsError: (fieldName: string) => fieldName === "userLabel",
                    printIfExists: <T,>(fieldName: string, x: T) => (fieldName === "userLabel" ? x : undefined)
                }
            }}
        />
    )
};
// With isAppInitiatedAction true
export const WithAppInitiatedAction: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                isAppInitiatedAction: true // Simulating app-initiated action
            }}
        />
    )
};
export const WithTOTPAndUserLabelErrors: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    get: (fieldName: string) =>
                        fieldName === "totp" ? "Invalid TOTP" : fieldName === "userLabel" ? "User label is required" : undefined,
                    exists: (fieldName: string) => fieldName === "totp" || fieldName === "userLabel",
                    existsError: (fieldName: string) => fieldName === "totp" || fieldName === "userLabel",
                    printIfExists: <T,>(fieldName: string, x: T) => (fieldName === "totp" || fieldName === "userLabel" ? x : undefined)
                }
            }}
        />
    )
};
