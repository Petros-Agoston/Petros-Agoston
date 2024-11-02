
    document.addEventListener("DOMContentLoaded", () => {
      // Get all anchor links with href targeting IDs
      const links = document.querySelectorAll('a[href^="#"]');

      function smoothScrollToTarget(targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth"
          });
        }
      }

      // Attach click event listener to each link
      links.forEach(link => {
        link.addEventListener('click', (event) => {
          event.preventDefault(); // Prevent the default jump to the anchor

          const targetId = link.getAttribute("href");
          smoothScrollToTarget(targetId);
        });
      });
    });



