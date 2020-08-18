import Server from '@/serverConnection/main'

export default {
  login () {
    console.log('Login')
    return Server().get('/auth/google')
  }
}
