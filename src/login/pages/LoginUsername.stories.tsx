import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-username.ftl" });

const meta = {
    title: "login/login-username.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story with no special configurations
export const Default: Story = {
    render: () => <KcPageStory />
};

// With email allowed as username
export const WithEmailAsUsername: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    loginWithEmailAllowed: true,
                    registrationEmailAsUsername: true
                }
            }}
        />
    )
};

// Username hidden scenario
export const UsernameHidden: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                usernameHidden: true, // Username field is hidden
                realm: {
                    loginWithEmailAllowed: true
                }
            }}
        />
    )
};

// With social providers available
export const WithSocialProviders: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                social: {
                    providers: [
                        {
                            loginUrl: "google",
                            alias: "google",
                            providerId: "google",
                            displayName: "Google",
                            iconClasses: "fa fa-google"
                        },
                        {
                            loginUrl: "microsoft",
                            alias: "microsoft",
                            providerId: "microsoft",
                            displayName: "Microsoft",
                            iconClasses: "fa fa-windows"
                        }
                    ]
                },
                realm: {
                    loginWithEmailAllowed: true
                }
            }}
        />
    )
};

// With remember me option enabled
export const WithRememberMeOption: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                realm: {
                    rememberMe: true, // Enable "Remember Me" option
                    loginWithEmailAllowed: true
                },
                login: {
                    rememberMe: "on" // Set to "on" to simulate checkbox being checked
                }
            }}
        />
    )
};

// With form field errors (invalid username)
export const WithFormErrors: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (field: string) => field === "username",
                    getFirstError: () => "Username is required"
                },
                realm: {
                    loginWithEmailAllowed: true
                },
                login: {
                    username: ""
                }
            }}
        />
    )
};
