export const fetchVideoDatas = async () => {
    try {
        const [videoRes, thumbnailRes] = await Promise.all([
            fetch('https://api.avrupagozestetikinfo.com/api/home-page-videos?populate=videos.video', {
                next: { revalidate: 10 },
                headers: {
                    'Cache-Control': 'public, max-age=10',
                }
            }),
            fetch('https://api.avrupagozestetikinfo.com/api/home-page-videos?populate=videos.thumbnail', {
                next: { revalidate: 10 },
                headers: {
                    'Cache-Control': 'public, max-age=10',
                }
            })
        ]);

        if (!videoRes.ok || !thumbnailRes.ok) {
            throw new Error('Video veya thumbnail verisi alınamadı');
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
    } catch (error) {
        console.error('Video fetch hatası:', error);
        return [];
    }
};



