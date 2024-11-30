function appendToDisplay(value) {
  $("#display").val($("#display").val() + value);
}

function clearDisplay() {
  $("#display").val("");
}

function deleteLast() {
  let display = $("#display").val();
  $("#display").val(display.slice(0, -1));
}

function calculate() {
  try {
    let result = eval($("#display").val());
    $("#display").val(result);
  } catch (error) {
    $("#display").val("Error");
  }
}
