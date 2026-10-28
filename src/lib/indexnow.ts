const INDEXNOW_KEY = '8ba81c3d5cd144a0b745594ec1c66e2c'
const INDEXNOW_HOST = 'nbrcprep.app'
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow'

export async function submitToIndexNow(urls: string[]) {
  if (urls.length === 0) return

  try {
    const response = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: INDEXNOW_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls,
      }),
    })
    return { status: response.status, ok: response.ok }
  } catch {
    return { status: 0, ok: false }
  }
}
