let heroBannerButton = document.querySelector(".hero__buttonBottom"),
    collectionListSection = document.querySelector(".collection-list-section");

if(heroBannerButton && collectionListSection) {
  function scrollToSection() {
    window.scrollTo({
      top: collectionListSection.getBoundingClientRect().top + pageYOffset,
      behavior: 'smooth',
    })
  }
  
  heroBannerButton.addEventListener("click", event => {
    event.preventDefault();
    scrollToSection();
  })
}