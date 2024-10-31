import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import { Button } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
export default function SelectAuthenticator(props: PageProps<Extract<KcContext, { pageId: "select-authenticator.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;
    const { url, auth } = kcContext;

    const { kcClsx } = getKcClsx({ doUseDefaultCss, classes });
    const { msg, advancedMsg } = i18n;
    const debug = false;
    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayInfo={false}
            headerNode={msg("loginChooseAuthenticator")}
        >
            <form id="kc-select-credential-form" action={url.loginAction} method="post">
                <div className=" space-y-3 ">
                    {auth.authenticationSelections.map((authenticationSelection, i) => (
                        <Button
                            key={i}
                            variant={"secondary"}
                            className="h-auto grid grid-cols-10   text-left w-full px-5 py-2 "
                            type="submit"
                            name="authenticationExecution"
                            value={authenticationSelection.authExecId}
                        >
                            <div className="items-start justify-start text-center py-2 h-full col-span-2 ">
                                <i className={kcClsx("kcSelectAuthListItemIconPropertyClass", authenticationSelection.iconCssClass)} />
                            </div>
                            <div className=" col-span-7 space-y-2 px-5   h-full w-full   items-start ">
                                <div className={cn(" h-full w-full  p-0 items-center")}>
                                    <div className={cn("w-full py-2   font-bold", { "bg-red-100": debug })}>
                                        <span className="text-wrap ">{advancedMsg(authenticationSelection.displayName)}</span>
                                    </div>
                                    <div className={cn("w-full   row-span-2 text-wrap text-sm py-2", { "bg-blue-100": debug })}>
                                        {advancedMsg(authenticationSelection.helpText)}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center w-full h-full  py-5 ">
                                <ChevronRightIcon className={cn("w-5 h-5", kcClsx("kcSelectAuthListItemArrowIconClass"))} />
                            </div>
                        </Button>
                    ))}
                </div>
            </form>
        </Template>
    );
}
