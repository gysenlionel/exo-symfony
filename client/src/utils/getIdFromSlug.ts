export const getIdFromSlug = (slug: string) =>{
    let id = slug.split("/")[3]
    return id
}