// cookieNotice.js

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("cookieConsentAccepted") === "true") return;

  const notice = document.createElement("div");
  notice.innerHTML = `
    <div style="
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: #2c2c2c;
      color: #ffffff;
      padding: 16px;
      font-size: 14px;
      text-align: center;
      z-index: 9999;
      box-shadow: 0 -2px 8px rgba(0,0,0,0.2);
    ">
      This website uses cookies to ensure you get the best experience. 
      See our 
      <a href="/privacy-policy" style="color: #00bfff;">Privacy Policy</a> and 
      <a href="/terms" style="color: #00bfff;">Terms</a>.
      <button id="acceptCookies" style="
        margin-left: 16px;
        background: #00bfff;
        color: #000;
        border: none;
        padding: 8px 12px;
        border-radius: 4px;
        cursor: pointer;
      ">Accept</button>
    </div>
  `;
  document.body.appendChild(notice);

  document.getElementById("acceptCookies").addEventListener("click", function () {
    localStorage.setItem("cookieConsentAccepted", "true");
    notice.remove();
  });
});
