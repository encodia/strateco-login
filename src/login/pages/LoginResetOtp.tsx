import { Fragment } from "react";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";
import { cn } from "../../lib/utils";
export default function LoginResetOtp(props: PageProps<Extract<KcContext, { pageId: "login-reset-otp.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { url, messagesPerField, configuredOtpCredentials } = kcContext;

    const { msg, msgStr } = i18n;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={!messagesPerField.existsError("totp")}
            headerNode={msg("doLogIn")}
        >
            <form id="kc-otp-reset-form" className={kcClsx("kcFormClass")} action={url.loginAction} method="post">
                <div className={kcClsx("kcInputWrapperClass")}>
                    <div className={kcClsx("kcInfoAreaWrapperClass")}>
                        <p id="kc-otp-reset-form-description">{msg("otp-reset-description")}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {configuredOtpCredentials.userOtpCredentials.map((otpCredential, index) => (
                                <div key={otpCredential.id} className="flex items-center space-x-2 ">
                                    <input
                                        id={`kc-otp-credential-${index}`}
                                        // className={kcClsx("kcLoginOTPListInputClass")}
                                        type="radio"
                                        name="selectedCredentialId"
                                        value={otpCredential.id}
                                        defaultChecked={otpCredential.id === configuredOtpCredentials.selectedCredentialId}
                                    />
                                    <label htmlFor={`kc-otp-credential-${index}`} className="" tabIndex={index}>
                                        <div className="flex space-x-3  text-xl">
                                            <span className="">
                                                <i className={kcClsx("kcLoginOTPListItemIconClass")} aria-hidden="true"></i>
                                            </span>
                                            <span className="">{otpCredential.userLabel}</span>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className={kcClsx("kcFormGroupClass")}>
                            <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
                                <input
                                    id="kc-otp-reset-form-submit"
                                    // className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass")}
                                    className={cn(buttonVariants(), "w-full")}
                                    type="submit"
                                    value={msgStr("doSubmit")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Template>
    );
}
