/** @type {import('next').NextConfig} */

const withTM = require('next-transpile-modules')(['@antv/graphin']); 

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = withTM({
  nextConfig,
  experimental: {
   esmExternals: 'loose' // second add this experimental flag to the config
 }
})