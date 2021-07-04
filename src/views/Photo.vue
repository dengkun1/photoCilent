<template>
    <div>
        <!-- 展示相关 -->
        <div class="container">
            <div class="photoHeader">
                <div class="imgContainer">
                    <img class="photoName" src="../assets/logo.png"/>
                </div>
                <div class="btnContainer">
                    <span class="photoTitle">相册名称</span>
                    <button class="mybtn" @click="handlerUpload">上传照片</button>
                </div>
            </div>
            <!--展示图片数据-->
            <!-- {{photos}}-->

            <div class="photoContainer">
                <template v-for="item in photos">
                    <router-link :key="item.id" :to="{name:'Detail',params:{item}}">
                        <div class="photoItem">
                            <img :src="item.imgUrl"/>
                            <span>{{item.name}}</span>
                        </div>
                    </router-link>
                </template>
            </div>
        </div>
        <!-- 上传相关 -->
        <UploadPhoto :visible.sync="showUploadPhoto" @upload-complete="complete"></UploadPhoto>
    </div>
</template>

<script>
    import {apiGetPhotos} from '../api'
    import UploadPhoto from "../components/UploadPhoto";

    export default {
        name: "Photo",
        components: {
            UploadPhoto
        },
        data() {
            return {
                photos: [],
                showUploadPhoto: false
            }
        },
        //在生命周期创建时候请求数据
        async created() {
            const {data} = await apiGetPhotos()
            this.photos = data.data.photos
            console.log("打印photo中的data", data)
            console.log("打印photo中的this.photos", this.photos)
        },
        methods: {
            handlerUpload() {
                this.showUploadPhoto = true
            },
            async complete() {
                const {data} = await apiGetPhotos()
                this.photos = data.data.photos
            }
        }
    }
</script>

<style>
    .container {
        width: 100%;
        background: rgb(224, 240, 244);
        padding: 30px;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .photoHeader {
        width: 100%;
        display: flex;
    }

    .photoName {
        width: 70px;
        height: 70px;
        margin: 0px;
    }

    .btnContainer {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        font-size: 22px;
    }

    .imgContainer {
        width: 70px;
        height: 70px;
        border: 1px solid #d9d9d9;
        overflow: hidden;
        background-color: #fff;
        padding: 3px;
        top: 0;
        left: 0;
    }

    .photoTitle {
        margin-bottom: 10px;
    }

    .mybtn {
        width: 168px;
        height: 35px;
        background: #5ccfe6;
        border: 1px solid #5ccfe6;
        color: white;
        font-size: 16px;
    }

    .photoContainer {
        margin-top: 50px;
    }

    .photoItem {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        float: left;
        margin-bottom: 30px;
    }

    .photoItem img {
        width: 164px;
        height: 123px;
        opacity: 1;
        background: rgb(222, 222, 222);
    }

    .photoItem span {
        text-align: center;
        width: 164px;
        height: 32px;
        background: rgb(244, 253, 255);
        line-height: 32px;
        float: left;
    }

    .mybtn {
        cursor: pointer;
    }

    .fileinput-button input {
        position: absolute;
        right: 0px;
        top: 0px;
        opacity: 0;
        font-size: 50px;
    }


    .uploadPhotoItem img {
        width: 164px;
        height: 123px;
        opacity: 1;
        background: rgb(222, 222, 222);
    }


    .fileinput-add input {
        position: absolute;
        right: 0px;
        top: 0px;
        opacity: 0;
        font-size: 100px;
    }


</style>