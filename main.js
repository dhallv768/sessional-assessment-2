document.querySelector('#searchBtn').addEventListener('click',() =>{
    const xhr=new XMLHttpRequest()
    const value =document.querySelector('#input-search').value

    let url = `https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`

    xhr.open('GET',url)
    xhr.onreadystatechange=()=>{
        if(xhr.status===200 && xhr.readyState===4){
            const response =JSON.parse(xhr.responseText)

            let output =''

            for(let i=0;i<response.items.length;i++){
                output+=`
                <div style="width: 22%; margin: 0.5em;">
                    <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank" >
                        <img style="width: 100%;" src=${response.items[i].snippet.thumbnails.high.url} />
                    </a>
                    <h5>${response.items[i].snippet.title}</h5>
                    <p style="color: gray;">${response.items[i].snippet.description}</p>
                </div>
                `
            }
            document.querySelector('#images').innerHTML=output
        }
    }

    xhr.send()
})