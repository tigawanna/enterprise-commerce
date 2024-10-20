import type { Meta, StoryObj } from "@storybook/react"
import { CallToAction } from "components/call-to-action"

const meta: Meta<typeof CallToAction> = {
  title: "CallToAction",
  component: CallToAction,
  args: {},
  argTypes: {},
}

type Story = StoryObj<typeof CallToAction>

export const Default: Story = {
  render: () => <CallToAction />,
}

export default meta
