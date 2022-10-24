import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import adapter from '@sveltejs/adapter-netlify';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  kit :{
    target : '#svelte',
    adapter: adapter(),
    prerender : {
      crawl : true,
      enabled:true,
      onError:'continue',
      pages:['*'],
    }
  }
})


