export const FetchSlider = async () => {
    try {
        const req = await fetch('https://api.avrupagozestetikinfo.com/api/infiniti-sliders?populate=*')
        const res = await req.json()
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
    }
}