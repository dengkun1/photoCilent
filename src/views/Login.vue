<template>
    <div>
        <div class="loginContainer">
            <h1>登录</h1>
            <div>
                姓名：
                <input
                        class="inputStyle"
                        id="username"
                        type="text"
                        name="username"
                        v-model="username"
                /><br/>密码：
                <input
                        class="inputStyle"
                        id="password"
                        type="password"
                        name="pwd"
                        v-model="password"
                /><br/>
                <button class="loginStyle" id="loginBtn" @click="login">登录</button>
            </div>
        </div>
    </div>
</template>

<script>
    // import {apiLogin} from '../api'
    export default {
        name: "Login",
        data() {
            return {
                username: "",
                password: ""
            }

        },
        methods: {
            async login() {
                // console.log(data);
                // if (data.state === 0) {
                //     alert("登录失败")
                //     return ;
                // }

                //变换调用，请求转发
             await this.$store.dispatch("login", {
                    username: this.username,
                    password: this.password
                })
                this.$router.push({
                    name: "Photo"
                })
            },
        }
    }
</script>
<style scoped>
    .loginContainer {
        margin: 0 auto;
        width: 600px;
        text-align: center;
        padding-top: 20px;
        padding-bottom: 50px;
        border: 1px solid;
    }

    .loginContainer input {
        margin-bottom: 20px;
    }

    .loginStyle {
        width: 160px;
        height: 40px;
        background: rgb(50, 203, 77);
        color: white;
        font-size: 17px;
    }

    .inputStyle {
        width: 200px;
        height: 30px;
        padding: 5px;
        outline: none;
    }

    .inputStyle:focus {
        border: 1px solid rgb(50, 203, 77);
    }

    form {
        position: relative;
    }

    .exchange {
        position: absolute;
        top: 8px;
        right: 65px;
        color: red;
    }
</style>