### Architecture Design

Here the app is broken down into pages and the pages are broken down into containers and components. This is done following the screaming architecture pattern where the folder names
should be screaming the intent of the application.

Other principles followed are:

Single Responsibility Principle - Each subapp should show information about that subapp only.
Open Closed Principle - Each subapp should be open for adding features but the existing functionality should not be changed
Liskov Substitution Principle - It should be possible to substitute one subapp with another without breaking functionality.

Composition - Each page should be made up of small, independently testable components. This helps in keeping the complexity of the codebase clean


The App uses TailwindCSS to introduce functional utility-css styles. The reason for functional CSS is that it helps keep the bundle size limited to the limit of CSS rules.