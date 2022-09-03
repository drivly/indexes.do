export default {
  fetch: async (req, env) => {
    const {origin, hostname, pathname, search, hash} = new URL(req.url)
    const target = req.url.replace(hostname + '/','')
    const data = await fetch(target, req).then(res => res.json())
    
    const indexes = Object.entries(flatten(data)).reduce((acc, [key, value]) => ({...acc, [`${key}: ${value} -> ${target}`]: target }))

    
    return new Response(JSON.stringify({
      api: {
        icon: '🔎',
        name: 'indexes.do',
        description: 'Index Generation Service',
        url: 'https://indexes.do',
        api: 'https://indexes.do/api',
        endpoints: {
          data: 'https://indexes.do/:url',
        },
        type: 'https://apis.do/data',
        repo: 'https://github.com/drivly/indexes.do',
      },
      indexes,
      data,
      user,
    }))
  }
}
