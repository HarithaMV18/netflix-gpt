const formValidate=(email,password,name)=>{
const emailValidate=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
const passwordValidate=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
const nameValidate=/^[a-zA-Z]+\s*[a-zA-Z]*$/.test(name)

const emailStatus= (!emailValidate) ? "Email is not invalid":null
const passwordStatus= (!passwordValidate) ? "Invalid Password ":null
const nameStatus=(!nameValidate) ? "Not a valid name":null

return {emailStatus,passwordStatus,nameStatus}
}
export default formValidate;