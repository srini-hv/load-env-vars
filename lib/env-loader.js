"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEnvVars = void 0;
const core = __importStar(require("@actions/core"));
const fs = __importStar(require("fs"));
async function loadEnvVars(filePath, delimiter) {
    fs.readFile(filePath, function (err, data) {
        if (err)
            throw err;
        const lines = data.toString().replace(/\r\n/g, '\n').split('\n');
        for (let line of lines) {
            core.debug(`Line = '${line}'`);
            var env = line.split(delimiter);
            core.debug(`Variable = '${env}'`);
            core.exportVariable(env[0], env[1]);
        }
    });
}
exports.loadEnvVars = loadEnvVars;
