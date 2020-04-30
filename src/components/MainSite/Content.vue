<template>
    <div class="card">
        <div class="card-content">
            <div class="title">
                <h1>Chris Higginbotham</h1>
            </div>
            <div class="subtitle">
                <h2>Software Engineer</h2>
            </div>
            <div class="link-content">
                <div class="link">
                    <v-btn text href="https://github.com/chris2934">
                        github
                    </v-btn>
                </div>
                <div class="link">
                    <v-btn text href="https://www.linkedin.com/in/chris-higginbotham">
                        linkedin
                    </v-btn>
                </div>
                <div class="link">
                    <v-btn text href="mailto:swigg29@gmail.com">
                        email
                    </v-btn>
                </div>
            </div>
            <div class="about">
            <p>Im currently a Senior Software Engineer for GE Aviation <br/> creating front end solutions in Vuejs.</p>
            </div>
        </div>
        <div id ="me">
            <MainImage />
        </div>
    </div>
</template>
<script>
import MainImage from '@/components/MainSite/MainImage'

export default {
    name: 'Links',
    components: {
        MainImage,
    }
}
</script>
<style scoped>
.card {
	height: 80vh; 
	display: flex;
	align-items: center; 
	justify-content: center;
}
.card-content {
    display:inline-flex;
    flex-flow: column;
    align-items: center;
}
.link-content {
    display:inline-flex;
    align-items: center;
}
#me {
    margin-left: 25px
}
.subtitle {
    color: black
}
.content {
    display: flex
}
.about {
    margin-top: 15px;
    text-align: center;
}
</style>