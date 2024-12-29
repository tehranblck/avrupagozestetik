// Fetch video data
export const fetchVideoDatas = async () => {
    const res = await fetch('https://api.avrupagozestetikinfo.com/api/home-page-videos?populate[name][populate]=*', {
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        throw new Error('Failed to fetch video data');
    }
    const data = await res.json();
    return data.data;
};