<template>
    <div>
        <h1>Hello everyone</h1>
        <p>Hi, {{friend}}</p>
        <p v-if="err">{{err}}</p>
    </div>
</template>

<script>
    export default {
        props: {
            friend: {
                type: String,
                default: ""
            },
        },
        computed: {
            err() {
                return this.friend.trim().length < 1
                    ? "Opppps, there are no friends!!!"
                    : "";
            }
        },
    }
</script>

<style scoped>

</style>