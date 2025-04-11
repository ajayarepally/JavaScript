// Random Colors
let clr=document.getElementById("clr")

clr.addEventListener("click",()=>{
    let hexadetails="abcdef1234567890"
    let hexa="#"
    for(i=0;i<6;i++){
        let change=Math.floor(Math.random() * hexadetails.length)
        hexa+=hexadetails[change]
    }
    document.body.style.backgroundColor=hexa
})


// Random OTP
let otp=document.getElementById("otp")
otp.addEventListener("click",()=>{
    generatedOTP=""
    for(i=0;i<4;i++){
        let a=Math.floor(Math.random() * 10)
        generatedOTP += a
    }
    document.getElementById("span").innerText=generatedOTP
})


// Random Images
let image=document.getElementById("img")
let puppyimg=document.getElementById("puppyimg")
const puppy = ["https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1014940472-scaled.jpg",
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVwcHl8ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/2095115871/photo/profile-of-cunning-dog-playfully-looking-to-side-spying-watching-tricky-glance.webp?a=1&b=1&s=612x612&w=0&k=20&c=inL5TmzAXD3l84-XjaU_BxrgpMkfCdTnwu8G9afopTM=",
    "https://media.istockphoto.com/id/2151356648/photo/playing-fetch-with-soft-disc.webp?a=1&b=1&s=612x612&w=0&k=20&c=p-Vw8WLE9lQhslO8i6GTZoJenj83j5OOPdEEWAg8_4Y=",
    "https://wallpapercg.com/media/ts_orig/17410.webp",
    "https://c4.wallpaperflare.com/wallpaper/867/677/169/dogs-golden-retriever-animal-cute-wallpaper-preview.jpg",
    "https://media.istockphoto.com/id/1503385646/photo/portrait-funny-and-happy-shiba-inu-puppy-dog-peeking-out-from-behind-a-blue-banner-isolated.jpg?s=612x612&w=0&k=20&c=xZq8PhunL9ZmY243et3GOf04wJPBmHzeiQ3jw7nWCrY=",
    "https://www.vetstreet.com/wp-content/uploads/2024/05/shutterstock_2010277379.jpg",
    "https://wallpapers.com/images/hd/adorable-puppy-pictures-1200-x-1674-hjuvzpx69vvvlmtl.jpg"]

image.addEventListener("click",()=>{
    puppyimg.innerHTML=""
    let add=Math.floor(Math.random() * puppy.length)
    let imgTag=document.createElement("img")
    imgTag.setAttribute("src",puppy[add])
    puppyimg.append(imgTag)
})