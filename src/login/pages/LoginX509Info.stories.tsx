import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-x509-info.ftl" });

const meta = {
    title: "login/login-x509-info.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default case
export const Default: Story = {
    render: () => <KcPageStory />
};

export const NoCertificate: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                x509: {
                    formData: {
                        subjectDN: undefined, // No certificate (use undefined instead of null)
                        isUserEnabled: true, // User enabled
                        username: "test-user"
                    }
                },
                url: {
                    loginAction: "#"
                }
            }}
        />
    )
};

// Case where the user is disabled (no user info, no ignore button)
export const UserDisabled: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                x509: {
                    formData: {
                        subjectDN: "CN=Test User, O=Example Org", // Certificate available
                        isUserEnabled: false, // User disabled
                        username: ""
                    }
                },
                url: {
                    loginAction: "#"
                }
            }}
        />
    )
};

// Case with both certificate and enabled user
export const CertificateAndEnabledUser: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                x509: {
                    formData: {
                        subjectDN: "CN=Test User, O=Example Org", // Certificate available
                        isUserEnabled: true, // User enabled
                        username: "test-user"
                    }
                },
                url: {
                    loginAction: "#"
                }
            }}
        />
    )
};

// import type { Meta, StoryObj } from "@storybook/react";
// import { createKcPageStory } from "../KcPageStory";

// const { KcPageStory } = createKcPageStory({ pageId: "login-x509-info.ftl" });

// const meta = {
//     title: "login/login-x509-info.ftl",
//     component: KcPageStory
// } satisfies Meta<typeof KcPageStory>;

// export default meta;

// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//     render: () => <KcPageStory />
// };
