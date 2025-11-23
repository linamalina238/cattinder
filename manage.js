// Логіка керування анкетами
function loadUserProfiles() {
    const userProfiles = JSON.parse(localStorage.getItem('userProfiles') || '[]');
    const container = document.getElementById('user-profiles-container');
    
    container.innerHTML = '';
    
    userProfiles.forEach((profile, index) => {
        const profileElement = document.createElement('div');
        profileElement.className = 'user-profile';
        profileElement.innerHTML = `
            <img src="${profile.image}" alt="${profile.name}" width="150">
            <h3>${profile.name}</h3>
            <p>${profile.description}</p>
            <button onclick="editProfile(${index})">Редагувати</button>
            <button onclick="deleteProfile(${index})">Видалити</button>
        `;
        container.appendChild(profileElement);
    });
}

function deleteProfile(index) {
    const userProfiles = JSON.parse(localStorage.getItem('userProfiles') || '[]');
    userProfiles.splice(index, 1);
    localStorage.setItem('userProfiles', JSON.stringify(userProfiles));
    loadUserProfiles();
}

// Завантажити анкети користувача при завантаженні сторінки
document.addEventListener('DOMContentLoaded', loadUserProfiles);