import { getTasks, deleteTask, updateTask } from '../js/taskApi'

$(document).ready(function () {
    $(function () {
        prepareData()
    });

    async function prepareData() {
        const res = await getTasks();
        renderTask(res.data);
    }

    function process(items, level, element) {

        $(element).append('<ul></ul>');
        for (var i = 0; i < items.length; i++) {

            $(element + '> ul').append('<li class="' + level + '-' + i + '"> <img height="10" width="10" style="background:' + items[i].color + '">' + (items[i].label ? items[i].label : items[i].title) + '(' + (items[i].devicename ? items[i].devicename : "") + ')' + '<span style="float:right">' + (items[i].objects ? items[i].objects : "") + '</span></li>');
            if (items[i].children) {
                process(items[i].children, level + 1, '.' + level + '-' + i);
            }
        }
    }

    function renderTask(tasks) {
        let htmlContent = ""

        $.map(tasks, function (task) {
            htmlContent += "<tr id=" + task.id + ">" +
                '<td>' + task.id + '</td>' +
                '<td class="task-name">' + task.name + "</td>" +
                '<td class="task-description">' + (task.description || 'No description added') + '</td>' +
                '<td >' + (task.status === 1 ? 'New' : '<i class="fa fa-check text-success"></i>') + '</td>' +
                '<td class="d-flex justify-content-end">' +
                '<div style="width: 90%" class="d-flex justify-content-between" >' +
                (task.status === 1 ?
                    '<a href="javascript:void(0)" class="text-info btn-done"><i class="fa fa-check"></i> Done</a>' +
                    '<a href="/edit.html?id=' +
                    task.id +
                    '" class="text-info"><i class="fa fa-edit"></i> Edit</a> ' : '<div></div><div></div>') +
                '<a href="javascript:void(0)" class="text-danger btn-delete"><i class="fa fa-trash-alt"></i>Delete</a>' +
                '</div>' +
                '</td>';
        });


        $("table tbody").html(htmlContent);

        $("table tbody tr .btn-done").click(async function () {
            const TASK_COMPLETE = 2

            const parent = $(this).closest('tr')
            const id = parseInt(parent.attr('id'))
            const name = parent.find('.task-name').text()
            const description = parent.find('.task-description').text()
    
            const task = {
                id,
                name,
                description,
                status: TASK_COMPLETE
            }
     
            await updateTask(task)
            prepareData()
        })

        $("table tbody tr .btn-delete").click(function () {
            const id = $(this).closest('tr').attr('id')
            onDeleteTask(id)
        })


    }

    async function onDeleteTask(id) {
        await deleteTask(id)
        prepareData()
    }
})