console.log('Работает:')
console.log('process.env.TEST_BASE_URL', process.env.TEST_BASE_URL)
console.log('process.env.VIKUNJA_TEST_LOGIN', process.env.VIKUNJA_TEST_LOGIN)
console.log('process.env.VIKUNJA_TEST_PASS', process.env.VIKUNJA_TEST_PASS)

export default {
  baseURL: process.env.TEST_BASE_URL,
  credentials: {
    username: process.env.VIKUNJA_TEST_LOGIN,
    password: process.env.VIKUNJA_TEST_PASS
  }
}
