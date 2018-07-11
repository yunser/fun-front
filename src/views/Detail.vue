<template>
    <my-page :title="title" :page="page" backable>
        <div class="detail-box" v-if="data">
            <!-- <h1 class="title">{{ data.title }}</h1> -->
            <div class="form">
                <div v-for="item in data.form">
                    <ui-text-field v-model="input" :label="item.label" />
                </div>
                <div class="btns">
                    <ui-raised-button label="生成" primary @click="make" />
                </div>
            </div>
            <img class="image" :src="data.image">
        </div>
    </my-page>
</template>

<script>
    import data from '../util/data'

    export default {
        data () {
            return {
                input: '',
                title: '恶搞图片制作',
                data: null,
                page: {
                    menu: [
                    ]
                }
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let id = this.$route.params.id
                for (let item of data) {
                    if (item.id === id) {
                        this.data = item
                        break
                    }
                }
                this.title = this.data.title
            },
            make() {
                let url = this.data.result.replace('{{name}}', this.input)
                window.open(url)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
