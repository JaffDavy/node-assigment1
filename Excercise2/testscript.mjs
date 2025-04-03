import { promises as fs } from 'node:fs';

const configFiles = ['config.defaults.json', 'config.env.json', 'config.local.json'];

async function loadConfig(files, index = 0, configData = {}) {
    if (index >= files.length) {
        console.log('Final merged config:', JSON.stringify(configData, null, 2));
        return configData;
    }

    try {
        const contents = await fs.readFile(files[index], 'utf-8');
        // Log successfully loaded file
        console.log(`Loaded ${files[index]}`);
        Object.assign(configData, JSON.parse(contents));
    } catch (err) {
        console.error(`Error loading ${files[index]}:`, err);
    }

    return loadConfig(files, index + 1, configData);
}

async function testConfigLoader() {
    console.log('Starting config loading...');
    await loadConfig(configFiles);
    console.log('loading complete.');
}

testConfigLoader();
