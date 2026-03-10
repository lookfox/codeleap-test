const API_URL = "https://dev.codeleap.co.uk/careers/"

export const getPosts = async () => {
    const res = await fetch (API_URL)
    const data = await res.json()
    return data.results
}