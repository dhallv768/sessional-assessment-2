document.querySelector('#fetchbtn').addEventListener('click',()=>{
    const xhr= new XMLHttpRequest()
    xhr.open('GET','https://jsonplaceholder.typicode.com/photos',true);
    xhr.onload=function(){
        const response = JSON.parse(xhr.responseText);

        let temp="";
        for(let i=0;i<response.length;i++){
            let id=response[i].thumbnailUrl;
            let title =response[i].title;
            temp+=`
            <div style="text-align">
            <img src="${id}" style=" margin-right=50px;">
            <div style="width:120px">
            <p style="overflow:auto">${title}</p>
            </div>
        </div>
            `
        }
        document.querySelector('#images').innerHTML=temp
    }
    xhr.send()
})