<template>
    <h1>Situationp <p>索斯最新通告</p></h1>
    <input type="text" v-model="search" class="newsListSearch" placeholder="输入关键词检索通告">
    <ul class="listCategory">
        <li>
            <a href="javascript:;" v-bind:class="query" @click="query = ''">
                <h2>全部</h2>
                <span>all</span>
            </a>
        </li>
        <li>
            <a href="javascript:;" v-bind:class="query" @click="query = 'doing'">
                <h2>正在做</h2>
                <span>doing</span>
            </a>
        </li>
        <li>
            <a href="javascript:;" v-bind:class="query" @click="query = 'Industy'">
                <h2>行业动态</h2>
                <span>Industy trends</span>
            </a>
        </li>
        <li>
            <a href="javascript:;" v-bind:class="query" @click="query = 'update'">
                <h2>更新</h2>
                <span>update</span>
            </a>
        </li>
    </ul>
    <ul class="listCategoryInList">
        <li v-for="list in newlist | filterBy query in 'category' | filterBy search in 'title'" transition="staggered"
            stagger="60">
            <time>{{list.date}}</time>
            <span>/ 23:59:34</span>
            <a href="#/index/situation/content/{{list.id}}">
                <h2>{{list.title}}</h2>
            </a>
        </li>
    </ul>
</template>

<script type="text/babel">
    export default{
        data(){
            return {
                query: '',
                search: '',
                show: false,
                newlist: [
                    {id: 0, category: 'doing', date: '2015/07/23', title: '港澳办回应梁振英进京述职座位安排变化(图)', img: '1.jpg'},
                    {id: 1, category: 'doing', date: '2015/07/23', title: '美冷战绝密文件曝光：计划用23枚核弹攻击北京(图)', img: '2.jpg'},
                    {
                        id: 2, category: 'update', date: '2015/07/23', title: '《老炮儿》导演管虎：“三环十二少”是真事 原名“二环十三郎”',
                        img: '3.jpg'
                    },
                    {id: 3, category: 'Industy', date: '2015/07/23', title: '生得好又嫁得好！她是香港最后的天后，享公主般宠爱', img: '4.jpg'},
                    {id: 4, category: 'doing', date: '2015/07/23', title: '索斯光影工作室最新电影南方拍摄', img: '5.jpg'}
                ]
            }
        }
    }
</script>
<style lang="sass">
    @import "situation_list.scss";
</style>