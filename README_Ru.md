<h1 align="center">Привет, я Сергей!
    <img src="./imges/Hi.gif" height="32" alt="Hi" />
</h1>
<h3 align="center">Это приложение для моего портфолио</h3>

<h3 align="center">🛠 Что это и для чего?</h3>

<p>Моя цель в этом проекте, отработать технологии, фичи, архитектуру, логику React and Redux Toolkit. Прикручивание (routing) BackAnd структуры.  Отработать функционал сортировки и фильтрации, поиска. Потренироваться работать с React Hooks. .</p>

<h3 align="center">🛠 Созданы компоненты (файл App.js разбит на компоненты: Header, Menu, Сортировка, Категории, Товарная карточка). Мы организуем файловую структуру (с папкой Components).</h3>

<ul>
    <li>Header</li>
    <li>Menu</li>
    <li>Сортировка</li>
    <li>Категории</li>
    <li>Массив Товарных карточек (использован CSS Grid Generator)</li>
</ul>

Реализованы страницы:
<ul>
    <li>Home</li>
    <li>Cart</li>
    <li>NotFound (404)</li>
</ul>

<p>.jsx файлы были созданы для соответствующих компонентов.
Файл App.js был отформатирован, добавлены props.</p>

<ul>
    <li><same font-family: bold>Фича скелетона</same> (фейковые данные) была реализована для улучшения визуального рендеринга страницы.</li>
    <li><same font-family: bold>Маршрутизация</same> была реализована.</li>
    <li>Теги "a" заменены на компоненты "Link".</li>
    <li><same font-family: bold>Адаптивная верстка</same> настроена (@media в app.scss), с применением display: flex; justify-content: center внутри карточек товара.</li>
    <li>Создана <same font-family: bold>страница корзины</same>.</li>
    <li>Реализован функционал <same font-family: bold>Сортировки и Фильтрации</same>.</li>
    <li>Создано <same font-family: bold>pop-up окно сортировки</same>, с динамическим поведением (окно исчезает после выбора пункта меню, а выбранный пункт отображается в заголовке).</li>
    <li>Реализован <same font-family: bold>отдельный слайс</same> для сортировки, логика интегрирована в Redux.</li>
    <li><same font-family: bold>Глобальное управление состоянием</same> было реализовано.</li>
    <li>Запрос на <same font-family: bold>Бэкенд</same> был выполнен через <same font-family: bold>mockapi.io</same>.</li>
    <li><same font-family: bold>Пагинация</same> была разработана с использованием библиотеки react-paginate, интегрирована с Redux.</li>
    <li>Реализована <same font-family: bold>функция поиска</same>, использована управляемая форма с useCallback() (с иконкой поиска и кнопкой очистки), а также создание глобальной переменной (через запрос на бэкэнд и контекст для избежания props drilling). Ввод запроса был оптимизирован с использованием debounce из библиотеки lodash.</li>
    <li>Разработана <same font-family: bold>фильтрация</same>.</li>
    <li>Создан <same font-family: bold>отдельный слайс</same> для фильтрации, логика интегрирована в Redux.</li>
    <li>Запрос на API был сделан с использованием axios.get().then((res) => { setItem(res.data); setIsLoading(false); }), ответ с данными товара, включая обработку ошибок сервера.</li>
    <li>Реализована <same font-family: bold>функциональность корзины</same>.</li>
    <ul>
        <li>В иконке корзины в Header отображается количество товаров.</li>
        <li>Функциональность "Добавить в корзину" для карточек пиццы.</li>
        <li>Действие для вычисления общей суммы.</li>
        <li>Решение для группировки пицц.</li>
        <li>Действие для расчета общей стоимости всех выбранных пицц.</li>
        <li>Функции корзины для добавления, уменьшения и очистки товаров.</li>
        <li>Компонент CartItem:</li>
        <li>добавить</li>
        <li>уменьшить</li>
        <li>удалить</li>
        <li>Действие для очистки всей корзины (кнопка "Очистить корзину").</li>
        <li>Компонент CartEmpty (отображает "Корзина пуста", когда товаров нет).</li>
        <li>Pop-up окно закрывается при клике вне его зоны.</li>
    </ul>
</ul>

<h3 align="center">🛠 Начало работы с Create React App</h3>

### Этот проект был создан с помощью [Create React App](https://github.com/facebook/create-react-app).

### `Доступные скрипты`
В каталоге проекта вы можете выполнить:
### `npm start`
Запускает приложение в режиме разработки.\
Откройте [http://localhost:3000](http://localhost:3000), чтобы просмотреть его в браузере.\
Страница перезагрузится при изменении кода.\
Также вы можете увидеть любые ошибки линтера в консоли.

### `npm test`
Запускает тестовый раннер в интерактивном режиме наблюдения.\
См. раздел о [запуске тестов](https://facebook.github.io/create-react-app/docs/running-tests) для получения дополнительной информации.

### `npm run build`
Собирает приложение для продакшена в папку `build`.\
Правильно собирает React в режиме продакшена и оптимизирует сборку для лучшей производительности.\
Сборка минифицирована, и имена файлов включают хэши.\
Ваше приложение готово к развертыванию!

См. раздел о [развертывании](https://facebook.github.io/create-react-app/docs/deployment) для получения дополнительной информации.

### `npm run eject`
**Примечание: это необратимая операция. После выполнения команды `eject` вернуться назад будет невозможно!**\
Если вас не устраивают инструменты сборки и конфигурации, вы можете в любой момент выполнить `eject`. Эта команда скопирует все файлы конфигурации и зависимости (webpack, Babel, ESLint и т.д.) прямо в ваш проект, что даст вам полный контроль над ними. Все команды, кроме `eject`, будут продолжать работать, но теперь они будут ссылаться на скопированные скрипты, которые можно изменять.

На этом этапе вы будете работать самостоятельно.\
Вы не обязаны использовать `eject`. Кураторский набор функций подходит для небольших и средних развертываний, и нет необходимости использовать эту функцию, если вы не готовы к кастомизации.

## Узнать больше
Вы можете узнать больше в [документации Create React App](https://facebook.github.io/create-react-app/docs/getting-started).\
Чтобы изучить React, ознакомьтесь с [документацией React](https://reactjs.org/).

### Разделение кода
Этот раздел перемещен сюда: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting).

### Анализ размера бандла
Этот раздел перемещен сюда: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size).

### Создание прогрессивного веб-приложения
Этот раздел перемещен сюда: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app).

### Расширенная конфигурация
Этот раздел перемещен сюда: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration).

### Развертывание
Этот раздел перемещен сюда: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run build` не удается минифицировать
Этот раздел перемещен сюда: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify).
