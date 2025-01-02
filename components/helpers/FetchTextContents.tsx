export const fetchTextContents = async () => {
    try {
        const req = await fetch('https://api.avrupagozestetikinfo.com/api/metinlers?populate=*', {
            next: { revalidate: 3600 },
            headers: {
                'Cache-Control': 'public, max-age=3600',
            }
        });

        if (!req.ok) {
            throw new Error('Metin verisi alınamadı');
        }

        const res = await req.json();
        const data = res.data;
        return data;
    } catch (error) {
        console.error('Metin fetch hatası:', error);
        return [];
    }
};