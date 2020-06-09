import {expectType} from 'tsd';
import {NodeCG} from './nodecg/server';
import nodecgEnv = require('.');

const wrapped = nodecgEnv(nodecg => {
	expectType<NodeCG>(nodecg);
});

declare const nodecg: NodeCG;

wrapped(nodecg);
