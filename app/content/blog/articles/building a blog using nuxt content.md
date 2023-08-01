---
title: Building a blog using the Nuxt Content Module
description: A blog using Markdown and the Nuxt Content module
img: https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=792&q=80
alt: my first blog post
author_name: Ven
author_bio:
author_img: https://yovocjfzsatbfxwyjlpw.supabase.co/storage/v1/object/public/site/site/venkatesh.webp
featured: true
reading_time: 2
updatedAt: 2023-01-08
tags:
    - Markdown
    - Nuxt/Content
---

# My first blog post

## This is a heading 2

### This is a heading 3

This is some more info

```
export default {
  nuxt: "is the best"
}
```

```html[my-first-blog-post.md]
<p>code styling is easy</p>
```

## This is a sub heading

This is some more info in **bold**

## This is another sub heading

This is some more info

## This is an image

![Tux, the Linux mascot](https://images.unsplash.com/photo-1551415923-a2297c7fda79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)

## using tailwind inside md (didnt work)

Hello, this is a [Blue Markdown]{.bg-blue-200} text!

<div class="p-4 mb-4 text-3xl text-slate-900 bg-blue-500 border border-red-500">
  This is HTML inside markdown that has a class of note
</div>

::card
The content of the card
::
