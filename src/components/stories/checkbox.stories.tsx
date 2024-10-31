import { Checkbox } from "../ui/checkbox";

import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { CheckedState } from "@radix-ui/react-checkbox";

// Define metadata for the Checkbox component
const meta: Meta<typeof Checkbox> = {
    title: "Components/Checkbox",
    component: Checkbox,
    tags: ["autodocs"],
    argTypes: {
        className: {
            control: "text"
        },
        disabled: {
            control: "boolean"
        }
    }
};

export default meta;

// Proper React component that uses hooks for the checkbox state, allowing CheckedState (true, false, or "indeterminate")
const CheckboxTemplate = (args: any) => {
    const [checked, setChecked] = useState<CheckedState>(false); // Now we use CheckedState type

    return (
        <div className=" flex items-center space-x-2">
            <Checkbox
                {...args}
                checked={checked}
                onCheckedChange={checked => setChecked(checked)} // Can handle true, false, or "indeterminate"
            />
            <label>
                {checked === "indeterminate"
                    ? "Indeterminate"
                    : checked
                      ? "Checked"
                      : "Unchecked"}
            </label>
        </div>
    );
};

// Default story: A basic checkbox
export const Default: StoryObj = {
    render: args => <CheckboxTemplate {...args} />,
    args: {
        className: ""
    }
};

// Story with disabled checkbox
export const Disabled: StoryObj = {
    render: args => (
        <div className="flex items-center space-x-2">
            <Checkbox {...args} disabled />
            <label>Disabled</label>
        </div>
    ),
    args: {
        disabled: true
    }
};

// Story for checkbox with custom style
export const CustomStyle: StoryObj = {
    render: args => <CheckboxTemplate {...args} />,
    args: {
        className: "border-red-500 bg-red-100" // Custom border and background color
    }
};
