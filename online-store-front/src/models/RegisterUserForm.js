class RegisterUserForm {
  constructor(
    username ="",
    email="",
    password="",
    firstName="",
    lastName="",
    dateOfBirth="",
    address="",
    role=0,
    profilePhoto=null
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.address = address;
    this.role = role;
    this.profilePhoto = profilePhoto;
  }
}
export default RegisterUserForm;
