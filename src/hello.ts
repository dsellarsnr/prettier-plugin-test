export const doStuff =
	(options: { something: string; two?: string; three?: string; four?: string; five?: string }) =>
	async (arg: string) => {
		try {
			console.log(`Hello ${arg}`);
			console.log(`Something ${options.something}`);
			return "ok";
		} catch (error) {
			/* TODO: Handle errors
			handle name taken errors
			restricted actions
			users can't join
			*/
			return undefined;
		}
	};

doStuff({ something: "test" });
