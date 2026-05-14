# 📖 คู่มือ Deploy Dashboard สามเสน 31
### ใช้เวลาประมาณ 20-30 นาที · ไม่ต้องมีความรู้เทคนิค

---

## ขั้นตอนที่ 1 — สร้าง Firebase Project (ฟรี)

1. ไปที่ **https://console.firebase.google.com**
2. กด **"Create a project"** หรือ **"Add project"**
3. ตั้งชื่อ project: `samsen31` → กด **Continue** × 2 → **Create project**
4. รอสักครู่ → กด **Continue**

---

## ขั้นตอนที่ 2 — เปิดใช้ Firestore Database

1. เมนูซ้าย → **"Firestore Database"** → **"Create database"**
2. เลือก **"Start in test mode"** (ทุกคนเข้าได้)
3. เลือก Location: **`asia-southeast1`** (ใกล้ไทยที่สุด)
4. กด **"Enable"**

---

## ขั้นตอนที่ 3 — เปิดใช้ Storage (สำหรับรูปภาพ)

1. เมนูซ้าย → **"Storage"** → **"Get started"**
2. เลือก **"Start in test mode"** → **Next**
3. เลือก Location เดิม: **`asia-southeast1`** → **Done**

---

## ขั้นตอนที่ 4 — เอา Config มาใส่ในโค้ด

1. เมนูซ้าย → **Project Overview** (หน้าแรก)
2. กดไอคอน **`</>`** (Web app)
3. ตั้งชื่อ App: `samsen31-web` → กด **"Register app"**
4. จะเห็น **firebaseConfig** มีค่าแบบนี้:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "samsen31.firebaseapp.com",
  projectId: "samsen31",
  storageBucket: "samsen31.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123:web:abc..."
};
```

5. เปิดไฟล์ **`src/firebase.js`** แล้ว **แทนที่ค่า** `YOUR_API_KEY` ฯลฯ ด้วยค่าจากข้างบน

---

## ขั้นตอนที่ 5 — Deploy ขึ้น Vercel (ฟรี มี URL ถาวร)

### วิธีง่ายที่สุด (ไม่ต้องใช้ Command Line)

**5.1** ไปที่ **https://github.com** → สมัครสมาชิก (ถ้ายังไม่มี)

**5.2** สร้าง Repository ใหม่ ชื่อ `samsen31` → กด **"Create repository"**

**5.3** อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้น GitHub:
- กด **"uploading an existing file"**
- ลาก-วางโฟลเดอร์ทั้งหมด (`src/`, `public/`, `package.json`, `vercel.json`)
- กด **"Commit changes"**

**5.4** ไปที่ **https://vercel.com** → Sign in with GitHub

**5.5** กด **"Add New Project"** → เลือก repository `samsen31` → กด **"Deploy"**

**5.6** รอ 2-3 นาที → ได้ URL เช่น `https://samsen31.vercel.app` 🎉

---

## ขั้นตอนที่ 6 — แชร์ให้เพื่อน

แชร์ URL ให้เพื่อนทุกคนในกลุ่ม LINE ได้เลย เช่น:

```
Dashboard สามเสน 31 🌸
https://samsen31.vercel.app

เปิดได้ทั้งมือถือและคอมพิวเตอร์
กรอกข้อมูลของตัวเองได้เลยครับ/ค่ะ
ทุกคนเห็นข้อมูลเดียวกัน real-time
```

---

## คำถามที่พบบ่อย

**Q: ข้อมูลหายไหมถ้าปิดเบราว์เซอร์?**
A: ไม่หาย เก็บอยู่ใน Firebase Cloud ตลอด

**Q: Firebase ฟรีถึงขนาดไหน?**
A: ฟรีสำหรับกลุ่มเล็ก (Firestore 1GB + Storage 5GB) เกินพอสำหรับ 15-30 คน

**Q: ถ้าอยากเปลี่ยน URL เป็นชื่อโดเมนเอง?**
A: ซื้อโดเมนที่ Namecheap ~$10/ปี แล้วผูกกับ Vercel ในหน้า Settings

**Q: ถ้า URL หมดอายุ?**
A: Vercel ฟรีไม่หมดอายุ ใช้ได้ตลอด

---

## โครงสร้างไฟล์

```
samsen31-deploy/
├── public/
│   └── index.html          ← หน้าเว็บหลัก
├── src/
│   ├── App.jsx             ← Dashboard (โค้ดหลักทั้งหมด)
│   ├── firebase.js         ← ← ต้องแก้ config ตรงนี้
│   └── index.js            ← entry point
├── package.json            ← dependencies
├── vercel.json             ← deploy config
└── README.md               ← คู่มือนี้
```

---

## ต้องการความช่วยเหลือ?

ถามได้ใน Claude ที่ claude.ai ครับ 😊
