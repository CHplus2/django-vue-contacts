<script setup>
    import { ref, onMounted } from "vue";
    import axios from "axios";
    
    // reactive state
    const contacts = ref([]);
    const formData = ref({
        name: "",
        email: "",
        message: ""
    });

    async function loadContacts() {
        try {
            const res = await axios.get("/api/contacts/");
            contacts.value = res.data;
        } catch (err) {
            console.error(err);
        }
    }

    onMounted(() => {
        loadContacts();
    });

    async function handleSubmit() {
        try {
            await axios.post("/api/contacts/", formData.value);
            formData.value = {name: "", email: "", message: ""};
            loadContacts();
        } catch (err) {
            console.error(err);
        }
    }
</script>

<template>
    <div style="max-width:500px; margin:0 auto;">
        <h2>Contact Form</h2>
        <form @submit.prevent="handleSubmit">
            <input v-model="formData.name" placeholder="Name" required /><br /><br />
            <input v-model="formData.email" type="email" placeholder="Email" required /><br /><br />
            <textarea v-model="formData.message" placeholder="Message" required></textarea>
            <button type="submit">Submit</button>
        </form>

        <h2>Saved Contacts</h2>
        <ul>
            <li v-for="c in contacts" :key="c.id">
                {{ c.name }} ({{ c.email }}): {{ c.message }}
            </li>
        </ul>
    </div>
</template>