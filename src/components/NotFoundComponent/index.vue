<template>
    <div class="no-found-wrapper">
        <PublicHeader></PublicHeader>
        <div class="icon-info">
            <img :src="image404" alt="404信息" />
        </div>
        <p class="text-info">{{msg}}</p>
        <cube-button class="custom-btn" :primary="true" :inline="true" @click="handleReturnHome">返回首页</cube-button>
        <PublicFooter></PublicFooter>
    </div>
</template>

<script src="./script.js">
</script>
<style scoped src="./style.css">
</style>