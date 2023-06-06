class User{
    constructor(
      userName ="",
      email="",
      password="",
      firstName="",
      lastName="",
      birthDay="",
      address="",
      role=0,
      profilePhotoPath=null
    ) {
      this.userName = userName;
      this.email = email;
      this.password = password;
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthDay = birthDay;
      this.address = address;
      this.role = role;
      this.profilePhotoPath = profilePhotoPath;
    }
  }
  export default User;