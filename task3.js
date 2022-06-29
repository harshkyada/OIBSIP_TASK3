window.addEventListener('load', () => {
    const form = document.getElementById("form")
    const input= document.getElementById("task-input");
    const tasks = document.getElementById("tasks");
    const type = document.getElementById("type");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task= input.value;

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const chk_el = document.createElement("input");
        chk_el.type = "checkbox";
        chk_el.classList.add("checkbox");
        task_el.appendChild(chk_el);

        const text_el = document.createElement("input");
        text_el.classList.add("task-text");
        text_el.type = "text";
        text_el.value = task;
        text_el.setAttribute("readonly","readonly")
        task_el.appendChild(text_el);

        const edit_el = document.createElement("button");
        edit_el.classList.add("edit");
        edit_el.innerText = "Edit";
        task_el.appendChild(edit_el);
        
        const delete_el = document.createElement("button");
        delete_el.classList.add("delete");
        delete_el.innerText = "Delete";
        task_el.appendChild(delete_el);

        input.value = ""

        tasks.appendChild(task_el);

        edit_el.addEventListener('click', (e) => {
			if (edit_el.innerText.toLowerCase() == "edit") {
				edit_el.innerText = "Save";
                edit_el.style.backgroundColor = "green";
				text_el.removeAttribute("readonly");
				text_el.focus();
			} else {
				edit_el.innerText = "Edit";
                edit_el.style.backgroundColor = "#ade6fc"
				text_el.setAttribute("readonly", "readonly");
			}
		});

		delete_el.addEventListener('click', (e) => {
			tasks.removeChild(task_el);
		});
        
        

        type.addEventListener('click', (e) => {
            switch (e.target.value){
                case "Completed":
                        if(chk_el.checked == false){
                            task_el.style.display = "none";
                        }
                        else{
                            task_el.style.display = "block";
                        }
                        break;
                case "Remaining":
                    if(chk_el.checked == true){
                        task_el.style.display = "none";
                    }
                    else{
                        task_el.style.display = "block";
                    }
                    break;
                case "All":
                    task_el.style.display = "block";
                    break;
            }
        })
    });
});