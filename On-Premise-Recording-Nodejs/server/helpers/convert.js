const shell = require('shelljs');

const generateVideo = async channel => {
    shell.exec(`python ~/agora-recording/record/src/sdk/tools/video_convert.py -f ~/agora-recording/server/output/${channel}`, {async: false} ).stdin;
}

const moveVideo = async channel => {
    shell.exec(`find ~/agora-recording/server/output/${channel}/ -name '*av.mp4' -exec mv -t ~/ftp/${channel}/ {} +`)
}

module.exports = {
    generateVideo,
    moveVideo
}