export const CommentPageVideos = async () => {
    const data = await fetch('https://api.avrupagozestetikinfo.com/api/yorumlar-videolaris?populate=*');
    const Videos = await data.json();
    return Videos;
};
