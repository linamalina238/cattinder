// Логіка для перегляду анкет
let currentProfileIndex = 0;
const profiles = [
    {
        name: "Мурчик",
        age: "2 роки",
        description: "Ласкавий та грайливий кіт",
        image: "images/cat1.jpg"
    },
    {
        name: "Барсик",
        age: "3 роки", 
        description: "Спокійний та розсудливий",
        image: "images/cat2.jpg"
    }
];

function likeProfile() {
    const likedProfiles = JSON.parse(localStorage.getItem('likedProfiles') || '[]');
    likedProfiles.push(profiles[currentProfileIndex]);
    localStorage.setItem('likedProfiles', JSON.stringify(likedProfiles));
    nextProfile();
}

function dislikeProfile() {
    nextProfile();
}

function nextProfile() {
    currentProfileIndex = (currentProfileIndex + 1) % profiles.length;
    displayCurrentProfile();
}

function displayCurrentProfile() {
    const profile = profiles[currentProfileIndex];
    document.getElementById('profile-name').textContent = profile.name;
    document.getElementById('profile-age').textContent = profile.age;
    document.getElementById('profile-description').textContent = profile.description;
    document.getElementById('profile-image').src = profile.image;
}