    const head = document.getElementById('head');
    const btn = document.getElementById('btn');

   function addtoCart(){
     fetch(`https://randomuser.me/api/`)
    .then(raw=>raw.json())
    .then(res=>{
        console.log(res.results[0])
        let {picture,name,email,gender,location} = res.results[0]

        res.results.map(item=>{

            head.innerHTML += `<div class="border gap-5 rounded-xl bg-zinc-500 p-8 mt-5 w-1/5 ">
             <img class="rounded-full mx-auto w-20 h-20" src=${item.picture.large}>
                        <h1>Name: ${item.name.first}</h1>
                        <h1 class="opacity-70 w-full">Email: ${item.email}</h1>
                        <h1 class="opacity-60">Gender: ${item.gender}</h1>
                        <h1 class="opacity-50">City: ${item.location.city}</h1>
                        <h1 class="opacity-40">State: ${item.location.state}</h1>
                        <button onclick="this.parentElement.remove()" class="px-5 py-2 mt-3 bg-green-300 hover:bg-green-800 cursor-pointer rounded-xl flex justify-center items-center">Remove</button>
                        </div>`
        })
    })
}
btn.addEventListener('click',()=>{
    addtoCart()
})
