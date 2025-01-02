export interface VideoType {
    id: number;
    name: string;
    videos: Array<{
        id: number;
        video: {
            url: string;
        };
        thumbnail?: {
            url: string;
        };
    }>;
}

export interface PhotoType {
    id: number;
    name: string;
    fotos: Array<{
        id: number;
        url: string;
    }>;
}

export interface MetinType {
    id: number;
    Metin: string;
    metin_alanis: Array<{
        id: number;
        title: string;
        body: string;
    }>;
}

export interface FotoResponseType {
    ilkTekliFoto: PhotoType | null;
    ilkÜçlüFoto: PhotoType | null;
    ilkAltılıFoto: PhotoType | null;
    ikinciÜçlüFoto: PhotoType | null;
    ikinciAltılıFoto: PhotoType | null;
    üçüncüÜçlüFoto: PhotoType | null;
    ikinciTekliFoto: PhotoType | null;
    üçüncüAltılıFoto: PhotoType | null;
    dördüncüAltılıFoto: PhotoType | null;
    beşinciAltılıFoto: PhotoType | null;
    altıncıAltılıFoto: PhotoType | null;
    yedinciAltılıFoto: PhotoType | null;
    dördüncüÜçlüFoto: PhotoType | null;
    beşinciÜçlüFoto: PhotoType | null;
    altıncıÜçlüFoto: PhotoType | null;
    sekizinciAltılıFoto: PhotoType | null;
    ilkÜçlüDigerİslemler: PhotoType | null;
    ikinciÜçlüDigerİslemler: PhotoType | null;
    ikinciAltılıDigerİslemler: PhotoType | null;
    ilkAltılıDigerİslemler: PhotoType | null;
} 