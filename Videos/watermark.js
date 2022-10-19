const ffmpeg = require('ffmpeg');

async function addWatermark() {
    try {
        const video = await new ffmpeg('./example.mp4');
        const file = await video.fnAddWatermark('./watermark_img.png', './example_copy.mp4', { position: 'SE'});
        console.log('New video file: ' + file);
    } catch (e) {
        console.log(e.msg);
    }
}

addWatermark();
