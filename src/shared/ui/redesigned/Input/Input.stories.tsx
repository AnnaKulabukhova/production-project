import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import AddonIcon from '@/shared/assets/icons/search-new.svg'
import { Icon } from '../Icon';

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  argTypes: {
    className: { control: 'color' },
  },
  decorators: [NewDesignDecorator]
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    value: 'name',
    placeholder: 'Enter your name',
  },
};

export const Dark: Story = {
  args: {
    value: 'name',
    placeholder: 'Enter your name',
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};
export const Blue: Story = {
  args: {
    value: 'name',
    placeholder: 'Enter your name',
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};
export const SizeS: Story = {
  args: {
    value: 'name',
    placeholder: 'Enter your name',
    size: 's'
  },
};
export const SizeM: Story = {
  args: {
    value: 'name',
    placeholder: 'Enter your name',
    size: 'm'
  },
};
export const SizeL: Story = {
  args: {
    value: 'name',
    placeholder: 'Enter your name',
    size: 'l'
  },
};
export const AddonLeft: Story = {
  args: {
    value: 'name',
    placeholder: 'Enter your name',
    addonLeft: <Icon Svg={AddonIcon} />
  },
};
export const AddonRight: Story = {
  args: {
    value: 'name',
    placeholder: 'Enter your name',
    addonRight: <Icon Svg={AddonIcon} />
  },
};
