<template>
    <div class="container">
        <div class="item">
            <v-btn text href="https://www.linkedin.com/feed/">
                linkedin
            </v-btn>
            <v-btn text href="https://github.com/chris2934">
                github
            </v-btn>
            <v-btn text href="mailto:swiggs29@gmail.com">
                email
            </v-btn>
            <v-btn text>
                musings
            </v-btn>
        </div>
        <div>
            <MainImage />
        </div>
    </div>
</template>
<script>
import MainImage from '@/components/MainSite/MainImage'

export default {
    name: 'Links',
    components: {
        MainImage
    }
    
}
</script>
<style scoped>
.container {
	height: 80vh; 
	display: flex; 
	align-items: center; 
	justify-content: center;
}
.item {
    display: flex
}
</style>