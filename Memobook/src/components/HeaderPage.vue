<script setup lang="ts">
    import { ref } from 'vue'
    import IconLogo from '@/components/icons/IconLogo.vue';
    
    import { RouterLink } from 'vue-router'

    import { useRoute } from 'vue-router';

    const route = useRoute();
    const hideOnRoutes = ['']
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    import { computed } from 'vue';

    const hide = computed(() => !hideOnRoutes.some(path => route.path.startsWith(path)));

    const activeMenu = ref(false)

    function closeMenu() {
      activeMenu.value = false
}
</script>

<template>
    <div>
        <RouterLink to="/" @click="closeMenu">
            <IconLogo />
        </RouterLink>
        <p>OptiMood</p>
        <button
            class="relative z-10 flex h-3 w-6 flex-col justify-between lg:hidden *:block *:ease *:h-[2px] *:w-full *:transform *:rounded-full *:bg-black *:transition *:duration-300"
            @click="activeMenu = !activeMenu"
        >
            <span :class="{ 'translate-y-[5px] rotate-45': activeMenu }"></span>
            <span :class="{ '-translate-y-[5px] -rotate-45': activeMenu }"></span>
        </button>
        <nav
            class="invisible opacity-0 flex-1 px-6 py-12 flex justify-between mt-20 flex-col fixed z-10 inset-0 bg-indigo-50 lg:mt-0 lg:flex-row lg:static lg:bg-transparent lg:py-6 lg:visible lg:opacity-100"
            :class="{ '!visible !opacity-100': activeMenu }"
            v-scroll-lock="activeMenu"
            >
            <ul class="flex flex-col gap-4 lg:flex-row">
                <li>
                <RouterLink
                    class="block p-4 rounded-lg text-gray-500"
                    to="/properties/"
                    @click="closeMenu"
                    >VIP</RouterLink
                >
                </li>
                <li>
                <RouterLink class="block p-4 rounded-lg text-gray-500" to="/buy" @click="closeMenu"
                    >Défis</RouterLink
                >
                </li>
                <li>
                <RouterLink class="block p-4 rounded-lg text-gray-500" to="/sell" @click="closeMenu"
                    >Reminder</RouterLink
                >
                </li>
                <li>
                <RouterLink class="block p-4 rounded-lg text-gray-500" to="/manage" @click="closeMenu"
                    >Amis</RouterLink
                >
                </li>
                <li>
                <RouterLink class="block p-4 rounded-lg text-gray-500" to="/resources" @click="closeMenu"
                    >Activités</RouterLink
                >
                </li>
            </ul>
        </nav>
        <div class="flex items-center justify-center gap-4 px-4">
        <Button variant="outlined" text="Login" url="/login" />
        <Button variant="dark" text="Sign Up" url="/signup" />
      </div>
    </div>
</template>