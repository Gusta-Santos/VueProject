<template>
    <CustomHeader
        @create-account="handleAccountCreate"
        @login="handleLogin"
    />
    <contact/>
    <div class="flex justify-center py-10 bg-brand-gray">
        <p class="font-medium text-center text-gray-800">feedbacker ©2021</p>
    </div>
</template>

<script setup>
    import { onMounted } from 'vue'
    import { useRouter } from 'vue-router'
    import CustomHeader from './CustomHeader.vue'
    import contact from './Contact.vue'
    import useModal from '../../hooks/useModal'

    const router =  useRouter()
    const modal = useModal()

    onMounted(() => {
        const token = window.localStorage.getItem('token')
        if (token) {
            router.push({ name: 'Credencials'})
        }
    })

    function handleLogin () {
        modal.open({
            component: 'ModalLogin'
        })
    }
    function handleAccountCreate () {
        modal.open({
            component: 'ModalAccountCreate'
        })
    }

</script>