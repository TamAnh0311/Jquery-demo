import { createTask } from "../js/taskApi";
import { isValidData } from "../js/validate";
import { setEvent } from "../js/common";

$(document).ready(function () {

  setEvent("#create-new-task", "click", onCreateTask)
  
  async function onCreateTask() {
      if (isValidData()) {
        const task = {
          name: $("#name").val(),
          description: $("#description").val(),
          status: 1
        };
        await createTask(task);
        window.location.href = "/"
      }
    }
})



