window.addEventListener('load', function() {
  changeTheme('dilute');
});

function changeTheme(theme) {
  const root = document.documentElement;
  
  root.style.setProperty("--brand", `var(--${theme}-brand)`);
  root.style.setProperty("--accent", `var(--${theme}-accent)`);
  root.style.setProperty("--neutral", `var(--${theme}-neutral)`);
  console.log('colorChanged');
}
