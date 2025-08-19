import axios from 'axios';

const baseURL = 'https://your-project.vercel.app'; // حط رابط مشروعك هنا

// كل الملفات والـ routes اللي عايز تتحقق منها
const paths = [
  '/',
  '/bannerImgOne.jpg',
  '/bannerImgTwo.jpg',
  '/bannerImgThree.jpg',
  '/bannerImgFour.jpg',
  '/bannerImgFive.jpg',
  '/download.png',
  '/logo.png'
];

async function checkPaths() {
  for (const path of paths) {
    try {
      const url = `${baseURL}${path.startsWith('/') ? path : '/' + path}`;
      const res = await axios.head(url);
      if (res.status === 200) {
        console.log(`✅ OK: ${url}`);
      } else {
        console.log(`❌ Error (${res.status}): ${url}`);
      }
    } catch (err) {
      console.log(`❌ Missing or Error: ${url}`);
    }
  }
}

checkPaths();
