export const fetchVideoDatas = async () => {
    const [videoRes, thumbnailRes] = await Promise.all([
        fetch('https://api.avrupagozestetikinfo.com/api/home-page-videos?populate=videos.video'),
        fetch('https://api.avrupagozestetikinfo.com/api/home-page-videos?populate=videos.thumbnail')
    ]);

    if (!videoRes.ok || !thumbnailRes.ok) {
        throw new Error('Failed to fetch video or thumbnail data');
    }

    const videoData = await videoRes.json();
    const thumbnailData = await thumbnailRes.json();

    const videoDetails = videoData.data.map((videoItem: any, index: any) => {
        const videoWithThumbnail = videoItem.videos.map((video: any, videoIndex: any) => {
            const thumbnail = thumbnailData.data[index]?.videos[videoIndex]?.thumbnail || {};

            return {
                ...video,
                thumbnail,
            };
        });

        return {
            ...videoItem,
            videos: videoWithThumbnail,
        };
    });

    return videoDetails;
};



