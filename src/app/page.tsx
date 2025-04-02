export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">
            مرحباً بكم في بوس
          </h1>
          
          <p className="text-xl text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            تطبيق بسيط وجميل تم إنشاؤه باستخدام Next.js مع تأثيرات حركية رائعة
          </p>

          <div className="flex gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              ابدأ الآن
            </button>
            <button className="px-8 py-3 bg-white text-indigo-500 border-2 border-indigo-500 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all">
              اكتشف المزيد
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { title: 'سريع', desc: 'أداء فائق مع Next.js', color: 'from-indigo-500 to-blue-500' },
              { title: 'سهل', desc: 'واجهة سهلة الاستخدام', color: 'from-purple-500 to-pink-500' },
              { title: 'مرن', desc: 'قابل للتخصيص بالكامل', color: 'from-pink-500 to-rose-500' }
            ].map((feature, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <h3 className={`text-xl font-bold bg-gradient-to-r ${feature.color} text-transparent bg-clip-text mb-2`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
