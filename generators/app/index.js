const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'your project name',
                default: this.appname //appname 为项目生成目录名称
            }
        ]).then(answers => {
            this.answers = answers
        })
    }
    writing() {
        const templates = [
            '.eslintrc.cjs',
            '.npmrc',
            '.prettierignore',
            '.prettierrc',
            'index.html',
            'package-lock.json',
            'package.json',
            'public/vite.svg',
            'src/App.tsx',
            'src/assets/react.svg',
            'src/env/.env',
            'src/index.css',
            'src/main.tsx',
            'src/pages/home/index.tsx',
            'src/store/index.ts',
            'src/vite-env.d.ts',
            'tsconfig.json',
            'tsconfig.node.json',
            'vite.config.ts'
        ]

        templates.forEach((item) => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })


    }
}