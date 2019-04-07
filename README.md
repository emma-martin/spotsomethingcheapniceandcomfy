# Spotaroom App

----

##Summary
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

It recreates a dummy layout of an accommodation platform.

## Installation

To install the dependencies, including sass & proptypes, run the following command in the directory:

 ### `npm install`

To open the app in the development mode, type:

### `npm start`

Which opens [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Structure

<pre>
src/
|-- App.js
|-- components
|   |-- List
|   |-- Card
|   `-- Spinner
`-- services
    `-- Api.js

</pre>


## Choices

### Design
I followed a provided visual guide, which included fonts, colors, borders and layout structure. The design was planned taken into account a mobile first approach.

For mimicking the elements' arrangement, I used [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox). 

Since there was a deadline for delivering the project, I run out of time for polishing the use of SASS (there is no variable usage nor mixins, but there's some nesting at least).

### Logic

I employed LocalStorage to avoid unnecessary API calls.

Data coming from the API service missed a proper Id to comply with [React unique keys requirement](https://reactjs.org/docs/lists-and-keys.html#keys).

To solve this issue, I decided to extract part of each images' parameter to used them as unique identifiers. The method can be found at the List component.

As alternative workarounds, you can explore using a library like [lodash.random](https://www.npmjs.com/package/lodash.random) to generate a random identifier. Also, there is the option to preprocess the data before setting the state during the fetch method:

```
const dataWithId = data.homecards.map(item, index) => {
  return {...item, id: index});
  this.setState({
   rooms: dataWithId
 })
```
And then proceeding to use the new property generated:

`key={item.id}`

Regarding deployment to GitHub Pages, an important remark is that, since its serving via a proxy in package.json, you will only see a mesmerizing spinner made by [@lukehass](https://projects.lukehaas.me/css-loaders/).

### Whishlist
 
React Router, some functionalities, a 404 page with a background gif and many more would may come.

# Thanks

This project is made with a purpose for learning and developing better coding skills, so don't be shy and send some PRs with your improvements. Sharing is caring.

![](https://media.giphy.com/media/xULW8v7LtZrgcaGvC0/giphy.gif)

