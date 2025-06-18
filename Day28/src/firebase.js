// firebase 앱 초기화
import { initializeApp } from "firebase/app";
// 인증 서비스
import { getAuth } from "firebase/auth";
// db
import { getDatabase } from "firebase/database";


// get() 데이터 조회 (가져오기)
// set() 데이터 쓰기 (추가)

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);
// 사용할 서비스 선택
// 1. 인증
const auth = getAuth(app);
// console.log(auth);
// 2. firebase에서 db 서비스 사용할 수 있는 객체
export const db = getDatabase(app);
// console.log(db);
