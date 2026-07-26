export interface LocationManager {
  name: string;
  titleAndPhone: string;
}

export interface LocationData {
  id: string;
  subsidiaryId: string;
  subsidiaryName: string;
  image: string;
  name: string;
  role: string;
  address: string;
  manager: LocationManager;
  products: string;
}

export const locations: LocationData[] = [
  {
    "id": "01",
    "subsidiaryId": "automobiles",
    "subsidiaryName": "Asia Automobiles",
    "image": "/media/asia-operation-cards/automobiles-dantata.jpeg",
    "name": "Asia Power And Energy",
    "role": "Asia Automobiles",
    "address": "Kofar Ruwa Market, Along Northwest University Kano",
    "manager": {
      "name": "Kamal Ismail Salihu",
      "titleAndPhone": "Mr  | +234 80 808 06075"
    },
    "products": "Mobile bikes and electric bikes"
  },
  {
    "id": "02",
    "subsidiaryId": "pharmacy",
    "subsidiaryName": "Asia Pharmacy",
    "image": "/media/asia-operation-cards/pharmacy.jpg",
    "name": "Asia Maisauki Pharma Co Ltd",
    "role": "Asia Pharmacy",
    "address": "No. B32 Block B, Kano Economic City",
    "manager": {
      "name": "Saddam",
      "titleAndPhone": "Manager | +234 80 675 37709"
    },
    "products": "Tablets, capsules, injections, suspensions antibiotics analgesic,"
  },
  {
    "id": "03",
    "subsidiaryId": "wholesale",
    "subsidiaryName": "Wholesale & Distribution",
    "image": "/media/asia-operation-cards/aa-plaza.jpg",
    "name": "Asia Group Aa Plaza",
    "role": "Distribution Hub",
    "address": "Yolawa Stree Singer Market",
    "manager": {
      "name": "Shuaibu Balarabe",
      "titleAndPhone": "Manager | +234 80 363 28746"
    },
    "products": "Detergent, Soap, Milks,Jelly,Sugar,salt e.t.c"
  },
  {
    "id": "04",
    "subsidiaryId": "wholesale",
    "subsidiaryName": "Wholesale & Distribution",
    "image": "/media/asia-operation-cards/walai-plazar.jpg",
    "name": "Walai Plaza",
    "role": "Distribution Hub",
    "address": "N01 Aa Plaza Niger Street Kano",
    "manager": {
      "name": "Umar Sulaiman Dan Sarauniya",
      "titleAndPhone": "Manager | +234 81 305 77883"
    },
    "products": "Flour suger salt viva klin Rafa Milo"
  },
  {
    "id": "05",
    "subsidiaryId": "wholesale",
    "subsidiaryName": "Wholesale & Distribution",
    "image": "/media/asia-operation-cards/airways.jpg",
    "name": "Asia Airways",
    "role": "Distribution Hub",
    "address": "No 7 Bank Road",
    "manager": {
      "name": "Muhammad Taallu",
      "titleAndPhone": "Manager | +234 80 236 66806"
    },
    "products": "Spag, Sugar,Cement, Flour, Viva Products, Macaroni, Peak, Crown Irs, Provision"
  },
  {
    "id": "06",
    "subsidiaryId": "beverages",
    "subsidiaryName": "Asia Beverages",
    "image": "/media/asia-operation-cards/beverages.jpg",
    "name": "Asia Group Beverages",
    "role": "Asia Beverages",
    "address": "No 11/12 Hamsan Plaza Bank Road",
    "manager": {
      "name": "Sani Mustapha Musa",
      "titleAndPhone": "Manager | +234 90 161 61881"
    },
    "products": "Soft drinks, beverages (mamuda products, 7up products, Coca Cola products, Ara, nestle, Liv water. Cway, Halib, go fresh, Chivita products,"
  },
  {
    "id": "07",
    "subsidiaryId": "automobiles",
    "subsidiaryName": "Asia Automobiles",
    "image": "/media/asia-operation-cards/automobiles-post-office.jpg",
    "name": "Asia Automobiles, Energy And Power, Beirut",
    "role": "Asia Automobiles",
    "address": "No.18 Post Office Road, Kano State",
    "manager": {
      "name": "Abubakar Bala Muhammad",
      "titleAndPhone": "Manager | +234 70 368 29921"
    },
    "products": "Electric bike, solar panels, lithium batteries, and inverters"
  },
  {
    "id": "08",
    "subsidiaryId": "phones",
    "subsidiaryName": "Asia Phones",
    "image": "/media/asia-operation-cards/accessories-post-office.png",
    "name": "Asia Accessories Post Office",
    "role": "Asia Phones",
    "address": "No 18 Post Office Road, Beirut Kano",
    "manager": {
      "name": "Abba Sani",
      "titleAndPhone": "Manager | +234 90 619 02628"
    },
    "products": "Accessories(power banks, chargers, speakers, headphones, etc"
  },
  {
    "id": "09",
    "subsidiaryId": "automobiles",
    "subsidiaryName": "Asia Automobiles",
    "image": "",
    "name": "Asia Automobile Sg",
    "role": "Asia Automobiles",
    "address": "No.6667 Murtala Muhd Way,yankura Kano.",
    "manager": {
      "name": "Yusuf Khalifa Isma'il",
      "titleAndPhone": "Manager | +234 80 374 82787"
    },
    "products": "Electric bikes, electric Tricycle ,4 wheels electric & Fuels bikes."
  },
  {
    "id": "10",
    "subsidiaryId": "wholesale",
    "subsidiaryName": "Wholesale & Distribution",
    "image": "/media/asia-operation-cards/toothpaste.jpg",
    "name": "Asia Toothpaste",
    "role": "Distribution Hub",
    "address": "No 9 Gobirawa Street, B Line Sg Kano",
    "manager": {
      "name": "Kamalu Garba Umar",
      "titleAndPhone": "Manager | +234 80 364 58178"
    },
    "products": "Toothpaste(closeup, reflex, olive, flodent)"
  },
  {
    "id": "11",
    "subsidiaryId": "wholesale",
    "subsidiaryName": "Wholesale & Distribution",
    "image": "/media/asia-operation-cards/sg2.jpg",
    "name": "Asia Group Sg2",
    "role": "Distribution Hub",
    "address": "No 34c Mm Way Sg Opp Singa",
    "manager": {
      "name": "Yahaya Gambo Albashir",
      "titleAndPhone": "Manager | +234 80 646 98532"
    },
    "products": "Aspira products, klin products, spay and macaroni, pomades, seasoning, bua products, Mamuda products, sugar, flour, rice, salt, milk, semovita, cuscus, biscuits all companies above,"
  },
  {
    "id": "12",
    "subsidiaryId": "cosmetics",
    "subsidiaryName": "Asia Cosmetics",
    "image": "/media/asia-operation-cards/cosmetics-gashash.jpg",
    "name": "Asia Cosmetics",
    "role": "Asia Cosmetics",
    "address": "B14, Muhammad Nuhu, Gidan Gashash, Singa",
    "manager": {
      "name": "Sulaiman Kabir",
      "titleAndPhone": "Manager | +234 80 626 91757"
    },
    "products": "Cosmetics, perfumes, viva, nova, mamuda, inferior, passion cocoa butter,"
  },
  {
    "id": "13",
    "subsidiaryId": "wholesale",
    "subsidiaryName": "Wholesale & Distribution",
    "image": "/media/asia-operation-cards/provision-dan-dago.jpg",
    "name": "Asia Provision",
    "role": "Distribution Hub",
    "address": "No 21 G/babban Gashi",
    "manager": {
      "name": "Ahmad Ismail",
      "titleAndPhone": "Manager | +234 81 225 72426"
    },
    "products": "Pasta, oil, viva products"
  },
  {
    "id": "14",
    "subsidiaryId": "phones",
    "subsidiaryName": "Asia Phones",
    "image": "/media/asia-operation-cards/accessories-mai-karami.jpg",
    "name": "Asia Accessories Mai Karami",
    "role": "Asia Phones",
    "address": "No 4 Mai Karamin Plaza, Niger Street",
    "manager": {
      "name": "Usman",
      "titleAndPhone": "Manager | +234 91 616 25951"
    },
    "products": "[ Description — TBD ]"
  },
  {
    "id": "15",
    "subsidiaryId": "wholesale",
    "subsidiaryName": "Wholesale & Distribution",
    "image": "/media/asia-operation-cards/sg1.jpg",
    "name": "Asia Sg1",
    "role": "Distribution Hub",
    "address": "Murtala Muhammad Way Kano",
    "manager": {
      "name": "Balarabe Auwalu",
      "titleAndPhone": "Manager | +234 70 348 15308"
    },
    "products": "[ Description — TBD ]"
  },
  {
    "id": "16",
    "subsidiaryId": "cosmetics",
    "subsidiaryName": "Asia Cosmetics",
    "image": "",
    "name": "Asia Cosmetics SG",
    "role": "Asia Cosmetics",
    "address": "Murtala Muhammad way Kano",
    "manager": {
      "name": "Abdulaziz Yusuf",
      "titleAndPhone": "Manager | +234 70 858 23060"
    },
    "products": "[ Description — TBD ]"
  },
  {
    "id": "17",
    "subsidiaryId": "wholesale",
    "subsidiaryName": "Wholesale & Distribution",
    "image": "/media/asia-operation-cards/provision-gashash.jpg",
    "name": "Asia Provision Gashash",
    "role": "Distribution Hub",
    "address": "Singa",
    "manager": {
      "name": "Nasir Ibrahim",
      "titleAndPhone": "Manager | +234 80 347 50802"
    },
    "products": "[ Description — TBD ]"
  },
  {
    "id": "18",
    "subsidiaryId": "wholesale",
    "subsidiaryName": "Wholesale & Distribution",
    "image": "",
    "name": "Asia Fmgc Chatalas",
    "role": "Distribution Hub",
    "address": "Singa",
    "manager": {
      "name": "Hashim Bashir Maidabino",
      "titleAndPhone": "Manager | +234 70 628 83855"
    },
    "products": "[ Description — TBD ]"
  },
  {
    "id": "19",
    "subsidiaryId": "wholesale",
    "subsidiaryName": "Wholesale & Distribution",
    "image": "/media/asia-operation-cards/niger-street.png",
    "name": "Head Office",
    "role": "Distribution Hub",
    "address": "No. 46, Niger Street, Kano, Kano State,",
    "manager": {
      "name": "Abba Abubakar Isah",
      "titleAndPhone": "Manager | +234 70 303 20094"
    },
    "products": "[ Description — TBD ]"
  }
];
