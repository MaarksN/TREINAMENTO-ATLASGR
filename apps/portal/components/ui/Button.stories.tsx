import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';

const meta = {
  title: 'Design System/Button',
  component: Button,
  args: { children: 'Continuar treinamento' },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
export const Loading: Story = { args: { isLoading: true } };
export const Outline: Story = { args: { variant: 'outline' } };
