function submitData(name, email){
fetch("http://localhost:3000/users",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
        name: name,
        email: email,
    })
  })
.then((res) => res.json())
.then((data) => data.id.append())
}


  


