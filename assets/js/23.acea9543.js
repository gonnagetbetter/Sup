(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{649:function(t,a,s){"use strict";s.r(a);var r=s(34),i=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"тестування-працездатності-системи"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#тестування-працездатності-системи"}},[t._v("#")]),t._v(" Тестування працездатності системи")]),t._v(" "),s("p",[t._v("Для тестування використовувалася програма "),s("a",{attrs:{href:"https://www.postman.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Postman"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"запуск-cервера"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#запуск-cервера"}},[t._v("#")]),t._v(" Запуск cервера")]),t._v(" "),s("p",[t._v("Для запуску сервера необхідно перейти до директорії "),s("code",[t._v("/src/js/")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ./src/js/\n")])])]),s("p",[t._v("Та виконати")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("node app.js\n")])])]),s("h3",{attrs:{id:"отримання-списку-всіх-артефактів"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#отримання-списку-всіх-артефактів"}},[t._v("#")]),t._v(" Отримання списку всіх артефактів")]),t._v(" "),s("p",[s("code",[t._v("GET")]),t._v(" "),s("code",[t._v("/api/artifacts/")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/8mmgM59.jpg",alt:"GET /api/artifacts"}})]),t._v(" "),s("h3",{attrs:{id:"отримання-артефактів-за-id"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#отримання-артефактів-за-id"}},[t._v("#")]),t._v(" Отримання артефактів за id")]),t._v(" "),s("p",[s("code",[t._v("GET")]),t._v(" "),s("code",[t._v("/api/artifacts/:id")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/ZdoayP1.jpg",alt:"GET /api/artifacts"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/XOH0vqX.jpg",alt:"GET /api/artifacts"}})]),t._v(" "),s("p",[t._v("У випадку, якщо артефакта з таким id не існує, сервер поверне помилку:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/CjAgBd9.jpg",alt:"GET /api/artifacts"}})]),t._v(" "),s("h3",{attrs:{id:"створення-артефакта"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#створення-артефакта"}},[t._v("#")]),t._v(" Створення артефакта")]),t._v(" "),s("p",[s("code",[t._v("POST")]),t._v(" "),s("code",[t._v("/api/artifacts")])]),t._v(" "),s("p",[t._v("Повертає повідомлення про створення артефакта")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/ZAW7Kuj.jpg",alt:"POST /api/artifacts"}}),t._v(" "),s("img",{attrs:{src:"https://i.imgur.com/xorj9QE.jpg",alt:"POST /api/artifacts"}})]),t._v(" "),s("p",[t._v("Якщо буде відсутній параметр то видасть помилку")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/sp1P6fr.jpg",alt:"POST /api/artifacts"}})]),t._v(" "),s("h3",{attrs:{id:"оновлення-артефакта"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#оновлення-артефакта"}},[t._v("#")]),t._v(" Оновлення артефакта")]),t._v(" "),s("p",[s("code",[t._v("PUT")]),t._v(" "),s("code",[t._v("/api/artifacts/:id")])]),t._v(" "),s("p",[t._v("Повертає повідомлення про оновлення артефакта")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/rJS3Srb.jpg",alt:"PUT /api/artifacts"}})]),t._v(" "),s("p",[t._v("У випадку, якщо артефакта з таким id не існує, повертається помилка")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/Ihpwtsp.jpg",alt:"PUT /api/artifacts"}})]),t._v(" "),s("p",[t._v("У випадку, якщо недостатньо параметрів, повертається помилка")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/ozXycYM.jpg",alt:"PUT /api/artifacts"}})]),t._v(" "),s("h3",{attrs:{id:"видалення-артефакта"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#видалення-артефакта"}},[t._v("#")]),t._v(" Видалення артефакта")]),t._v(" "),s("p",[s("code",[t._v("DELETE")]),t._v(" "),s("code",[t._v("/api/artifacts/:id")])]),t._v(" "),s("p",[t._v("Повертає повідомлення про видалення артефакта")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/Vij0Q1F.jpg",alt:"DELETE /api/artifacts"}})]),t._v(" "),s("p",[t._v("У випадку, якщо артефакта з таким id не існує, повертається помилка:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/3LHmfIj.jpg",alt:"DELETE /api/artifacts"}})])])}),[],!1,null,null,null);a.default=i.exports}}]);