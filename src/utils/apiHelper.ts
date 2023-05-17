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

async function post<T>(route: string, payload: T): Promise<AuthLoginResponse> {

  return new Promise(function post(resolve, reject) {
    setTimeout(() => {
      if (route === '/auth/login') {
        // Token Generator secret key: 'supersecretkey'
        resolve({
          body: {
            accessToken: 'eyJhbGciOiJIUzI1NiJ9.eyJFbWFpbCI6Im5pc2hhbnQ0MzE3QGdtYWlsLmNvbSIsIklzc3VlciI6IlRvZG9BcHAiLCJleHAiOjE3MTU5MTM5NzcsImlhdCI6MTY4NDI5MTU3N30.siJvrvinkkDm7coJVYLnVAHBiIK60V9V-La_28I8qVE'
          }
        })
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
