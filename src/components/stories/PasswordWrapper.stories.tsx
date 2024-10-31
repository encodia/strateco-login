import type { Meta, StoryObj } from "@storybook/react";
import { PasswordWrapper } from "../ui/PasswordWrapper";
import { Button } from "../ui/button";
import { getKcClsx, type KcClsx } from "keycloakify/login/lib/kcClsx";
import { getKcContextMock } from "../../login/KcPageStory";
// Meta configuration following your requested style
// Mock for I18n
import { I18n } from "keycloakify/login/i18n";
import React from "react";
import { Input } from "../ui/input";
// Mock for I18n
// Mock for I18n

const KcContext = getKcContextMock({
    pageId: "login.ftl",
    overrides: {}
});

const i18nMock: I18n = {
    msgStr: (key: string) => (key === "hidePassword" ? "Hide password" : "Show password"),
    msg: (key: string) => React.createElement("span", {}, key),
    advancedMsg: (key: string, ...args: (string | undefined)[]) =>
        React.createElement("span", {}, `${key} ${args.join(" ")}`),
    currentLanguageTag: "en",
    getChangeLocaleUrl: (languageTag: string) => `#${languageTag}`,
    labelBySupportedLanguageTag: { en: "English" },
    advancedMsgStr: (key: string, ...args: (string | undefined)[]) =>
        `${key} ${args.join(" ")}`,
    isFetchingTranslations: false
};

// Mock for kcClsx
const kcClsxMock: KcClsx = (...args) => args.filter(Boolean).join(" ");

const meta = {
    title: "Components/PasswordWrapper",
    component: PasswordWrapper,
    args: {
        kcClsx: kcClsxMock,
        i18n: i18nMock,
        passwordInputId: "password-input",
        children: (
            <input
                id="password-input"
                type="password"
                className="input-class"
                defaultValue="mypassword123"
            />
        )
    }
} satisfies Meta<typeof PasswordWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story with args
export const Default: Story = {
    args: {
        kcClsx: kcClsxMock,
        i18n: i18nMock,
        passwordInputId: "password",
        children: (
            <Input
                tabIndex={3}
                id="password"
                className="text-foreground"
                name="password"
                type="password"
                autoComplete="current-password"
                aria-invalid="false"
            />
        )
    },
    render: args => (
        <div className="p-5 bg-background text-foreground w-1/2">
            <PasswordWrapper {...args} />
        </div>
    )
};
