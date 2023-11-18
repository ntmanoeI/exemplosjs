new Vue({
    el: '#usuarios',
    data: {
        users: []
    },
    mounted() {
        this.loadUsers();
    },
    methods: {
        async loadUsers() {
            try {
                const response = await axios.get('https://reqres.in/api/users?per_page=10');
                // Ajuste para pegar apenas os 3 primeiros objetos
                this.users = response.data.data.slice(0, 3);
            } catch (error) {
                console.error('Erro ao carregar usuários:', error);
            }
        }
    }
});
