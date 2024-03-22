import export_default from "shai";

const convertSlugToString = (slug: string) => {
    return slug.split('-').map(word => word.charAt(0).toLowerCase() + word.slice(1)).join(' ');
}

export default convertSlugToString