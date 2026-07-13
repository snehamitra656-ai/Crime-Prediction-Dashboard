// ===========================================
// Crime Prediction Dashboard
// script.js (Part 1)
// ===========================================


// ------------------------------
// City → Area Data
// ------------------------------

const cityAreaData = {

    "Mumbai": [
        "Andheri",
        "Bandra",
        "Borivali",
        "Colaba",
        "Dadar",
        "Kurla",
        "Malad",
        "Powai",
        "Thane",
        "Vashi"
    ],

    "Delhi": [
        "Connaught Place",
        "Karol Bagh",
        "Rohini",
        "Dwarka",
        "Saket",
        "Lajpat Nagar",
        "Pitampura",
        "Janakpuri",
        "Vasant Kunj",
        "Chandni Chowk"
    ],

    "Kolkata": [
        "Salt Lake",
        "Park Street",
        "Howrah",
        "Dum Dum",
        "Garia",
        "Behala",
        "New Town",
        "Esplanade",
        "Ballygunge",
        "Shyambazar"
    ],

    "Chennai": [
        "Anna Nagar",
        "Adyar",
        "T Nagar",
        "Velachery",
        "Tambaram",
        "Guindy",
        "Egmore",
        "Mylapore",
        "Perambur",
        "OMR"
    ],

    "Bengaluru": [
        "Whitefield",
        "Electronic City",
        "Koramangala",
        "Indiranagar",
        "Jayanagar",
        "Hebbal",
        "Yelahanka",
        "Marathahalli",
        "Rajajinagar",
        "HSR Layout"
    ],

    "Hyderabad": [
        "Banjara Hills",
        "Jubilee Hills",
        "Madhapur",
        "Gachibowli",
        "Kukatpally",
        "Begumpet",
        "Ameerpet",
        "Secunderabad",
        "Hitech City",
        "LB Nagar"
    ],

    "Ahmedabad": [
        "Navrangpura",
        "Satellite",
        "Maninagar",
        "Paldi",
        "Vastrapur",
        "Bopal",
        "Naranpura",
        "Chandkheda",
        "Thaltej",
        "Sabarmati"
    ],

    "Pune": [
        "Shivajinagar",
        "Kothrud",
        "Hadapsar",
        "Hinjewadi",
        "Wakad",
        "Baner",
        "Kharadi",
        "Aundh",
        "Pimpri",
        "Nigdi"
    ]

};


// ------------------------------
// Dynamic Area Dropdown
// ------------------------------

const citySelect = document.getElementById("city");
const areaSelect = document.getElementById("area");

if(citySelect && areaSelect){

    citySelect.addEventListener("change", function(){

        const city = this.value;

        areaSelect.innerHTML = "";

        if(cityAreaData[city]){

            cityAreaData[city].forEach(area=>{

                const option = document.createElement("option");

                option.value = area;

                option.textContent = area;

                areaSelect.appendChild(option);

            });

        }else{

            areaSelect.innerHTML =
            "<option>Select City First</option>";

        }

    });

}



// ------------------------------
// Dark Mode
// ------------------------------

const darkMode = document.getElementById("darkMode");

if(darkMode){

    darkMode.addEventListener("change",function(){

        document.body.classList.toggle("dark-mode");

    });

}



// ------------------------------
// Risk Meter Animation
// ------------------------------

window.addEventListener("load",()=>{

    const progressBar =
    document.querySelector(".progress-bar");

    if(progressBar){

        let value = parseInt(progressBar.innerText);

        if(isNaN(value)) value = 75;

        progressBar.style.width = value + "%";

    }

});



// ------------------------------
// Page Fade Animation
// ------------------------------

document.addEventListener("DOMContentLoaded",()=>{

    document.body.style.opacity=0;

    setTimeout(()=>{

        document.body.style.transition="opacity .8s";

        document.body.style.opacity=1;

    },100);

});



// ------------------------------
// Predict Button Animation
// ------------------------------

const form=document.querySelector("form");

if(form){

form.addEventListener("submit",()=>{

const btn=document.querySelector(".predict-btn");

btn.innerHTML=
'<i class="fa-solid fa-spinner fa-spin"></i> Predicting...';

btn.disabled=true;

});

}



// ------------------------------
// Scroll To Top Button
// ------------------------------

const fab=document.querySelector(".fab");

if(fab){

fab.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}
// ===========================================
// script.js (Part 2)
// ===========================================


// ------------------------------
// Crime Bar Chart
// ------------------------------

const crimeChart = document.getElementById("crimeChart");

if (crimeChart) {

    new Chart(crimeChart, {

        type: "bar",

        data: {

            labels: [
                "Theft",
                "Assault",
                "Robbery",
                "Burglary",
                "Fraud"
            ],

            datasets: [{

                label: "Number of Crimes",

                data: [120, 85, 60, 40, 30],

                backgroundColor: [

                    "#6C63FF",
                    "#00BFFF",
                    "#00C853",
                    "#FFC107",
                    "#FF5252"

                ],

                borderRadius: 12

            }]

        },

        options: {

            responsive: true,

            plugins: {

                legend: {

                    display: false

                }

            }

        }

    });

}



// ------------------------------
// Pie Chart
// ------------------------------

const pieChart = document.getElementById("pieChart");

if (pieChart) {

    new Chart(pieChart, {

        type: "pie",

        data: {

            labels: [

                "Arrested",

                "Not Arrested"

            ],

            datasets: [{

                data: [65, 35],

                backgroundColor: [

                    "#00C853",

                    "#FF5252"

                ]

            }]

        },

        options: {

            responsive: true

        }

    });

}



// ------------------------------
// Leaflet Map
// ------------------------------

const mapDiv = document.getElementById("map");

if (mapDiv) {

    const map = L.map("map").setView([22.5726, 88.3639], 11);

    L.tileLayer(

        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",

        {

            attribution: "&copy; OpenStreetMap"

        }

    ).addTo(map);


    const marker = L.marker([22.5726, 88.3639])

        .addTo(map)

        .bindPopup("Selected Crime Area")

        .openPopup();

}



// ------------------------------
// Form Validation
// ------------------------------

const predictionForm = document.querySelector("form");

if (predictionForm) {

    predictionForm.addEventListener("submit", function (e) {

        const city = document.getElementById("city").value;

        const area = document.getElementById("area").value;

        const date = document.querySelector('input[type="date"]').value;

        const time = document.querySelector('input[type="time"]').value;

        if (

            city === "" ||

            area === "" ||

            date === "" ||

            time === ""

        ) {

            alert("Please fill in all required fields.");

            e.preventDefault();

        }

    });

}



// ------------------------------
// Live Date & Time
// ------------------------------

function updateClock() {

    const clock = document.getElementById("liveClock");

    if (!clock) return;

    const now = new Date();

    clock.innerHTML = now.toLocaleString();

}

setInterval(updateClock, 1000);

updateClock();



// ------------------------------
// Notification Bell Animation
// ------------------------------

const notification = document.querySelector(".notification");

if (notification) {

    setInterval(() => {

        notification.classList.toggle("shake");

    }, 5000);

}
// ===========================================
// Crime Prediction Dashboard
// script.js (Part 3)
// ===========================================


// ------------------------------------
// Sidebar Active Menu
// ------------------------------------

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => i.classList.remove("active"));

        item.classList.add("active");

    });

});



// ------------------------------------
// Card Hover Effect
// ------------------------------------

const cards = document.querySelectorAll(

".stat-card,.chart-box,.tip,.result-card"

);

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});



// ------------------------------------
// Smooth Scroll
// ------------------------------------

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});



// ------------------------------------
// Progress Bar Animation
// ------------------------------------

window.addEventListener("load",()=>{

const progress=document.querySelector(".progress-bar");

if(progress){

let percentage=progress.innerText.replace("%","");

if(percentage==="") percentage=75;

progress.style.width=percentage+"%";

}

});



// ------------------------------------
// Prediction History
// ------------------------------------

const historyTable=document.querySelector(".history tbody");

const predictForm=document.querySelector("form");

if(predictForm && historyTable){

predictForm.addEventListener("submit",function(){

const city=document.getElementById("city").value;

const area=document.getElementById("area").value;

const date=document.querySelector("input[type=date]").value;

const time=document.querySelector("input[type=time]").value;

setTimeout(()=>{

const row=document.createElement("tr");

row.innerHTML=`

<td>${city}</td>

<td>${area}</td>

<td>${date}</td>

<td>${time}</td>

<td>Loading...</td>

<td>Loading...</td>

<td>Loading...</td>

`;

historyTable.prepend(row);

},500);

});

}



// ------------------------------------
// Search Prediction History
// ------------------------------------

const searchInput=document.getElementById("searchHistory");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

let filter=searchInput.value.toLowerCase();

let rows=document.querySelectorAll(".history tbody tr");

rows.forEach(row=>{

row.style.display=row.innerText

.toLowerCase()

.includes(filter)

?"":"none";

});

});

}



// ------------------------------------
// Export Table
// ------------------------------------

const exportBtn=document.getElementById("exportHistory");

if(exportBtn){

exportBtn.addEventListener("click",()=>{

window.print();

});

}



// ------------------------------------
// Live Greeting
// ------------------------------------

const welcome=document.querySelector(".welcome p");

if(welcome){

let hour=new Date().getHours();

let text="";

if(hour<12){

text="Good Morning 👋";

}

else if(hour<17){

text="Good Afternoon ☀";

}

else{

text="Good Evening 🌙";

}

welcome.innerHTML=text;

}



// ------------------------------------
// Number Counter Animation
// ------------------------------------

const counters=document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

let target=parseInt(counter.innerText);

if(isNaN(target)) return;

let count=0;

let speed=Math.ceil(target/60);

const update=()=>{

count+=speed;

if(count>=target){

counter.innerText=target;

}

else{

counter.innerText=count;

requestAnimationFrame(update);

}

};

update();

});



// ------------------------------------
// Floating Button
// ------------------------------------

const fab=document.querySelector(".fab");

if(fab){

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

fab.style.display="flex";

}

else{

fab.style.display="none";

}

});

}



// ------------------------------------
// Theme Memory
// ------------------------------------

const darkToggle=document.getElementById("darkMode");

if(darkToggle){

darkToggle.addEventListener("change",()=>{

localStorage.setItem(

"theme",

darkToggle.checked?"dark":"light"

);

});

window.addEventListener("load",()=>{

const theme=localStorage.getItem("theme");

if(theme==="dark"){

document.body.classList.add("dark-mode");

darkToggle.checked=true;

}

});

}



// ------------------------------------
// Footer Year
// ------------------------------------

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=

`© ${new Date().getFullYear()} Crime Prediction Dashboard | Machine Learning Project`;

}



// ------------------------------------
// Console
// ------------------------------------

console.log(

"Crime Prediction Dashboard Loaded Successfully."

);