import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

// Create KcPageStory for the "login-update-password.ftl" page
const { KcPageStory } = createKcPageStory({ pageId: "login-update-password.ftl" });

const meta = {
    title: "login/login-update-password.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story without any errors or special conditions
export const Default: Story = {
    render: () => <KcPageStory />
};

// Story where both password and password confirmation have errors
export const WithPasswordErrors: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (field: string) => field === "password" || field === "password-confirm",
                    get: (field: string) => {
                        if (field === "password") return "Password must be at least 8 characters long";
                        if (field === "password-confirm") return "Passwords do not match";
                        return "";
                    }
                }
            }}
        />
    )
};

// Story with "App-Initiated Action" where the cancel button is shown
export const AppInitiatedAction: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                isAppInitiatedAction: true
            }}
        />
    )
};

// Story simulating multiple errors in form submission
export const MultipleErrors: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (field: string) => field === "password" || field === "password-confirm",
                    get: (field: string) => {
                        if (field === "password") return "Password is too weak";
                        if (field === "password-confirm") return "Password confirmation does not match";
                        return "";
                    }
                }
            }}
        />
    )
};

// Story simulating no form fields being filled, user just submitted an empty form
export const EmptyFormSubmit: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messagesPerField: {
                    existsError: (field: string) => field === "password" || field === "password-confirm",
                    get: (field: string) => "This field is required"
                }
            }}
        />
    )
};
