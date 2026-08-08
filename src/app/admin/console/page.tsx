'use client'

import { useState, useEffect } from 'react'

interface SiteSettings {
  seoMode: string
  robotsAllowAll: boolean
  sitemapEnabled: boolean
  metaNoIndex: boolean
}

interface BlogStats {
  total: number
  published: number
  scheduled: number
  draft: number
}

export default function ControlConsolePage() {
  const [settings, setSettings] = useState<SiteSettings>({
    seoMode: 'STEALTH',
    robotsAllowAll: false,
    sitemapEnabled: false,
    metaNoIndex: true,
  })
  const [blogStats, setBlogStats] = useState<BlogStats>({ total: 0, published: 0, scheduled: 0, draft: 0 })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    fetch('/api/admin/settings').then(r => r.json()).then(setSettings)
    fetch('/api/admin/blog?limit=1').then(r => r.json()).then(data => {
      const total = data.total
      Promise.all([
        fetch('/api/admin/blog?status=PUBLISHED&limit=1').then(r => r.json()),
        fetch('/api/admin/blog?status=SCHEDULED&limit=1').then(r => r.json()),
        fetch('/api/admin/blog?status=DRAFT&limit=1').then(r => r.json()),
      ]).then(([pub, sched, draft]) => {
        setBlogStats({
          total,
          published: pub.total,
          scheduled: sched.total,
          draft: draft.total,
        })
      })
    })
  }, [])

  async function saveSettings() {
    setSaving(true)
    await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(settings),
    })
    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  function applySeoPreset(mode: string) {
    switch (mode) {
      case 'STEALTH':
        setSettings({ seoMode: 'STEALTH', robotsAllowAll: false, sitemapEnabled: false, metaNoIndex: true })
        break
      case 'LIMITED':
        setSettings({ seoMode: 'LIMITED', robotsAllowAll: false, sitemapEnabled: true, metaNoIndex: false })
        break
      case 'NORMAL':
        setSettings({ seoMode: 'NORMAL', robotsAllowAll: true, sitemapEnabled: true, metaNoIndex: false })
        break
    }
  }

  async function publishScheduled() {
    await fetch('/api/admin/blog/publish', { method: 'POST' })
    window.location.reload()
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-white mb-6">Control Console</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
          <p className="text-3xl font-black text-teal-400">{blogStats.total}</p>
          <p className="text-sm text-gray-400 mt-1">Total Blog Posts</p>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
          <p className="text-3xl font-black text-green-400">{blogStats.published}</p>
          <p className="text-sm text-gray-400 mt-1">Published</p>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
          <p className="text-3xl font-black text-blue-400">{blogStats.scheduled}</p>
          <p className="text-sm text-gray-400 mt-1">Scheduled</p>
        </div>
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-5">
          <p className="text-3xl font-black text-gray-400">{blogStats.draft}</p>
          <p className="text-sm text-gray-400 mt-1">Drafts</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">SEO Mode</h2>
          <p className="text-sm text-gray-400 mb-6">Control how search engines discover and index NBRCprep.</p>

          <div className="space-y-3 mb-6">
            {[
              { mode: 'STEALTH', label: 'Stealth', desc: 'No indexing, no sitemap, noindex meta tags. Invisible to search engines.', color: 'border-red-500' },
              { mode: 'LIMITED', label: 'Limited', desc: 'Sitemap enabled but robots.txt restricts crawling. Gradual exposure.', color: 'border-teal-500' },
              { mode: 'NORMAL', label: 'Normal', desc: 'Full indexing, open sitemap, no restrictions. Maximum SEO visibility.', color: 'border-green-500' },
            ].map(preset => (
              <button
                key={preset.mode}
                onClick={() => applySeoPreset(preset.mode)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  settings.seoMode === preset.mode
                    ? `${preset.color} bg-gray-800`
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{preset.label}</span>
                  {settings.seoMode === preset.mode && (
                    <span className="text-xs bg-teal-500 text-black px-2 py-0.5 rounded font-bold">ACTIVE</span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mt-1">{preset.desc}</p>
              </button>
            ))}
          </div>

          <div className="space-y-4 border-t border-gray-700 pt-4">
            <h3 className="text-sm font-semibold text-gray-300 uppercase">Fine-Grained Controls</h3>
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-400">robots.txt: Allow all crawlers</span>
              <input
                type="checkbox"
                checked={settings.robotsAllowAll}
                onChange={e => setSettings({ ...settings, robotsAllowAll: e.target.checked })}
                className="w-5 h-5 rounded"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Sitemap: Expose to search engines</span>
              <input
                type="checkbox"
                checked={settings.sitemapEnabled}
                onChange={e => setSettings({ ...settings, sitemapEnabled: e.target.checked })}
                className="w-5 h-5 rounded"
              />
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-gray-400">Meta: Add noindex to all pages</span>
              <input
                type="checkbox"
                checked={settings.metaNoIndex}
                onChange={e => setSettings({ ...settings, metaNoIndex: e.target.checked })}
                className="w-5 h-5 rounded"
              />
            </label>
          </div>

          <button
            onClick={saveSettings}
            disabled={saving}
            className="mt-6 w-full px-6 py-3 bg-teal-500 text-black rounded-lg font-bold text-sm hover:bg-teal-500 disabled:opacity-50"
          >
            {saving ? 'Saving...' : saved ? 'Saved!' : 'Save SEO Settings'}
          </button>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Blog Publishing</h2>
          <p className="text-sm text-gray-400 mb-6">Manage blog post scheduling and publishing cadence.</p>

          <div className="space-y-4">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-2">Publishing Strategy</h3>
              <p className="text-sm text-gray-400">
                Posts are scheduled to publish every other day to maintain a natural growth pattern.
                The blog system supports 120 total posts, released over approximately 8 months.
              </p>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-2">Quick Actions</h3>
              <div className="space-y-2">
                <button
                  onClick={publishScheduled}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Publish All Due Scheduled Posts
                </button>
                <a
                  href="/admin/blog"
                  className="block w-full px-4 py-2 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-600 text-center"
                >
                  Manage Blog Posts
                </a>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-2">Current SEO Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Mode</span>
                  <span className={`font-bold ${settings.seoMode === 'STEALTH' ? 'text-red-400' : settings.seoMode === 'LIMITED' ? 'text-teal-400' : 'text-green-400'}`}>
                    {settings.seoMode}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Robots.txt</span>
                  <span className={settings.robotsAllowAll ? 'text-green-400' : 'text-red-400'}>
                    {settings.robotsAllowAll ? 'Open' : 'Restricted'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sitemap</span>
                  <span className={settings.sitemapEnabled ? 'text-green-400' : 'text-red-400'}>
                    {settings.sitemapEnabled ? 'Enabled' : 'Disabled'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Meta noindex</span>
                  <span className={settings.metaNoIndex ? 'text-teal-400' : 'text-green-400'}>
                    {settings.metaNoIndex ? 'Active (hidden)' : 'Inactive (visible)'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
