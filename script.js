// script to make the medical image animate

const medicalImage = document.querySelector('.medical-image');
const stethoscopeIcon = document.querySelector('.stethoscope-icon');

medicalImage.addEventListener('mouseover', () => {
    stethoscopeIcon.classList.add('animate');
});

medicalImage.addEventListener('mouseout', () => {
    stethoscopeIcon.classList.remove('animate');
});
