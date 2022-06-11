<template>
    <div class="mhy-account-frame" v-if="isLogo">
        <div class="mhy-account-action-sheet__content">
            <div class="mhy-account-action-sheet__close" @click="$emit('modifyDia')">x</div>
            <div class="mhy-init-account-info">
                <div class="mhy-init-account-info__title">
                    {{title}}
                </div>
                <div class="mhy-init-account-info__form">
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'perfect',
  props: ['title', 'isLogo']
}
</script>

<style lang="scss" scoped>
.mhy-account-frame{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    color: #333;
    font-size: 14px;
    z-index: 999;
    overflow: auto;
}
.mhy-account-frame .mhy-account-action-sheet__content{
    position: absolute;
    padding: 0 30px 44px;
    width: 400px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
    background-color: #fff;
    border-radius: 4px;
}
.mhy-account-action-sheet__content .mhy-account-action-sheet__close{
    position: absolute;
    width: 30px;
    height: 30px;
    top: 0;
    right: -40px;
    background-color: #000;
    line-height: 30px;
    text-align: center;
    font-size: 10px;
    border-radius: 100%;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
}
.mhy-init-account-info .mhy-init-account-info__title{
    line-height: 70px;
    font-size: 16px;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 34px;
    position: relative;
}

</style>
