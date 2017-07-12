for (var i = 0; i < customers.results.length; i++) {
  let _li = document.createElement("li")

  let img = document.createElement("img")
  img.src = customers.results[i].picture.large
  _li.appendChild(img)

  let name = customers.results[i].name
  let nameElement = document.createElement("h2")
  nameElement.innerHTML = `${name.first} ${name.last} `
  _li.appendChild(nameElement)

  let location = customers.results[i].location
  let locationElement = document.createElement("h7")
  locationElement.innerHTML = `${location.street} ${location.city}`
  _li.appendChild(locationElement)

  let location2 = customers.results[i].location
  let location2Element = document.createElement("h7")
  location2Element.innerHTML = `${location2.state} ${location2.postcode}`
  _li.appendChild(location2Element)

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
