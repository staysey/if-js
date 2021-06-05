const data = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa  Cruz de Tenerife',
        country: 'Spain',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    },
];
document.head.innerHTML = "<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">\n" +
    "<link href=\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap\" rel=\"stylesheet\">"
const svgContainer = document.getElementById("svg-container");
svgContainer.style.cssText = `
    display: none;
`;
document.body.style.cssText = `
    margin: 0 auto;
}`;

const guestsLoveContainer = document.createElement("section");
document.body.appendChild(guestsLoveContainer);
guestsLoveContainer.style.cssText = `
    background-color: #EAF0F9;
`;

const homeContainerWrapper = document.createElement("header");
guestsLoveContainer.appendChild(homeContainerWrapper);
homeContainerWrapper.style.cssText = `
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 120px;
`;

const homesMainText = document.createElement("label");
homeContainerWrapper.appendChild(homesMainText);
homesMainText.style.cssText = `
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    padding-bottom: 105px;
    font-size: 20px;
`;
const text = document.createTextNode("Homes guests love");
homesMainText.appendChild(text);

const homePicsContainer = document.createElement("section");
guestsLoveContainer.appendChild(homePicsContainer);
homePicsContainer.style.cssText = `
    display: flex;
    justify-content: space-around;
    padding-bottom: 120px;
`;

addLabels = (containerName, array, i, id) => {
    let picText = document.createElement("label");
    containerName.appendChild(picText);
    picText.setAttribute("for", id);
    let firstText = document.createElement("pre");
    picText.appendChild(firstText);
    firstText.style.cssText = `
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #3077C6;
    `;
    let text = document.createTextNode(array[i].name);
    firstText.appendChild(text);
    let secondText = document.createElement("pre");
    picText.appendChild(secondText);
    secondText.style.cssText = `
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: #BFBFBF;
    `;
    text = document.createTextNode(array[i].city + ", " + array[i].country);
    secondText.appendChild(text);
}

showFourCountries = (index, array) => {
    let id;
    for (let i = index; i < 4; i++) {
        let picSpan = document.createElement("span");
        homePicsContainer.appendChild(picSpan);
        if (i === 3) {
            let homeWithArrow = document.createElement("span");
            picSpan.appendChild(homeWithArrow);
            homeWithArrow.style.cssText = `
               display: flex;
               align-items: center;
            `;
            let homePic = document.createElement("img");
            homeWithArrow.appendChild(homePic);
            id = "home" + index;
            homePic.setAttribute("id", id);
            homePic.setAttribute("src", array[i].imageUrl);
            homePic.style.cssText = `
               width: 300px;
               height: 300px;
            `;
            let arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            homeWithArrow.appendChild(arrow);
            arrow.innerHTML = "<g filter=>\n" +
                "            <circle cx=\"24\" cy=\"20\" r=\"20\" fill=\"#F3F3F4\"/>\n" +
                "            <path d=\"M19.9412 29.8235L26.1 21.6118C26.6333 20.9007 26.6333 19.9229 26.1 19.2118L19.9412 11\" stroke=\"#383838\" stroke-width=\"2\"/>\n" +
                "        </g>\n" +
                "        <defs>\n" +
                "            <filter id=\"filter0_d\" x=\"0\" y=\"0\" width=\"48\" height=\"48\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n" +
                "                <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/>\n" +
                "                <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\"/>\n" +
                "                <feOffset dy=\"4\"/>\n" +
                "                <feGaussianBlur stdDeviation=\"2\"/>\n" +
                "                <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0\"/>\n" +
                "                <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow\"/>\n" +
                "                <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow\" result=\"shape\"/>\n" +
                "            </filter>\n" +
                "        </defs>";
            arrow.style.cssText = `
               margin-left: -30px;
               height: 40px;
               width: 45px;
            `;
        } else {
            let eachPic = document.createElement("img");
            picSpan.appendChild(eachPic);
            eachPic.setAttribute("src", array[i].imageUrl);
            id = "home" + index;
            eachPic.setAttribute("id", id);
            eachPic.style.cssText = `
               width: 300px;
               height: 300px;
            `;
        }
        addLabels(picSpan, data, i, id);

    }
}

showFourCountries(0, data);







