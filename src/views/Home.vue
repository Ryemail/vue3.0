<template>
    <div class="home">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        {{ title }}
        <HelloWorld :msg="msg" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import { provide, reactive } from 'vue';

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

        provide('name', stata);

        return {
            title: '7777',
            msg: 'Welcome to Your Vue.js App',
        };
    },
};
</script>
