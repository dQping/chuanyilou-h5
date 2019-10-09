<template>
    <header class="public-header-wrapper">
        <a class="go-back" @click="handleGoBack">
            <i class="cubeic-back"></i>
        </a>
        <div class="user-info">
            <div class="photo-img-wrap">
                <img :src="photoImg" alt="用户头像" />
            </div>
            <p class="user-name">我是粉刷匠粉刷匠</p>
        </div>
        <div class="user-config-list">
            <ul class="list">
                <li>
                    <i class="iconfont">&#xe600;</i>个人中心
                </li>
                <li>
                    <i class="iconfont">&#xe78e;</i>个人设置
                </li>
                <li class="lastest">
                    <i class="iconfont">&#xe78c;</i>退出登录
                </li>
            </ul>
        </div>
    </header>
</template>

<script src="./script.js">
</script>
<style scoped src="./style.css">
</style>