export const fetchTextContents = async () => {
    try {
        const response = await fetch('https://api.avrupagozestetikinfo.com/api/metinlers?populate=*');
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Metin içeriği yüklenirken bir hata oluştu:', error);
        return [];
    }
}