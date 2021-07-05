import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';
import * as path from 'path';
import * as fs from 'fs';

export async function loadEnvVars(filePath: string,delimiter: string) {
    fs.readFile(filePath, function(err, data) {
        if(err) throw err;
        const lines = data.toString().replace(/\r\n/g,'\n').split('\n');
        for(let line of lines) {
            core.debug(`Line = '${line}'`);
            core.debug(`delimiter = '${delimiter}'`);
            var env = line.split(delimiter);
            core.debug(`Variable = '${env}'`);
            if(env.includes(delimiter) && env[0]!='#'){
                core.exportVariable(env[0].trim(),env[1].trim())
            }
        }
    });
}