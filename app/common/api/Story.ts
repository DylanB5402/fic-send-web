
const getAllStories = async () => {
    const stories : [] = (await fetch("/api/story").then(s => s.json())).map((s: { url: any; }) => s.url)
    return stories
}   

export default getAllStories;