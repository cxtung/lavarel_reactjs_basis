'use strict';
// const { faker } = require('@faker-js/faker/locale/vi');
// module.exports = {
//   /**
//    * An asynchronous register function that runs before
//    * your application is initialized.
//    *
//    * This gives you an opportunity to extend code.
//    */
//   register(/*{ strapi }*/) { },

//   /**
//    * An asynchronous bootstrap function that runs before
//    * your application gets started.
//    *
//    * This gives you an opportunity to set up your data model,
//    * run jobs, or perform some special logic.
//    */
//   // async bootstrap({ strapi }) {
//   //   for (let i = 0; i < 80; i++) {
//   //     await strapi.entityService.create('api::product.product', {
//   //       data: {
//   //         productName: faker.commerce.department() + faker.word.noun(),
//   //         description: faker.commerce.productDescription() + faker.word.noun(),
//   //         price: faker.commerce.price(20000, 100000),
//   //         detail: faker.lorem.paragraphs(3),
//   //       },
//   //     });
//   //   }
//   // },
//   bootstrap({ strapi }) { },

// };

// for (p = 1; p <= 81; p++) {
//   var s = "INSERT INTO `files_related_morphs`(`file_id`,`related_id`,`related_type`,`field`,`order`) VALUES ('" + Math.floor(Math.random() * (35 - 1 + 1) + 1) + "','" + p + "','api::product.product','image','1');";
//   document.write(s);
// }
var token = 'c3035b5cd53ca1de6ea51e10f9dc1819f202ef3fff8049e7012748fe676d72da1bd8a6679faa0dc7d062b1292a182848857fc368f998c9b3ca8072a1e5f4b1d44351b0f97c88ba5d4d94eb96fb3e6de3dd9e30760b011bd9e4d2e1fd42fcaa648d2a156903facfeb272710e7b77862d241a60dc985a97e8cec3200d9f80d7b91'
const config = {
  url: '/categories',
  baseURL: 'html://localhost:1337/api/',
  method: 'get',
  headers: {
    'Authorizaion': `Bearer${token}`,
    'Content-Type': 'application/json'
  },
  params: {
    fields: ['categoryName', 'description']
  }
};
const fetchCategories = async function () {
  const response = await axios.request(config);
  console.log(response)
}
fetchCategories