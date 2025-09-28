const themeColors = ['blue', 'purple', 'green', 'orange', 'pink'];
function adjustIntroLayout() {
  const linksContainer = document.getElementById('links-container');
  const introCard = document.getElementById('intro-card');
  const introAvatarContainer = document.getElementById('intro-avatar-container');
  const introInfoContainer = document.getElementById('intro-info-container');
  const computedStyle = window.getComputedStyle(linksContainer);
  const gridTemplateColumns = computedStyle.getPropertyValue('grid-template-columns');
  const columnCount = gridTemplateColumns.split(' ').length;
  introCard.className = 'bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300';
  introAvatarContainer.className = 'flex-shrink-0';
  introInfoContainer.className = 'flex-1';
  if (columnCount >= 3) {
    introCard.classList.add('flex', 'flex-row', 'items-center');
    introAvatarContainer.classList.add('mr-6', 'mb-0');
    introAvatarContainer.querySelector('img').classList.remove('mx-auto');
    introInfoContainer.classList.add('grid', 'grid-cols-2', 'gap-4');
  } else if (columnCount === 2) {
    introCard.classList.add('flex', 'flex-row', 'items-start');
    introAvatarContainer.classList.add('mr-6', 'mb-0');
    introAvatarContainer.querySelector('img').classList.remove('mx-auto');
    introInfoContainer.classList.add('flex', 'flex-col', 'gap-4');
  } else {
    introCard.classList.add('flex', 'flex-col', 'items-center');
    introAvatarContainer.classList.add('mb-6', 'mr-0');
    introAvatarContainer.querySelector('img').classList.add('mx-auto');
    introInfoContainer.classList.add('flex', 'flex-col', 'gap-4', 'w-full');
  }
}
function renderLinksCards() {
  const container = document.getElementById('links-container');
  container.innerHTML = '';
  linksData.forEach((link, index) => {
    const colorIndex = index % themeColors.length;
    const themeColor = `theme-${themeColors[colorIndex]}`;
    const cardHTML = `
      <a href="${link.url}" target="_blank" class="block group">
        <div class="bg-white rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 h-full flex flex-col items-center text-center">
          <div class="relative mb-4">
            <img src="${link.avatar}" alt="${link.name}" 
                 class="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300" />
            <div class="absolute inset-0 bg-gradient-to-tr from-${themeColor}/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <h3 class="text-xl font-bold mb-2 group-hover:text-${themeColor} transition-colors duration-300">${link.name}</h3>
          <p class="text-neutral">『${link.slogan}』</p>
          
          <div class="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <span class="inline-flex items-center text-sm text-${themeColor}">
              <span>访问</span>
              <i class="fa fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform duration-300"></i>
            </span>
          </div>
        </div>
      </a>
    `;
    container.innerHTML += cardHTML;
  });
  adjustIntroLayout();
}
document.addEventListener('DOMContentLoaded', renderLinksCards);
window.addEventListener('resize', adjustIntroLayout);
