const { exec } = require('child_process');

async function stackVideos(video1, video2) {
    const command =  `ffmpeg -i ${video1} -i ${video2} -vf "movie=${video2},scale=400:400 -1 [inner]; [in][inner] overlay=0:main_h - (overlay_h + 10) [out]" completed.mp4`;
    const { stdout, stderr } = await exec(command);
    console.log('Progressing with the action');
    console.log(stdout);
    console.log('erro: ', stderr);
}

stackVideos('happierlead_video.mp4', 'George.mp4');