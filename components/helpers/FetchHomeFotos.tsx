export const fetchFotosHomepage = async () => {
    try {
        const res = await fetch(
            'https://api.avrupagozestetikinfo.com/api/fotos?populate[fotos][populate]=*',
            {
                next: { revalidate: 3600 }, // 1 saat cache
                headers: {
                    'Cache-Control': 'public, max-age=3600',
                }
            }
        );

        if (!res.ok) {
            throw new Error('Fotoğraflar yüklenirken hata oluştu');
        }

        const data = await res.json();

        // Fotoğrafları ID'ye göre sıralama
        const sortedPhotos = data.data.sort((a: any, b: any) => a.id - b.id);

        // Fotoğrafları ID'ye göre adlandırma
        const ilkTekliFoto = sortedPhotos.find((photo: any) => photo.name === 'İlk Tekli foto ANASAYFA');
        const ilkÜçlüFoto = sortedPhotos.find((photo: any) => photo.name === 'İlk Üçlü Foto ANASAYFA');
        const ilkAltılıFoto = sortedPhotos.find((photo: any) => photo.name === 'İlk Altılı Foto ANASAYFA');
        const ikinciÜçlüFoto = sortedPhotos.find((photo: any) => photo.name === 'İkinci Üçlü Foto ANASAYFA');
        const ikinciAltılıFoto = sortedPhotos.find((photo: any) => photo.name === 'İkinci Altılı Foto ANASAYFA');
        const üçüncüÜçlüFoto = sortedPhotos.find((photo: any) => photo.name === 'Üçüncü Üçlü Foto ANASAYFA');
        const ikinciTekliFoto = sortedPhotos.find((photo: any) => photo.name === 'İkinci Tekli Foto ANASAYFA');
        const üçüncüAltılıFoto = sortedPhotos.find((photo: any) => photo.name === 'Üçüncü Altılı Foto ANASAYFA');
        const dördüncüAltılıFoto = sortedPhotos.find((photo: any) => photo.name === 'Dördüncü Altılı Foto ANASAYFA');
        const beşinciAltılıFoto = sortedPhotos.find((photo: any) => photo.name === 'Beşinci Altılı Foto ANASAYFA');
        const altıncıAltılıFoto = sortedPhotos.find((photo: any) => photo.name === 'Altıncı Altılı Foto ANASAYFA');
        const yedinciAltılıFoto = sortedPhotos.find((photo: any) => photo.name === 'Yedinci Altılı Foto ANASAYFA');
        const dördüncüÜçlüFoto = sortedPhotos.find((photo: any) => photo.name === 'Dördüncü Üçlü Foto ANASAYFA');
        const beşinciÜçlüFoto = sortedPhotos.find((photo: any) => photo.name === 'Beşinci Üçlü Foto ANASAYFA');
        const altıncıÜçlüFoto = sortedPhotos.find((photo: any) => photo.name === 'Altıncı Üçlü Foto ANASAYFA');
        const sekizinciAltılıFoto = sortedPhotos.find((photo: any) => photo.name === 'Sekizinci Altılı Foto ANASAYFA');

        return {
            sortedPhotos,
            ilkTekliFoto: sortedPhotos.find((photo: any) => photo.name === 'İlk Tekli foto ANASAYFA'),
            ilkÜçlüFoto: sortedPhotos.find((photo: any) => photo.name === 'İlk Üçlü Foto ANASAYFA'),
            ilkAltılıFoto: sortedPhotos.find((photo: any) => photo.name === 'İlk Altılı Foto ANASAYFA'),
            ikinciÜçlüFoto: sortedPhotos.find((photo: any) => photo.name === 'İkinci Üçlü Foto ANASAYFA'),
            ikinciAltılıFoto: sortedPhotos.find((photo: any) => photo.name === 'İkinci Altılı Foto ANASAYFA'),
            üçüncüÜçlüFoto: sortedPhotos.find((photo: any) => photo.name === 'Üçüncü Üçlü Foto ANASAYFA'),
            ikinciTekliFoto: sortedPhotos.find((photo: any) => photo.name === 'İkinci Tekli Foto ANASAYFA'),
            üçüncüAltılıFoto: sortedPhotos.find((photo: any) => photo.name === 'Üçüncü Altılı Foto ANASAYFA'),
            dördüncüAltılıFoto: sortedPhotos.find((photo: any) => photo.name === 'Dördüncü Altılı Foto ANASAYFA'),
            beşinciAltılıFoto: sortedPhotos.find((photo: any) => photo.name === 'Beşinci Altılı Foto ANASAYFA'),
            altıncıAltılıFoto: sortedPhotos.find((photo: any) => photo.name === 'Altıncı Altılı Foto ANASAYFA'),
            yedinciAltılıFoto: sortedPhotos.find((photo: any) => photo.name === 'Yedinci Altılı Foto ANASAYFA'),
            dördüncüÜçlüFoto: sortedPhotos.find((photo: any) => photo.name === 'Dördüncü Üçlü Foto ANASAYFA'),
            beşinciÜçlüFoto: sortedPhotos.find((photo: any) => photo.name === 'Beşinci Üçlü Foto ANASAYFA'),
            altıncıÜçlüFoto: sortedPhotos.find((photo: any) => photo.name === 'Altıncı Üçlü Foto ANASAYFA'),
            sekizinciAltılıFoto: sortedPhotos.find((photo: any) => photo.name === 'Sekizinci Altılı Foto ANASAYFA'),
            ilkÜçlüDigerİslemler: sortedPhotos.find((photo: any) => photo.name === 'İlk Üçlü DİGER-İSLEMLER'),
            ikinciÜçlüDigerİslemler: sortedPhotos.find((photo: any) => photo.name === 'İkinci Üçlü DİGER-İSLEMLER'),
            ikinciAltılıDigerİslemler: sortedPhotos.find((photo: any) => photo.name === 'İkinci Altılı DİGER-İSLEMLER'),
            ilkAltılıDigerİslemler: sortedPhotos.find((photo: any) => photo.name === 'İlk Altılı DİGER-İSLEMLER')
        };
    } catch (error) {
        console.error('Fotoğraf fetch hatası:', error);
        return {
            sortedPhotos: [],
            ilkTekliFoto: null,
            ilkÜçlüFoto: null,
            ilkAltılıFoto: null,
            ikinciÜçlüFoto: null,
            ikinciAltılıFoto: null,
            üçüncüÜçlüFoto: null,
            ikinciTekliFoto: null,
            üçüncüAltılıFoto: null,
            dördüncüAltılıFoto: null,
            beşinciAltılıFoto: null,
            altıncıAltılıFoto: null,
            yedinciAltılıFoto: null,
            dördüncüÜçlüFoto: null,
            beşinciÜçlüFoto: null,
            altıncıÜçlüFoto: null,
            sekizinciAltılıFoto: null,
            ilkÜçlüDigerİslemler: null,
            ikinciÜçlüDigerİslemler: null,
            ikinciAltılıDigerİslemler: null,
            ilkAltılıDigerİslemler: null
        };
    }
}
