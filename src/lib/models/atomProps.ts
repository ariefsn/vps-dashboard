import type { ButtonSize } from '$lib/components/ui/button';
import type { Accessor } from 'layerchart';
import type { Snippet } from 'svelte';

export type ButtonClickEvent =
	| (MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
	  })
	| (MouseEvent & {
			currentTarget: EventTarget & HTMLAnchorElement;
	  });

export type ButtonProps = {
	class?: string;
	type?: 'submit' | 'reset' | 'button';
	children?: Snippet;
	variant?: 'link' | 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | undefined;
	isDisabled?: boolean;
	size?: ButtonSize;
	onClick?: (e: ButtonClickEvent) => void;
};

export type CardProps = {
	class?: string;
	title?: string;
	description?: string;
	children?: Snippet;
};

export type FieldProps = {
	class?: string;
	label?: string;
	id?: string;
	description?: string | Snippet;
	children?: Snippet;
	action?: Snippet;
};

export type LinkProps = {
	class?: string;
	href: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	children?: Snippet;
};

export type BadgeProps = {
	class?: string;
	variant?: 'default' | 'destructive' | 'outline' | 'secondary';
	type?: 'default' | 'success' | 'error' | 'warning' | 'info';
	children?: Snippet | string;
};

export type ModalProps = {
	class?: string;
	open?: boolean;
	title?: string;
	description?: string;
	onOpenChange?: (open: boolean) => void;
	children?: Snippet;
	footer?: Snippet;
	trigger?: Snippet | string;
};

export type ArchChartProps = {
	value: number;
	segments?: number;
	class?: string;
};

export type TooltipItem = {
	label: string;
	value: number | string;
};

export type PieChartItem = {
	label: string;
	value: number;
	bgColor?: string;
	tooltip?: {
		title?: string;
		items?: TooltipItem[];
	};
};

export type PieChartProps = {
	data: PieChartItem[];
	label?: Accessor<PieChartItem>;
	totalNumber?: number | string;
	totalPlaceholder?: string;
	class?: string;
};
