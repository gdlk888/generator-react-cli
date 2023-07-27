# generator-react-cli

A Yeoman generator for scaffolding React projects using Vite.

Installation
You can install the generator globally using npm:

npm install -g generator-react-cli-vite
Usage
To generate a new React project using Vite, run the following command:

yo react-cli-vite
This will prompt you for some project details and generate the project structure for you.

Features
Generates a React project using Vite, a fast build tool for modern web development.
Offers customization options for project details such as project name, author, and package manager.
Sets up a basic project structure with a sample component and CSS file.
Includes a development server for hot module replacement and fast refresh.
Supports modern JavaScript features and syntax.
Project Structure
After generating a new project, the directory structure will look like this:

my-react-project
├── public
│   ├── index.html
├── src
│   ├── components
│   │   └── App.js
│   ├── styles
│   │   └── App.css
│   ├── index.js
├── .gitignore
├── package.json
└── README.md
public: Contains the static assets and the main index.html file.
src: Contains the source code of the React application.
components: Contains the React components.
styles: Contains the CSS stylesheets.
index.js: Entry point of the application.
.gitignore: Specifies files and directories that should be ignored by Git.
package.json: Contains the project metadata and dependencies.
README.md: This file.
Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.

License
This project is licensed under the MIT License.
