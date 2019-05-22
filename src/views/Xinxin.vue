<template>
    <my-page class="page-weibo" title="“欣欣可爱”生成器" :page="page">
        <div class="common-container">
            <div class="container" id="container">
                <div class="rel" id="editor">
                    <img class="source" src="/static/template.jpg" alt="" ref="source">
                    <div class="text" v-html="htmlfiy(a1)">
                    </div>
                </div>
                <ui-text-field v-model="a1" multiLine :rows="3" :rowsMax="6" label="文字" />
                    
                <div class="btns">
                    <ui-raised-button label="生成" primary @click="make" />
                </div>
                <!-- <textarea type="text" class="" v-model="a1"></textarea>
                <button class="reset" @click="resetDialog">重置</button>
                <button class="generate" @click="make">↓ 生成 ↓</button> -->
                <img class="result" :src="result" v-if="result">
            </div>
        </div>
    </my-page>
</template>

<script>
    const html2canvas = window.html2canvas

    export default {
        data () {
            return {
                a1: `欢迎新人
请阅读群规
以及公告
谢谢配合~`,
                result: null,
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
            htmlfiy(text) {
                return text.replace(/\n/g, '<br>')
            },
            make() {
                document.getElementById('container').scrollTop = 0
                html2canvas(document.getElementById('editor')).then(canvas => {
                    this.result = canvas.toDataURL()
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
.source {
    display: block;
    width: 440px;
}
.rel {
    position: relative;
    width: 440px;
    margin-bottom: 16px;
    // border: 1px solid #f00;
}
.btns {
    margin-bottom: 16px;
}
.text {
    display: flex;;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 23%;
    top: 46.5%;
    width: 51%;
    height: 28%;
    text-align: center;
    font-size: 18px;
    // border: 1px solid #000;
}
.result {
    display: block;
    // width: 400px;
    // min-width: 100%;
}
.container {
    // position: absolute;
    // left: 0;
    // right: 0;
    // top: 0;
    // bottom: 0;
    // padding: 16px;
    // overflow: scroll;
}
</style>
