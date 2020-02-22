### Architecture Design

Here the app is broken down into pages and the pages are broken down into containers and components. This is done following the screaming architecture pattern where the folder names
should be screaming the intent of the application.

The principles followed are:

Single Responsibility Principle - Each page should show information about that page.
Open Closed Principle - Each page should be open for adding features but the existing functionality should not be changed


Composition - Each page should be made up of small, independently testable components. This helps in keeping the complexity of the codebase clean


The App uses TailwindCSS to introduce atomic css styles