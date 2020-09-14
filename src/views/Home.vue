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

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
    setup() {
        return {
            title: '7777',
            msg: 'Welcome to Your Vue.js App',
        };
    },
};
</script>
