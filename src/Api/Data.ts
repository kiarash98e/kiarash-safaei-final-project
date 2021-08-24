/* eslint-disable @typescript-eslint/no-unused-vars */
type Products = {
    productItem:{
        _id:number,
        name:string,
        category:string | number,
        image:string,
        subCategory:string,
        price:number,
        rating:number | string,
        reviwe:number,
        status?:string | string[]
        describtion:string | string[],
        size?:string | string[] | number | number[],
        color?:string | string[],
        quantity?:number,
        brand?:string
    }[]
}

const products: Products = {
    productItem:[
        {
            _id: 1,
            name:'کفش سمرقندی',
            category:2,
            image:'https://dkstatics-public.digikala.com/digikala-products/d1bb408e82ca45a4d9ba96e9b3797f8ac279903e_1616052140.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80',
            subCategory:'کفش زنانه',
            price:1000000,
            rating:4,
            reviwe:21,
            status:[
                "پرفروش ترین ها",
                "جدیدترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            size:["38","41","42","44"],
            color:['black','brown'],
            quantity:10,
            brand:"nick"
        },
        {
            _id: 2,
            name:'کیف رودشی k34',
            category:2,
            image:'https://dkstatics-public.digikala.com/digikala-products/309d83eb7fca127fa14673934fb05e91d17fd85c_1608206317.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'کیف زنانه',
            price:1200000,
            rating:4.4,
            reviwe:21,
            status:[
                "پرفروش ترین ها",
                "جدیدترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            color:['black','brown'],
            quantity:10,
            brand:"nick"
        },
        {
            _id: 3,
            name:'کفش نیم بوت مردانه',
            category:1,
            image:'https://dkstatics-public.digikala.com/digikala-products/f5d25cdbba6a3c48eb51bdaa3cd8a5597053aaf6_1604318396.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'کفش مردانه',
            price:1030000,
            rating:4.5,
            reviwe:41,
            status:[
                "پرفروش ترین ها",
                "جدیدترین ها",
                "محبوب ترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب',
                'بوت جذاب وشیک'
            ],
            size:["38","41","42","44"],
            color:['black','brown'],
            quantity:10,
            brand:"nick"
        },
        {
            _id: 4,
            name:'کفش کلاسیک kt44',
            category:1,
            image:'https://dkstatics-public.digikala.com/digikala-products/caab527e7479dbfd6a10a08a57d0db517f198258_1604259342.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'کفش مردانه',
            price:2400000,
            rating:4.3,
            reviwe:31,
            status:[
                "پرفروش ترین ها",
                "جدیدترین ها",
                "محبوب ترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب',
                'کفش کلاسیک برای مراسمات اداری'
            ],
            size:["38","41","42","44"],
            color:['black','brown'],
            quantity:10,
            brand:"nick"
        },
        {
            _id: 5,
            name:'مانتو چرم j63',
            category:2,
            image:'https://dkstatics-public.digikala.com/digikala-products/1f82419ddae6e7ae28ea78b9b4441c798132a1f8_1609139703.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'البسه زنانه',
            price:7000000,
            rating:3,
            reviwe:11,
            status:[
                "جدیدترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            color:['black','green'],
            quantity:10,
            brand:"nick"
        },
        {
            _id: 6,
            name:'کت زنانه چرم',
            category:2,
            image:'https://dkstatics-public.digikala.com/digikala-products/613d9bac6f9fb245dcad4a4126b2f94bf35a57ff_1609139733.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'البسه زنانه',
            price:4500000,
            rating:3.2,
            reviwe:6,
            status:[
                "جدیدترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            size:["38","41","42","44"],
            color:['black','brown','green'],
            quantity:10,
            brand:"poma"
        },
        {
            _id: 7,
            name:'کیف پاسپورتی h44',
            category:1,
            image:'https://dkstatics-public.digikala.com/digikala-products/24588e1083895de41e9c7158eebad0a1d310b24f_1605462096.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'کیف مردانه',
            price:3300000,
            rating:4.2,
            reviwe:55,
            status:[
                "جدیدترین ها",
                "محبوب ترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            color:['black','brown'],
            quantity:10,
            brand:"poma"
        },
        {
            _id: 8,
            name:'کیف اداری مردانه',
            category:1,
            image:'https://dkstatics-public.digikala.com/digikala-products/fb8a3fe7159eb6e65e5e3cf7eb96886afb4132ed_1608787164.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'کیف مردانه',
            price:5000000,
            rating:3,
            reviwe:13,
            status:[
                "جدیدترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            color:['black','brown'],
            quantity:10,
            brand:"poma"
        },
        {
            _id: 9,
            name:'کیف آرایشی',
            category:2,
            image:'https://dkstatics-public.digikala.com/digikala-products/49d0098d5bb49e5bfcf50f664ab2887e6a218319_1621885231.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'کیف زنانه',
            price:300000,
            rating:3.8,
            reviwe:35,
            status:[
                "جدیدترین ها",
                "محبوب ترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            color:['black','brown','pink'],
            quantity:10,
            brand:"poma"
        },
        {
            _id: 10,
            name:'کفش زنانه f33',
            category:2,
            image:'https://dkstatics-public.digikala.com/digikala-products/121981010.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'کفش زنانه',
            price:500000,
            rating:4,
            reviwe:25,
            status:[
                "پرفروش ترین ها",
                "جدیدترین ها",
                "محبوب ترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            size:["38","41","42","44"],
            color:['black','brown'],
            quantity:10,
            brand:"poma"
        },
        {
            _id: 11,
            name:'تک کت چرم',
            category:1,
            image:'https://dkstatics-public.digikala.com/digikala-products/a3b47f73818075ddc868fe36e2723afdea753b46_1609138837.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'البسه مردانه',
            price:3200000,
            rating:4.7,
            reviwe:75,
            status:[
                "پرفروش ترین ها",
                "محبوب ترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            color:['black'],
            quantity:10,
            brand:"adidas"
        },
        {
            _id: 12,
            name:'کاپشن جرم مصنوعی',
            category:1,
            image:'https://dkstatics-public.digikala.com/digikala-products/4687fdeaf4186e97052e34eae30ffb3dc6168ac9_1616918917.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'البسه مردانه',
            price:4000000,
            rating:2.7,
            reviwe:5,
            status:[
                "جدیدترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            size:["38","41","42","44"],
            color:['black','brown','green'],
            quantity:10,
            brand:"adidas"
        },
        {
            _id: 13,
            name:'دستکش چرم زنانه',
            category:2,
            image:'https://dkstatics-public.digikala.com/digikala-products/82f1ce870e8250c15884514ce7146e6b176b7428_1603706135.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'البسه زنانه',
            price:450000,
            rating:3.6,
            reviwe:37,
            status:[
                "پرفروش ترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            color:['black','brown'],
            quantity:10,
            brand:"adidas"
        },
        {
            _id: 14,
            name:'کمربند یورایی چرم',
            category:2,
            image:'https://dkstatics-public.digikala.com/digikala-products/656ac09fce4279b742481362ebf9c2501f6426d3_1604940834.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'البسه زنانه',
            price:1000000,
            rating:4,
            reviwe:21,
            status:[
                "جدیدترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            color:['black','brown'],
            quantity:10,
            brand:"adidas"
        },
        {
            _id: 15,
            name:'کمربند چرم مردانه',
            category:1,
            image:'https://dkstatics-public.digikala.com/digikala-products/f3a8ba7c63213a52e064640a6c8ea85560aba35b_1609051944.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'البسه مردانه',
            price:1000000,
            rating:4,
            reviwe:21,
            status:[
                "پرفروش ترین ها",
                "جدیدترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            color:['black','brown'],
            quantity:10,
            brand:"adidas"
        },
        {
            _id: 16,
            name:'کیف پول مردانه',
            category:1,
            image:'https://dkstatics-public.digikala.com/digikala-products/21154e1a06883bf1de0016761b14b80920f8662c_1619295328.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90',
            subCategory:'کیف مردانه',
            price:1000000,
            rating:4.7,
            reviwe:64,
            status:[
                "پرفروش ترین ها"
            ],
            describtion:[
                'چرم گاوی',
                'رنگبندی چذاب'
            ],
            color:['black','brown'],
            quantity:10,
            brand:"adidas"
        },
    ]
}

export default products
