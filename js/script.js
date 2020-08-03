{

    const tasks = [
        {
            content: "pouczyć się",
            done:false,
        },
        {
            content: "poćwiczyć żeby schudnąć",
            done:true,
        },
    ];


    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const render = () => {
        let htmlString = "";

        for(const task of tasks) {
            htmlString += `
            <li ${task.done ? "style=\"text-decoration: line-through\"" : ""}>
            ${task.content}

            <button class="js-remove">usuń</button>
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });

        });
    };




    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
       
        if (newTaskContent === "") {
            return;
        }

    addNewTask(newTaskContent);    

    }

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();

}