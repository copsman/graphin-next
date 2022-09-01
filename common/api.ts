export async function getData(): Promise<object> {
    return fetch('/api/hello').then((res) => {return res.json()})
}
