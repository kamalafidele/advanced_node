const fluent_ffmpeg = require("fluent-ffmpeg");

let video = fluent_ffmpeg();

video.mergeAdd('./example.mp4')
     .mergeAdd('./sample.mp4')
     .on('error', e => console.log('Error: ', e))
     .on('end', e => console.log('Finished to merge the files'))
     .mergeToFile('./merged_video.mp4', '/');