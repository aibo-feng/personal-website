import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = '';
let basePath = '';

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig: NextConfig = {
  output: 'export', // required for static export
  assetPrefix,      // ensures static assets have the correct prefix
  basePath,         // ensures correct routing on GitHub Pages
  images: {
    unoptimized: true, // disables image optimization for static export
  },
};

export default nextConfig;
