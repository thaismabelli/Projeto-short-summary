import ytdl from "ytdl-core"
import fs from 'fs'
import { info } from "console"

export const download = (videoId) => {
    const videoURL = "https://www.youtube.com/shorts/" + videoId
    console.log ('Realizando o download do vídeo:', videoId)

ytdl(videoURL, {quality: "lowestaudio", filter: "audioonly"})
.on ("info", (info) => {
    const seconds = info.formats[0].approxDurationMs / 1000
    console.log (seconds)

}
)

}


