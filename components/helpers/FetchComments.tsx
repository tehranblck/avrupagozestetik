export const fetchComments = async () => {
    const res = await fetch('https://api.avrupagozestetikinfo.com/api/yorums?populate=*');
    const commentData = await res.json();
    return commentData;
};
