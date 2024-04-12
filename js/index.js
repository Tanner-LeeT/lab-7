 async function appInit(){
    const res = await fetch('https://66194cb4125e9bb9f299a48d.mockapi.io/album/api/albums');
    const payload = await res.json();
    console.log(payload);
 }
 appInit()