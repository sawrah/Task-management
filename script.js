$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        const newItem = $('#form3').val();
        if (newItem) {
            const newListItem = `
                <li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2" draggable="true">
                    <div class="d-flex align-items-center">
                        <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." onchange="moveToFinished(this)" />
                        ${newItem}
                    </div>
                    <a href="#!" data-mdb-tooltip-init title="Remove item">
                        <i class="fas fa-times text-primary"></i>
                    </a>
                </li>`;
            $('#todo-list').append(newListItem);
            $('#form3').val('');
        }
    });

    jSuites.sorting(document.getElementById('todo-list'), {});
});

function moveToFinished(checkbox) {
    const listItem = checkbox.closest('li');
    document.getElementById('finished-list').appendChild(listItem);
    checkbox.setAttribute('checked', true);
    checkbox.setAttribute('onchange', 'moveToTodoList(this)');
    listItem.querySelector('div').style.textDecoration = 'line-through';
}

function moveToTodoList(checkbox) {
    const listItem = checkbox.closest('li');
    document.getElementById('todo-list').appendChild(listItem);
    checkbox.removeAttribute('checked');
    checkbox.setAttribute('onchange', 'moveToFinished(this)');
    listItem.querySelector('div').style.textDecoration = 'none';
}
