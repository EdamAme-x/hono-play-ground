				import worker, * as OTHER_EXPORTS from "C:\\Users\\edame\\Dropbox\\WorkSpace\\hono-play-ground\\src\\dev.ts";
				import * as __MIDDLEWARE_0__ from "C:\\Users\\edame\\Dropbox\\WorkSpace\\hono-play-ground\\node_modules\\.pnpm\\wrangler@3.22.0\\node_modules\\wrangler\\templates\\middleware\\middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "C:\\Users\\edame\\Dropbox\\WorkSpace\\hono-play-ground\\src\\dev.ts";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;