import {NodeCG} from './nodecg/server';

type Lazy<T> = Promise<T> | T;
type Handler<T> = (nodecg: NodeCG) => Lazy<T>;

declare function nodecgEnv<T>(handler: Handler<T>): Handler<T>;

export * from './nodecg/server';
export default nodecgEnv;
