import sanitizeHtml from 'sanitize-html';

function getCss() {
  return `
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Text&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300&display=swap');
  
      body {
          height: 100vh;
         padding: 32px;
          background-color: #e5e5f7;
  
  background-image: url("https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png");

        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
  
      }
  
      .heading {
          font-family: 'Crimson Pro', serif;
          font-size: 80px;
          font-weight:300;
      }
      
      p {
          font-family: 'Inter', serif;
          font-size: 22px;
        color: #BEBEBE;
      }`;
}

export function getHtml(parsedReq) {
  const { title, logo, url } = parsedReq;

  console.log({ parsedReq })
  return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Automatic Social Image</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCss()}
    </style>
    <body>
    <div>
    <p>${logo}</p>
    <img src="https://launchman-space.nyc3.digitaloceanspaces.com/peerlist-logo.svg" alt="">
    <div class="container">
    <h1 class="heading">${sanitizeHtml(title)}
    </h1>
    <p>${url}</p>
    </div>
</div>
    </body>
</html>`;
}
