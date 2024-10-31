import React from "react";
import { clsx } from "keycloakify/tools/clsx";

export interface SocialProvidersProps {
    social: {
        providers?: Array<{
            alias: string;
            loginUrl: string;
            displayName: string;
            iconClasses?: string;
        }>;
    };
    kcClsx: (...args: any[]) => string;
    clsx: (...args: any[]) => string;
    msg: any;
    realm: {
        password: boolean;
    };
}

export const SocialProviders: React.FC<SocialProvidersProps> = ({
    social,
    kcClsx,
    clsx,
    msg,
    realm
}) => {
    const providers = social.providers || [];

    return (
        realm.password &&
        providers.length > 0 && (
            <>
                {realm.password &&
                    social.providers !== undefined &&
                    social.providers.length !== 0 && (
                        <div id="kc-social-providers" className="mt-5 space-y-7">
                            <h2 className="text-center text-lg mt-7">
                                {msg("identity-provider-login-label")}
                            </h2>
                            <div
                                className={clsx(
                                    "text-lg grid gap-2 grid-cols-1", // Apply a grid and gap between items
                                    social.providers.length > 1
                                        ? "md:grid-cols-2"
                                        : "grid-cols-1" // Conditional grid columns
                                )}
                            >
                                {social.providers.map((...[p, , providers]) => (
                                    <div
                                        key={p.alias}
                                        className=" items-center bg-accent  w-full py-1 my-1.5 border rounded-lg px-3 hover:bg-primary hover:text-primary-foreground"
                                    >
                                        <a
                                            id={`social-${p.alias}`}
                                            className="flex flex-row items-center justify-center  w-full py-2 "
                                            type="button"
                                            href={p.loginUrl}
                                        >
                                            {p.iconClasses && (
                                                <i
                                                    className={clsx(p.iconClasses)}
                                                    aria-hidden="true"
                                                ></i>
                                            )}
                                            <span
                                                className="mx-3"
                                                dangerouslySetInnerHTML={{
                                                    __html: p.displayName
                                                }}
                                            ></span>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
            </>
        )
    );
};

export default SocialProviders;
// <div
//     id="kc-social-providers"
//     className={kcClsx("kcFormSocialAccountSectionClass")}
// >
//     <hr />
//     <h2>{msg("identity-provider-login-label")}</h2>
//     <ul
//         className={kcClsx(
//             "kcFormSocialAccountListClass",
//             providers.length > 3 && "kcFormSocialAccountListGridClass"
//         )}
//     >
//         {providers.map(p => (
//             <li key={p.alias}>
//                 <a
//                     id={`social-${p.alias}`}
//                     className={kcClsx(
//                         "kcFormSocialAccountListButtonClass",
//                         providers.length > 3 && "kcFormSocialAccountGridItem"
//                     )}
//                     type="button"
//                     href={p.loginUrl}
//                 >
//                     {p.iconClasses && (
//                         <i
//                             className={clsx(
//                                 kcClsx("kcCommonLogoIdP"),
//                                 p.iconClasses
//                             )}
//                             aria-hidden="true"
//                         ></i>
//                     )}
//                     <span
//                         className={clsx(
//                             kcClsx("kcFormSocialAccountNameClass"),
//                             p.iconClasses && "kc-social-icon-text"
//                         )}
//                         dangerouslySetInnerHTML={{ __html: p.displayName }}
//                     />
//                 </a>
//             </li>
//         ))}
//     </ul>
// </div>
