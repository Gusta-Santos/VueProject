export default httpClient => ({
    getMe: async () => {
        const response = await httpClient.get('/users/me')
        console.log(response)
        return {
            data: response.data
        }
    }
})