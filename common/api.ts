export async function getData(): Promise<object> {
    return fetch('/api/autosave').then((res) => {return res.json()})
}
