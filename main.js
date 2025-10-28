/*
=============================
=========Start header========
=============================
*/
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.querySelector('.navigation');
    const navItems = document.querySelectorAll('.navigation li');
    const logo = document.querySelector('.logo');
    
    // فتح/إغلاق القائمة بالهامبرجر
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
    });
    
    // فتح/إغلاق القائمة باللوجو
    logo.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            toggleMenu();
        }
    });
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener('click', function(e) {
        if (!navigation.contains(e.target) && !hamburger.contains(e.target)) {
            closeMenu();
        }
    });
    
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navigation.classList.toggle('active');
        
        if (navigation.classList.contains('active')) {
            navItems.forEach((item, index) => {
                item.style.transitionDelay = `${index * 0.1}s`;
            });
        } else {
            navItems.forEach(item => {
                item.style.transitionDelay = '0s';
            });
        }
    }
    
    function closeMenu() {
        hamburger.classList.remove('active');
        navigation.classList.remove('active');
        navItems.forEach(item => {
            item.style.transitionDelay = '0s';
        });
    }
    
    // إغلاق القائمة عند النقر على رابط
    document.querySelectorAll('.navigation a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });
});
/*
=============================
==========End header=========
=============================
*/





/*
=============================
=======Start button main=====
=============================
*/

/*
=============================
========End button main======
=============================
*/