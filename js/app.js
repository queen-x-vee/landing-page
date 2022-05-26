

let sections, menu, sectionArray, sectionLength;
sections = document.querySelectorAll('section')
sectionArray = Array.from(sections)
sectionLength = sectionArray.length
console.log(sectionLength)
menu = document.querySelector('#navbar__list')

// build the nav
const Navigation = () => {
    let list = ''

    sectionArray.forEach((section) => {
        const sectionName = section.getAttribute('data-nav')
        var sectionId = section.getAttribute('id')
        //console.log( sectionName, sectionId)
        list = document.createElement('li')
        list.innerHTML = `<a class ='menu__link ${sectionId}' href ="#${sectionId}">${sectionName}</a>`
        //list +=`<li><a href = "#${sectionId}">${sectionName}</a></li>`
        //menu.innerHTML = list

        menu.appendChild(list)
    })



}

Navigation()


//to get the position of each section
const sectionPosition = (section) => {

    return Math.floor(section.getBoundingClientRect().top)

}
//to remove the active class
const isActive = (section) => {
    section.classList.remove('your-active-class')
    //list.classList.remove('active')
}
//to add active class
const addActive = (condition, section) => {
    if (condition) {
        section.classList.add('your-active-class')

    }
}



// Add class 'active' to section when the position is close to top of viewport
const activation = () => {
    let current = ''
    sections.forEach(section => {
        //height
        const elementPosition = sectionPosition(section)
        inviewport = () => elementPosition < 150 && elementPosition >= -150
        isActive(section)
        addActive(inviewport(), section)
        current = section.getAttribute('id')
    })

    /*const listArray = Array.from(lists)
    let still = ''
    listArray.forEach(list => {
            
            list.classList.remove('active') 

            window.addEventListener('load', (event)=>{
                //event.preventDefault()
                list.addEventListener('click', function myNavFunction(){
                return list.classList.add('active') 
            })
            
            //list.addEventListener('click', function myNavFunction(){
            //return list.classList.add('active') 
       })
        
    })*/


}
const lists = document.querySelectorAll('a')
console.log(lists)
window.addEventListener('load', 
    () => {
        lists.forEach(list => {

          
            list.addEventListener('click', function myNavFunction(e) {
                lists.forEach(tina=>{
                    tina.classList.remove('active')

                })
                
                return e.target.classList.add('active')
            })

        })
    }


)



window.addEventListener('scroll', activation)




