<template>
    <my-page title="娱乐" :page="page">
        <app-list :data="groups" />
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                groups: [
                    {
                        // name: '分类',
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
                            }
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
