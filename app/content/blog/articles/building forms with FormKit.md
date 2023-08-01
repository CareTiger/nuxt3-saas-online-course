---
title: Building a form with FormKit
description: Build Vue 3 forms 10x faster with FormKit.
img: https://images.unsplash.com/photo-1642480485642-63b9018eadc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
alt: Using FormKit with Nuxt
author_name: Ven
author_bio:
author_img: https://yovocjfzsatbfxwyjlpw.supabase.co/storage/v1/object/public/site/site/venkatesh.webp
featured: true
reading_time: 8
updatedAt: 2023-01-10
tags:
    - FormKit
    - Nuxt 3.0
    - Tailwind CSS
---

# Creating your first form using FormKit

From the FormKit website, FormKit is a framework that simplifies form structure, generation, validation, theming, submission, error handling, and more. FormKit is your one-stop solution for high-end Vue forms in your web applications. It includes everything you need — labels, help text, theming support, validation, form generation from JSON, accessibility, internationalization and more!

## Table of Contents

1. [Create a Nuxt project](#init)
2. [Installing and configuring Tailwind CSS](#tailwind)
3. [Installing and configuring FormKit modules](#formkit)
4. [Set up FormKit for Tailwind themes](#theming)
5. [Create a simple form to test FormKit and theming](#form)
6. [Wrap up](#wrap-up)

### Create a new Nuxt 3.0 project <a id="init"></a>

```
npx nuxi init nuxt3-formkit
```

Change into the created folder, install barebones app and run

```
cd nuxt3-formkit
npm i
```

Open the folder in VS Code.

```
code .
```

Open a terminal in VS Code and run the barebones app to check if the basic install was ok.

```
npm run dev
```

### Install nuxt/tailwind module <a id="tailwind"></a>

```
npm install --save-dev @nuxtjs/tailwindcss
```

Add the module to nuxt.config

```
modules: ['@nuxtjs/tailwindcss']
```

Install '@tailwindcss/forms'

```
npm i @tailwindcss/forms
```

Update nuxt.config to include tailwind forms

```
modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt', '@tailwindcss/forms',]
```

### Install the FormKit modules for Nuxt <a id="formkit"></a>

```
npm i @formkit/nuxt @formkit/themes
```

Add @formkit/nuxt to nuxt.config

```
modules: ['@nuxtjs/tailwindcss', '@formkit/nuxt']
```

### Setting up FormKit for Tailwind themes <a id="theming"></a>

Create a formkit.config.js file and add the following code

```
import { generateClasses } from '@formkit/themes';

export default {
    config: {
        classes: generateClasses({
            global: {
                outer: 'mb-5 formkit-disabled:opacity-50',
                help: 'text-xs text-gray-500',
                messages: 'list-none p-0 mt-1 mb-0',
                message: 'text-red-500 mb-1 text-xs',
            },
            text: {
                label: 'block mb-1 ml-4 font-bold text-sm"',
                inner: 'border border-slate-400 rounded-3xl mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-3 border-none text-base text-slate-700 placeholder-slate-400',
                help: 'text-xs ml-4 text-slate-500 dark:text-slate-200',
                messages: 'list-none p-0 mt-1 mb-0',
                message: 'text-xs ml-4 text-red-500 dark:text-red-400',
            },
            email: {
                label: 'block mb-1 ml-4 font-bold text-sm',
                help: 'text-xs ml-4 text-slate-500 dark:text-slate-200',
                inner: 'border border-slate-400 rounded-3xl mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-4 border-none text-base text-slate-700 placeholder-slate-400',
                message: 'text-xs ml-4 text-red-500 dark:text-red-400',
            },
            password: {
                outer: 'mb-5',
                label: 'block mb-1 ml-4 font-bold text-sm',
                help: 'text-xs ml-4 text-slate-500 dark:text-slate-200',
                inner: 'border border-slate-400 rounded-3xl mb-1 overflow-hidden focus-within:border-blue-500',
                input: 'w-full h-10 px-4 border-none text-base text-slate-700 placeholder-slate-400',
                message: 'text-xs ml-4 text-red-500 dark:text-red-400',
            },
            submit: {
                input: 'flex justify-center items-center w-full h-full px-4 py-3 border-none text-sm text-white bg-blue-600 rounded-full hover:bg-blue-400 focus:outline-none focus:ring-0 transition duration-200',
            },
        }),
    },
};
```

Create a Tailwind config file

```
npx tailwind init
```

Update tailwind.config to pick up the FormKit theming

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './formkit.config.js'],
  theme: {
    extend: {},
  },
  plugins: [
    require('@formkit/themes/tailwindcss'),
  ],
}
```

### Create a simple form to test FormKit and theming <a id="form"></a>

Replace the boilerplate code in app.vue

```
<template>
  <div class="grid place-items-center max-w-md mx-auto min-h-screen p-6">
    <FormKit type="form" id="registration-example" :form-class="submitted ? 'hide' : 'show'" submit-label="Register"
      @submit="submitHandler" :actions="false" #default="{ value }">
      <h1>Register!</h1>
      <p>
        You can put any type of element inside a form, not just FormKit inputs
        (although only FormKit inputs are included with the submission).
      </p>
      <hr />
      <FormKit type="text" name="name" label="Your name" placeholder="Jane Doe" help="What do people call you?"
        validation="required" />
      <FormKit type="text" name="email" label="Your email" placeholder="jane@example.com"
        help="What email should we use?" validation="required|email" />
      <div class="double">
        <FormKit type="password" name="password" label="Password" validation="required|length:6|matches:/[^a-zA-Z]/"
          :validation-messages="{
            matches: 'Please include at least one symbol',
          }" placeholder="Your password" help="Choose a password" />
        <FormKit type="password" name="password_confirm" label="Confirm password" placeholder="Confirm password"
          validation="required|confirm" help="Confirm your password" />
      </div>

      <FormKit type="submit" label="Register" />
      <pre wrap>{{ value }}</pre>
    </FormKit>
    <div v-if="submitted">
      <h2>Submission successful!</h2>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const submitted = ref(false)
const submitHandler = async () => {
// Let's pretend this is an ajax request:
await new Promise((r) => setTimeout(r, 1000))
submitted.value = true
};
</script>
```

### Wrap up <a id="wrapup"></a>

And thats it! You have created your first FormKit form.

---

### References

-   [Official guide for creating a tailwind theme in FormKit](https://formkit.com/guides/create-a-tailwind-theme)
-   [Nuxt starter on StackBlitz](https://stackblitz.com/edit/nuxt-starter-51dncb?file=nuxt.config.ts)
-   <a href="https://nuxt3-formkit.vercel.app/" target="_blank">Demo</a>
-   <a href="https://github.com/CareTiger/nuxt3-formkit" target="_blank">Source code</a>
