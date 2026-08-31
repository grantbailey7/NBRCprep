'use client'

import { useState, useEffect } from 'react'

interface BlogPost {
  id: string
  slug: string
  title: string
  description: string
  category: string
  status: string
  readTime: string
  publishAt: string | null
  publishedAt: string | null
  createdAt: string
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [statusFilter, setStatusFilter] = useState('')
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)

  const [form, setForm] = useState({
    slug: '', title: '', description: '', content: '', category: 'Study Guide',
    readTime: '5 min read', status: 'DRAFT', publishAt: '',
  })

  async function fetchPosts() {
    setLoading(true)
    const params = new URLSearchParams({ page: String(page), limit: '20' })
    if (statusFilter) params.set('status', statusFilter)
    const res = await fetch(`/api/admin/blog?${params}`)
    const data = await res.json()
    setPosts(data.posts)
    setTotal(data.total)
    setLoading(false)
  }

  useEffect(() => { fetchPosts() }, [page, statusFilter])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const url = editingPost ? `/api/admin/blog/${editingPost.id}` : '/api/admin/blog'
    const method = editingPost ? 'PUT' : 'POST'
    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...form,
        publishAt: form.publishAt || null,
      }),
    })
    setShowForm(false)
    setEditingPost(null)
    setForm({ slug: '', title: '', description: '', content: '', category: 'Study Guide', readTime: '5 min read', status: 'DRAFT', publishAt: '' })
    fetchPosts()
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this post?')) return
    await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' })
    fetchPosts()
  }

  async function publishScheduled() {
    await fetch('/api/admin/blog/publish', { method: 'POST' })
    fetchPosts()
  }

  function editPost(post: BlogPost) {
    setEditingPost(post)
    setForm({
      slug: post.slug,
      title: post.title,
      description: post.description,
      content: '',
      category: post.category,
      readTime: post.readTime,
      status: post.status,
      publishAt: post.publishAt ? new Date(post.publishAt).toISOString().slice(0, 16) : '',
    })
    setShowForm(true)
    fetch(`/api/admin/blog/${post.id}`).then(r => r.json()).then(full => {
      setForm(prev => ({ ...prev, content: full.content }))
    })
  }

  const statusColors: Record<string, string> = {
    DRAFT: 'bg-gray-600',
    SCHEDULED: 'bg-blue-600',
    PUBLISHED: 'bg-green-600',
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
          <p className="text-gray-400 text-sm mt-1">{total} total posts</p>
        </div>
        <div className="flex gap-3">
          <button onClick={publishScheduled} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
            Publish Scheduled
          </button>
          <button onClick={() => { setShowForm(true); setEditingPost(null); setForm({ slug: '', title: '', description: '', content: '', category: 'Study Guide', readTime: '5 min read', status: 'DRAFT', publishAt: '' }) }} className="px-4 py-2 bg-teal-500 text-black rounded-lg text-sm font-bold hover:bg-teal-500">
            + New Post
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {['', 'DRAFT', 'SCHEDULED', 'PUBLISHED'].map(s => (
          <button
            key={s}
            onClick={() => { setStatusFilter(s); setPage(1) }}
            className={`px-3 py-1 rounded text-sm ${statusFilter === s ? 'bg-teal-500 text-black font-bold' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            {s || 'All'}
          </button>
        ))}
      </div>

      {showForm && (
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-white mb-4">{editingPost ? 'Edit Post' : 'New Post'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Slug</label>
                <input value={form.slug} onChange={e => setForm({ ...form, slug: e.target.value })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm" required />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Category</label>
                <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm">
                  <option>Study Guide</option>
                  <option>Exam Tips</option>
                  <option>Division Guide</option>
                  <option>Career</option>
                  <option>Clinical Knowledge</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Title</label>
              <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm" required />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Description</label>
              <input value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm" required />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-1">Content (HTML)</label>
              <textarea value={form.content} onChange={e => setForm({ ...form, content: e.target.value })} rows={10} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm font-mono" required />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">Read Time</label>
                <input value={form.readTime} onChange={e => setForm({ ...form, readTime: e.target.value })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Status</label>
                <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm">
                  <option value="DRAFT">Draft</option>
                  <option value="SCHEDULED">Scheduled</option>
                  <option value="PUBLISHED">Published</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">Publish At</label>
                <input type="datetime-local" value={form.publishAt} onChange={e => setForm({ ...form, publishAt: e.target.value })} className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white text-sm" />
              </div>
            </div>
            <div className="flex gap-3">
              <button type="submit" className="px-6 py-2 bg-teal-500 text-black rounded-lg text-sm font-bold hover:bg-teal-500">
                {editingPost ? 'Update' : 'Create'}
              </button>
              <button type="button" onClick={() => { setShowForm(false); setEditingPost(null) }} className="px-6 py-2 bg-gray-700 text-white rounded-lg text-sm hover:bg-gray-600">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase">Title</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase">Category</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase">Status</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-gray-400 uppercase">Publish Date</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-gray-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map(post => (
              <tr key={post.id} className="border-b border-gray-800 hover:bg-gray-800/50">
                <td className="px-4 py-3">
                  <p className="text-sm text-white font-medium">{post.title}</p>
                  <p className="text-xs text-gray-500">{post.slug}</p>
                </td>
                <td className="px-4 py-3 text-sm text-gray-400">{post.category}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium text-white ${statusColors[post.status] || 'bg-gray-600'}`}>
                    {post.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-400">
                  {post.publishAt ? new Date(post.publishAt).toLocaleDateString() : '-'}
                </td>
                <td className="px-4 py-3 text-right">
                  <button onClick={() => editPost(post)} className="text-xs text-blue-400 hover:text-blue-300 mr-3">Edit</button>
                  <button onClick={() => handleDelete(post.id)} className="text-xs text-red-400 hover:text-red-300">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <div className="p-8 text-center text-gray-500">Loading...</div>}
      </div>

      {total > 20 && (
        <div className="flex justify-center gap-2 mt-4">
          <button disabled={page <= 1} onClick={() => setPage(p => p - 1)} className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm disabled:opacity-50">Prev</button>
          <span className="px-3 py-1 text-gray-400 text-sm">Page {page}</span>
          <button disabled={posts.length < 20} onClick={() => setPage(p => p + 1)} className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm disabled:opacity-50">Next</button>
        </div>
      )}
    </div>
  )
}
