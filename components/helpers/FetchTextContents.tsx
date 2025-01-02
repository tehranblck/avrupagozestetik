export const fetchTextContents = async () => {
    const req = await fetch('https://api.avrupagozestetikinfo.com/api/metinlers?populate=*')
    const res = await req.json()
    const data = res.data
    return data
};