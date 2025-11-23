// Логіка створення анкети
document.getElementById('create-profile-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('cat-name').value,
        age: document.getElementById('cat-age').value,
        description: document.getElementById('cat-description').value,
        image: document.getElementById('cat-image').files[0]
    };

    // Збереження анкети
    const userProfiles = JSON.parse(localStorage.getItem('userProfiles') || '[]');
    userProfiles.push(formData);
    localStorage.setItem('userProfiles', JSON.stringify(userProfiles));

    alert('Анкету успішно створено!');
    this.reset();
});