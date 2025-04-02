export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-md w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                بوس
              </span>
            </div>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md">الرئيسية</a>
              <a href="#" className="text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md">الميزات</a>
              <a href="#" className="text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md">الإحصائيات</a>
              <a href="#" className="text-gray-700 hover:text-indigo-500 px-3 py-2 rounded-md">اتصل بنا</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center space-y-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient hover-float">
              مرحباً بكم في موقعي
            </h1>
            
            <p className="text-xl text-gray-600 bg-white/50 backdrop-blur-sm rounded-lg p-6 shadow-lg glow-on-hover">
              تطبيق بسيط وجميل تم إنشاؤه باستخدام Next.js مع تأثيرات حركية رائعة
            </p>

            <div className="flex gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all hover-float">
                ابدأ الآن
              </button>
              <button className="px-8 py-3 bg-white text-indigo-500 border-2 border-indigo-500 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all glow-on-hover">
                اكتشف المزيد
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'سريع', desc: 'أداء فائق مع Next.js', color: 'from-indigo-500 to-blue-500' },
                { title: 'سهل', desc: 'واجهة سهلة الاستخدام', color: 'from-purple-500 to-pink-500' },
                { title: 'مرن', desc: 'قابل للتخصيص بالكامل', color: 'from-pink-500 to-rose-500' }
              ].map((feature, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all glow-on-hover hover-float">
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${feature.color} text-transparent bg-clip-text mb-2`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* قسم الإحصائيات */}
            <div className="mt-16 bg-white/30 backdrop-blur-md p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">إحصائيات مذهلة</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { number: '١٠٠+', label: 'عميل سعيد', color: 'text-indigo-600' },
                  { number: '٥٠+', label: 'مشروع منجز', color: 'text-purple-600' },
                  { number: '٩٩٪', label: 'نسبة الرضا', color: 'text-pink-600' },
                  { number: '٢٤/٧', label: 'دعم فني', color: 'text-rose-600' }
                ].map((stat, index) => (
                  <div key={index} className="text-center hover-float">
                    <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* قسم الاتصال */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-2xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4">هل أنت مستعد للبدء؟</h2>
              <p className="mb-6">انضم إلينا اليوم واستمتع بتجربة فريدة</p>
              <button className="bg-white text-indigo-500 px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all hover-float">
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
