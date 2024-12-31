export const CommentPageVideos = async () => {
    const data = await fetch('https://api.avrupagozestetikinfo.com/api/yorumlar-videolaris?populate=*', {
        next: { revalidate: 15 }, // 15 saniyede bir yenilemeyi sağlamak için
    });
    const Videos = await data.json();
    return Videos;
};
