# sample-dom-components-project

Example project website made using DOM Components Package library / frameworks for creating apps using the web components api.

## Made using create vite app.

**Entry point: index.html**

**Main Javascript File: main.js**
### All components in ./src folder

**app-root**: App.js
Has all the components embedded and manages state.

### Other components in ./src/components folder

**app-header**: Header.js

A static component with no complex functionality

**app-form**: Form.js

A simple form that updates tye app level state on submit using a custom event.

**app-list**: List.js

A list that lists all the items in the app level state. It chacks for any change in the attribute of data and changes the inner html accordingly.
