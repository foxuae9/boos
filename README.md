# بوس - تطبيق Next.js جميل

تطبيق ويب حديث مبني باستخدام Next.js مع تأثيرات حركية جذابة وتصميم متجاوب.

## المميزات
- ✨ تصميم عصري وجذاب
- 🎨 تأثيرات حركية سلسة
- 📱 تجاوب كامل مع جميع الأجهزة
- 🚀 أداء عالي مع Next.js
- 🔒 إعدادات Nginx آمنة

## المتطلبات
- Node.js 18 أو أحدث
- npm 9 أو أحدث
- Nginx

## التثبيت المحلي
```bash
# استنساخ المشروع
git clone https://github.com/foxuae9/boos.git
cd boos

# تثبيت التبعيات
npm install

# تشغيل خادم التطوير
npm run dev
```

## النشر على الخادم
1. بناء التطبيق:
```bash
npm run build
```

2. نسخ الملفات إلى الخادم:
```bash
# إنشاء المجلد على الخادم
sudo mkdir -p /var/www/boos

# نسخ الملفات
sudo cp -r .next /var/www/boos/
sudo cp -r public /var/www/boos/
```

3. تكوين Nginx:
```bash
# نسخ ملف التكوين
sudo cp nginx.conf /etc/nginx/sites-available/boos

# إنشاء رابط رمزي
sudo ln -s /etc/nginx/sites-available/boos /etc/nginx/sites-enabled/

# اختبار التكوين
sudo nginx -t

# إعادة تشغيل Nginx
sudo systemctl restart nginx
```

4. إعداد SSL (Let's Encrypt):
```bash
sudo certbot --nginx -d boos.ae
```

## تشغيل التطبيق
1. تثبيت PM2:
```bash
npm install -g pm2
```

2. بدء التطبيق:
```bash
pm2 start npm --name "boos" -- start
```

3. تمكين البدء التلقائي:
```bash
pm2 startup
pm2 save
```

## الأمان
- تم تكوين Nginx مع أفضل ممارسات الأمان
- تم تفعيل HTTPS مع تحويل تلقائي من HTTP
- تم إضافة رؤوس أمان مهمة
- تم تحسين أداء SSL/TLS

## الدعم
للمساعدة أو الاستفسارات، يرجى فتح issue في GitHub.
