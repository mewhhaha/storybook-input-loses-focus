import type { Meta, StoryObj } from "@storybook/react";

import { Component } from "./Component";

const Subcomponent = () => {
  return <></>;
};

const meta = {
  title: "Component",
  component: Component,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  subcomponents: {
    Child: Subcomponent,
  },
  tags: ["autodocs"],
  args: {
    label: "",
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {};
