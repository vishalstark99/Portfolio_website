// const boxContainer = document.querySelector(".boxContainer")
const saluteTextContainer = document.querySelector(".saluteTextContainer")
const saluteImgContainer = document.querySelector(".saluteImgContainer")
const authorName = document.querySelector(".name")
const jobTitleContainers = document.querySelector(".jobTitleContainer")
const jobTitles = document.querySelector(".jobTitle")
const projectsTitle = document.querySelector(".projectsTitle")
const phones = document.querySelector(".phone")
const laptop = document.querySelector(".laptop")


window.addEventListener("scroll", ()=>{
  let offsetY = window.scrollY
  saluteTextContainer.style.transform= `translateY(${offsetY * 0.1}px)`
  saluteImgContainer.style.transform= `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`
  authorName.style.transform= `translateX(${offsetY * 0.1}px)`
  jobTitleContainers.style.backgroundPositionY = `${offsetY * 0.5}px`
  jobTitles.style.transform = `translateX(calc(200vh - ${offsetY}px))`
  projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`
  phones.style.transform = `translateX(calc(400vh - ${offsetY}px))`
  laptop.style.transform = `translateX(calc(500vh - ${offsetY}px))`
})