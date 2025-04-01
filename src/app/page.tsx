export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        {/* القسم الرئيسي */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">
            مرحباً بكم في تطبيق Boos
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            منصة متكاملة لتحقيق أهدافكم وتطوير أعمالكم
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all transform hover:scale-105">
              ابدأ الآن
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-8 py-3 rounded-lg transition-all transform hover:scale-105">
              اكتشف المزيد
            </button>
          </div>
        </section>

        {/* قسم المميزات */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-3xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">سرعة فائقة</h3>
            <p className="text-gray-600 dark:text-gray-300">تجربة مستخدم سلسة وسريعة مع أحدث التقنيات</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-3xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">تصميم عصري</h3>
            <p className="text-gray-600 dark:text-gray-300">واجهة مستخدم جذابة ومتجاوبة مع جميع الأجهزة</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-blue-600 text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-2">حماية متكاملة</h3>
            <p className="text-gray-600 dark:text-gray-300">أمان وخصوصية عالية لجميع البيانات</p>
          </div>
        </section>

        {/* شريط التذييل */}
        <footer className="text-center text-gray-600 dark:text-gray-400">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} Boos</p>
        </footer>
      </main>
    </div>
  );
}
