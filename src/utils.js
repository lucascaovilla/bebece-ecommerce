
export   function getProducts() {
     return new Promise((res) => {
          res([
               {
                    name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
                    image: '/static/images/products/product-1.png',
                    price: { amount: 179.9, isDiscount: null },
                    id: 1,
                    sizes: [32, 33,  34],
               },
               {
                    name: 'Sandália Braco Blanc Tratorada',
                    image: '/static/images/products/product-2.png',
                    price: { amount: 459.9, isDiscount: 319.89 },
                    id: 2,
                    sizes: [39, 41],
               },
               {
                    name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
                    image: '/static/images/products/product-3.png',
                    price: { amount: 349.9, isDiscount: 315 },
                    id: 5,
                    sizes: [32, 33,  34, 36, 39, 41],
               },
               {
                    name: 'Slingback Branco Tiras Bico Fino Couro',
                    image: '/static/images/products/product-4.png',
                    price: { amount: 379.9, isDiscount: null },
                    id: 3,
                    sizes: [32, 33, 39, 41],
               },
               {
                    name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
                    image: '/static/images/products/product-5.png',
                    price: { amount: 159.9, isDiscount: null },
                    id: 4,
                    sizes: [35, 36, 39, 41],
               },

          ]);
     });
}

