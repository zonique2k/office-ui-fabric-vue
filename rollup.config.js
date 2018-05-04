const vue = require('rollup-plugin-vue');
const buble = require('rollup-plugin-buble');
import fs from 'fs';
import path from 'path';

function GetConfigESModule(){
    return {
        input:'./src/es.js',
        output: {
            file: 'dist/module.js',
            format: 'es'
        },
        plugins: [
            vue({
                compileTemplate: true,
                // css(content){
                //     var reg = /\\\"\[theme[^\#]*([^\]]*)\]\\\"/g
                //     reg = /\"\[theme[^\#]*([^\]]*)\]\"/g;
                //     var modifiedContent = content.replace(reg, (a,b)=>b); // replace with the captured group
                //     fs.writeFileSync('dist/' + ModuleName + ".notheme.css", modifiedContent);
                //     fs.writeFileSync('dist/' + ModuleName + ".themed.css", content); 
                // } 
            }),
            buble()
        ]
    }
}
function GetConfigStyles(ModuleName){
    return {
        input:'./src/components/' + ModuleName + '/index.js',
        output: {
            file: 'dist/' + ModuleName + '.js',
            format: 'es',
            name: ModuleName
        },
        plugins: [
            vue({
                compileTemplate: true,
                css(content){
                    var reg = /\\\"\[theme[^\#]*([^\]]*)\]\\\"/g
                    reg = /\"\[theme[^\#]*([^\]]*)\]\"/g;
                    var modifiedContent = content.replace(reg, (a,b)=>b); // replace with the captured group
                    fs.writeFileSync('dist/' + ModuleName + ".notheme.css", modifiedContent);
                    fs.writeFileSync('dist/' + ModuleName + ".themed.css", content); 
                } 
            }),
            buble()
        ]
    }
}

export default [
    GetConfigESModule(),
    GetConfigStyles("breadcrumb"),
    // GetConfig("button"),
    // GetConfig("callout")
]