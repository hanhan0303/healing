// 全部產品
const Breakpoints = {
  "pc-1650": 1650,
  pc: 1280,
  "pc-1080": 1080,
  pad: 768,
  mobile: 414,
};

const TypeSetting = {
  yoga: {
    nameText: "課程名稱",
    dateTimeText: "課程日期",
  },
  meditation: {
    nameText: "課程名稱",
    dateTimeText: "課程日期",
  },
  travel: {
    nameText: "行程名稱",
    dateTimeText: "行程日期",
  },
};

const Products = [
  {
    id: "travel-1",
    category: "travel",
    title: "森林裡的瑜伽教室｜薰衣草森林一日遊",
    description:
      "【夏季精選】走進充滿正面氣息、無邊際的自然場域，讓森林凝聚我們的專注力、流動停滯的情感，在每一次的吸吐間重新認識自己，讓心靜下來、令森林引你前行。",
    views: 100,
    launchTime: "2020-01-01",
    startTime: "2022/06/24(五)",
    images: [
      "/images/products/travel/01森林瑜珈/1.jpg",
      "/images/products/travel/01森林瑜珈/2.jpg",
      "/images/products/travel/01森林瑜珈/3.png",
      "/images/products/travel/01森林瑜珈/4.png",
      "/images/products/travel/01森林瑜珈/5.png",
      "/images/products/travel/01森林瑜珈/6.jpg",
    ],
    href: "products_travel01.html",
    price: 3700,
  },
  {
    id: "travel-2",
    category: "travel",
    title: "巴庫拉斯山居秘境｜南投二日遊",
    description:
      "【夏季精選】走進山林，在撫慰人心的山河風光下來一場樸實動人的山居之旅：讓本質帶領你拜訪隱居山林的現代神農氏，在豐富的故事解說中，認識藥草與野生植物。",
    views: 50,
    launchTime: "2021-01-01",
    startTime: "2022/07/01(五)",
    images: [
      "/images/products/travel/02巴庫拉斯/1.jpg",
      "/images/products/travel/02巴庫拉斯/2.jpg",
      "/images/products/travel/02巴庫拉斯/3.jpg",
    ],
    href: "products_travel02.html",
    price: 6500,
  },
  {
    id: "travel-3",
    category: "travel",
    title: "陶憩日常，尋覓生活美好｜金瓜石二日遊",
    description:
      "【陶藝溫度】在山城隔絕了外界的喧囂，藉由雙手與土的相處，沉浸在土壤的世界中、抓取天馬行空中一隙而過的靈感，在親手製作的陶藝作品中綻放成真實。",
    views: 20,
    launchTime: "2022-06-01",
    startTime: "2022/07/08(五)",
    images: [
      "/images/products/travel/03陶憩日常/1.png",
      "/images/products/travel/03陶憩日常/2.png",
      "/images/products/travel/03陶憩日常/3.png",
    ],
    href: "products_travel03.html",
    price: 8900,
  },
  {
    id: "travel-4",
    category: "travel",
    title: "薰衣草森林花藝餐桌｜台中二日遊",
    description:
      "【夏季精選】獻給花藝初學者的入門旅程，比起專業技能，到森林裡來場春意盎然的香草花藝旅程，我們期待與您分享以花朵闡述心意的療癒體驗。",
    views: 499,
    launchTime: "2022-05-09",
    startTime: "2022/07/15(五)",
    images: [
      "/images/products/travel/04薰衣草森林/1.png",
      "/images/products/travel/04薰衣草森林/2.png",
      "/images/products/travel/04薰衣草森林/3.png",
      "/images/products/travel/04薰衣草森林/4.png",
      "/images/products/travel/04薰衣草森林/5.png",
    ],
    href: "products_travel04.html",
    price: 8900,
  },
  {
    id: "meditation-1",
    category: "meditation",
    title: "心靈療癒所｜願望成真冥想課程",
    description:
      "【冥想系列】你有發現2022年特別不一樣嗎？你是否已經設定好，今年的目標呢？你準備好全力啟動去實現心願嗎？",
    views: 20000000,
    launchTime: "2022-04-01",
    startTime: "2022/07/02(六)",
    images: [
      "/images/products/meditation/01願望成真冥想/p-01.jpg",
      "/images/products/meditation/01願望成真冥想/p-02.jpg",
      "/images/products/meditation/01願望成真冥想/p-03.jpg",
    ],
    href: "products_meditation01.html",
    price: 880,
  },
  {
    id: "meditation-2",
    category: "meditation",
    title: "心靈療癒所｜正念冥想課程",
    description:
      "【冥想系列】在忙碌的日常中，讓自己學習安定和放鬆，並透過這堂課來學習冥想和認識正念。",
    views: 1,
    launchTime: "2021-09-01",
    startTime: "2022/07/16(六)",
    images: [
      "/images/products/meditation/02正念冥想/g-1.jpg",
      "/images/products/meditation/02正念冥想/g-2.jpg",
      "/images/products/meditation/02正念冥想/g-3.jpg",
      "/images/products/meditation/02正念冥想/g-4.jpg",
    ],
    href: "products_meditation02.html",
    price: 3500,
  },
  {
    id: "meditation-3",
    category: "meditation",
    title: "心靈療癒所｜減壓冥想課程",
    description:
      "【冥想系列】你的生活，是否充滿了「壓力源」！？讓我們帶領您，為忙碌的日常，找回自在的放鬆時刻！",
    views: 31,
    launchTime: "2021-12-03",
    startTime: "2022/07/30(六)",
    images: [
      "/images/products/meditation/03減壓冥想/m-1.jpg",
      "/images/products/meditation/03減壓冥想/m-2.jpg",
      "/images/products/meditation/03減壓冥想/m-3.jpg",
      "/images/products/meditation/03減壓冥想/m-4.jpg",
    ],
    href: "products_meditation03.html",
  },
  {
    id: "yoga-1",
    category: "yoga",
    title: "心靈療癒所｜療癒瑜珈基礎",
    description:
      "【瑜珈系列】透過穩定舒適的瑜珈體位，釋放緊繃多時的筋骨，緩和心理及臟器的壓力，達到療癒的身心合一。",
    views: 66,
    launchTime: "2022-01-21",
    startTime: "2022/07/03(日)",
    images: [
      "/images/products/yoga/01療癒基礎/a-1.jpg",
      "/images/products/yoga/01療癒基礎/a-2.jpg",
      "/images/products/yoga/01療癒基礎/a-3.jpg",
      "/images/products/yoga/01療癒基礎/a-4.jpg",
      "/images/products/yoga/01療癒基礎/a-5.jpg",
      "/images/products/yoga/01療癒基礎/a-6.jpg",
    ],
    href: "products_yoga01.html",
    price: 440,
  },
  {
    id: "yoga-2",
    category: "yoga",
    title: "心靈療癒所｜熱療癒瑜珈",
    description:
      "【瑜珈系列】結合了熱瑜珈與療癒瑜珈，在38~42度的熱氣中，更能促進身體肌肉的延展度與機能循環，並在課程中加入療癒哲學。",
    views: 789,
    launchTime: "2022-03-28",
    startTime: "2022/07/10(日)",
    images: [
      "/images/products/yoga/02熱瑜珈/d-01.jpg",
      "/images/products/yoga/02熱瑜珈/d-02.jpg",
      "/images/products/yoga/02熱瑜珈/d-03.jpg",
      "/images/products/yoga/02熱瑜珈/d-04.jpg",
      "/images/products/yoga/02熱瑜珈/d-05.jpg",
    ],
    href: "products_yoga02.html",
    price: 500,
  },
  {
    id: "yoga-3",
    category: "yoga",
    title: "心靈療癒所｜療癒哈達",
    description:
      "【瑜珈系列】療癒哈達課程依不同「主題」設計相對應體位法，以功能性為主的練習序列，搭配輔具的運用，協助強化、促進身體機能。",
    views: 1120,
    launchTime: "2022-04-15",
    startTime: "2022/07/17(日)",
    images: [
      "/images/products/yoga/03瑜珈哈達/e-1.jpg",
      "/images/products/yoga/03瑜珈哈達/e-2.jpg",
      "/images/products/yoga/03瑜珈哈達/e-3.jpg",
      "/images/products/yoga/03瑜珈哈達/e-4.jpg",
      "/images/products/yoga/03瑜珈哈達/e-5.jpg",
    ],
    href: "products_yoga03.html",
    price: 600,
  },
];
