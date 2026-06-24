/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Serve the Discord domain-verification file at the extensionless path
  // that Discord expects (/.well-known/discord), while keeping the actual
  // file as public/.well-known/discord.txt.
  async rewrites() {
    return [
      {
        source: '/.well-known/discord',
        destination: '/.well-known/discord.txt',
      },
    ];
  },
  // Force text/plain so the file renders in the browser instead of
  // downloading (Vercel otherwise serves .well-known files as octet-stream).
  async headers() {
    const plainText = [
      { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
    ];
    return [
      { source: '/.well-known/discord', headers: plainText },
    ];
  },
};

module.exports = nextConfig;
