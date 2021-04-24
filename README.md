# ZeBoard

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

##Technical tasks:

<h2>Нужно сверстать страницу по макету согласно тз. Разрешено использование любых фреймворков, библиотек и плагинов (bootstrap, jquery, vue и тд).</h2>

<ul><h4>Обязательные требования для принятия работы:</h4>
<li>сверстать хедер, колонки и карточки в колонках;</li>
<li>при клике на “Сreate  task” должна открываться модалка с формой;</li>
<li>в поле “Description” используется редактор текста с кнопками, которые позволят выделить текст жирным, курсивов или подчеркиванием.</li>
<li>в поле “Name” есть валидация - поле обязательно, максимум 50 символов</li>
<li>для ввода в поле “Until” в модалке используется datepicker</li>
<li>верстка должна быть адаптивной (на второй странице в фигме нарисована мобильная версия);</li>
<li>поле “Author” - выпадающий список (как на макете), обязательно для заполнения</li>
<li>поле “Until” - не обязательное - но если оно заполнено - проверяется валидность даты. Дата должна быть не ранее текущего момента. </li>
<li>при двойном клике на карточку - открывается модалка (экран “Card_info”)</li>
<li>при нажатии на кнопку “Сreate  task” в модалке форма очищается, и создается карточка с данными в первой колонке</li>
<li>тег “Project” на карточках генерируется рандомно, при создании карточки</li>
<li>номера задач идут по-порядку, начиная с “BM-1” и увеличиваются с каждой новой карточкой</li>
<li>вверху каждой колонки указано количество карточке в колонке</li>
<li>карточки можно перемещать в разные колонки с помощью мыши</li>
<li>верстка должна корректно отображаться в Chrome, Safari (как моб, так и пк)</li>
</ul>
<ul><h4>Дополнительные требования (которые лучше помогут понять вашу квалификацию).</h4>
<li>реализовать проект на vue (nuxt js)</li>
<li>все данные храняться  в localstorage и не теряются при перезагрузке страницы </li>
<li>стилизовать скролл бар как на макете</li>
<li>модалки появляются с анимацией </li>
<li>все ошибки валидации видны на экране (при сабмите формы и при потере фокуса)</li>
<li>в поле “Estimation time” валидация на корректность данных, допустимые форматы ввода “1d 10h 5m”, “18m”, “3d 7m” - т.е. дни, часы и минуты</li>
<li>карточки можно перемещать в разные колонки с помощью touch </li>
<li>при клике на “Сreate column” открывается модалка для создания новой колонки. Новая колонка добавляется перед колонкой “DONE”</li>
<li>все колонки, кроме первой и последней можно менять местами, двигая за хедер колонки (где указано название и кол-во карточек)</li>


Макет:
https://www.figma.com/file/YolnpTWLJWAAiypV3cCcqP/Test_2?node-id=0%3A1
