### Architecture Design

Here the app is broken down into pages and the pages are broken down into subapps and components. 


This is done following the screaming architecture pattern where the folder names should be screaming the intent of the application.

The App uses a Microfront end architecture where src/index.js has a shell app with the Header, Footer and Routing. This shell app loads the specific subapps based on specific routes

The subapps are independent of each other and any common functionality should be moved into a shared code repo.

The App uses TailwindCSS to introduce functional utility-css styles. The reason for functional CSS is that it helps keep the bundle size limited to the limit of CSS rules. 