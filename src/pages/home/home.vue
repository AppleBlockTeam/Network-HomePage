<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import peeringcard from './peering.vue'
import informationcard from './information.vue'
import featureCard from './featureCard.vue'

defineOptions({
    name: 'HomePage'
})

const theme = useTheme()

// 定义各种卡片的内容数据
const featureCards = [
    {
        title: 'Research & Education',
        icon: 'mdi-school',
        content:
            'Experimental network specifically for research and educational institutions, promoting academic exchange and technological innovation'
    },
    {
        title: 'IPv6 Only',
        icon: 'mdi-network-outline',
        content:
            "Focused on IPv6 technology, no IPv4 connectivity provided, actively embracing next-generation internet protocols (definitely not because we're poor)"
    },
    {
        title: 'Open Peering',
        icon: 'mdi-vector-link',
        content:
            'Welcome peering with other research and education networks and academic institutions'
    },
    {
        title: 'Professional Operations',
        icon: 'mdi-certificate',
        content:
            'AppleBlock Team provides technical support, committed to delivering stable service for research and education'
    }
]
</script>

<template>
    <v-container fluid>
        <v-row justify="center" class="header-section pa-4">
            <v-col cols="12" md="10" lg="9" xl="8" class="text-center">
                <div class="d-flex justify-center mb-4">
                    <h1 class="text-h2 font-weight-bold mb-4">AppleBlock Network</h1>
                </div>
                <h2 class="text-h5 text-grey-darken-1 mb-4">AS210176</h2>
                <div class="text-subtitle-1 text-medium-emphasis mt-4">
                    Research & Education Network
                </div>
                <div class="text-caption text-medium-emphasis mt-2 mb-4">
                    Operated by AppleBlock Team
                </div>
            </v-col>
        </v-row>

        <v-row justify="center" class="my-6">
            <v-col cols="12" md="10" lg="8">
                <v-card elevation="1" class="pa-4 rounded-lg">
                    <v-card-title> Network Introduction </v-card-title>
                    <v-card-text class="text-body-1">
                        <p>
                            AppleBlock Network (AS210176) is a research and education network
                            focused on IPv6 technology learning and research. Operated by
                            AppleBlock Team, we are dedicated to exploring the
                            application and development of next-generation Internet
                            protocol technologies.
                        </p>
                        <p class="mt-4">
                            This network
                            <span class="text-primary font-weight-bold"
                                >supports IPv6 only</span
                            >, providing professional technical support and services. We
                            welcome peering with other education and research networks to
                            promote academic exchange and technological innovation.
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row justify="center" class="my-6">
            <v-col cols="12" md="10" lg="8" class="mb-2 text-center">
                <h2 class="text-h4 font-weight-medium primary--text">
                    <v-icon large color="primary" class="mr-2">mdi-star</v-icon>
                    Network Features
                </h2>
            </v-col>
        </v-row>

        <v-row justify="center">
            <v-col cols="12" md="10" lg="8">
                <v-row>
                    <v-col
                        v-for="(card, index) in featureCards"
                        :key="index"
                        cols="12"
                        sm="6"
                    >
                        <featureCard
                            :title="card.title"
                            :icon="card.icon"
                            :content="card.content"
                        />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-spacer />
        <v-row justify="center" class="my-6">
            <v-col cols="12" md="10" lg="8">
                <v-row>
                    <v-col cols="12" md="6">
                        <informationcard />
                    </v-col>
                    <v-col cols="12" md="6">
                        <peeringcard />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row justify="center" class="my-6">
            <v-col cols="12" md="10" lg="8">
                <v-card color="primary" class="text-center py-4 px-2 rounded-lg">
                    <v-card-title class="text-h4 text-white">Contact Us</v-card-title>
                    <v-card-text>
                        <v-row justify="center" class="mt-2">
                            <v-col cols="12" sm="6" class="d-flex justify-center">
                                <v-btn 
                                    variant="tonal" 
                                    color="white" 
                                    class="px-4"
                                    href="mailto:team@abnet.work"
                                >
                                    <v-icon start>mdi-email</v-icon>
                                    team@abnet.work
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="text-white text-body-1">
                        <p>
                            If you have any questions or need more information about
                            AppleBlock Network, please feel free to contact us
                        </p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-footer class="text-center d-block py-4">
            <div class="text-subtitle-2 text-medium-emphasis">
                © {{ new Date().getFullYear() }} AppleBlock Network AS210176
            </div>
            <div class="text-caption text-medium-emphasis mt-1">
                AppleBlock Network | Research & Education Network | Operated by AppleBlock Team
            </div>
        </v-footer>
    </v-container>
</template>

<style scoped>
.header-section {
    margin-top: 180px;
    margin-bottom: 70px;
    padding-top: 40px;
    padding-bottom: 40px;
}

.logo-image {
    width: 550px;  
    height: auto;
}

@media (min-width: 960px) {
    .logo-image {
        max-width: 110%;
    }
}

@media (min-width: 1200px) {
    .logo-image {
        max-width: 130%;
    }
}
</style>
