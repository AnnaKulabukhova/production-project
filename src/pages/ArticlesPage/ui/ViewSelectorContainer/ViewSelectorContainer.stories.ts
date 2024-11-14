import type { Meta, StoryObj } from '@storybook/react';
import { ViewSelectorContainer } from './ViewSelectorContainer';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';


const meta: Meta<typeof ViewSelectorContainer> = {
  title: 'Pages/ArticlesPage/ViewSelectorContainer',
  component: ViewSelectorContainer,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [StoreProviderDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ViewSelectorContainer>;


export const Primary: Story = {
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)],
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.Blue)],
};

export const LightRedesigned: Story = { decorators: [NewDesignDecorator] };

export const DarkRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};
export const BlueRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};