//bring info from json

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
    title.innerHTML = data[3].name;

    const subtitle = document.getElementById("description");
    subtitle.innerHTML = data[3].description;

    const paragraph = document.getElementById("content");
    paragraph.innerHTML = data[3].content;

    const picture = document.getElementById("image");
    picture.setAttribute("src", data[3]);

    const date = document.getElementById("completed_on");
    date.innerHTML = data[3].completed_on;


  } catch (e) {
    console.log(e);
  }
}


firstContentJson();





