async function firstContentJson (){
    try{
        const response = await fetch("https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects")
        const data = await response.json();
        // Hasta aquí, todo OK

        /*
        const test = document.querySelector("#test");
        console.log(test);
        test.innerText = data[0].image
        */

        const title = document.getElementById("name");
        title.innerText = data[0].name

        const subtitle = document.getElementById("description");
        subtitle.innerText = data[0].description

        const paragraph = document.getElementById("content");
        paragraph.innerText = data[0].content

        const picture = document.getElementById("image");
        picture.innerText = data[0].image

        const date = document.getElementById("completed_on");
        date.innerText = data[0].completed_on 

    } catch(e) {
        console.log(e);
    }
}

firstContentJson();