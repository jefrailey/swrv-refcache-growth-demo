<template>
    <div class="about">
        <h1>This is a page about states</h1>
        <div style="column-count: 2">
            <p v-for="state in states" :key="state.name">
                {{ state.name }} ({{ state.abbreviation }})
            </p>
        </div>
    </div>
</template>

<script>
// @ts-check
import { defineComponent } from "@vue/composition-api";
import useStates from "@/use/states.js";

export default defineComponent({
    setup() {
        const { data: states } = useStates();
        return {
            states,
        };
    },
});
</script>
