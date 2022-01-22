let leads = []
const inputBtn = document.getElementById("input-btn")
const inputFeild = document.getElementById("input")
const displayleads = document.getElementById("displayLeads")

inputBtn.addEventListener("click", function () {
    // console.log("why")
    leads.push(inputFeild.value)
    renderLeads()
    inputFeild.value = ""
})

function renderLeads() {
    leads.forEach(element => {
        displayleads.innerHTML += `<li>
                                        <a target='_blank' href='${leads}'>
                                        ${leads}</a>
                                    </li>`
    });
}
