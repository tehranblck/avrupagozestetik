export const fetchFotosHomepage = async () => {
    const res = await fetch('https://api.avrupagozestetikinfo.com/api/fotos?populate[fotos][populate]=*', {
        next: { revalidate: 10 },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch components');
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
        ilkTekliFoto,
        ilkÜçlüFoto,
        ilkAltılıFoto,
        ikinciÜçlüFoto,
        ikinciAltılıFoto,
        üçüncüÜçlüFoto,
        ikinciTekliFoto,
        üçüncüAltılıFoto,
        dördüncüAltılıFoto,
        beşinciAltılıFoto,
        altıncıAltılıFoto,
        yedinciAltılıFoto,
        dördüncüÜçlüFoto,
        beşinciÜçlüFoto,
        altıncıÜçlüFoto,
        sekizinciAltılıFoto,
    };
};
