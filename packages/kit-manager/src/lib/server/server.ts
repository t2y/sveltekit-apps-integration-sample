import { spawn } from 'child_process';

export function startNodeServer(env: { [key: string]: any }) {
	const opts = {
		shell: true,
		env: {
			...process.env,
			PORT: env.port,
			ORIGIN: env.origin,
			NODE_ENV: 'production'
		}
	};
	const node = spawn('node', env.args, opts);
	node.stdout.on('data', (data) => {
		console.log(data.toString());
	});

	node.stderr.on('data', (data) => {
		console.error(data.toString());
	});

	node.on('exit', (code) => {
		console.log(`Child exited with code ${code}`);
	});
}
