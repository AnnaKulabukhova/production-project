import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import AddonIcon from '@/shared/assets/icons/search-new.svg'
import { Icon } from '../Icon';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    className: { control: 'color' },
  },
  decorators: [NewDesignDecorator]
};

export default meta;
type Story = StoryObj<typeof Button>;

export const OutlineVariant: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
  },
};

export const ClearVariant: Story = {
  args: {
    children: 'Text',
    variant: 'clear',
  },
};
export const FilledVariant: Story = {
  args: {
    children: 'Text',
    variant: 'filled',
  },
};

export const OutlineM: Story = {
  args: {
    children: 'Text',
    size: 'm',
  },
};
export const OutlineL: Story = {
  args: {
    children: 'Text',
    size: 'l',
  },
};
export const OutlineXl: Story = {
  args: {
    children: 'Text',
    size: 'xl',
  },
};


export const SquareSizeM: Story = {
  args: {
    children: '>',
    square: true,
    size: 'm',
  },
};
export const SquareSizeL: Story = {
  args: {
    children: '>',
    square: true,
    size: 'l',
  },
};
export const SquareSizeXl: Story = {
  args: {
    children: '>',
    square: true,
    size: 'xl',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Text',
    disabled: true,
  },
};
export const FullWightBlue: Story = {
  args: {
    children: 'Text',
    fullWight: true,
  },
};

export const AddonLeft: Story = {
  args: {
    children: 'Text',
    addonLeft: <Icon Svg={AddonIcon} />
  },
};
export const AddonRight: Story = {
  args: {
    children: 'Text',
    addonRight: <Icon Svg={AddonIcon} />
  },
};
export const NormalColorOutline: Story = {
  args: {
    children: 'Text',
    color: 'normal',
    variant: 'outline'
  },
};
export const SuccessColorOutline: Story = {
  args: {
    children: 'Text',
    color: 'normal',
    variant: 'outline'
  },
};
export const ErrorColorOutline: Story = {
  args: {
    children: 'Text',
    color: 'normal',
    variant: 'outline'
  },
};
export const NormalColorFilled: Story = {
  args: {
    children: 'Text',
    variant: 'filled',
    color: 'normal',
  },
};
export const SuccessColorFilled: Story = {
  args: {
    children: 'Text',
    color: 'normal',
    variant: 'filled'
  },
};
export const ErrorColorFilled: Story = {
  args: {
    children: 'Text',
    color: 'normal',
    variant: 'filled'
  },
};

export const NormalColorClear: Story = {
  args: {
    children: 'Text',
    color: 'normal',
    variant: 'clear'
  },
};
export const SuccessColorClear: Story = {
  args: {
    children: 'Text',
    color: 'normal',
    variant: 'clear'
  },
};
export const ErrorColorClear: Story = {
  args: {
    children: 'Text',
    color: 'normal',
    variant: 'clear'
  },
};