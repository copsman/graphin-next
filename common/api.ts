export async function getData(): Promise<object> {
    return fetch('/api/autosave').then((res) => {return res.json()})
}

export async function setData(input:Object): Promise<object> {
    return fetch('/api/autosave', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(input)
    })
}