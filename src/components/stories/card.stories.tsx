import { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";

// Define metadata for the Card component
const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
    },
  },
};

export default meta;

// Define the Default story for the Card component
export const Default: StoryObj = {
  render: () => (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a description of the card.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the content of the card. You can add any component here.</p>
      </CardContent>
      <CardFooter>
        <button className="bg-blue-500 text-white p-2 rounded">Action</button>
      </CardFooter>
    </Card>
  ),
};

// Define a CustomStyle story to showcase customized styles
export const CustomStyle: StoryObj = {
  render: () => (
    <Card className="max-w-sm bg-red-100 text-red-700">
      <CardHeader>
        <CardTitle>Custom Styled Card</CardTitle>
        <CardDescription>
          This card has a custom background and text color.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content with a custom style.</p>
      </CardContent>
      <CardFooter>
        <button className="bg-red-500 text-white p-2 rounded">Custom Action</button>
      </CardFooter>
    </Card>
  ),
};

// Define a story for a card with long content
export const LongContent: StoryObj = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Card with Long Content</CardTitle>
        <CardDescription>
          A description with more detailed content to demonstrate how it handles long text.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This card contains a lot of content. It’s a good example of what happens
          when content extends the usual length. The Card component is flexible enough
          to handle varying amounts of text and other components.
        </p>
      </CardContent>
      <CardFooter>
        <button className="bg-blue-500 text-white p-2 rounded">View More</button>
      </CardFooter>
    </Card>
  ),
};
