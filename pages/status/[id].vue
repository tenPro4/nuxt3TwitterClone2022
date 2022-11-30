<template>
    <div>
        <MainSection title="Tweet" :loading="loading">

            <Head>
                <Title></Title>
            </Head>


            <TweetDetails :user="user" :tweet="tweet" />

        </MainSection>
    </div>
</template>
<script setup>

const loading = ref(false)
const tweet = ref(null)
const { getTweetById } = useTweets()
const { useAuthUser } = useAuth()
const user = useAuthUser()


watch(() => useRoute().fullPath, () => getTweet())

async function getTweet() {
    loading.value = true
    try {
        console.log('ssas',useRoute().params.id)
        const response = await getTweetById(useRoute().params.id)
        tweet.value = response.tweet
    } catch (error) {
        console.log(error);
    } finally {
        loading.value = false
    }
}

onMounted(() => {
  console.log("companyId.value : " , useRoute().params.id);
})

onBeforeMount(() => {
    getTweet()
})

</script>