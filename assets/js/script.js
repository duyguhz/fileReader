let upload = document.getElementById("upload");
let dropZone = document.querySelector(".dropZone");
let table = document.querySelector(".table");
let file=document.querySelector(".table")


upload.addEventListener("change", function (e) {
  let files = Array.from(e.target.files);
  files.forEach((file) => {
    showImage(file);
  });
});
function showImage(file) {
    if (!file.type.includes("image/")) {
      alert("Wrong file type");
      return;
    }
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("loadend", function () {
      let src = fileReader.result;
      let img = document.createElement("img");
      let div = document.createElement("div");
      div.className = "col-lg-3 border";
      img.src = src;
      img.style.width = "100%"
      div.append(img);
      table.append(div);

    });
  }
  