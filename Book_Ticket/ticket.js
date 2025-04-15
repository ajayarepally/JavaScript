const btn=document.getElementById("btn")



btn.addEventListener("click",()=>{
    window.alert("⚠️Please!! complete booking ur tickets within 5 mins")

    const theatre = ["AMB Mall" , "AA Mall" , "Nexus Mall" , "Lulu Mall" , "Inorbit Mall" , "PVR Inox" , "Cinepolis" , "Asian Cinemas"];

    let theatreList = "Choose a Theatre 🎬 : \n"
    theatre.forEach((t,i)=>{
        theatreList += `${i+1} . ${t} \n`
    });

    const theatrechoice=prompt(theatreList);
    const a=theatre[theatrechoice - 1]

    if(!a){
        alert("❌Invalid Choice. Booking Cancelled!!");
        return;
    }

    const movie = prompt("🎥 Enter the Movie Name : ").toUpperCase();
    if(!movie) return alert("❌ Movie name is required. Booking cancelled!!");

    const row = prompt("🔠 Choose a row(A-E) : ").toUpperCase();
    if (!["A","B","C","D","E"].includes(row)){
        return alert("❌ Invalid row. Booking cancelled!!");
    }

    const seat = prompt("💺 Enter seat number (1-10) : ");
    if(!["1","2","3","4","5","6","7","8","9","10"].includes(seat)) return alert("❌ Seats required. Booking cancelled!!");

    const confirmPayment = confirm(`Confirm booking for :\n 🎬Movie : ${movie} \n Row : ${row} \n Seat : ${seat} \n Total : ₹300`);
    if(!confirmPayment) return alert("❌ Payment cancelled!!");

    alert("✅Payment Successful!!. Generating 🎫Ticket...");


    const Ticket = window.open("","_blank");
    Ticket.document.write(`
        <h1>🎟️ Movie Ticket</h1><hr> <br>
        <p><strong>🎬 Movie : </strong> ${movie} </p>
        <p><strong>🎥Theatre : </strong> ${a} </p>
        <p><strong>Row : </strong> ${row} </p>
        <p><strong>💺Seat : </strong> ${seat} </p>
        <p><strong>Total 💵 Payment : </strong> ₹300 </p>
        <p><strong>Status : </strong>Confirmed✅</p>
        <button onclick="window.print()"> 🖨️Print Ticket🎫</button>
    `);
})