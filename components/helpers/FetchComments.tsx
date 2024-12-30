export const fetchComments = async () => {
    const res = await fetch('https://api.avrupagozestetikinfo.com/api/yorums?populate=*', {
        next: { revalidate: 15 },
    });
    const commentData = await res.json();
    return commentData;
};
