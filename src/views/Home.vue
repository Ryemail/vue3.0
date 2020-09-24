<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        {{ title }}
        <HelloWorld :msg="msg" />
        <router-link to="/about">sdsd</router-link>
        <div @click="toClick">About</div>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { provide, reactive } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
    setup(props, ctx) {
        console.log(props, ctx, 'home');

        const stata = reactive({
            name: '千江有水千江月',
        });

        const router = useRouter();

        provide('name', stata);

        function toClick() {
            // console.log(router.push);
            router.push('/about');
        }

        return {
            title: '7777',
            msg: 'Welcome to Your Vue.js App',
            toClick,
        };
    },
};
</script>
