<template>
    <my-page class="page-weibo" title="微博生成工具" :page="page">
        <div id="container" class="container">
            <div class="user-box" contenteditable="true">
                <div class="header">
                    <img class="avatar" :src="avatar">
                    <div class="info">
                        <div class="info-header">
                            <span class="name">{{ name }}</span>
                            <i class="icon_approve_gold" v-if="person"></i>
                            <i class="daren" v-if="club"></i>
                            <i :class="['icon_member', 'icon_member' + vip]" v-if="vip"></i>
                        </div>
                        <div class="line2">{{ date }} 来自 iPhone X</div>
                        <div class="content">{{ text }}​​​​</div>
                    </div>
                </div>
                <div class="footer">
                    <div class="btn">
                        <em class="W_ficon ficon_favorite S_ficon">û</em>
                        <span class="text">收藏</span>
                    </div>
                    <div class="btn">
                        <em class="W_ficon ficon_forward S_ficon"></em>
                        <span class="text">31553</span>
                    </div>
                    <div class="btn">
                        <em class="W_ficon ficon_repeat S_ficon"></em>
                        <span class="text">121355</span>
                    </div>
                    <div class="btn">
                        <em class="W_ficon ficon_praised S_txt2">ñ</em>
                        <span class="text">243291</span>
                    </div>
                </div>
                <i class="W_ficon ficon_arrow_down S_ficon">c</i>
            </div>
        </div>
        <br>
        <ui-select-field v-model="template" label="模板">
            <ui-menu-item value="1" title="王思聪"/>
            <ui-menu-item value="2" title="苍井空"/>
            <ui-menu-item value="3" title="尤小右"/>
        </ui-select-field>
        <br>
        <ui-select-field v-model="vip" label="微博会员">
            <ui-menu-item :value="false" title="无"/>
            <ui-menu-item :value="1" title="vip1"/>
            <ui-menu-item :value="2" title="vip2"/>
            <ui-menu-item :value="3" title="vip3"/>
            <ui-menu-item :value="4" title="vip4"/>
            <ui-menu-item :value="5" title="vip5"/>
            <ui-menu-item :value="6" title="vip6"/>
            <ui-menu-item :value="7" title="vip7"/>
        </ui-select-field>
        <br>
        <ui-checkbox class="checkbox" v-model="club" label="微博达人" /> <br/>
        <ui-checkbox class="checkbox" v-model="person" label="个人认证" /> <br/>
        <br>
        <ui-text-field v-model="avatar" label="头像地址" />
        <br>
        <div class="btns">
            <ui-raised-button label="生成图片" primary @click="makeImage" />
        </div>
        <div v-if="dataUrl">
            <div class="tip">若生成的图片效果不好，请手动截图</div>
            <img :src="dataUrl">
        </div>
    </my-page>
</template>

<script>
    const html2canvas = window.html2canvas

    export default {
        data () {
            return {
                date: '6月23日 22:32',
                name: '',
                avatar: '',
                text: '',
                template: '0',
                // label: {
                //     person: false,
                // },
                dataUrl: '',
                vip: 7,
                club: false,
                person: false,
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
                this.template = '1'
                let now = new Date(new Date().getTime() - 30 * 60 * 1000)
                this.date = `${now.getMonth() + 1}月${now.getDate()}日 ${now.getHours()}:${now.getMinutes()}`
            },
            makeImage() {
                html2canvas(document.getElementById('container')).then(canvas => {
                    this.dataUrl = canvas.toDataURL()
                })
            }
        },
        watch: {
            template(value) {
                this.club = false
                this.vip = false
                this.person = false
                switch (value) {
                    case '1':
                        this.name = '王思聪'
                        this.vip = 7
                        this.person = true
                        this.avatar = '/static/img/wangsichong.jpg'
                        this.text = '为庆祝粉丝突破2600万，发个小福利，打开支付宝首页搜索 m7NLhI06O6 即可随机领大红包。'
                        break
                    case '2':
                        this.name = '苍井空'
                        this.vip = 7
                        this.person = true
                        this.text = '去 xxx.com 搜视频，有你们想要的资源。'
                        this.avatar = '/static/img/cangjingkong.jpg'
                        break
                    case '3':
                        this.name = '尤小右'
                        this.club = true
                        this.vip = 1
                        this.text = '最近在开发 vue 4.0，学不动是你的事，老子就是要更新'
                        this.avatar = '/static/img/youxiaoyou.jpg'
                        break
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'wbficonregular';
    src: url("/static/font/wbficon.eot?id=165420180711");
    src: url("/static/font/wbficon.eot?id=165420180711#iefix")  format('embedded-opentype'),
        url("/static/font/wbficon.svg?id=165420180711")  format('svg'),
        url("/static/font/wbficon.woff?id=165420180711")  format('woff'),
        url("/static/font/wbficon.ttf?id=165420180711")  format('truetype');
    src: url("/static/font/wbficon.eot?id=165420180711") \9;
    font-weight: normal;
    font-style: normal;
}
.W_ficon {
    font-family: "wbficonregular" !important;
    display: inline-block;
    -webkit-font-smoothing: antialiased;
}
.container {
    display: inline-block;
    // position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 16px;
    margin-bottom: 24px;
    background-color: #b0e0fa;
}
.info-header {
    display: flex;
    align-items: center;
}
.page-weibo {
    font-size: 14px;
    color: #333;
}
.user-box {
    position: relative;
    width: 600px;
    min-height: 136px;
    margin: 24px;
    box-shadow: 0 0 2px rgba(0,0,0,0.2);
    border-radius: 2px;
    background-color: #fff;
    .header {
        position: relative;
        min-height: 97px;
        padding: 20px 20px 4px;
        border-bottom: 1px solid #f2f2f5;
    }
    .avatar {
        float: left;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .name {
        margin-right: 6px;
        color: #333;
        font-weight: 700;
    }
    .icon_approve_gold {
        width: 15px;
        height: 14px;
        margin-right: 6px;
        background-image: url("/static/img/steps_gold.png");
        background-size: 475px 14px;
    }
    .daren {
        background-position: 0 -125px;
        width: 16px;
        height: 14px;
        margin-right: 4px;
        background-image: url("/static/img/icon.png");
        background-repeat: no-repeat;
    }
    .icon_member {
        background-position: -125px -125px;
        width: 16px;
        height: 16px;
        margin-right: 4px;
        display: inline-block;
        background-image: url("/static/img/icon.png");
        background-repeat: no-repeat;
    }
    .icon_member1 {
        background-position: -25px 0;
    }
    .icon_member2 {
        background-position: -25px -25px;
    }
    .icon_member3 {
        background-position: -25px -50px;
    }
    .icon_member4 {
        background-position: -25px -75px;
    }
    .icon_member5 {
        background-position: -25px -100px;
    }
    .icon_member6 {
        background-position: -25px -125px;
    }
    .icon_member7 {
        background-position: -125px -125px;
    }
}
.tip {
    color: #999;
    margin-bottom: 16px;
}
.W_icon {

}
.info {
    /* float: left; */
    padding-left: 56px;
}
.line2 {
    margin-top: 4px;
    margin-bottom: 2px;
    color: rgb(128, 128, 128);
    font-size: 12px;
}
.content {
    margin-bottom: 8px;
    width: 500px;
    color: #333;
    line-height: 23px;
    word-wrap: break-word;
}
.footer {
    height: 38px;
}
.btn {
    float: left;
    height: 22px;
    margin: 7px 0;
    line-height: 22px;
    width: 25%;
    text-align: center;
    border-right: 1px solid #d9d9d9;
    color: #808080;
    font-size: 12px;
}
.btn:last-child {
    border: none;
}


.W_ficon {
    position: relative;
    top: 2px;
    margin-right: 2px;
    font-style: normal;
    font-size: 15px;
    vertical-align: top;
}
.text {
    position: relative;
    top: 1px;
    line-height: 22px;
}
.ficon_arrow_down {
    position: absolute;
    top: 20px;
    right: 20px;
    color: #333;
}
.btns {
    margin-bottom: 16px;
}
</style>
