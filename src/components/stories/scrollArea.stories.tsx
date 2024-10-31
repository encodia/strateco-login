import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "../ui/scroll-area";

const meta: Meta<typeof ScrollArea> = {
    title: "Components/ScrollArea",
    component: ScrollArea,
    tags: ["autodocs"],
    args: {
        className: "h-64 w-64 bg-gray-100"
    },
    argTypes: {
        className: {
            control: "text"
        }
    }
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
    render: args => (
        <ScrollArea {...args}>
            <div style={{ height: "300px", width: "300px" }}>
                <p>This is a scrollable content area.</p>
                <p>Keep scrolling to see more.</p>
                <p>Here is more content...</p>
                <p>Even more content!</p>
                <p>And finally, the end!</p>
            </div>
        </ScrollArea>
    )
};
