import { I18n } from "keycloakify/login/i18n";
import { KcClsx } from "keycloakify/login/lib/kcClsx";
import { assert } from "keycloakify/tools/assert";
import { useEffect, useReducer } from "react";
import { Button } from "./button";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
export function PasswordWrapper(props: {
    kcClsx: KcClsx;
    i18n: I18n;
    passwordInputId: string;
    children: JSX.Element;
}) {
    const { kcClsx, i18n, passwordInputId, children } = props;

    const { msgStr } = i18n;

    const [isPasswordRevealed, toggleIsPasswordRevealed] = useReducer(
        (isPasswordRevealed: boolean) => !isPasswordRevealed,
        false
    );

    useEffect(() => {
        const passwordInputElement = document.getElementById(passwordInputId);

        assert(passwordInputElement instanceof HTMLInputElement);

        passwordInputElement.type = isPasswordRevealed ? "text" : "password";
    }, [isPasswordRevealed]);

    return (
        <div className="flex space-x-2">
            {children}
            <Button
                type="button"
                aria-label={msgStr(isPasswordRevealed ? "hidePassword" : "showPassword")}
                aria-controls={passwordInputId}
                onClick={toggleIsPasswordRevealed}
            >
                <div>
                    {isPasswordRevealed ? (
                        <EyeSlashIcon className="h-5 w-5 " aria-hidden="true" />
                    ) : (
                        <EyeIcon className="h-5 w-5 " aria-hidden="true" />
                    )}
                </div>
            </Button>
        </div>
    );
}
