import { getTasks, deleteTask, updateTaskStatus } from '../js/taskApi'

$(document).ready(function () {
    $(function () {
        prepareData()
    });

    async function prepareData() {
        const res = await getTasks();
        renderTask(res.tasks);
    }

    function process(items, level, element) {

        $(element).append('<ul></ul>');
        for (var i = 0; i < items.length; i++) {

            $(element + '> ul').append('<li class="' + level + '-' + i + '"> <img height="10" width="10" style="background:' + items[i].color + '">' + (items[i].label ? items[i].label : items[i].title) + '(' + (items[i].deviceName ? items[i].deviceName : "") + ')' + '<span style="float:right">' + (items[i].objects ? items[i].objects : "") + '</span></li>');
            if (items[i].children) {
                process(items[i].children, level + 1, '.' + level + '-' + i);
            }
        }
    }

    function renderTask(tasks) {
        let htmlContent = ""

        $.map(tasks, function (task) {
            htmlContent += "<tr id=" + task.Id + ">" +
                "<td>" + task.Id + "</td>" +
                "<td>" + task.Name + "</td>" +
                "<td>" + (task.Description || "No description added") + "</td>" +
                "<td>" + (task.Status === 1 ? "New" : '<i class="fa fa-check text-success"></i>') + "</td>" +
                '<td class="d-flex justify-content-end">' +
                '<div style="width: 90%" class="d-flex justify-content-between" >' +
                (task.Status === 1 ?
                    '<a href="javascript:void(0)" class="text-info btn-done"><i class="fa fa-check"></i> Done</a>' +
                    '<a href="/edit.html?id=' +
                    task.Id +
                    '" class="text-info"><i class="fa fa-edit"></i> Edit</a> ' : '<div></div><div></div>') +
                '<a href="javascript:void(0)" class="text-danger btn-delete"><i class="fa fa-trash-alt"></i>Delete</a>' +
                '</div>' +
                "</td>";
        });


        $("table tbody").html(htmlContent);

        $("table tbody tr .btn-done").click(function () {
            const id = $(this).closest('tr').attr('id')
            onCompleteTask(id)
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

    async function onCompleteTask(id) {
        const TASK_COMPLETE = 2
        await updateTaskStatus(id, TASK_COMPLETE)
        prepareData()
    }
})