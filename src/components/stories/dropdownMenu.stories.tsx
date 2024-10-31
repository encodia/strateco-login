import { Meta, StoryObj } from "@storybook/react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuCheckboxItem,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent
} from "../ui/dropdown-menu";
import { Button } from "../ui/button"; // Assuming you have a Button component
import React from "react";

// Define metadata for the DropdownMenu component
const meta: Meta<typeof DropdownMenu> = {
    title: "Components/DropdownMenu",
    component: DropdownMenu,
    tags: ["autodocs"],
    argTypes: {}
};

export default meta;

// Default dropdown menu story
export const Default: StoryObj = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Open Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={true}>
                    Enable Notifications
                </DropdownMenuCheckboxItem>
                <DropdownMenuRadioGroup value="option1">
                    <DropdownMenuRadioItem value="option1">
                        Option 1
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="option2">
                        Option 2
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

// Story for a dropdown menu with more complex sub-menus
export const WithSubmenu: StoryObj = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Open Menu with Submenu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={true}>
                    Enable Notifications
                </DropdownMenuCheckboxItem>
                <DropdownMenuRadioGroup value="option1">
                    <DropdownMenuRadioItem value="option1">
                        Option 1
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="option2">
                        Option 2
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger inset>More Options</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                        <DropdownMenuItem>Sub-option 1</DropdownMenuItem>
                        <DropdownMenuItem>Sub-option 2</DropdownMenuItem>
                    </DropdownMenuSubContent>
                </DropdownMenuSub>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

// Story with different types of items in the dropdown
export const VariousItems: StoryObj = {
    render: () => (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button>Open Menu with Various Items</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuItem inset>Profile</DropdownMenuItem>
                <DropdownMenuItem inset>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked={false}>
                    Enable Notifications
                </DropdownMenuCheckboxItem>
                <DropdownMenuRadioGroup value="option1">
                    <DropdownMenuRadioItem value="option1">
                        Option 1
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="option2">
                        Option 2
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};
