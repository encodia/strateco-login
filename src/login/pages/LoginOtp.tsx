import { Fragment } from "react";
import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { buttonVariants } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import clsx from "clsx";

export default function LoginOtp(props: PageProps<Extract<KcContext, { pageId: "login-otp.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { otpLogin, url, messagesPerField } = kcContext;

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
            <form id="kc-otp-login-form" className={kcClsx("kcFormClass")} action={url.loginAction} method="post">
                {otpLogin.userOtpCredentials.length > 1 && (
                    <div>
                        <div>
                            <div className="grid grid-cols-1  md:grid-cols-2 gap-1 my-5">
                                {otpLogin.userOtpCredentials.map((otpCredential, index) => (
                                    <Fragment key={index}>
                                        {/* <div className="flex flex-row items-center space-x-2"> */}
                                        <div className="flex items-center ">
                                            <input
                                                id={`kc-otp-credential-${index}`}
                                                className=" "
                                                // className={kcClsx("kcLoginOTPListInputClass")}
                                                type="radio"
                                                name="selectedCredentialId"
                                                value={otpCredential.id}
                                                defaultChecked={otpCredential.id === otpLogin.selectedCredentialId}
                                            />

                                            <label htmlFor={`kc-otp-credential-${index}`} tabIndex={index} className="mx-3">
                                                <div className="flex space-x-3  text-xl">
                                                    <span>
                                                        <i className={kcClsx("kcLoginOTPListItemIconClass")} aria-hidden="true"></i>
                                                    </span>
                                                    <span className="">{otpCredential.userLabel}</span>
                                                </div>
                                            </label>
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <div className={kcClsx("kcFormGroupClass")}>
                    <div className={kcClsx("kcLabelWrapperClass")}>
                        <label htmlFor="otp" className={kcClsx("kcLabelClass")}>
                            {msg("loginOtpOneTime")}
                        </label>
                    </div>
                    <div className={kcClsx("kcInputWrapperClass")}>
                        <Input
                            id="otp"
                            name="otp"
                            autoComplete="off"
                            type="text"
                            className="mt-2"
                            // className={kcClsx("kcInputClass")}
                            autoFocus
                            aria-invalid={messagesPerField.existsError("totp")}
                        />
                        {messagesPerField.existsError("totp") && (
                            <span
                                id="input-error-otp-code"
                                className={kcClsx("kcInputErrorMessageClass")}
                                aria-live="polite"
                                dangerouslySetInnerHTML={{
                                    __html: messagesPerField.get("totp")
                                }}
                            />
                        )}
                    </div>
                </div>

                <div className={kcClsx("kcFormGroupClass")}>
                    <div id="kc-form-options" className={kcClsx("kcFormOptionsClass")}>
                        <div className={kcClsx("kcFormOptionsWrapperClass")}></div>
                    </div>
                    <div id="kc-form-buttons" className={kcClsx("kcFormButtonsClass")}>
                        <input
                            //className={kcClsx("kcButtonClass", "kcButtonPrimaryClass", "kcButtonBlockClass", "kcButtonLargeClass")}
                            className={clsx(buttonVariants(), "w-full")}
                            name="login"
                            id="kc-login"
                            type="submit"
                            value={msgStr("doLogIn")}
                        />
                    </div>
                </div>
            </form>
        </Template>
    );
}
