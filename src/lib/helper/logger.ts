import pino from 'pino';

const isDev = process.env.NODE_ENV !== 'production';

export const logger = pino({
	level: isDev ? 'debug' : 'info',
	// transport: isDev
	// 	? {
	// 		target: 'pino-pretty',
	// 		options: {
	// 			colorize: true,
	// 			translateTime: 'SYS:standard',
	// 			ignore: 'pid,hostname'
	// 		}
	// 	}
	// 	: undefined,
	formatters: {
		level(label) {
			return { level: label };
		}
	},
	timestamp: pino.stdTimeFunctions.isoTime
});

export const createLogger = (context: string) => {
	return {
		info: (msg: string, meta?: object) => logger.info({ context, ...meta }, msg),
		warn: (msg: string, meta?: object) => logger.warn({ context, ...meta }, msg),
		error: (msg: string, meta?: object) => logger.error({ context, ...meta }, msg),
		debug: (msg: string, meta?: object) => logger.debug({ context, ...meta }, msg)
	};
};
