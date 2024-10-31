import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import { Template as CustomTemplate } from "./Template";
import "./../styles/global.css";
import Info from "./pages/Info";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Terms from "./pages/Terms";
import Error from "./pages/Error";
import Code from "./pages/Code";
import DeleteAccountConfirm from "./pages/DeleteAccountConfirm";
import DeleteCredential from "./pages/DeleteCredential";
import FrontchannelLogout from "./pages/FrontchannelLogout";
import IdpReviewUserProfile from "./pages/IdpReviewUserProfile";
import LoginConfigTotp from "./pages/LoginConfigTotp";
import LoginIdpLinkConfirm from "./pages/LoginIdpLinkConfirm";
import LoginIdpLinkEmail from "./pages/LoginIdpLinkEmail";
import LoginOauthGrant from "./pages/LoginOauthGrant";
import LoginOtp from "./pages/LoginOtp";
import LoginPageExpired from "./pages/LoginPageExpired";
import LoginPassword from "./pages/LoginPassword";
import LoginResetOtp from "./pages/LoginResetOtp";
import LoginResetPassword from "./pages/LoginResetPassword";
import LoginUpdatePassword from "./pages/LoginUpdatePassword";
import LoginUpdateProfile from "./pages/LoginUpdateProfile";
import LoginUsername from "./pages/LoginUsername";
import LoginVerifyEmail from "./pages/LoginVerifyEmail";
import LoginX509Info from "./pages/LoginX509Info";
import LogoutConfirm from "./pages/LogoutConfirm";
import SamlPostForm from "./pages/SamlPostForm";
import SelectAuthenticator from "./pages/SelectAuthenticator";
import UpdateEmail from "./pages/UpdateEmail";
import WebauthnAuthenticate from "./pages/WebauthnAuthenticate";
import WebauthnError from "./pages/WebauthnError";
import WebauthnRegister from "./pages/WebauthnRegister";
import LoginOauth2DeviceVerifyUserCode from "./pages/LoginOauth2DeviceVerifyUserCode";
import LoginRecoveryAuthnCodeConfig from "./pages/LoginRecoveryAuthnCodeConfig";
import LoginRecoveryAuthnCodeInput from "./pages/LoginRecoveryAuthnCodeInput";
const UserProfileFormFields = lazy(() => import("./UserProfileFormFields"));

// Base component to render DefaultPage
const Base = ({
    kcContext,
    i18n,
    classes
}: {
    kcContext: KcContext;
    i18n: any;
    classes: any;
}) => {
    return (
        <DefaultPage
            kcContext={kcContext}
            i18n={i18n}
            classes={classes}
            Template={CustomTemplate}
            doUseDefaultCss={true}
            UserProfileFormFields={UserProfileFormFields}
            doMakeUserConfirmPassword={doMakeUserConfirmPassword}
        />
    );
};

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const kcContext = props.kcContext; // Get the `legacy` flag as a prop
    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    case "login-recovery-authn-code-input.ftl":
                        return (
                            <LoginRecoveryAuthnCodeInput
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-recovery-authn-code-config.ftl":
                        return (
                            <LoginRecoveryAuthnCodeConfig
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-oauth2-device-verify-user-code.ftl":
                        return (
                            <LoginOauth2DeviceVerifyUserCode
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "webauthn-register.ftl":
                        return (
                            <WebauthnRegister
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "webauthn-error.ftl":
                        return (
                            <WebauthnError
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "webauthn-authenticate.ftl":
                        return (
                            <WebauthnAuthenticate
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "update-email.ftl":
                        return (
                            <UpdateEmail
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields} // Pass the required UserProfileFormFields prop
                                doMakeUserConfirmPassword={true} // or false, depending on your requirement
                            />
                        );
                    case "select-authenticator.ftl":
                        return (
                            <SelectAuthenticator
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "saml-post-form.ftl":
                        return (
                            <SamlPostForm
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "logout-confirm.ftl":
                        return (
                            <LogoutConfirm
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-x509-info.ftl":
                        return (
                            <LoginX509Info
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-verify-email.ftl":
                        return (
                            <LoginVerifyEmail
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-username.ftl":
                        return (
                            <LoginUsername
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-update-profile.ftl":
                        return (
                            <LoginUpdateProfile
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields} // Pass the required UserProfileFormFields prop
                                doMakeUserConfirmPassword={true} // or false, depending on your requirement
                            />
                        );
                    case "login-update-password.ftl":
                        return (
                            <LoginUpdatePassword
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-reset-password.ftl":
                        return (
                            <LoginResetPassword
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-reset-otp.ftl":
                        return (
                            <LoginResetOtp
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-password.ftl":
                        return (
                            <LoginPassword
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-page-expired.ftl":
                        return (
                            <LoginPageExpired
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-otp.ftl":
                        return (
                            <LoginOtp
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-oauth-grant.ftl":
                        return (
                            <LoginOauthGrant
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-idp-link-email.ftl":
                        return (
                            <LoginIdpLinkEmail
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-idp-link-confirm.ftl":
                        return (
                            <LoginIdpLinkConfirm
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "login-config-totp.ftl":
                        return (
                            <LoginConfigTotp
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "info.ftl":
                        return (
                            <Info
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "idp-review-user-profile.ftl":
                        return (
                            <IdpReviewUserProfile
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields} // Pass the required UserProfileFormFields prop
                                doMakeUserConfirmPassword={true} // or false, depending on your requirement
                            />
                        );
                    case "frontchannel-logout.ftl":
                        return (
                            <FrontchannelLogout
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "delete-credential.ftl":
                        return (
                            <DeleteCredential
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "delete-account-confirm.ftl":
                        return (
                            <DeleteAccountConfirm
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "code.ftl":
                        return (
                            <Code
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "error.ftl":
                        return (
                            <Error
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "terms.ftl":
                        return (
                            <Terms
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );
                    case "register.ftl":
                        return (
                            <Register
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                                UserProfileFormFields={UserProfileFormFields} // Pass the required UserProfileFormFields prop
                                doMakeUserConfirmPassword={true} // or false, depending on your requirement
                            />
                        );
                    case "login.ftl":
                        return (
                            <Login
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classescustom}
                                Template={CustomTemplate}
                                doUseDefaultCss={true}
                            />
                        );

                    default:
                        return (
                            <Base
                                kcContext={kcContext}
                                i18n={i18n}
                                classes={classesDefault}
                            />
                        );
                }
            })()}
        </Suspense>
    );
}

const classescustom = {
    kcHtmlClass: "bg-background"
} satisfies { [key in ClassKey]?: string };

const classesDefault = {} satisfies { [key in ClassKey]?: string };
