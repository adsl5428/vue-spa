import jwt from './../../helpers/jwt'

export default {
    actions:{
        loginRequest({dispatch},formData){
            return axios.post('/api/login',formData ).then(response=>{
                jwt.setToken(response.data.token)
                // this.$store.state.AuthUser.authenticated = true;
                dispatch('setAuthUser')
            }).catch(error=>{
                console.log(error.response.data)
            })
        }
    }
}
