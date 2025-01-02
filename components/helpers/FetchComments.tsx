export const fetchComments = async () => {
    const res = await fetch('https://api.avrupagozestetikinfo.com/api/yorums?populate=*', {
        next: { revalidate: 10 },
        headers: {
            'Cache-Control': 'public, max-age=10',
        }
    });
    const commentData = await res.json();
    return commentData;
};
