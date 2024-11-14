import type { Meta, StoryObj } from '@storybook/react';
import { CreatingBlockCode } from './CreatingBlockCode';


const meta: Meta<typeof CreatingBlockCode> = {
  title: 'Entities/Article/CreatingBlockCode',
  component: CreatingBlockCode,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof CreatingBlockCode>;


export const Primary: Story = {
  args: {
    value: `
    <Card padding='24' max>
      <pre lassName={ classNames(classes.code, { }, [className])}>
        <code>
          <Textarea onChange={ onChange } value = { value } placeholder = { t('Add a code snippet') } />
        </code>
      </pre>
    </Card>`
  }
};