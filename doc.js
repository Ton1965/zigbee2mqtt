/**
 * This script generates the supported devices page.
 * Run by executing: npm run docs
 */

const plannedToSupport = [
    {
        model: 'WXKG11LM',
        description: 'Aqara wireless switch',
        supports: '-',
    },
    {
        model: 'WSDCGQ11LM',
        description: 'Aqara temperature & humidity sensor',
        supports: '-',
    },
    {
        model: 'MCCGQ11LM',
        description: 'Aqara door & window contact sensor',
        supports: '-',
    },
    {
        model: 'RTCGQ11LM',
        description: 'Aqara human body movement and illuminance sensor',
        supports: '-',
    },
    {
        model: 'SJCGQ11LM',
        description: 'Aqara water leak sensor',
        supports: '-',
    },
    {
        model: 'MFKZQ01LM',
        description: 'Mi magic cube controller',
        supports: '-',
    },
    {
        model: 'WXKG03LM',
        description: 'Aqara single key wireless wall switch',
        supports: '-',
    },
    {
        model: 'WXKG02LM',
        description: 'Aqara double key wireless wall switch',
        supports: '-',
    },
    {
        model: 'QBKG11LM',
        description: 'Aqara single key wired wall switch',
        supports: '-',
    },
    {
        model: 'QBKG03LM',
        description: 'Aqara double key wired wall switch',
        supports: '-',
    },
    {
        model: 'QBKG03LM',
        description: 'Aqara double key wired wall switch',
        supports: '-',
    },
    {
        model: 'ZNCZ02LM',
        description: 'Mi power plug ZigBee',
        supports: '-',
    },
    {
        model: 'QBCZ11LM',
        description: 'Aqara wall socket',
        supports: '-',
    },
    {
        model: 'JTYJ-GD-01LM/BW',
        description: 'MiJia Honeywell smoke detector',
        supports: '-',
    },
    {
        model: 'KTBL01LM',
        description: 'Aqara air conditioning companion',
        supports: '-',
    },
    {
        model: 'KTBL02LM',
        description: 'Aqara air conditioning companion 2',
        supports: '-',
    },
];

const parsers = require('./parsers');
const deviceMapping = require('./devices');

// Sanity check if all supported devices are in deviceMapping
const supportedDevices = new Set();
parsers.forEach((p) => supportedDevices.add(...p.devices));

// Check if in deviceMapping.
supportedDevices.forEach((s) => {
    if (!Object.values(deviceMapping).find((d) => d.model === s)) {
        console.log(`ERROR: ${s} not in deviceMapping`);
    }
});

const logDevices = (devices) => {
    console.log('| Model | Description | Picture |')
    console.log('| ------------- | ------------- | -------------------------- |')
    devices.forEach((device) => {
        console.log(`| ${device.model} | ${device.description} (${device.supports}) | ![${device.model}](images/devices/${device.model}.jpg) |`);
    });
}

console.log('GENERATED')
console.log('=============================')
console.log('*NOTE: Automatically generated by `npm run docs`*')
console.log('')
console.log('In case your device is **NOT** listed here, please create an issue at: https://github.com/Koenkk/xiaomi-zb2mqtt/issues');
console.log('')
logDevices(Object.values(deviceMapping));
console.log('');
console.log('### Planned to support');
console.log('Devices listed below are **NOT** supported but are planned to be.');
console.log('')
logDevices(plannedToSupport);
console.log('=============================')
