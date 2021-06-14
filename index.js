function handleSubmit () {
    const name = document.getElementById('name').value;
    const comments = document.getElementById('comments').value;


    
    sessionStorage.setItem("NAME", name);
    sessionStorage.setItem("COMMENT", comments);

    return;
}



window.addEventListener('load', () => {


    const name = sessionStorage.getItem('NAME');
    const comments = sessionStorage.getItem('COMMENT');
    
    document.getElementById('name').innerHTML = name;
    document.getElementById('comments').innerHTML = comments;

})

document.getElementById("result").innerHTML=localStorage.getItem("textvalue");


function passvalues()
  {
      var firstname=document.getElementById("text").value;
      localStorage.setItem("textvalue",firstname);

      var password=document.getElementById("password").value;
      localStorage.setItem("numvalue",password);


      return false;
  }

