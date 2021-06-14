class MyPlugin {
    apply(compiler){
        // compiler.hooks.done.tap('My Plugin',stats=>{
        //     console.log("Mp : done");
        // })

        compiler.plugin('emit',(compilation,callback)=>{
            const source = compilation.assets['main.js'].source();
            compilation.assets['main.js'].source = () =>{
                const banner = [
                    '/**',
                    '* result',
                    '*/'
                ].join('\n');
                return banner + '\n\n' + source;
            }
            callback();
        })
    }
}

module.exports = MyPlugin;