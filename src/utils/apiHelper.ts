interface AuthLoginResponse {
  body: {
    accessToken: string
  }
}

interface AuthGetUser {
  body: {
    email: string
  }
}

interface AuthLoginPayload {
  email: string
  password: string
}

type PaylaodType = AuthLoginPayload

/* 
  Mock API utility helper to mock BE server
*/
async function post(route: string, payload: PaylaodType): Promise<AuthLoginResponse> {

  return new Promise(function post(resolve, reject) {
    setTimeout(() => {
      if (route === '/auth/login') {
        // Token Generator secret key: 'supersecretkey'
        const { email, password } = payload;

        if (email === 'testUser@gmail.com' &&  password === 'password') {
          resolve({
            body: {
              accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJFbWFpbCI6Im5pc2hhbnQ0MzE3QGdtYWlsLmNvbSIsIklzc3VlciI6IlRvZG9BcHAiLCJleHAiOjE3MTU5MTM5NzcsImlhdCI6MTY4NDI5MTU3N30.siJvrvinkkDm7coJVYLnVAHBiIK60V9V-La_28I8qVE'
            }
          })
        } else {
          reject()
        }
      }
  
      reject()
    }, 900);
  })
}

async function get<T>(route: string, payload: T): Promise<AuthGetUser> {

  return new Promise(function post(resolve, reject) {
    setTimeout(() => {
      if (route === '/auth/getUser') {
        resolve({
          body: {
            email: 'nishant4317@gmail.com'
          }
        })
      }
  
      reject()
    }, 900);
  })
}

export const apiHelper = {
  post,
  get
}
