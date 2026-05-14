// ─────────────────────────────────────────────────────────────────────────────
//  firebase.js  —  แก้ไขค่าด้านล่างด้วย config จาก Firebase Console ของคุณ
//  ดูขั้นตอนได้ใน README.md ข้อ 1-3
// ─────────────────────────────────────────────────────────────────────────────
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:            "AIzaSyCd2GyMgjAt37a3EpmFEXhz8PpfFVtapzg",
  authDomain:        "samsen31-32a32.firebaseapp.com",
  databaseURL:       "https://samsen31-32a32-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId:         "samsen31-32a32",
  storageBucket:     "samsen31-32a32.firebasestorage.app",
  messagingSenderId: "647062015571",
  appId:             "1:647062015571:web:6719bf81aa397df6e740a6",
  measurementId:     "G-HLS8E78C6X",
};

const app     = initializeApp(firebaseConfig);
export const db      = getFirestore(app);   // Firestore — เก็บข้อมูลเพื่อน
export const storage = getStorage(app);     // Storage   — เก็บรูปภาพ
