import { getKcClsx } from "keycloakify/login/lib/kcClsx";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";
import clsx from "clsx";
import { useState, useEffect, useRef } from "react";
import { ScrollArea } from "../../components/ui/scroll-area";
import { Button } from "../../components/ui/button";
export default function Terms(props: PageProps<Extract<KcContext, { pageId: "terms.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { kcClsx } = getKcClsx({
        doUseDefaultCss,
        classes
    });

    const { msg, msgStr } = i18n;

    const { url } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={false}
            headerNode={msg("termsTitle")}
        >
            <div className="prose dark:prose-invert space-y-3">
                <div className="text-lg px-2 mb-3 max-h-72  bg-gray-50 dark:bg-gray-800  border">
                    <ScrollArea className="h-64 w-full">{msg("termsText")}</ScrollArea>
                </div>
                <form className="responsive-container " action={url.loginAction} method="POST">
                    <Button name="accept" className="w-full" size="lg" id="kc-accept" type="submit">
                        {msgStr("doAccept")}
                    </Button>
                    <Button variant={"outline"} className="w-full" size="lg" name="cancel" id="kc-decline" type="submit">
                        {msgStr("doDecline")}
                    </Button>
                </form>
                <div className="clearfix" />
            </div>
        </Template>
    );
}
