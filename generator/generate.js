const {generateTemplateFiles} = require('generate-template-files');
const {exec} = require('child_process');


generateTemplateFiles([
    {
        option: 'Schema',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './generator/schema',
        },
        stringReplacers: [{question: 'Insert Schema Name', slot: '__name__'}],
        output: {
            path: './src/api/graphql/schema/__name__(kebabCase)',
            pathAndFileNameDefaultCase: '(kebabCase)',
            overwrite: true,
        },

        onComplete: () => {
            /*exec(`${process.cwd()}/graphql-codegen`, (err) => {
                if (err) {
                    console.error(`An error occurred generating the types: `, err?.toString())
                } else {
                    console.log(`Generated types Done!`)
                }
            })*/
        }
    },
    {
        option: 'Repository',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './generator/repository',
        },
        stringReplacers: [{question: 'Insert Module Name', slot: '__name__'}],
        output: {
            path: './src/api/repositories/__name__(kebabCase)',
            pathAndFileNameDefaultCase: '(kebabCase)',
            overwrite: true,
        }
    },
    {
        option: 'UI Module',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './generator/ui',
        },
        stringReplacers: [{question: 'Insert UI Module Name', slot: '__name__'}],
        output: {
            path: './src/app/modules/__name__(kebabCase)',
            pathAndFileNameDefaultCase: '(kebabCase)',
            overwrite: true,
        },
    }

]);
