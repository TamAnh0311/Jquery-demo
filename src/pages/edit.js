import { updateTask, getTaskById } from "../js/taskApi";
import { isValidData } from "../js/validate";
import {setEvent} from "../js/common"

const taskId = getIdQueryParam();
const TASK_STATUS = 1

$(async function () {
  const res = await getTaskById(taskId);

  renderContent(res.data);

  setEvent("#btn-save", "click", onUpdateTask)
});

function getIdQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

function renderContent(task) {
  if (task) {
    $("#name").val(task.name);
    $("#description").val(task.description);
  } else {
    $("#form").html("Task not exist!");
    $("#btn-save").hide();
  }
}

async function onUpdateTask() {
  if (isValidData()) {
    const task = {
      id: parseInt(taskId),
      name: $("#name").val(),
      description: $("#description").val(),
      status: TASK_STATUS,
      updateTask: new Date()
    };


    await updateTask(task);
    window.location.href = "/";
  }
}