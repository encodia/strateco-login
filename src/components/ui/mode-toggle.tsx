import { Moon, Sun } from "lucide-react";

import { Button } from "./button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "./dropdown-menu";
import { useState } from "react";

export function ModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const setTheme = (mode: string) => {
        switch (mode) {
            case "light":
                setIsDarkMode(false);
                document.documentElement.classList.remove("dark");
                break;
            case "dark":
                setIsDarkMode(true);
                document.documentElement.classList.add("dark");
                break;
            case "system":
                setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
                document.documentElement.classList.toggle(
                    "dark",
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                );
                break;
            default:
                break;
        }
    };
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon">
                    <Sun className=" w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute  w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
