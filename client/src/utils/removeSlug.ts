export const removeSlug = (slug: string) =>{
    let id = slug.split("/")[3]
    return id
}