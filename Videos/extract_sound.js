const ffmpeg = require('ffmpeg');

async function extractSound(input_file, output_file) {

    try {
        const video = await new ffmpeg(input_file);
        await video.fnExtractSoundToMP3(output_file);
        console.log(`finished to extract audio from ${input_file}`);
    } catch (e) {
        console.log(e);
    }
}

const [ a, b, input_f, outp_f ] = process.argv;

input_f && outp_f ? extractSound(`./${input_f}`, `./${outp_f}`) : console.log('please provide input video and output');