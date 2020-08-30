<template>
    <my-page title="娱乐" :page="page">
        <div class="common-container container">
            <app-list :data="groups" />
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        name: '测试',
                        apps: [
                            {
                                name: '反应速度测试',
                                desc: '',
                                icon: 'https://life.yunser.com/static/img/reflex.svg',
                                to: 'xxx',
                                href: 'https://life.yunser.com/reflex',
                                target: '_blank'
                            },
                            {
                                name: '舒尔特方格',
                                desc: '',
                                icon: 'https://life.yunser.com/static/img/grid.svg',
                                to: 'xxx',
                                href: 'https://life.yunser.com/schulte_grid',
                                target: '_blank'
                            }
                        ]
                    },
                    {
                        name: '常用',
                        apps: [
                            {
                                name: '恶搞图片',
                                desc: '',
                                icon: '/static/img/fun.svg',
                                to: '/image'
                            },
                            {
                                name: '表情制作',
                                desc: '',
                                icon: '/static/img/fun.svg',
                                to: 'xxx',
                                href: 'https://tu.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: 'GIF 配字幕',
                                desc: '',
                                icon: '/static/img/fun.svg',
                                to: 'xxx',
                                href: 'https://emotion.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: '举牌小人图片生成',
                                desc: '',
                                icon: '/static/img/fun.svg',
                                to: 'xxx',
                                href: 'https://emotion.yunser.com/up',
                                target: '_blank'
                            },
                            {
                                name: '脸萌',
                                desc: '',
                                icon: '/static/img/face_1.svg',
                                to: 'xxx',
                                href: 'https://face.yunser.com/',
                                target: '_blank'
                            },
                            {
                                name: '骰子',
                                desc: '',
                                icon: '/static/img/random.svg',
                                to: 'xxx',
                                href: 'https://math.yunser.com/dice/',
                                target: '_blank'
                            },
                            {
                                name: '王思聪微博生成',
                                desc: '',
                                icon: '/static/img/weibo.svg',
                                to: '/weibo_maker'
                            },
                            {
                                name: '数字雨图片制作',
                                desc: '',
                                icon: '/static/img/fun.svg',
                                to: 'xxx',
                                href: 'https://demo2.yunser.com/code_rain/',
                                target: '_blank'
                            },
                            {
                                name: '欣欣可爱',
                                desc: '“欣欣可爱”生成器',
                                icon: '/static/img/fun.svg',
                                to: '/xinxin'
                            },
                            {
                                name: '我们是谁',
                                desc: '',
                                icon: '/static/img/fun.svg',
                                to: 'xxx',
                                href: 'https://demo2.yunser.com/fun/who/',
                                target: '_blank'
                            },
                            {
                                name: '我想对你说',
                                desc: '',
                                icon: '/static/img/fun.svg',
                                to: 'xxx',
                                href: 'https://demo2.yunser.com/fun/say/#/generate',
                                target: '_blank'
                            },
                            {
                                name: '鹿头像生成',
                                desc: '',
                                icon: '/static/img/deer.svg',
                                to: 'xxx',
                                href: 'https://deer.yunser.com',
                                target: '_blank'
                            }
                        ]
                    },
                    {
                        name: '其他',
                        apps: [
                            {
                                name: '指尖轮盘',
                                desc: '开发中...',
                                icon: '/static/img/fun.svg',
                                to: 'xxx',
                                href: 'https://life.yunser.com/who',
                                target: '_blank'
                            },
                        ]
                    }
                ],
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'search',
                            href: 'https://search.yunser.com?utm_source=fun',
                            target: '_blank',
                            title: '搜索'
                        },
                        {
                            type: 'icon',
                            icon: 'apps',
                            href: 'https://app.yunser.com?utm_source=fun',
                            target: '_blank',
                            title: '应用'
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
</style>
