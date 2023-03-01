import React from 'react';
import { Button } from '@koob-jobs-ui/react';
import { Meta, StoryObj } from '@storybook/react';
import { HiArrowRight } from 'react-icons/hi';

export default {
	title: 'Components/Button',
	component: Button,
	args: {
		children: 'Hello Button',
	},
	argTypes: {
		variant: {
			defaultValue: 'primary',
			options: ['primary', 'secondary', 'tertiary'],
			control: {
				type: 'inline-radio',
			},
		},
		disabled: {
			defaultValue: false,
			control: {
				type: 'boolean',
			},
		},
	},
} as Meta;

export const Primary: StoryObj = {};

export const Secondary: StoryObj = {
	args: {
		variant: 'secondary',
	},
};

export const Tertiary: StoryObj = {
	args: {
		variant: 'tertiary',
	},
};

export const WithIcon: StoryObj = {
	name: 'With icon',
	args: {
		children: (
			<>
         Hello Button
				<HiArrowRight size={20} />
			</>
		),
	},
};