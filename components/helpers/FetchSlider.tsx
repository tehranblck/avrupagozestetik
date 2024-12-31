export const FetchSlider = async () => {
    const req = await fetch('https://api.avrupagozestetikinfo.com/api/infiniti-sliders?populate=*', {
        next: { revalidate: 10 }
    })
    const res = await req.json()
    return res.data
}