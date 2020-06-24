
let displayYoutubeInformation=()=>{
    let videoList = document.querySelectorAll('ytd-video-renderer');
    let videoInformation = [];
    videoList.forEach(element => {
        let url = element.querySelector('#video-title').href;
        let thumbnail = element.querySelector('#img').getAttribute('src');
        let videoTitle = element.querySelector('#video-title').textContent;
        let description = element.querySelector('#description-text').textContent;
        let views = element.querySelector('#metadata-line').textContent;
       
        videoInformation.push({
            "url":url,
            "thumbnail":thumbnail,
            "videoTitle":videoTitle,
            "description":description,
            "views":views
        })
        
    });
    console.log(videoInformation);
}