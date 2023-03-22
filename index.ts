#!/usr/bin/env node
import * as core from '@actions/core';
import * as github from '@actions/github';
import { env } from "process";
import { exec, execSync, spawn } from "child_process";

// get input params
let parameters:any = {}

const vid = core.getInput('vid', {required: true} );
parameters['vid'] = vid

const vkey = core.getInput('vkey', {required: true} );
parameters['vkey'] = vkey

export function downloadCli () {
    let commandOutput
    try {
        commandOutput = execSync(`curl -fsS https://tools.veracode.com/veracode-cli/install | sh `);
        core.info('---- DEBUG OUTPUT START ----')
        core.info('---- Cli installation '+commandOutput)
        core.info('---- DEBUG OUTPUT END ----')
    } catch (ex:any){
        commandOutput = ex.stdout.toString()
    } 
}

async function run (parameters:any){
    downloadCli()
}



(

    async () => {
        try{
            core.notice("Calling your action");
        }catch(error) {
            core.setFailed(error.message);
        }

    }
)();
