import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "webauthn-authenticate.ftl" });

const meta = {
    title: "login/webauthn-authenticate.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <KcPageStory />
};
export const NoAuthenticators: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                authenticators: {
                    authenticators: []
                },
                shouldDisplayAuthenticators: false
            }}
        />
    )
};
export const MultipleAuthenticators: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                authenticators: {
                    authenticators: [
                        {
                            credentialId: "cred1",
                            label: "Authenticator 1",
                            createdAt: "2022-10-10",
                            transports: {
                                iconClass: "icon1",
                                displayNameProperties: ["USB", "NFC"]
                            }
                        },
                        {
                            credentialId: "cred2",
                            label: "Authenticator 2",
                            createdAt: "2021-05-05",
                            transports: {
                                iconClass: "icon2",
                                displayNameProperties: ["BLE", "USB"]
                            }
                        }
                    ]
                },
                shouldDisplayAuthenticators: true
            }}
        />
    )
};
export const SingleAuthenticator: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                authenticators: {
                    authenticators: [
                        {
                            credentialId: "cred1",
                            label: "Authenticator 1",
                            createdAt: "2022-10-10",
                            transports: {
                                iconClass: "icon1",
                                displayNameProperties: ["USB", "NFC"]
                            }
                        }
                    ]
                },
                shouldDisplayAuthenticators: true
            }}
        />
    )
};
