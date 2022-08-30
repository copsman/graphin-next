export async function getData(): Promise<object> {
    return fetch(process.env.NODE_ENV + '/api/case').then((res) => res.json().then((r) => {return r;}))
}
