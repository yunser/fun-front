<template>
    <div>
        <div class="text-box">
            <div class="text">{{ text }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                text: '123',
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
        },
        mounted() {
            this.text = this.$route.query.text
        }
    }
</script>

<style lang="scss" scoped>
.text-box {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 24px;
}
</style>