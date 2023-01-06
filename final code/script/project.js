let projectData = [
    {
        image: 'https://media.istockphoto.com/id/1145618475/photo/villefranche-on-sea-in-evening.jpg?s=612x612&w=0&k=20&c=vQGj6uK7UUVt0vQhZc9yhRO_oYBEf8IeeDxGyJKbLKI=',
        name: 'project one',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#javascript, #fullstack, #css'
    },
    {
        image: 'https://media.istockphoto.com/id/1145618475/photo/villefranche-on-sea-in-evening.jpg?s=612x612&w=0&k=20&c=vQGj6uK7UUVt0vQhZc9yhRO_oYBEf8IeeDxGyJKbLKI=',
        name: 'project two',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#javascript, #fullstack, #css'
    },
    {
        image: 'https://media.istockphoto.com/id/1145618475/photo/villefranche-on-sea-in-evening.jpg?s=612x612&w=0&k=20&c=vQGj6uK7UUVt0vQhZc9yhRO_oYBEf8IeeDxGyJKbLKI=',
        name: 'project three',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#javascript, #fullstack, #css'
    },
    {
        image: 'https://media.istockphoto.com/id/1145618475/photo/villefranche-on-sea-in-evening.jpg?s=612x612&w=0&k=20&c=vQGj6uK7UUVt0vQhZc9yhRO_oYBEf8IeeDxGyJKbLKI=',
        name: 'project four',
        detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, augue quis rutrum auctor, erat est mattis velit, vel luctus est nisl',
        github: '#',
        live: '#',
        tags: '#javascript, #fullstack, #css'
    },

]


const createProjectCards = (data) => {
    let projectContainer = document.querySelector('.project-container');
    if (projectContainer) {
        projectContainer.innerHTML += `
        <div class="project-card " data-tags="${data.tags}">
          <div class="project-wrapper">
            <div class="project-thumbnail">
              <img src="./images/close.png" class="close-btn" alt="">
              <img src="${data.image}" class="project-img" alt="">
              <span class="tags">${data.tags}</span>
            </div>
            <div class="project-body">
              <h1 class="project-name">${data.name}</h1>
              <p class="project-detail">${data.detail}</p>
              <a href="${data.github}" class="btn">github</a>
              <a href="${data.live}" class="btn">see live</a>
            </div>
          </div>
        </div>`


    }
}

projectData.forEach(data => createProjectCards(data));