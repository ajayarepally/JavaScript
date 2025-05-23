let developersBtn=document.getElementById("devsBtn")
let developerstypeContainer=document.getElementById("developerstypeContainer")

developerstypeContainer.style.marginTop="2rem"

developersBtn.addEventListener("click",async()=>{
    developerstypeContainer.innerHTML=`
    <div id="allspan">
    <span class="devtypeBtn">frontendDevs</span>
    <span class="devtypeBtn">backendDevs</span>
    <span class="devtypeBtn">sqlDevs</span>
    <span class="devtypeBtn">fullstackDevs</span>
    </div>
    `

const res = await fetch("http://localhost:5000/developers")
const data = await res.json()
console.log(data)

const SpecificBtn=developerstypeContainer.querySelectorAll(".devtypeBtn")
console.log(SpecificBtn)

let categorywisedisplay = document.createElement("div")
categorywisedisplay.className="catdisplay"

SpecificBtn.forEach((btn)=>{
    console.log("btn",btn)
    btn.addEventListener("click",()=>{
        categorywisedisplay.innerHTML=""
        const btntxt = btn.innerHTML.slice(0,-1)
        console.log(btntxt)
        const filterdata = data[btntxt]
        console.log(filterdata)


        filterdata.forEach((developer)=>{
            let devcard=document.createElement("div")
            devcard.className="devcard"
            devcard.innerHTML=`
            <div class="cardspan"><h1>${developer.name}</h1><span><i class="fa-solid fa-trash"></i></span></div>
            <p style="font-weight:bold;">${developer.role}</p>
            <p>${developer.email}</p>
            <p>${developer.skills}</p>
            `
            categorywisedisplay.append(devcard)
        })
        document.body.append(categorywisedisplay)
    })
})
})
