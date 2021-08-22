<template>
  <div class="container mx-auto">
    <reader />
  </div>
</template>

<script>
export default {
  layout: 'reader',
  async asyncData ({ $content, params }) {
    // blog list
    const posts = await $content('posts')
      .limit(4)
      .sortBy('date', 'asc')
      .fetch()

    return {
      posts
    }
  }
}
</script>

<style>
.boc{
  /*background: rgba(var(--b3));*/
  content: var(--b3)
}
</style>
