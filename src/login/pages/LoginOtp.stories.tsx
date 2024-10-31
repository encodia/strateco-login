import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-otp.ftl" });

const meta = {
    title: "login/login-otp.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};

export const MultipleOTPCredentials: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                otpLogin: {
                    userOtpCredentials: [
                        { id: "credential1", userLabel: "Phone 1" },
                        { id: "credential2", userLabel: "Phone 2" },
                        { id: "credential3", userLabel: "Phone 3" },
                        { id: "credential4", userLabel: "Phone 4" },
                        { id: "credential5", userLabel: "Phone 5" },
                        { id: "credential6", userLabel: "Phone 6" }
                    ],
                    selectedCredentialId: "credential1"
                }
            }}
        />
    )
};

export const SingleOTPCredential: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                otpLogin: {
                    userOtpCredentials: [{ id: "credential1", userLabel: "Phone 1" }],
                    selectedCredentialId: "credential1"
                }
            }}
        />
    )
};

export const OtpFieldError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                otpLogin: {
                    userOtpCredentials: [{ id: "credential1", userLabel: "Phone 1" }]
                },
                messagesPerField: {
                    existsError: () => true,
                    get: () => "Invalid OTP"
                }
            }}
        />
    )
};
