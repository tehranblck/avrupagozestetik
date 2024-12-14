export const fetchCategories = async (locale: string) => {
    const BASE_URL = "http://localhost:1337";
    const response = await fetch(`${BASE_URL}/api/categories?locale=${locale}&populate=*`);
    const data = await response.json();

    return data.data.map((item: any) => ({
        id: item.id,
        title: item.title,
        href: `/category/${item.title}`,
        image_icon: `${BASE_URL}${item.image_icon.formats.small.url}`,
    }));
};