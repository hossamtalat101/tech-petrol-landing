document.addEventListener("DOMContentLoaded", () => {
  console.log("TechPetrol Engine Started...");

  // 1. إدارة الهيدر عند التمرير
  const header = document.querySelector(".main-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.padding = "0.5rem 0";
      header.style.background = "rgba(0, 37, 26, 0.98)";
    } else {
      header.style.padding = "1rem 0";
      header.style.background = "rgba(0, 77, 64, 0.95)";
    }
  });

  // 2. التمرير السلس (Smooth Scroll) للروابط
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // 3. نظام التنبيهات العصري (بديل الـ Alert)
  const showToast = (message) => {
    // إنشاء عنصر التنبيه
    const toast = document.createElement("div");
    toast.className = "custom-toast";
    toast.textContent = message;

    // تنسيق التنبيه برمجياً (يمكن نقله لملف CSS)
    Object.assign(toast.style, {
      position: "fixed",
      bottom: "20px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#d4af37",
      color: "#00251a",
      padding: "12px 25px",
      borderRadius: "50px",
      fontWeight: "bold",
      boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
      zIndex: "10000",
      opacity: "0",
      transition: "all 0.4s ease",
    });

    document.body.appendChild(toast);

    // تأثير الظهور
    setTimeout(() => {
      toast.style.opacity = "1";
      toast.style.bottom = "40px";
    }, 100);

    // الإختفاء بعد 3 ثواني
    setTimeout(() => {
      toast.style.opacity = "0";
      setTimeout(() => toast.remove(), 400);
    }, 3000);
  };

  // 4. تفعيل الأزرار
  const ctaButton = document.querySelector(".cta-btn");
  const primaryButton = document.querySelector(".btn-primary");

  if (ctaButton) {
    ctaButton.addEventListener("click", () => {
      showToast("مرحباً بك! جاري تحضير لوحة التحكم الخاصة بك...");
    });
  }

  if (primaryButton) {
    primaryButton.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("تم استلام طلبك، سيتواصل معك مستشارنا التقني قريباً.");
    });
  }

  // 5. تأثيرات الظهور عند التمرير (Intersection Observer)
  const revealElements = document.querySelectorAll(".service-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease-out";
    observer.observe(el);
  });
});
