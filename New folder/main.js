const dataAraay = [
  {
    userId: 1,
    userName: "სახელი 1",
    userLastName: "გვარი 1",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 20,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 2,
    userName: "სახელი 2",
    userLastName: "გვარი 2",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 30,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 3,
    userName: "სახელი 3",
    userLastName: "გვარი 3",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 35,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 4,
    userName: "სახელი 4",
    userLastName: "გვარი 4",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 29,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 5,
    userName: "სახელი 5",
    userLastName: "გვარი 5",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 49,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 6,
    userName: "სახელი 6",
    userLastName: "გვარი 6",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 31,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 7,
    userName: "სახელი 7",
    userLastName: "გვარი 7",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 31,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
];

const root = document.querySelector(".root");
renderusers(dataAraay, root);

function renderusers(userarray, path) {
  userarray.forEach((element) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
  });
}

const userId = document.createElement("h2");
userId.setAttribute("class", "userid");
userId.textcontent = element.userid;

const userName = document.createElement('h3')
userName.setAttribute('class', 'user-name')
userName.textContent = element.username

const userLastName = document.createElement('h4')
userLastName.setAttribute( 'class', 'user-last-name')
userLastName.textcontent = element.userLastName

const userAge = document.createElement('h5')
userAge.setAttribute ('class', 'user-Age')
userAge.textContent = element.userAge + ': age'

const userImage = document.createElement("img");
userImage.setAttribute("class", "user-image");
userImage.setAttribute("src", element.userImage);

const cardfooter = document.createElement('div')
cardfooter.setAttribute('class', 'card-footer')
cardfooter.textContent = 'addresses :'
element.userAddresses.forEach(adress => {
    const spanelement = document.createElement('span')
    spanelement.textContent = userAddress
    cardfooter.append(spanelement)
})

card.append(
    userId,
    userImage,
    userName,
    userLastName,
    userAge,
    cardFooter
     
    )
path.append(card)