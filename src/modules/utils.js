import { API_URL,selected } from "./api.js";

export async function dataUma(){
    try {
        const res = await fetch(API_URL);
        if(!res.ok){
            throw new Error("API tidak terbaca");
        }
    const data = await res.json();
    const filtered = data.filter(e => selected.includes(e.name_en));
    const list = document.getElementById("character-list");

    filtered.forEach(char => {
       const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `
     
        <img src="${char.thumb_img}" alt="gambar" />
         <div class="overlay"><span> <a href="${char.link}" target="_blank">View More ❯❯❯❯</a></span> </div>
        <h3 class ="name-en">${char.name_en}</h3>
        <p><strong>${char.name_jp}</strong></p>
        
      `;
     

      list.appendChild(div);

    });


    } catch (error) {
       console.error(error.message);
    }
}
