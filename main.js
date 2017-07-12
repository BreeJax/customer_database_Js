for (var i = 0; i < customers.results.length; i++) {
  let _li = document.createElement("li")

  let img = document.createElement("img")
  img.src = customers.results[i].picture.large
  _li.appendChild(img)

  let dob = customers.results[i].dob
  let dobElement = document.createElement("h6")
  dobElement.innerHTML = dob
  _li.appendChild(dobElement)

  let name = customers.results[i].name
  let nameElement = document.createElement("h7")
  nameElement.innerHTML = name
  _li.appendChild(nameElement)

  document.querySelector("ul").appendChild(_li)
}

// <ul>
//   <li> <img src="" alt="">
//     <!-- CSS Will give this a bottom border of Green -->
//     <h4>Full Name</h4>
//     <h6>email</h6>
//     <h6>address</h6>
//     <h6>phone number</h6>
//
//   </li>
//   <li>2</li>
//   <li>3</li>
//   <li>4</li>
//   <li>5</li>
//   <li>6</li>
//   <li>7</li>
//   <li>8</li>
//   <li>9</li>
//   <li>10</li>
//   <li>11</li>
//   <li>12</li>
//   <li>13</li>
//   <li>14</li>
//   <li>15</li>
//   <li>16</li>
//
//
// </ul>
