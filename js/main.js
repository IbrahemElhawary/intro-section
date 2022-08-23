let feature = document.getElementById("feature")
let company = document.getElementById("company")
let companyList = document.querySelector(".company-list")
let featuresLest = document.querySelector(".features-list")
let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
feature.style.width = '90px'
company.style.width = '90px'
function list() {
    console.log(feature)
    console.log(company)
    console.log(companyList)
    console.log(featuresLest)
    console.log(img1)
    console.log(img2)
}
list()
let display1 = "none"
let display2 = "none"
function features() {
    if (display1 === 'none') {
        featuresLest.style.display = 'block'
        display1 = "block"
        img1.removeAttribute("src")
        img1.setAttribute('src', '../images/icon-arrow-up.svg')
    } else if (display1 === "block") {
        featuresLest.style.display = 'none'
        display1 = "none"
        img1.removeAttribute("src")
        img1.setAttribute('src', '../images/icon-arrow-down.svg')
    }
}
function companys() {
    if (display2 === 'none') {
        companyList.style.display = 'block'
        display2 = "block"
        img2.removeAttribute("src")
        img2.setAttribute('src', '../images/icon-arrow-up.svg')
    } else if (display2 === "block") {
        companyList.style.display = 'none'
        display2 = "none"
        img2.removeAttribute("src")
        img2.setAttribute('src', '../images/icon-arrow-down.svg')
    }
}

feature.onclick = features
company.onclick = companys