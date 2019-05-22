<template>
    <my-page title="恶搞图片制作" :page="page">
        <div class="common-container container">
            <ul class="tool-list">
                <li class="item" v-for="item in data">
                    <router-link :to="'/detail/' + item.id">
                        <div class="img-box">
                            <img class="img" :src="item.image">
                        </div>
                        <h3 class="title">{{ item.title }}</h3>
                        <div class="desc">{{ item.desc }}</div>
                    </router-link>
                </li>
            </ul>
        </div>
    </my-page>
</template>

<script>
    import data from '../util/data'

    export default {
        data () {
            return {
                data: data,
                page: {
                    menu: [
                        // {
                        //     type: 'icon',
                        //     icon: 'help',
                        //     to: '/help'
                        // }
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
