import { baseURL, routes as routesConfig } from '@/app/resources'
import { getPosts } from '@/app/utils/utils'

export default async function sitemap() {
  const works = getPosts(['src', 'app', 'work', 'projects']).map((post) => ({
    url: `https://${baseURL}/work/${post.slug}`,
    lastModified: post.metadata.publishedAt
  }))

  const activeRoutes = Object.keys(routesConfig).filter(
    (route) => routesConfig[route]
  )

  const routes = activeRoutes.map((route) => ({
    url: `https://${baseURL}${route !== '/' ? route : ''}`,
    lastModified: new Date().toISOString().split('T')[0]
  }))

  return [...routes, ...works]
}
