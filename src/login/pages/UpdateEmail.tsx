import { useState } from "react";
import type { LazyOrNot } from "keycloakify/tools/LazyOrNot";
import { getKcClsx, type KcClsx } from "keycloakify/login/lib/kcClsx";
import type { UserProfileFormFieldsProps } from "keycloakify/login/UserProfileFormFieldsProps";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants, Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { checkboxVariants } from "../../components/ui/checkbox";
type UpdateEmailProps = PageProps<Extract<KcContext, { pageId: "update-email.ftl" }>, I18n> & {
    UserProfileFormFields: LazyOrNot<(props: UserProfileFormFieldsProps) => JSX.Element>;
    doMakeUserConfirmPassword: boolean;
};

export default function UpdateEmail(props: UpdateEmailProps) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes, UserProfileFormFields, doMakeUserConfirmPassword } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { msg, msgStr } = i18n;

    const [isFormSubmittable, setIsFormSubmittable] = useState(false);

    const { url, messagesPerField, isAppInitiatedAction } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={messagesPerField.exists("global")}
            displayRequiredFields
            headerNode={msg("updateEmailTitle")}
        >
            <form id="kc-update-email-form" className=" " action={url.loginAction} method="post">
                <div className="flex flex-col">
                    <UserProfileFormFields
                        kcContext={kcContext}
                        i18n={i18n}
                        kcClsx={kcClsx}
                        onIsFormSubmittableValueChange={setIsFormSubmittable}
                        doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                    />
                    <div id="kc-form-options" className={kcClsx("kcFormOptionsClass")}>
                        <div className={kcClsx("kcFormOptionsWrapperClass")} />
                    </div>
                    <LogoutOtherSessions kcClsx={kcClsx} i18n={i18n} />

                    <div id="kc-form-buttons" className="responsive-container ">
                        <input disabled={!isFormSubmittable} className={cn(buttonVariants(), "w-full")} type="submit" value={msgStr("doSubmit")} />
                        {isAppInitiatedAction && (
                            <Button
                                // className={kcClsx("kcButtonClass", "kcButtonDefaultClass", "kcButtonLargeClass")}
                                className="w-full"
                                type="submit"
                                name="cancel-aia"
                                value="true"
                            >
                                {msg("doCancel")}
                            </Button>
                        )}
                    </div>
                </div>
            </form>
        </Template>
    );
}

function LogoutOtherSessions(props: { kcClsx: KcClsx; i18n: I18n }) {
    const { kcClsx, i18n } = props;

    const { msg } = i18n;

    return (
        <div id="kc-form-options" className={kcClsx("kcFormOptionsClass")}>
            <div>
                <div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className={cn(checkboxVariants())}
                            id="logout-sessions"
                            name="logout-sessions"
                            value="on"
                            defaultChecked={true}
                        />
                        {msg("logoutOtherSessions")}
                    </div>
                </div>
            </div>
        </div>
    );
}
