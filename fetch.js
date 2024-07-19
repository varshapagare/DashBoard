async function getAll()
{
    let bd =document.getElementById("showdata")
    let res = await fetch("http://localhost:3000/product")
    let res1 = await res.json()
    let data = res1.map((e)=>`
    <tr>
    <td>${e.Id}</td>
    <td>${e.name}</td>
    <td>${e.Email}</td>
    <td>${e.contact }</td>
    <td>${e.passward}</td>
    <td>${e.confirm}</td>
    <td> <button onclick="mydelete(${e.id})">Delete</button></td>
    <td> <button onclick="myedit(${e.id})">Edit</button></td>
</tr>
    
    `).join("")
    bd.innerHTML=data
}
getAll()


function add(){
    let frmdata = {
        id:document.getElementById("id").value,
        name:document.getElementById("nam").value,
        Email:document.getElementById("email").value,
        contect:document.getElementById("number").value,
        password:document.getElementById("pass").value,
        confirm:document.getElementById("cpas").value,
    }


    fetch("http://localhost:3000/product",{
        method:"POST",
    headers:{
        'Content-type':'application/json',
    },
    
    body:JSON.stringify(frmdata)
})
}


function mydelete(id){
fetch(`http://localhost:3000/product/${id}`,{
    method:"DELETE"
})
.then(res=>alert("data delete successfully"))
}

let strid =0

function myedit(id){
    strid=id
    document.getElementById('myfrm').style.display="block"
}

function editdata(){
    let myfrmdata ={
        id:document.getElementById("id").value,
        name:document.getElementById("nam").value,
        email:document.getElementById("email").value,
        contect:document.getElementById("number").value,
        password:document.getElementById("pass").value,
        confirm :document.getElementById("cpas").value,
    }
    fetch(`http://localhost:3000/product/${strid}`,
        {
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(myfrmdata)
         } )
         .then(res=>alert("edited..!!"))
}

