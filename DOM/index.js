
  const signup = () => {
  const signupName = document.querySelector('.signupName').value;
  const signupEmail = document.querySelector('.signupEmail').value;
  const signupPassword = document.querySelector('.signupPassword').value;
  const signupDiv = document.querySelector('.signupDiv').value;

  const data = {
    name: signupName,
    email: signupEmail,
    password: signupPassword
  }

  console.log(data);

  localStorage.setItem('createData',JSON.stringify(data));

  if(signupName){
    document.querySelector('.nameSign').textContent = 'input field is full filled';
    document.querySelector('.nameSign').style.color = 'green'; 
  }else{
    document.querySelector('.nameSign').textContent = 'please fill the input field';
    document.querySelector('.nameSign').style.color = 'red';
  }


  if(signupEmail){
    document.querySelector('.emailSign').textContent = 'input field is full filled';
    document.querySelector('.emailSign').style.color = 'green';
  }else{
    document.querySelector('.emailSign').textContent = 'please fill the input field';
    document.querySelector('.emailSign').style.color = 'red';
  }



  if(signupPassword){
    document.querySelector('.passwordSign').textContent = 'input field is full filled';
    document.querySelector('.passwordSign').style.color = 'green';
  }else{
    document.querySelector('.passwordSign').textContent = 'please fill the input field';
    document.querySelector('.passwordSign').style.color = 'red';
  }


  if(signupDiv || signupName && signupEmail && signupPassword){
    document.querySelector('.signupDiv').textContent = 'SignUp Successfully!!';
    document.querySelector('.signupDiv').style.color = 'green';
  }else{
    document.querySelector('.signupDiv').textContent = 'please fill the all inputs';
    document.querySelector('.signupDiv').style.color = 'red'
  }

  }


  const login = () => {
    
  const loginEmail = document.querySelector('.loginEmail').value;
  const loginPassword = document.querySelector('.loginPassword').value;

  const data = {
    email: loginEmail,
    password: loginPassword
  }
  console.log(data);

  const userData = JSON.parse(localStorage.getItem('createData'));

  if(loginEmail){
    document.querySelector('.emailLogin').textContent = 'input field is full field';
    document.querySelector('.emailLogin').style.color = 'green'
  }else{
    document.querySelector('.emailLogin').textContent = 'please fill the email field';
    document.querySelector('.emailLogin').style.color = 'red';
  }


  if(loginPassword){
    document.querySelector('.passwordLogin').textContent = 'input field is full field';
    document.querySelector('.passwordLogin').style.color = 'green';
  }else{
    document.querySelector('.passwordLogin').textContent = 'please fill the input field';
    document.querySelector('.passwordLogin').style.color = 'red'
  }

  if(userData && userData.email === loginEmail && userData.password === loginPassword){
    document.querySelector('.loginDiv').textContent = 'login successfully!!';
    document.querySelector('.loginDiv').style.color = 'green';
  }else{
    document.querySelector('.loginDiv').textContent = 'please signup first';
    document.querySelector('.loginDiv').style.color = 'red'
  }

  }


const logout = () => {
  const data = localStorage.getItem('createData');

  localStorage.clear();


  if(data){
    document.querySelector('.dataLogout').textContent = 'logout Successfully';
    document.querySelector('.dataLogout').style.color = 'green';
  }else{
    document.querySelector('.dataLogout').textContent = 'please login first';
    document.querySelector('.dataLogout').style.color = 'red'
  }
}


