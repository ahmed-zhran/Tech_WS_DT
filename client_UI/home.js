async function ReqFromApi(){

    const dataFromApi = await fetch(`http://localhost:5000/home`);
    const result = await dataFromApi.json();
    console.log(result);
    document.getElementById("name").innerText = result;
    
};

