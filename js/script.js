{

    const tasks = [
        {
            content: "pouczyć się",
            done:false,
        },
        {
            content: "poćwiczyć żeby schudnąć",
            done: true,
        },
    ]

    const render = () => {
        let htmlString = "";

        for(const task of tasks) {
            htmlString += `
            <li>
            ${task.content}
            </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        render();
    };

    init();

}