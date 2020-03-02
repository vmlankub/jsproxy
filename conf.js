jsproxy_config({
    // 当前配置的版本（记录在日志中，用于排查问题）
    // 每次修改配置，该值需要增加，否则不会生效。
    // 默认每隔 5 分钟自动下载配置，若想立即验证，可通过隐私模式访问。
    ver: '120',

    // 通过 CDN 加速常用网站的静态资源（实验中）
    static_boost: {
        enable: true,
        ver: 62
    },

    // 节点配置
    node_map: {
        'orzsiyuan': {
            label: 'orzsiyuan',
            lines: {
                // 主机:权重
                'proxy.orzsiyuan.workers.dev': 1,
            }
        },
        'dijkstra': {
            label: 'dijkstra',
            lines: {
                'proxy.orzsiyuan.workers.dev': 1,
            },
        },
        'mysite': {
            label: '当前站点',
            lines: {
                [location.host]: 1,
            }
        },
        // 该节点用于加载大体积的静态资源
        'cfworker': {
            label: '',
            hidden: true,
            lines: {
                'proxy.dijkstra.workers.dev': 1,
                'damp-unit-2d75.7ju485xo.workers.dev': 1,
                'gentle-cloud-3237.7ju485xo.workers.dev': 1,
                'nameless-thunder-1b4d.7ju485xo.workers.dev': 1,
                'proxy.qt.workers.dev': 1,
                'proxy.orzsiyuan.workers.dev': 1,
            }
        }
    },

    /**
     * 默认节点
     */
    node_default: 'mysite',

    /**
     * 加速节点
     */
    node_acc: 'cfworker',

    /**
     * 静态资源 CDN 地址
     * 用于加速 `assets` 目录中的资源访问
     */
    assets_cdn: 'https://cdn.jsdelivr.net/gh/vmlankub/jsproxy@gh-pages/assets/',

    // 本地测试时打开，否则访问的是线上的
    // assets_cdn: 'assets/',

    // 首页路径
    index_path: 'index_v3.html',

    // 支持 CORS 的站点列表（实验中...）
    direct_host_list: 'cors_v1.txt',

    /**
     * 自定义注入页面的 HTML
     */
    inject_html: '<script>window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;    ga(\'create\', \'UA-116309064-4\', { \'siteSpeedSampleRate\': 100, \'alwaysSendReferrer\': true });    ga(\'set\', \'forceSSL\', true);    ga(\'send\', \'pageview\');</script><script async src=\'https://www.google-analytics.com/analytics.js\'></script>',

    /**
     * URL 自定义处理（设计中）
     */
    url_handler: {
        // 'https://www.baidu.com/img/baidu_resultlogo@2.png': {
        //     replace: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
        // },
        // 'https://www.pornhub.com/': {
        //     redir: 'https://php.net/'
        // },
        // 'http://haha.com/': {
        //     content: 'Hello World'
        // },
    }
})
