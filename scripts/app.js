

const popularView = document.querySelector('#courseView');

function getPopularCourses(){
    fetch('../courses.json')
    .then(function(response){
        if(!response.ok)throw new Error(response.statusText)
        return response.json();
    })
    .then(function(data){
        let output = '';
        data.forEach(function(course){
            output += `<li>${course.title} <img src="${course.img}" alt="course image">
            <br> <p>${course.description}</p>  <button>Ansök</button></li>`;
            
        })        
        
    popularView.innerHTML = output;
    })
}



getPopularCourses();