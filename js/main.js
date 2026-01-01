// Wait for the DOM to load fully
document.addEventListener("DOMContentLoaded", () => {
  console.log("Project loaded successfully");

  const ctaButton = document.querySelector(".cta-btn");
  const primaryButton = document.querySelector(".btn-primary");

  // Simple interaction function
  const handleButtonClick = (message) => {
    alert(message);
  };

  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      handleButtonClick(
        "مرحباً بك في TechPetrol! سنقوم بتحويلك للصفحة المطلوبة."
      );
    });
  }

  if (primaryButton) {
    primaryButton.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default link jump for demo
      handleButtonClick("شكراً لاهتمامك! فريقنا سيتواصل معك قريباً.");
    });
  }
});
