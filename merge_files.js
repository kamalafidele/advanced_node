const merge_files = require('merge-files');

async function mergeFiles() {
    const output = __dirname + '/merged.mp4';
    const input_list = [
        __dirname + '/Shuffle.mp4',
        __dirname + '/example.mp4',
        __dirname + '/sample.mp4',
    ];
    
    try {
        const status = await merge_files(input_list, output);
        console.log(status)
        console.log('Finished merging two video');
    } catch (e) {
        console.log(e);
    }
}

mergeFiles();