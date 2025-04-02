/** @type {import('next').NextConfig} */
const nextConfig = {
  // تكوين WebSocket
  webSocketServer: {
    path: '/ws',
  },
  
  // تكوين CORS
  async headers() {
    return [
      {
        source: '/ws',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS' },
          { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
        ],
      },
    ]
  },

  // تكوين الوسائط المتعددة
  images: {
    domains: ['boos.foxuae35.com'],
  },

  // تحسينات الأداء
  swcMinify: true,
  poweredByHeader: false,
  compress: true,
  
  // تكوين البناء
  output: 'standalone',
  
  // تكوين البيئة
  env: {
    NEXT_PUBLIC_WEBSOCKET_URL: 'wss://boos.foxuae35.com/ws',
  },
}

module.exports = nextConfig
