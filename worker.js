export default {
  fetch: async (req, env) => {
    const {origin, hostname, pathname, search, hash} = new URL(req.url)
    const data = await fetch(req.url.replace(hostname + '/',''), req).then(res => res.json())
    
    return new Response(JSON.stringify({
      api: {
      },
      data,
      user,
    }))
  }
}
