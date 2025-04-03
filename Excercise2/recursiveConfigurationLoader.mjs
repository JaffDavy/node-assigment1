import { readFile } from 'node:fs';

const configFiles = ['config.defaults.json', 'config.env.json', 'config.local.json'];

function loadConfig(files, index = 0, configData = {}) {
    if (index >= files.length) {
        console.log('Final config:', configData);
        return;
    }

    readFile(files[index], (err, contents) => {
        if (err) {
            console.error(`Error loading ${files[index]}:`, err);
        } else {
            // Logged successfully
            console.log(`Loaded ${files[index]}`);
            Object.assign(configData, JSON.parse(contents));
        }

        loadConfig(files, index + 1, configData);
    });
}

loadConfig(configFiles);


//1a//

//- the loadConfig function reads the configFile sequentially and merge the contents in 
//the configData file and does this recursivelly by calling its untill all files 
//have been proccesed

//1b//
//- errors are logged but the process does not crash
//- skip unreachable files and continues loading the rest
//- only read files will be included in the configuration