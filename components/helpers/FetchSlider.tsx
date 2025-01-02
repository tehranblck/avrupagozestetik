export const FetchSlider = async () => {
    const req = await fetch('https://api.avrupagozestetikinfo.com/api/infiniti-sliders?populate=*')
    const res = await req.json()
    return res.data
}