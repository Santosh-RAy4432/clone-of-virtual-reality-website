document.addEventListener('DOMContentLoaded', function () {
    
 
    const exploreMoreButtons = document.querySelectorAll('.btn');
    exploreMoreButtons.forEach(button => {
      button.addEventListener('click', function () {
       alert("your button was clicked");
      });
    });
  
  
    const watchIntroButton = document.querySelector('.video');
    watchIntroButton.addEventListener('click', function () {
      alert('Watch Intro button clicked!');
    });
  
    const contentButtons = document.querySelectorAll('.content-btn');
    contentButtons.forEach(button => {
      button.addEventListener('click', function () {
        alert("you clicked the explore more button");
        const content = button.nextElementSibling; 
        if (content.style.display === 'none' || content.style.display === '') {
          content.style.display = 'block';
        } else {
          content.style.display = 'none';
        }
      });
    });
  
  });