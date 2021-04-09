const menuList = [
  {
    id: 1,
    img: "https://moscow.sm-news.ru/wp-content/uploads/2020/11/29/tef.jpg",
    name: "Суп с фрикадельками",
    price: 2.3,
    category: "Первые блюда",
  },
  {
    id: 2,
    img: "https://yaisup.ru/wp-content/uploads/risovyj_sup_s_kuricej.jpg",
    name: "Суп с рисом",
    price: 0.97,
    category: "Первые блюда",
  },
  {
    id: 3,
    img:
      "https://wallbox.ru/resize/2560x1440/wallpapers/main2/201717/zelen-ovosi-bors-sup.jpg",
    name: "Борщ с картофелем",
    price: 0.99,
    category: "Первые блюда",
  },
  {
    id: 4,
    img:
      "https://avatars.mds.yandex.net/get-zen_doc/1596193/pub_5e3db797913b3d2257067693_5e3db8ef080a7476f0b75f97/scale_1200",
    name: "Щи из свежей капусты",
    price: 0.78,
    category: "Первые блюда",
  },
  {
    id: 5,
    img:
      "https://www.eat-me.ru/wp-content/uploads/2018/06/rassolnik-multivarka.jpg",
    name: "Расольник Домашний",
    price: 0.97,
    category: "Первые блюда",
  },
  {
    id: 6,
    img:
      "https://uwworsp.org/wp-content/uploads/d/e/0/de08c6388fbfaea980b0d06abd7d21cc.jpg",
    name: "Котлета рубленая из птицы",
    price: 1.68,
    category: "Вторые блюда",
  },

  {
    id: 7,
    img:
      "https://uwworsp.org/wp-content/uploads/3/e/1/3e1264d831721faae53da61e9d0e6a2a.jpg",
    name: 'Котлета "папарать кветка"',
    price: 1.79,
    category: "Вторые блюда",
  },
  {
    id: 8,
    img:
      "https://posudaguide.ru/wp-content/uploads/2019/05/Otbivnaya-v-tarelke.jpg",
    name: "Котлета отбивная",
    price: 2.1,
    category: "Вторые блюда",
  },
  {
    id: 9,
    img:
      "https://static.1000.menu/img/content/35431/krasnaya-ryba-zapechennaya-s-ovoshchami-v-folge_1559494372_12_max.jpg",
    name: "Рыба запеченная с овощами",
    price: 2.93,
    category: "Вторые блюда",
  },
  {
    id: 10,
    img:
      "https://foodandhealth.ru/wp-content/uploads/2016/08/mintay-zhareniy.jpg",
    name: "Рыба жареная минтай",
    price: 1.59,
    category: "Вторые блюда",
  },
  {
    id: 11,
    img: "http://aristokratbirsk.ru/uploads/posts/2020-09/1599027738_1.jpg",
    name: "Тефтели",
    price: 2.15,
    category: "Вторые блюда",
  },
  {
    id: 12,
    img: "https://receptisalatov.com/content/recipes/769/10.jpg",
    name: "Свинина отбивная",
    price: 2.69,
    category: "Вторые блюда",
  },
  {
    id: 13,
    img: "http://gurmanio.org/wp-content/uploads/2015/01/golubec.jpg",
    name: "Голубцы с рисом и мясом",
    price: 2.82,
    category: "Вторые блюда",
  },
  {
    id: 14,
    img:
      "https://avatars.mds.yandex.net/get-pdb/963327/20ef2cfb-89a4-4b50-b5da-63a1234e53fe/s1200",
    name: "Бедро жареное",
    price: 1.47,
    category: "Вторые блюда",
  },
  {
    id: 15,
    img:
      "https://avatars.mds.yandex.net/get-zen_doc/125920/pub_5ef45fb694b09a5c4b5e76d4_5ef460081f32265015903054/scale_1200",
    name: "Гречка",
    price: 0.98,
    category: "Гарниры",
  },
  {
    id: 16,
    img:
      "https://avatars.mds.yandex.net/get-zen_doc/1862846/pub_5f6d9af907e34425cdc65184_5f6d9b2b07e34425cdc6ae98/scale_1200",
    name: "Плов",
    price: 1.12,
    category: "Гарниры",
  },
  {
    id: 17,
    img:
      "https://avatars.mds.yandex.net/get-zen_doc/1880126/pub_5df39f6addfef600ac678c45_5df3a05a2beb4900b06ffc79/scale_1200",
    name: "Макароны отваренные",
    price: 0.76,
    category: "Гарниры",
  },
  {
    id: 18,
    img:
      "https://delish28.com/wp-content/uploads/2019/10/Beer-and-Horseradish-Slow-Cooker-Beef-Stew-7.jpg",
    name: "Жаркое по-домашнему",
    price: 1.42,
    category: "Гарниры",
  },
  {
    id: 19,
    img: "https://pbs.twimg.com/media/EO4AEdcX0AAQlbM.jpg",
    name: "Картофель фри",
    price: 1.64,
    category: "Гарниры",
  },
  {
    id: 19,
    img:
      "https://get.wallhere.com/photo/fruit-juice-decanter-glasses-1041509.jpg",
    name: "Компот со свежих фруктов",
    price: 0.54,
    category: "Напитки",
  },
  {
    id: 20,
    img:
      "https://i2.wp.com/attuale.ru/wp-content/uploads/2018/05/20150211-drinking-chocolate-primary2-thumb-1500xauto-419200.jpg",
    name: "Какао",
    price: 0.67,
    category: "Напитки",
  },
  {
    id: 21,
    img: "https://attuale.ru/wp-content/uploads/2018/09/highres_3500.jpg",
    name: "Кисель",
    price: 0.52,
    category: "Напитки",
  },
  {
    id: 22,
    img:
      "https://www.zastavki.com/pictures/1600x1200/2009/Food_Drinks_Mug_of_tea_with_lemon_011967_.jpg",
    name: "Чай с лимоном",
    price: 0.72,
    category: "Напитки",
  },
  {
    id: 23,
    img: "https://www.syl.ru/misc/i/ai/421289/2820772.jpg",
    name: "Кофе",
    price: 0.72,
    category: "Напитки",
  },
  {
    id: 24,
    img:
      "https://avatars.mds.yandex.net/get-zen_doc/99845/pub_5a6c6ddaa815f16872978927_5a6c70b479885e80edb87115/scale_1200",
    name: "Салат 'Павлинка'",
    price: 0.92,
    category: "Салаты",
  },
  {
    id: 25,
    img:
      "http://3.bp.blogspot.com/-MSpkmhdiQtM/UYVXvDMkXiI/AAAAAAAAAO0/nhzODg7t1yY/s1600/DSCN0307.JPG",
    name: "Салат 'Белые росы'",
    price: 1.22,
    category: "Салаты",
  },
  {
    id: 26,
    img: "https://pbs.twimg.com/media/DiES_3bXcAIDAeO.jpg",
    name: "Салат 'Цветной'",
    price: 1.42,
    category: "Салаты",
  },
  {
    id: 27,
    img:
      "https://www.vokrugsada.ru/wp-content/uploads/retsept-prostogo-salata-iz-molodoy-kapusty.jpg",
    name: "Салат 'Белоснежка'",
    price: 1.15,
    category: "Салаты",
  },
  {
    id: 28,
    img:
      "https://im0-tub-ru.yandex.net/i?id=4e2a7924d3d9bd70f41952573148e5d2-l&ref=rim&n=13&w=1001&h=1251",
    name: "Салат 'Греческий'",
    price: 1.36,
    category: "Салаты",
  },
  {
    id: 29,
    img:
      "https://www.chefmarket.ru/blog/wp-content/uploads/2019/02/pudding-recipe-e1549899199616.jpg",
    name: "Пудинг",
    price: 1.83,
    category: "Десерт",
  },
  {
    id: 30,
    img: "https://i.ytimg.com/vi/Kfw8YOLzz24/maxresdefault.jpg",
    name: "Желе из сметаны и какао",
    price: 1.43,
    category: "Десерт",
  },
  {
    id: 31,
    img:
      "https://portalonline.ru/userfiles/images/kulinaria/skolko%20pech%20ekleri%20minyt%20v%20dyhovke.jpg",
    name: "Эклер",
    price: 0.73,
    category: "Десерт",
  },
  {
    id: 32,
    img:
      "https://img5.goodfon.ru/wallpaper/nbig/0/eb/colorful-morozhenoe-rozhok-fruit-berries-ice-cream-cone.jpg",
    name: "Мороженое в ассортименте",
    price: 0.73,
    category: "Десерт",
  },
];

export default menuList;
