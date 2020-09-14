<template>
    <div class="hello">
        <h1>{{ helo }}</h1>
        <h1>{{ count }}</h1>
        <span>plusOne is {{ plusOne }}</span>
        <ul>
            <li>
                <a
                    href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                    target="_blank"
                    rel="noopener"
                    >babel</a
                >
            </li>
            <li>
                <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router">
                    router
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { computed, ref } from 'vue';
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    setup(props, cxt) {
        console.log(props.msg, cxt);

        const count = ref(0);

        console.log(count);

        const plusOne = computed(() => count.value + 1);

        const increment = () => {
            count.value++;
        };

        return {
            helo: props.msg,
            count,
            plusOne,
            increment,
        };
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
