const base_url="https://api.dev.migobucks.com"

export const getUrl=(path)=>{ 
    const url=`${base_url}${path}`
    return url
}