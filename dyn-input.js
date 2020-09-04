function dynInput(cbox) {
    if (cbox.checked) {
        const input = document.createElement("input");
        input.type = "text";
        input.name = `${cbox.name} ` + "handle";
        input.placeholder = "Username";
        input.required = true;
        input.placeholder = `${cbox.name} handle`
        input.id = `${cbox.name}`
        document.querySelector(`.${cbox.name}`).appendChild(input);
    } else {
        document.getElementById(cbox.name).remove();
    }
}