<<<<<<< HEAD
async function submitRequest(){

const name=document.getElementById("name").value
const location=document.getElementById("location").value
const message=document.getElementById("message").value

await fetch("http://127.0.0.1:5000/submit",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name:name,
location:location,
message:message
})
})

alert("Request Sent Successfully")

loadRequests()
}

async function loadRequests(){

const res=await fetch("http://127.0.0.1:5000/requests")
const data=await res.json()

const list=document.getElementById("requests")
list.innerHTML=""

data.forEach(req=>{
const li=document.createElement("li")
li.textContent=req.name+" - "+req.location+" - "+req.message
list.appendChild(li)
})

}

loadRequests()
=======
body{
font-family: Arial;
text-align:center;
background:#f5f5f5;
}

input, textarea{
width:300px;
padding:10px;
margin:10px;
}

button{
background:red;
color:white;
padding:10px 20px;
border:none;
}
>>>>>>> 22bcf6c517bfdf745ad6dea879afcad1a9214dab
