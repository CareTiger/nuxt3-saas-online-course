---
title: Using Tailwind Typography with Nuxt Content
description: Making your Nuxt Content blog more readable with the Tailwind typography module
img: https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80
alt: Markdown cheat sheet
author_name: Ven
author_bio:
author_img: https://yovocjfzsatbfxwyjlpw.supabase.co/storage/v1/object/public/site/site/venkatesh.webp
featured: false
reading_time: 5
updatedAt: 2023-01-09
tags:
    - tailwindcss/typography
    - nuxt/content
---

# Adding Tailwind typography to render your Nuxt Content blog

By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. The official Tailwind CSS Typography plugin provides a set of prose classes you can use to add beautiful typographic defaults to any vanilla HTML you don't control, like HTML rendered from Markdown, or pulled from a CMS.

## Table of Contents

1. [Install and add the tailwind/typography module](#init)
2. [Use the module to wrap your Markdown content](#configure)
3. [Fallback](#fallback)
4. [Sample blog content](#sample)
5. [Wrap up](#wrap-up)

### Install and add the tailwind/typography module[#install]

Install the @tailwindcss/typography module <a id="install"></a>

```
npm i -D @tailwindcss/typography
```

Add the @tailwindcss/typography module to <mark>tailwind.config.js</mark> file

```
plugins: [require("@tailwindcss/typography")],
```

### Use the module to wrap your Markdown content <a id="configure"></a>

Wrap the rendered Markdown content with tailwind/typography module element modifiers in your <mark>[...slug.vue]</mark> file

```
<div class="prose prose-img:rounded-3xl prose-headings:text-slate-900 prose-headings:no-underline prose-a:text-blue-600">
    <ContentDoc />
</div>
```

### Fallback <a id="fallback"></a>

Use the <style></style> tags if the element modifiers don't work. For example, I had trouble getting the "prose-headings:no-underline" to work for h2, h3, etc.

```
<style>
h2>a {
    text-decoration: none !important;
    color: #0f172a !important;
}

h3>a {
    text-decoration: none !important;
    color: #0f172a !important;
}
</style>
```

### Sample blog content <a id="sample"></a>

# This is a heading 1

## This is a heading 2

### This is a heading 3

Some paragraphs.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit duis tristique sollicitudin nibh sit amet. Pretium viverra suspendisse potenti nullam. Massa ultricies mi quis hendrerit dolor magna eget est. Maecenas sed enim ut sem viverra aliquet. Quam quisque id diam vel quam elementum pulvinar etiam non. Id ornare arcu odio ut sem nulla pharetra diam. Fames ac turpis egestas maecenas pharetra convallis posuere. Tempor id eu nisl nunc. Ipsum faucibus vitae aliquet nec ullamcorper sit amet. Lacus suspendisse faucibus interdum posuere. Posuere ac ut consequat semper viverra nam libero. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Habitant morbi tristique senectus et netus et malesuada fames ac. Amet est placerat in egestas erat imperdiet sed. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Feugiat in ante metus dictum at.

At lectus urna duis convallis. Dictum non consectetur a erat nam at lectus urna. Sociis natoque penatibus et magnis dis parturient montes. Senectus et netus et malesuada fames ac turpis egestas. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Quis lectus nulla at volutpat. Eget nullam non nisi est. Magna fermentum iaculis eu non diam. Nibh ipsum consequat nisl vel. Blandit turpis cursus in hac habitasse platea. In iaculis nunc sed augue lacus. A lacus vestibulum sed arcu non odio. Etiam dignissim diam quis enim lobortis scelerisque. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Porttitor eget dolor morbi non arcu risus quis varius. Pulvinar mattis nunc sed blandit. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Cras ornare arcu dui vivamus arcu felis.

<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>

A rounded image with full width :

![Tux, the Linux mascot](https://images.unsplash.com/photo-1551415923-a2297c7fda79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)

### Wrap up <a id="wrapup"></a>

And that's a wrap. We have learned how to use the prose classes to

---

### References

-   [Official tailwindcss typography documentation](https://tailwindcss.com/docs/typography-plugin)
-   [How to use the TailwindCSS Typography plugin](https://redpixelthemes.com/blog/tailwindcss-typography-plugin/)
