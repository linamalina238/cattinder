// Логіка для сподобаних анкет
function loadLikedProfiles() {
    const likedProfiles = JSON.parse(localStorage.getItem('likedProfiles') || '[]');
    const container = document.getElementById('liked-profiles-container');
    
    container.innerHTML = '';
    
    likedProfiles.forEach(profile => {
        const profileElement = document.createElement('div');
        profileElement.className = 'liked-profile';
        profileElement.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}" width="200">
            <h3>${profile.name}</h3>
            <p>${profile.age}</p>
            <p>${profile.description}</p>
        `;
        container.appendChild(profileElement);
    });
}

// Завантажити сподобані анкети при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadLikedProfiles);