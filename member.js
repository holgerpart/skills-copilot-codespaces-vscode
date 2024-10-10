function skillsmember() {
  var member = document.getElementById("member").value;
  var skills = document.getElementById("skills").value;
  var data = { member: member, skills: skills };
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/skillsmember", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log("skillsmember");
      console.log(xhr.responseText);
    }
  };
}