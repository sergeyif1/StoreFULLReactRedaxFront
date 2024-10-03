<h1 align="center">Hi there, I'm Sergey!
            <img src="./imges/Hi.gif" height="32" alt="Hi" />
        </h1>
<h3 align="center">This is an application for my portfolio</h3> 

<h3 align="center">🛠 What is this and what is it for?</h3>

<p>My goal is to practice and refine technologies, features, architecture, and logic related to React and Redux Toolkit in the project, as well. I aim to implement (routing) backend structure, as well as sorting, filtering, and search functionality. Additionally, I would like to gain more experience working with React Hooks here.</p>

<h3 align="center">🛠 Components have been created (the App.js file has been broken down into components: Header, Menu, Sorting, Categories, Product Card). I am organizing the file structure (with a Components folder)!!.</h3>

<ul>
<li>Header</li>
<li>Menu</li>
<li>Sorting</li>
<li>Categories</li>
<li>Array of Product Cards (CSS Grid Generator was used)</li>
</ul>

Pages Implemented:
<ul>
<li>Home
<li>Cart
<li>NotFound (404)</li>
</ul>

<p>
.jsx files have been created for the respective components.
The App.js file has been formatted, with props added.</p>

<ul>
<li><same font-family: bold>Skeleton feature</same> (placeholder data) has been implemented to enhance the visual rendering of the page.</li>

<li><same font-family: bold>Routing</same> has been implemented.</li>

<li>"a" tags have been replaced with "Link" components</li>
<li><same font-family: bold>Responsive design</same> has been configured (@media in app.scss), with display: flex; justify-content: center; applied inside the product cards.</li>
<li>A <same font-family: bold>Cart page</same> has been created.</li>
<li><same font-family: bold>Sorting and Filtering functionality</same> has been implemented.</li>
<li>A <same font-family: bold>pop-up window for sorting</same> has been created, with dynamic behavior (the window disappears upon selecting a menu item, and the selected item is displayed in the title).</li>
<li>A <same font-family: bold>separate slice</same> for sorting has been implemented, with logic integrated into Redux.</li>
<li><same font-family: bold>Global state management</same> has been implemented.</li>
<li>A <same font-family: bold>request Backend</same> has been made via <same font-family: bold>mockapi.io</same>.</li>
<li><same font-family: bold>Pagination </same> has been developed using the react-paginate library, integrated with Redux.</li>
<li><same font-family: bold>Search functionality</same> has been developed using a controlled input with useCallback() (including a search icon and a clear button) and the creation of a global variable (via a backend request and context to avoid props drilling). The search input has been optimized with lodash's debounce.</li>
<li><same font-family: bold>Filtering functionality</same> has been developed.</li>
<li>A <same font-family: bold>separate slice</same> for filtering has been created, with logic integrated into Redux.</li>
<li>A <same font-family: bold>request API</same> has been made using axios.get().then((res) => { setItem(res.data); setIsLoading(false); }), returning the product data, along with server error handling.</li>
<li><same font-family: bold>Cart functionality</same> has been implemented.</li>
<ul>
<li>The cart icon in the Header shows the number of items.</li>
<li>"Add to cart" functionality for pizza cards.</li>
<li>Action to calculate the total sum.</li>
<li>Solution for pizza grouping.</li>
<li>Action to calculate the total price of all selected pizzas.</li>
<li>Cart functionalities for adding, subtracting, and clearing items.</li>
<li>CartItem component:</li>
<li>add</li>
<li>minus</li>
<li>remove</li>
<li>Action to clear the entire cart (Clear Cart button).</li>
<li>CartEmpty component (shows "Cart is empty" when no items are present).</li>
<li>The pop-up window closes when clicking outside of it.</li>
</ul>
</ul>

<h3 align="center">'🛠 Getting Started with Create React App'</h3>

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `Available Scripts`
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.
### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/gettin-started).
To learn React, check out the [React documentation](https://reactjs.org/).
### Code Splitting
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
### Analyzing the Bundle Size
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
### `npm run build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
