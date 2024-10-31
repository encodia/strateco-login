import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

// Create the KcPageStory for "login-reset-password.ftl"
const { KcPageStory } = createKcPageStory({ pageId: "login-reset-password.ftl" });

const meta = {
    title: "login/login-reset-password.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story with no email login allowed
export const Default: Story = {
    render: () => <KcPageStory />
};

// Story where login with email is allowed and email is used as username
export const WithEmailAsUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    loginWithEmailAllowed: true,
                    registrationEmailAsUsername: true,
                    duplicateEmailsAllowed: false
                },
                auth: {
                    attemptedUsername: ""
                },
                messagesPerField: {
                    existsError: (field: string) => false,
                    get: (field: string) => ""
                },
                url: {
                    loginAction: "/login",
                    loginUrl: "/login-url"
                }
            }}
        />
    )
};

// Story with an error message for username field
export const WithUsernameError: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    loginWithEmailAllowed: false,
                    registrationEmailAsUsername: false,
                    duplicateEmailsAllowed: false
                },
                auth: {
                    attemptedUsername: ""
                },
                messagesPerField: {
                    existsError: (field: string) => field === "username",
                    get: (field: string) => (field === "username" ? "Username is required" : "")
                },
                url: {
                    loginAction: "/login",
                    loginUrl: "/login-url"
                }
            }}
        />
    )
};
