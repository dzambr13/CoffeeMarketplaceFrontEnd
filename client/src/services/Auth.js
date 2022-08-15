import Client from './api'

export const SignInUser = async (data) => {
  try{
    console.log("DATA = ",data)
    const res = await Client.post('auth/login', data)
    console.log("RES",res)
    localStorage.setItem('token',res.data.token)
    return res.data.roaster
  }catch(error){throw error}
}

export const RegisterUser = async (data) => {
  try{
    const res=await Client.post('auth/register',data)
    return res.data
  }catch(error){throw error}
}

export const CheckSession = async () => {
  try{
    const res=await Client.get('auth/session')
    return res.data
  }catch(error){throw error}
}
