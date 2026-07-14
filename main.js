const inp = document.querySelector("#inp")
const btn = document.querySelector("#btn")
const tsk = document.querySelector(".jstsk")
let Pent = document.querySelector("#pent")



btn.addEventListener('click', () => {
    let value = inp.value

    if (value.trim() === "") return;


    if (value === "") {
        Pent.style.display = "block"
    }
    else {
        Pent.style.display = "none"
    }

    tsk.insertAdjacentHTML("beforeend", `
        <div class="tasks">
            <div class="radionname">
                <input type="checkbox" class="rounded">
                <div class="name">${value}</div>
            </div>

            <div class="editndel">
                <div class="edt"><i class="ri-pencil-line"></i></div>
                <div class="del"><i class="ri-delete-bin-5-line"></i></div>
            </div>
        </div>
    `);

    inp.value = ""

})

tsk.addEventListener("click", (e) => {
    if (e.target.closest(".del")) {
        e.target.closest(".tasks").remove()
    }

    if (e.target.closest(".edt")) {

        let task = e.target.closest(".tasks");
       


        let name = task.querySelector(".name");
      


        let newValue = prompt("Edit your task:", name.innerText);
    
        

        if (newValue !== null && newValue.trim() !== "") {
            name.innerText = newValue;
        }

    }

});


