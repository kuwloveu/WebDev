import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [


    {
      id: 1,
      categoryId: 1,
      likes: 0,
      name: 'iPhone 13',
      description: 'Powerful Apple smartphone with great camera and performance.',
      price: 310000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },
    {
      id: 2,
      categoryId: 1,
      likes: 0,
      name: 'iPhone 14',
      description: 'Powerful Apple smartphone with great camera and performance.',
      price: 350000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h4b/86042949681182.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/ha8/h64/86042949713950.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h92/86042949746718.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=353220100'
    },
    {
      id: 3,
      categoryId: 1,
      likes: 0,
      name: 'iPhone 15',
      description: 'Powerful Apple smartphone with great camera and performance.',
      price: 390000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=353220100'
    },
    {
      id: 4,
      categoryId: 1,
      likes: 0,
      name: 'iPhone 16',
      description: 'Powerful Apple smartphone with great camera and performance.',
      price: 450000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h2b/87310975959070.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=353220100'
    },
    {
      id: 5,
      categoryId: 1,
      likes: 0,
      name: 'iPhone 17',
      description: 'Powerful Apple smartphone with great camera and performance.',
      price: 560000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/pa5/64165039.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p54/pa2/64165043.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0c/64462383.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa8/pa2/64165040.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/?c=353220100'
    },


    {
      id: 6,
      categoryId: 2,
      likes: 0,
      name: 'MacBook Air M2',
      description: 'Thin and light laptop with Apple M2 chip, 8 GB RAM.',
      price: 699990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf4/h52/64509322919966.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h86/h70/64509325803550.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h45/hb7/64509328457758.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-256-gb-macos-mlxw3-105933794/?c=353220100'
    },
    {
      id: 7,
      categoryId: 2,
      likes: 0,
      name: 'ASUS ROG Zephyrus G14',
      description: 'Gaming laptop with AMD Ryzen 9, RTX 4060, 165Hz display.',
      price: 1955000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa2/pe5/48835854.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/48835855.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4d/pe5/48835857.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g14-14-32-gb-ssd-1000-gb-bez-os-90nr0m82-m000w0-141343982/?c=353220100'
    },
    {
      id: 8,
      categoryId: 2,
      likes: 0,
      name: 'Lenovo ThinkPad X1 Carbon',
      description: 'Business ultrabook, Intel Core i7, 16 GB RAM, 512 GB SSD.',
      price: 1574000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/p96/69498982.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p97/69498983.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p28/p97/69498984.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-thinkpad-x1-carbon-gen-13-aura-edition-14-32-gb-m-2-1024-gb-win-11-pro-21nx00f8fw-147042340/?c=353220100'
    },
    {
      id: 9,
      categoryId: 2,
      likes: 0,
      name: 'Dell XPS 15',
      description: 'Premium laptop with OLED display, Intel Core i9, RTX 4070.',
      price: 1799990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h91/h1e/64860295462942.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha9/h86/64860307390494.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf2/h54/64860304048158.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/dell-xps-15-9520-15-6-16-gb-ssd-1024-gb-win-11-210-bdvf-4-106784220/?c=353220100'
    },
    {
      id: 10,
      categoryId: 2,
      likes: 0,
      name: 'HP Spectre x360',
      description: '2-in-1 laptop, Intel Core i7, OLED touch display, 16 GB RAM.',
      price: 959990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5b/24177956.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc9/p5b/24177957.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pad/p5b/24177958.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/hp-spectre-x360-2-in-1-16-aa0004ci-16-16-gb-ssd-512-gb-win-11-home-b6st5ea-134505376/?c=353220100'
    },


    {
      id: 11,
      categoryId: 3,
      likes: 0,
      name: 'Sony WH-1000XM5',
      description: 'Industry-leading noise cancellation, 30h battery, Hi-Res audio.',
      price: 149990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9c/h23/65099684020254.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/hd0/65099686150174.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=353220100'
    },
    {
      id: 12,
      categoryId: 3,
      likes: 0,
      name: 'Apple AirPods Pro 2',
      description: 'Active noise cancellation, Adaptive Audio, H2 chip.',
      price: 129990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=353220100'
    },
    {
      id: 13,
      categoryId: 3,
      likes: 0,
      name: 'Samsung Galaxy Buds 3 Pro',
      description: 'ANC earbuds with Hi-Fi sound, 360 Audio, 37h total battery.',
      price: 89990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p37/108495081.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h76/86487436984350.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h19/h04/86487437049886.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds3-pro-serebristyi-121198974/?c=353220100'
    },
    {
      id: 14,
      categoryId: 3,
      likes: 0,
      name: 'Bose QuietComfort 45',
      description: 'Legendary Bose comfort with world-class noise cancellation.',
      price: 119990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h67/64374646538270.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h6c/64374649651230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haf/h7a/64374651715614.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-bose-quietcomfort-45-chernyi-102978612/?c=353220100'
    },
    {
      id: 15,
      categoryId: 3,
      likes: 0,
      name: 'JBL Tune 770NC',
      description: 'Foldable headphones with ANC, 70h playtime, JBL Pure Bass.',
      price: 33990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h78/82294170255390.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h26/82294170779678.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h69/h5f/82294171303966.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-770nc-chernyi-112143394/?c=353220100'
    },

    {
      id: 16,
      categoryId: 4,
      likes: 0,
      name: 'iPad Pro M4 11"',
      description: 'Most powerful iPad ever with M4 chip, Ultra Retina XDR display.',
      price: 512630,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb3/h75/86106948239390.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h27/h89/86106948272158.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h90/hc6/86106948304926.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-pro-11-2024-wi-fi-11-djuim-8-gb-256-gb-chernyi-119774227/?c=353220100'
    },
    {
      id: 17,
      categoryId: 4,
      likes: 0,
      name: 'Samsung Galaxy Tab S9',
      description: 'Android tablet with AMOLED display, IP68, S Pen included.',
      price: 303000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha1/h41/84581431738398.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf8/pae/78315321.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd8/he9/82770437046302.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9-sm-x716bzeaskz-11-djuim-8-gb-128-gb-seryi-114877833/?c=353220100'
    },
    {
      id: 18,
      categoryId: 4,
      likes: 0,
      name: 'Xiaomi Pad 6',
      description: 'Snapdragon 870, 144Hz display, quad speakers, 8840 mAh.',
      price: 157340,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/hdc/82729741582366.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p78/pfa/78318162.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p95/pfa/78318163.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=353220100'
    },
    {
      id: 19,
      categoryId: 4,
      likes: 0,
      name: 'Lenovo Idea Tab Pro',
      description: '12.7" AMOLED, Snapdragon 870, stylus support, 10200 mAh.',
      price: 249990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/paa/pd2/22753488.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8e/pd2/22753489.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p22/pd0/22753490.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-idea-tab-pro-tb373fu-acc-12-7-djuim-8-gb-256-gb-seryi-134113446/?c=353220100'
    },
    {
      id: 20,
      categoryId: 4,
      likes: 0,
      name: 'Huawei MatePad Pro 13.2"',
      description: 'OLED display, HarmonyOS 4, M-Pencil support, 10100 mAh.',
      price: 499830,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p41/p8a/96173080.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p82/p86/96173093.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p66/p86/96173094.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/huawei-huawei-matepad-pro-12-2-2025-podarok-12-2-djuim-12-gb-512-gb-zelenyi-154784571/?c=353220100'
    }
  ];

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
