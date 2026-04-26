# Research / Blog content map (current state)

Generated from:

- `src/content/blog/*.mdx`
- `src/app/blog/page.tsx`
- `src/app/sitemap.ts`
- `src/lib/blog.ts`

This is a **plain-text inventory** intended for safe internal-linking + visibility-layer restructuring.
No production content was modified to produce this file.

---

## How `/blog` currently chooses which articles to show

Source: `src/app/blog/page.tsx` + `src/lib/blog.ts`

- **Data source**: `getAllPosts()` from `src/lib/blog.ts`
  - Reads `src/content/blog/*.mdx`
  - Parses frontmatter with `gray-matter`
  - **Excludes drafts**: `draft: true` is filtered out
  - Sorts by date **descending** (`new Date(b.date) - new Date(a.date)`)
- **Featured section**: `featured = posts.slice(0, 2)` (top 2 newest published posts)
- **All research notes**: currently uses **`all = posts`** (all published posts; includes featured posts too)

---

## Sitemap coverage for blog posts

Source: `src/app/sitemap.ts`

- **Sitemap URL**: `/sitemap.xml`
- **Includes blog posts**: **Yes** (via `getAllPosts()` → `/blog/${slug}`)
- **Draft/hidden posts excluded**: **Yes** (because `getAllPosts()` filters `draft: true`)

---

## “Subtle link” CSS (Layer 2)

- **Defined in**: `src/styles/globals.css`
- **Applied globally from**: `src/app/layout.tsx` (imports `@/styles/globals.css`)

CSS:

```css
.subtle-link {
  text-decoration: none;
  cursor: pointer;
}

.subtle-link:hover {
  text-decoration: underline;
  text-decoration-thickness: 1px;
  opacity: 0.85;
}
```

---

## Blog articles inventory

Notes:

- **Slug** = filename without `.mdx`
- **Appears on `/blog`** = only if `draft !== true`
- **Internal links** = links to site-relative paths (e.g. `/blog/...`)
- **Outgoing links** = external `http(s)` URLs

### 1) `what-breaks-first-when-scheduling-scales`

- **slug**: `what-breaks-first-when-scheduling-scales`
- **title**: What Actually Breaks First When a Scheduling System Scales
- **description**: Most scheduling systems don’t fail immediately. They fail only after a business reaches a certain level of operational complexity. This article explains what actually breaks first — and why.
- **date**: 2026-04-18
- **tags**: *(none in frontmatter → parsed as empty list)*
- **draft**: false *(no `draft: true` in frontmatter; draft is only true if explicitly set)*
- **appears on `/blog`**: yes
- **current internal links found in article**:
  - `/blog/how-to-evaluate-a-crm-framework` *(via `<a className="subtle-link" ...>`)*  
- **current outgoing links**: none found
- **suggested role**: **Layer 3 / Deep answer article**

### 2) `why-appointment-scheduling-systems-fail-service-businesses`

- **slug**: `why-appointment-scheduling-systems-fail-service-businesses`
- **title**: Why Scheduling Breaks in Service Businesses (and How to Fix It)
- **description**: Most scheduling problems aren’t staff mistakes — they’re system design issues. A practical guide to fixing operational chaos.
- **date**: 2026-03-26
- **tags**: Scheduling; Operations; CRM; Service Business
- **draft**: false
- **appears on `/blog`**: yes
- **current internal links found in article**:
  - `/blog/how-to-evaluate-a-crm-framework` *(markdown link)*  
  - `/blog/what-breaks-first-when-scheduling-scales` *(via `<a className="subtle-link" ...>`)*  
- **current outgoing links**: none found
- **suggested role**: **Layer 1 / Featured entry article**

### 3) `how-to-evaluate-a-crm-framework`

- **slug**: `how-to-evaluate-a-crm-framework`
- **title**: How to Evaluate a CRM System: A Practical Framework for Service Businesses
- **description**: A practical framework for choosing a CRM that actually works in real operations — not just in demos.
- **date**: 2026-02-25
- **tags**: CRM; Business Systems; Operations; SaaS
- **draft**: false *(no `draft: true` in frontmatter)*
- **appears on `/blog`**: yes
- **current internal links found in article**:
  - `/blog/why-appointment-scheduling-systems-fail-service-businesses` *(markdown link)*  
  - `/blog/what-breaks-first-when-scheduling-scales` *(via `<a className="subtle-link" ...>`)*  
- **current outgoing links**: none found
- **suggested role**: **Layer 1 / Featured entry article**

---

## Draft (hidden) posts inventory

These exist as MDX files but are **excluded** from:

- `/blog` (Research index)
- `/sitemap.xml`
- `/blog/[slug]` (because `getPostBySlug()` returns `null` when `draft: true`)

### 4) `square-fresha-mindbody`

- **slug**: `square-fresha-mindbody`
- **title**: Square vs Fresha vs Mindbody — practical trade-offs
- **description**: A tactical comparison for salon owners: costs, workflows, scheduling limits, and hidden friction.
- **date**: 2026-02-24
- **tags**: compare; owner; ops
- **draft**: true
- **appears on `/blog`**: no
- **current internal links found in article**: none found *(links via markdown/`href=` not detected)*
- **current outgoing links**: none found
- **suggested role**: **Layer 2 / Supporting article** *(comparison hub candidate once published)*

### 5) `financial-privacy-safe-mode`

- **slug**: `financial-privacy-safe-mode`
- **title**: Financial privacy / Safe Mode PIN — why it matters
- **description**: Shared screens leak financial data. Safe Mode PIN is a simple default that protects teams without killing UX.
- **date**: 2026-02-24
- **tags**: privacy; ops; security
- **draft**: true
- **appears on `/blog`**: no
- **current internal links found in article**: none found
- **current outgoing links**: none found
- **suggested role**: **Layer 3 / Deep answer article** *(privacy model “why it matters”)*

### 6) `owner-checklist`

- **slug**: `owner-checklist`
- **title**: Owner checklist — launching a salon CRM
- **description**: A practical rollout checklist for owners: timelines, risks, training, and avoiding operational downtime.
- **date**: 2026-02-24
- **tags**: owner; ops; rollout
- **draft**: true
- **appears on `/blog`**: no
- **current internal links found in article**: none found
- **current outgoing links**: none found
- **suggested role**: **Layer 2 / Supporting article** *(checklist / operational playbook)*

---

## SEO metadata note (titles/descriptions for articles)

Blog page metadata is generated in `src/app/blog/[slug]/page.tsx` via `generateMetadata()`.

- Default is derived from frontmatter via `getPostBySlug()`.
- There are **slug-specific overrides** for the `<title>` and `description` for:
  - `how-to-evaluate-a-crm-framework`
  - `why-appointment-scheduling-systems-fail-service-businesses`

