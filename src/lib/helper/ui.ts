import { toast } from 'svelte-sonner';

export type NotificationOptions = {
	type?: 'error' | 'success' | 'default' | 'info' | 'warning';
	position?:
		| 'top-left'
		| 'top-right'
		| 'bottom-left'
		| 'bottom-right'
		| 'top-center'
		| 'bottom-center';
};

export const showNotification = (message: string, options?: NotificationOptions) => {
	const type = options?.type || 'default';
	const position = options?.position || 'top-right';
	const duration = 5000;

	return {
		default: () => toast(message, { position, duration, dismissable: true, closeButton: true }),
		success: () =>
			toast.success(message, {
				position,
				duration,
				dismissable: true,
				closeButton: true
			}),
		error: () =>
			toast.error(message, {
				position,
				duration,
				dismissable: true,
				closeButton: true
			}),
		info: () =>
			toast.info(message, {
				position,
				duration,
				dismissable: true,
				closeButton: true
			}),
		warning: () =>
			toast.warning(message, {
				position,
				duration,
				dismissable: true,
				closeButton: true
			})
	}[type]?.();
};
