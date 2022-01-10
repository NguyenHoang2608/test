//A
//1
//  let arr = [2, 3, -5, -2, 4];
//     function alternatingSums(arr) {
     
//         let max = 0;
//         for (let i = 0; i < arr.length; i++) {
//           if(max < arr[i] * arr[i+1]){
//               max = arr[i] * arr[i+1];
//           }
//         }
        
//         console.log(max);
//       }
//  alternatingSums(arr);   

//b
// let arr = [60, 40, 55, 75, 64];

// function alternatingSums(arr) {
//   let sum1 = 0;
//   let sum2 = 0;
//   let list1 = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     sum1 += arr[i];
//   }
//   for (let i = 0; i < arr.length; i += 2) {
//     sum2 += arr[i];
//   }
//   list1.push(sum2);
//   list1.push(sum1);
//   return list1;
// }
// console.log(alternatingSums(arr));

// const productApi = "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html"

// function getData(url,callback){
//     fetch(url)
//     .then((result) => 
//         result.json()
//     )
//     .then((data)=>{
//         callback(data);
//         console.log(data)
//     })
//     .catch((err)=>{
//         console.log("Loi");
//     })
//   }
//   function redenderProduct(products){
//     console.log("product:",products);
//   }
//   getData("https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html",redenderProduct());
  



//   fetch("https://api.shrtco.de/v2/shorten?url=" + url)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         if (data.result.short_link) {
//           const short = document.createElement("p");
//           short.setAttribute("class", "text-xl text-center italic mt-2");
//           short.textContent = data.result.short_link;
//           shortElement.append(short);
//         }
//       })
//       .catch((error) => {
//         alert("Error: " + error.message);
//       });


//b2
const sEl = document.getElementById("render");

document.getElementById("submit").addEventListener("click", (e) => {
    const url = document.getElementById("url").value;
  
    fetch("https://api.shrtco.de/v2/shorten?url=" + url)
      .then((response) => response.json())
      .then((data) => {
      
        if (data.result.short_link) {
         
          
          sEl.textContent = data.result.short_link;
          
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });