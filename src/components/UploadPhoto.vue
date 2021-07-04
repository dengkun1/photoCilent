<template>
    <div class="masking" v-show="visible">
        <div class="addPhotoContainer"></div>
        <div class="addController">
            <h3 class="addTitle">
                上传照片-普通上传(H5)<span class="close" @click="close">╳</span>
            </h3>
            <div class="photoTitles">
                <span class="uploadTo">上传到</span>
                <div class="photoSelect">
                    <img class="showPhoto" src="../assets/logo.png"/>
                    相册名称
                </div>
            </div>

            <!-- 上传按钮 -->
            <div class="showContainer" v-show="!showLoadContainer">
                <div class="uploadContainer">
            <span class="fileinput-button">
              <span>上传图片</span>
              <input class="imgFile" type="file" name="" multiple="multiple" @input="addImg"/>
            </span>
                    <span class="hint">按住Ctrl可多选</span>
                </div>
            </div>

            <!-- 显示待上传图片  -->
            <div class="loadContainer" v-show="showLoadContainer">
                <div class="wantUpload">
                    <template v-for="(item,index) in wantUploadPhotos">
                        <UploadPhotoItem :item="item" :key="index"></UploadPhotoItem>
                    </template>

                </div>
                <div class="addStyle">
                    <!-- <span class="fileinput-add">
                      <span></span>
                      <input class="imgFile-add" type="file" multiple="multiple" />
                    </span> -->
                </div>
                <!-- 开始上传按钮 -->
                <div class="bottomStyle">
                    <span class="uploadBtn" @click="startUpload">开始上传</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import UploadPhotoItem from "./UploadPhotoItem";
    import {apiUpload} from "../api"

    export default {
        name: "UploadPhoto",
        components: {
            UploadPhotoItem
        },
        props: ["visible"],
        data() {
            return {
                wantUploadPhotos: []
            }
        },
        computed: {
            showLoadContainer() {
                return this.wantUploadPhotos.length > 0
            }
        },
        methods: {
            close() {
                this.$emit("update:visible", false)
            },
            addImg(e) {
                this.wantUploadPhotos.push(...e.target.files)
                console.log("我的点击", e.target.files)
            },
            async startUpload() {
                //of 是数组    in是对象
                for (let photo of this.wantUploadPhotos) {
                    console.log("photo", photo)
                    await apiUpload(photo)
                }
                console.log("上传成功")
                this.rest()
                this.uploadComplete()
            },
            rest(){
                this.wantUploadPhotos = [];
            },
            uploadComplete(){
                this.$emit("upload-complete")
            }

        }
    }
</script>

<style scoped>
    .addPhotoContainer {
        position: fixed;
        top: 0px;
        left: 0px;
        background: rgb(0, 0, 0);
        opacity: 0.2;
        width: 100%;
        height: 100vh;
    }

    .addController {
        width: 80%;
        height: 650px;
        background: white;
        opacity: 1;
        position: absolute;
        left: 10%;
        top: 60px;
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 5px #535658;
    }

    .addTitle {
        font-size: 12px;
        line-height: 31px;
        margin: 0px;
        background: #f3f3f3;
        border: 1px solid #f3f3f3;
        padding-left: 20px;
        border-bottom: 1px solid #e5e5e5;
    }

    .close {
        float: right;
        margin-right: 20px;
        font-size: 10px;
        cursor: pointer;
    }

    .photoTitles {
        width: 100%;
        height: 58px;
        background: #f5f4f5;
        display: flex;
    }

    .uploadTo {
        font-size: 12px;
        line-height: 40px;
        margin-right: 10px;
        padding-left: 20px;
        margin-top: 8px;
    }

    .photoSelect {
        width: 210px;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        /* text-align: center; */
        border: 1px solid #e0e0e0;
        border-radius: 4px;
        background: white;
        margin-top: 8px;
    }

    .showPhoto {
        width: 40px;
        height: 40px;
        display: block;
        float: left;
        margin-right: 10px;
        margin-left: 5px;
    }

    .uploadContainer {
        margin-top: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .fileinput-button {
        position: relative;
        display: inline-block;
        overflow: hidden;
        background: #5caae6;
        border-radius: 3px;
        padding: 0 30px;
        color: white;
        width: 210px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
    }

    .fileinput-button:hover {
        background: #3092f5;
    }

    .hint {
        margin-top: 10px;
        color: #999;
        font-size: 14px;
    }

    .masking {
        /*display: none;*/
    }

    .wantUpload {
        margin-left: 10px;
        margin-top: 10px;
        position: relative;
    }

    .bottomStyle {
        height: 64px;
        width: 100%;
        background: #f3f3f3;
        position: absolute;
        bottom: 20px;
        cursor: pointer;
    }

    .uploadBtn:hover {
        background: #3092f5;
    }

    .uploadBtn {
        width: 150px;
        height: 40px;
        background: #5caae6;
        border-color: #4798d6;
        display: block;
        border-radius: 2px;
        margin-left: 10px;
        margin-top: 10px;
        text-align: center;
        line-height: 40px;
        color: white;
        font-size: 18px;
    }

    .loadContainer {
        /*display: none;*/
    }

    .fileinput-add {
        position: relative;
        display: inline-block;
        overflow: hidden;
        background: url("../../server/static/img/add.png");
        background-position: 0 0;
        border-radius: 3px;
        padding: 0 30px;
        width: 92px;
        height: 148px;
        line-height: 50px;
        font-size: 18px;
    }

    .changeBtn {
        border: 1px solid #dfdfdf;
        width: 150px;
        height: 40px;
        display: block;
        border-radius: 2px;
        margin-left: 10px;
        margin-top: 10px;
        text-align: center;
        line-height: 40px;
        font-size: 18px;
    }
</style>