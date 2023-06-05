import axiosInstance from "./AxiosProvider"


async function LoginUser(email, password){

    try{
        const response = await axiosInstance.post('login',{email: email, password: password});
        if(response.status === 200){          
            const data = response.data
            localStorage.setItem('token',data.jwtToken)
            return true;
        }
    }
    catch(error){
        alert(error.response.data)
        return false;
    }
};
async function RegisterUser(user){
    
    try{
        const response = await axiosInstance.post('register',user);
          if(response.status === 200){          
            return true;
        }
    }catch(error){
        alert(error.response.data)
        return false;
    }

};
export {LoginUser, RegisterUser};