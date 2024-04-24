async function firstContentJson() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const data = await response.json();

    /*
        const test = document.querySelector("#test");
        console.log(test);
        test.innerText = data[0].image
      */

    const title = document.getElementById("name");
    title.innerText = data[3].name;

    const subtitle = document.getElementById("description");
    subtitle.innerText = data[3].description;

    const paragraph = document.getElementById("content");
    paragraph.innerText = data[3].content;

    const picture = document.getElementById("image");
    console.log(picture);
    picture.innerHTML = `<img src="${data[3].image}" alt="Project Image">`;

    const date = document.getElementById("completed_on");
    date.innerText = data[3].completed_on;


  } catch (e) {
    console.log(e);
  }
}


firstContentJson();






/* WRONG TRY OF JSON EXTRACT
async function secondContentJson() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const totalBoxes = await response.json();
    const mainBox = document.getElementsByClassName("boxes");

    for (let i = 0; i < 3; i++) {
      const project = totalBoxes[i];

      // Crear el div de mi class "main-box"
      const div = document.createElement("div");
      div.classList.add("main-box");
div.innerHTML = `
<img src="${div.image}" alt="foto1" />
          <h3>${div.name}</h3>
          <h4>${div.description}</h4>
          <p class="learn">Learn more</p>
`;
 // Agrega el div al contenedor principal en el HTML
 mainBox.appendChild(div);


    }
  } catch (e) {
    console.log(e);
  }
}

// secondContentJson();

document.addEventListener("DOMContentLoaded", function(){
    secondContentJson();
    firstContentJson();
});
*/
