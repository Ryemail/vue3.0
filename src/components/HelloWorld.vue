<template>
    <fragments>
        <div>Fragments</div>
        <div class="hello">
            <h1>{{ helo }}</h1>
            <h1>{{ count }}</h1>
            <span>plusOne is {{ plusOne }}</span>
            <button @click="increment">count++</button>
            <input type="text" v-model="name" />
            {{ name }}
            <h1>{{ x }}---{{ y }}</h1>
            <ul>
                <li>
                    <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel">
                        babel
                    </a>
                </li>
                <li>
                    <a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router">
                        router
                    </a>
                </li>
            </ul>
            <!-- Fragments -->
        </div>
    </fragments>
</template>

<script>
import { computed, inject, onMounted, onUnmounted, reactive, ref, toRefs, watch } from 'vue';

function useMouse() {
    const x = ref(0);
    const y = ref(0);
    const update = e => {
        x.value = e.pageX;
        y.value = e.pageY;
    };
    onMounted(() => {
        window.addEventListener('mousemove', update);
    });
    onUnmounted(() => {
        window.removeEventListener('mousemove', update);
    });
    return { x, y };
}
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    setup(props, cxt) {
        const inj = inject('name');
        console.log(props.msg, cxt, inj);

        const { x, y } = useMouse();

        const count = ref(0);

        const plusOne = computed(() => count.value + 1);

        let state = reactive({
            name: '阮垚',
            age: 23,
        });
        state = toRefs(state);
        // console.log(state, state.name.value, state.age.value, 'reactive');

        const increment = () => {
            count.value++;
        };
        watch(
            () => count.value * 2,
            val => {
                console.log(val);
                // count.value = val;
            }
        );

        return {
            helo: props.msg,
            count,
            plusOne,
            increment,
            ...state,
            x,
            y,
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
