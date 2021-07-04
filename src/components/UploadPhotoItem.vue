<template>
    <div class="uploadPhotoItem">
                      <span class="myProgress">
                        <span class="plan"></span>
                        30%
                      </span>
        <img :src="imgUrl"/>
        <span class="pictureName">{{item.name}}</span>
    </div>
</template>

<script>
    export default {
        name: "UploadPhotoItem",
        props: ["item"],
        data() {
            return {
                imgUrl: ""
            }
        },
        //创建文件的时候 用file转为base64
        created() {
            const render = new FileReader();
            render.onload = () => {
                this.imgUrl = render.result
                // console.log(render.result)
            }
            render.readAsDataURL(this.item)
        }
    }
</script>

<style>
    .uploadPhotoItem {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        float: left;
        margin-bottom: 30px;
        position: relative;
    }

    .myProgress {
        top: 50px;
        height: 24px;
        background: rgba(0, 0, 0, 0.5);
        text-align: center;
        position: absolute;
        width: 164px;
        color: white;
    }
    .myProgress {
        display: none;
    }

    .plan {
        position: absolute;
        width: 30%;
        left: 0px;
        background: rgba(0, 255, 0, 0.5);
        height: 24px;
    }

    .pictureName {
        background: white;
        border: 1px solid rgb(225, 225, 225);
        text-align: center;
    }

</style>