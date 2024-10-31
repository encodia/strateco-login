import type { Meta, StoryObj } from "@storybook/react";
import { SocialProviders, SocialProvidersProps } from "../ui/SocialProviders"; // Adjust the path based on your directory structure

const meta: Meta<typeof SocialProviders> = {
    title: "Components/SocialProviders",
    component: SocialProviders,
    tags: ["autodocs"],
    args: {
        social: {
            providers: [
                {
                    loginUrl: "google",
                    alias: "google",

                    displayName: "Google",
                    iconClasses: "fa fa-google"
                },
                {
                    loginUrl: "microsoft",
                    alias: "microsoft",

                    displayName: "Microsoft",
                    iconClasses: "fa fa-windows"
                }
            ]
        },
        realm: {
            password: true
        },
        msg: (key: string) => key, // Mocked msg function for labels
        kcClsx: (...args: any[]) => args.join(" "), // Mock kcClsx function
        clsx: (...args: any[]) => args.join(" ") // Mock clsx function
    }
};

export default meta;

type Story = StoryObj<typeof SocialProviders>;

// Default story with example providers
export const Default: Story = {
    render: (args: SocialProvidersProps) => <SocialProviders {...args} />
};

// Story with a single provider (e.g., Google)
export const SingleProvider: Story = {
    args: {
        social: {
            providers: [
                {
                    loginUrl: "google",
                    alias: "google",

                    displayName: "Google",
                    iconClasses: "fa fa-google"
                }
            ]
        }
    },
    render: (args: SocialProvidersProps) => <SocialProviders {...args} />
};

// Story with multiple providers
export const MultipleProviders: Story = {
    args: {
        social: {
            providers: [
                {
                    loginUrl: "google",
                    alias: "google",

                    displayName: "Google",
                    iconClasses: "fa fa-google"
                },
                {
                    loginUrl: "microsoft",
                    alias: "microsoft",

                    displayName: "Microsoft",
                    iconClasses: "fa fa-windows"
                },
                {
                    loginUrl: "twitter",
                    alias: "microsoft",

                    displayName: "Twitter",
                    iconClasses: "fa fa-twitter"
                }
            ]
        }
    },
    render: (args: SocialProvidersProps) => <SocialProviders {...args} />
};

// Story with no providers (empty state)
export const NoProviders: Story = {
    args: {
        social: {
            providers: []
        },
        realm: {
            password: true
        }
    },
    render: (args: SocialProvidersProps) => <SocialProviders {...args} />
};
