<script setup lang="ts">
    import IconLogo from '@/components/icons/IconLogo.vue';
    import IconInstagram from '@/components/icons/IconInstagram.vue';
    import IconFacebook from '@/components/icons/IconFacebook.vue';
    import IconTwitter from '@/components/icons/IconTwitter.vue';
    import { RouterLink } from 'vue-router' ;
</script>

<template>
    <div>
        <IconLogo />
        <div>
            <p>CONTACT</p>
            <p>A PROPOS</p>
            <p>MENTIONS LÉGALES</p>
            <p>CGV</p>
        </div>
        <div>
            <p>Nous suivre</p>
            <div>
                <IconInstagram />
                <IconFacebook />
                <IconTwitter />
            </div>
        </div>
    </div>
</template>