import { blogPosts } from './posts'
import { generateTOC } from './schema'

export function getAllPosts() {
  return blogPosts.map(post => ({
    ...post,
    toc: post.toc || generateTOC(post.content),
  }))
}

export function getPostBySlug(slug) {
  const post = blogPosts.find(p => p.slug === slug)
  if (!post) return null
  return {
    ...post,
    toc: post.toc || generateTOC(post.content),
  }
}

export function getPostsByCategory(category) {
  return getAllPosts().filter(p => p.category === category)
}
