// Fetch photo data
export const fetchFotosHomepage = async () => {
    const res = await fetch('https://api.avrupagozestetikinfo.com/api/home-page-fotos?populate=*', {
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        throw new Error('Failed to fetch components');
    }
    const data = await res.json();
    return data.data;
};
