<template>
    <transition name="fade-transform" mode="out-in">
        <div class="request-loading-component" v-if="requestLoading">
            <cube-loading :size="30"></cube-loading>
        </div>
    </transition>
</template>

<script src="./script.js">
</script>
<style scoped src="./style.css">
</style>