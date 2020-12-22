const all = document.getElementById('allTable');

let table_list_HTML;

for(let i = 2; i < 10; i++) {
    let table_list = document.createElement('li');
    table_list.setAttribute('class', 'col-4 mb-5');
    table_list_HTML = `
    <ul class="row flex-column nine-card corner shadow-sm py-7 px-5 bg-white text-center">
        <li>
            <h3 class="nine-card-title text-center">${i}</h3>
        </li>`
    for(let j = 1; j < 10; j++) {
        if(j === 3 || j === 9) {
            table_list_HTML+= `
            <li>
                <span class="nine-card-content">
                    ${i} x ${j} = ${i * j}
                </span>
            </li>`
        } else {
            table_list_HTML+= `
            <li class="mb-1">
                <span class="nine-card-content">
                    ${i} x ${j} = ${i * j}
                </span>
            </li>`
        }
    }
    table_list_HTML+=`</ul>`;
    table_list.innerHTML = table_list_HTML;

    all.appendChild(table_list);
}



