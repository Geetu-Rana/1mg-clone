import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
import{footer} from "../components/footer.js"
document.getElementById("footer").innerHTML=footer();

document.getElementById("add_address").addEventListener("click", typeAdd);

    function typeAdd(){
        window.location.href="./addressform.html"
}
document.getElementById("continue").addEventListener("click",function(){
      window.location.href="dellivery.html"
})

let data = JSON.parse(localStorage.getItem("addData"));

window.addEventListener("load", function () {
    displayData(data);
  });
  let append = document.getElementById("append_add");
  function displayData(data){
    
    data.forEach(el => {
        let box = document.createElement("div")

        let radio = document.createElement("input");
        radio.type = "radio";
        radio.setAttribute("name", "radio")
        radio.addEventListener("click",function(){
              final(el);
        })
       
        let label = document.createElement("label");
        label.innerText = el.Add_type;
        label.setAttribute("for","radio");
        let box1 = document.createElement("div");
        box1.append(radio,label)

        let nme = document.createElement("p");
         nme.innerText=el.Name;
        let num = document.createElement("p");
        num.innerText = el.Mobile; 
        let address = document.createElement("p");
        address.innerText= el.Flat +" , "+el.Landmark+" , "+el.Locality; 

        let city = document.createElement("p");
        city.innerText = el.City+" , "+ el.State+" - "+el.Pincode
        box.append(box1,nme,num,address,city) 
        append.append(box);
        
    });

  }

  let final=(data)=>{
      let final_add = [];
      final_add.push(data);
      localStorage.setItem("final_add",JSON.stringify(final_add))
  }