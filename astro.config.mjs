import { defineConfig } from 'astro/config';
import storyblok from "@storyblok/astro";
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import netlify from "@astrojs/netlify/functions";
const env = loadEnv('', process.cwd(), 'STORYBLOK');

// https://astro.build/config

export default defineConfig({
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: 'storyblok/Page',
      blogPost: 'storyblok/BlogPost',
      blogPostList: 'storyblok/BlogPostList',
      contentImage: 'storyblok/ContentImage',
      eyebrow: 'storyblok/Eyebrow'
    }
  })],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  output: "server",
  adapter: netlify()
});