/**
 * Created by janeluck on 17/8/17.
 * browser module loader
 * name和path的区别是否含有后缀.js ~.~
 * set 和 get 与直接=的关系
 */

var define, require;
(function (global) {
    if (global !== window) {
        console.error('current environment is not browser')
        return
    }

    var mid = 0,
        tid = 0,
        modules = {},
        tasks = {},
        mapDepToModuleOrTask = {}


    // define, require

    require = function (dep, cb, errorFn) {
        if (isFunction(dep)) {
            cb = dep
            dep = undefined
        }

        var task = new Task(dep, cb, errorFn)
        task.analyzeDep()
    }


    define = function (name, dep, cb, errorFn) {
        if (isFunction(name)) {
            cb = name
            name = getCurrentModuleName()

        } else if (isArray(name) && isFunction(dep)) {
            cb = dep
            dep = name
            name = getCurrentModuleName()
        } else if (isString(name) && isArray(name) && isFunction(cb)) {
        }

        var module = modules[name]
        module.name = name
        module.dep = dep
        module.cb = cb
        module.errorFn = errorFn;
        module.analyzeDep()
    }

    // 模块对象构造函数
    function Module(name, dep, cb, errorFn) {
        this.mid = ++mid
        this.init(name, dep, cb, errorFn)
        this.fetch()

    }


    // 模块状态的定义
    Module.STATUS = {
        INITED: 1,      // 初始化完成
        FETCHING: 2,    // 正在网络请求
        FETCHED: 3,     // 网络请求结束(此状态暂时用不到)
        EXECUTING: 4,   // 准备开始运算模块
        EXECUTED: 5,    // 模块运算完毕
        ERROR: 6        // 模块发生错误
    };

    Module.prototype.init = function (name, dep, cb, errorFn) {
        this.name = name
        this.src = moduleNameToModulePath(name)
        this.dep = dep
        this.cb = cb
        this.errorFn = errorFn
        this.callHook('INITED')
    }

    Module.prototype.fetch = function () {
        var scriptNode = document.createElement('script')
        scriptNode.type = 'text/javascript'
        scriptNode.src = this.src
        scriptNode.onerror = this.fetchFail.bind(this)
        document.body.appendChild(scriptNode)
        this.callHook('FETCHING')
    }

    Module.prototype.fetchFail = function () {
        console.error('模块' + this.name + '获取失败, url为' + this.src)
        this.callHook('ERROR')
    }

    Module.prototype.callHook = function (mStatus) {
        var status = Module.STATUS[mStatus]
        if (!this.status) {
            Object.defineProperty(this, 'status', {
                get: function () {
                    return status
                },
                set: function (newStatus) {
                    status = newStatus
                    if (status === 5) {
                        // 该模块已经executed
                        var depedModules = mapDepToModuleOrTask[this.name]
                        if (!depedModules) return
                        depedModules.forEach(function (module) {
                            // 与该模块本身无关, 所以使用异步调用
                            setTimeout(function () {
                                module.depCount--
                            });
                        });
                    }
                }
            })
        } else {
            this.status = status
        }
    }


    Module.prototype.analyzeDep = function () {
        var depCount = this.dep && this.dep.length || 0
        // 处理dep中包含'require'的特殊情况
        var requireInDep = (this.dep || []).indexOf('require')
        if (requireInDep !== -1) {
            depCount--
            this.requireInDep = requireInDep
            this.dep.splice(requireInDep, 1)
        }

        // 处理循环依赖情况
        var cycleArray = this.checkCycle()
        if (cycleArray) {
            depCount = depCount - cycleArray.length
        }

        if (depCount === 0) {
            this.execute()
            return
        }

        Object.defineProperty(this, 'depCount', {
            get: function () {
                return depCount
            },
            set: function (newDeptCount) {
                depCount = newDeptCount
                if (newDeptCount === 0) {
                    if (this.mid) {
                        console.log('模块' + this.name + '的依赖已经全部准备好')
                    } else if (this.tid) {
                        console.log('任务' + this.tid + '的依赖已经全部准备好')
                    }
                    this.execute()
                }
            }
        })
        this.depCount = depCount
        // ?
        if (!this.depCount) return
        var that = this
        this.dep.forEach(function (depModuleName) {
            if (!modules[depModuleName]) {
                var module = new Module(depModuleName)
                modules[module.name] = module
            }

            if (!mapDepToModuleOrTask[depModuleName]) {
                mapDepToModuleOrTask[depModuleName] = []

            }


            mapDepToModuleOrTask[depModuleName].push(that)
        })


    }


    /**
     * 检查模块循环依赖
     * @returns {Array|undefined} 如果模块出现循环依赖的话,返回循环依赖的模块(以数组形式)
     */
    Module.prototype.checkCycle = function () {
        var cycleDep = []
        for (var depModuleName of (this.dep || [])) {
            if (mapDepToModuleOrTask[this.name] && mapDepToModuleOrTask[this.name].indexOf(modules[depModuleName]) !== -1) {
                cycleDep.push(depModuleName)
            }
        }
        return cycleDep.length ? cycleDep : undefined
    };


    /**
     * 运算模块
     */
    Module.prototype.execute = function () {
        this.callHook('EXECUTING')
        // 根据依赖数组向依赖模块收集exports当做参数
        var arg = (this.dep || []).map(function (dep) {
            return modules[dep].exports
        });

        // 插入require到回调函数的参数列表中
        if (this.requireInDep !== -1 && this.requireInDep !== undefined) {
            arg.splice(this.requireInDep, 0, require)
        }

        this.exports = this.cb.apply(this, arg)
        this.callHook('EXECUTED')
        if (this.tid) {
            console.log('任务' + this.tid + '执行完成')
        } else if (this.mid) {
            console.log('模块' + this.name + '执行完成')
        }
    };


    // 解析路径, 获取模块名
    function modulePathToModuleName(path) {
        var reg = /\w*.js/
        var output = reg.exec(path)
        if (!output) return path
        return output[0].split('.')[0]
    }


    // 解析模块名, 获取路径
    function moduleNameToModulePath(name) {
        var reg = /\w*.js/
        var output = reg.exec(name)
        if (!output) return './' + name + '.js'
        return name
    }

    // 获取入口模块
    function getMainEntryModuleName() {
        var dataMain = document.currentScript.getAttribute('data-main')
        return modulePathToModuleName(dataMain)
    }


    /**
     * 获取当前正在执行的模块的模块名
     * @returns {String}
     */
    function getCurrentModuleName() {
        let src = document.currentScript.getAttribute('src')
        return modulePathToModuleName(src)
    }




    function Task(dep, cb, errorFn) {
        this.tid = ++tid
        this.init(dep, cb, errorFn)
    }

    Task.prototype = Object.create(Module.prototype)


    Task.prototype.init = function (dep, cb, errorFn) {
        this.dep = dep
        this.cb = cb
        this.errorFn = errorFn
        tasks[this.tid] = this
    }


    function isFunction(fn) {
        return typeof fn === 'function'
    }

    function isString(str) {
        return typeof str === 'string'
    }

    function isArray(arr) {
        return Array.isArray(arr)
    }

     // 启动加载入口模块
    var mainEntryModule = new Module(getMainEntryModuleName())
    modules[mainEntryModule.name] = mainEntryModule
})(this)

/*
 * [document.currentScrip](https://developer.mozilla.org/en-US/docs/Web/API/Document/currentScript)
 * 没有做容错处理
 *
 * */