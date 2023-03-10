import { updateTask, getTaskById } from "../js/taskApi";
import { isValidData } from "../js/validate";

const userId = getIdQueryParam();
const taskStatus = 1

$(async function () {
  
  const data = await getTaskById(userId);

  if (data?.task) {
    renderContent(data.task);
  }
});

function getIdQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
}

function renderContent(task) {
  if (task) {
    $("#name").val(task.Name);
    $("#description").val(task.Description);
  } else {
    $("#form").html("Task not exist!");
    $("#btn-save").hide();
  }
}

async function onUpdateTask() {
  if (isValidData()) {
    const task = {
      id: userId,
      name: $("#name").val(),
      description: $("#description").val(),
      status: 1
    };


    await updateTask(task);
    window.location.href = "/";
  }
}