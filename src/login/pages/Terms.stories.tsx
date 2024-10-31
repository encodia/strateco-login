import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";
import "../../styles/global.css";
const { KcPageStory } = createKcPageStory({ pageId: "terms.ftl" });

const meta = {
    title: "login/terms.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                "x-keycloakify": {
                    messages: {
                        termsText: `
                        <p>
                          Welcome to our platform. By accessing and using our services, you agree to comply with and be bound by the following terms and conditions. Please review the following terms carefully.
                        </p>
                        
                        <h3>1. Acceptance of Terms</h3>
                        <p>
                          By accessing our platform, you acknowledge that you have read, understood, and agree to be bound by these terms. If you do not agree to these terms, please refrain from using the platform.
                        </p>

                        <h3>2. Modifications to Terms</h3>
                        <p>
                          We reserve the right to modify these terms at any time. Any changes will be effective immediately upon posting to the platform. Your continued use of the platform following the posting of changes constitutes your acceptance of those changes.
                        </p>

                        <h3>3. User Responsibilities</h3>
                        <p>
                          As a user, you agree to use the platform responsibly and in compliance with all applicable laws. You must not use the platform to conduct any unlawful activity, including but not limited to hacking, distributing malware, or infringing on intellectual property rights.
                        </p>

                        <h3>4. Intellectual Property</h3>
                        <p>
                          All content, trademarks, service marks, logos, and intellectual property displayed on the platform are the property of their respective owners. You agree not to copy, distribute, modify, or create derivative works based on any content provided on the platform without permission.
                        </p>

                        <h3>5. Limitation of Liability</h3>
                        <p>
                          We will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use or inability to use the platform, even if we have been advised of the possibility of such damages.
                        </p>

                        <h3>6. Governing Law</h3>
                        <p>
                          These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered. Any disputes arising from these terms will be resolved in the courts of that jurisdiction.
                        </p>

                        <h3>7. Contact Us</h3>
                        <p>
                          If you have any questions or concerns regarding these terms, please contact us at <a href="mailto:support@company.com">support@company.com</a>.
                        </p>
                        `
                    }
                }
            }}
        />
    )
};

export const French: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                locale: {
                    currentLanguageTag: "fr"
                },
                "x-keycloakify": {
                    messages: {
                        termsText: "<p>Mes terme en <strong>Français</strong></p>"
                    }
                }
            }}
        />
    )
};
