const url = 'data.json';

let imgUrl;
let breadName;

const getBread = async () => {
    const response = await fetch(url);
    if (!response.ok) {
        const message = 'an error occured';
        throw new Error(message);
    }

    const data = await response.json();
    return data;
}

const div = document.querySelector('.container');

getBread()
    .then(data => {
        console.log(data);
        document.getElementById("container").innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            console.log(i);

            imgUrl = data[i].img
            breadName = data[i].name

            let blockdiv = document.createElement('div');
            blockdiv.setAttribute('class', 'productBox');
            let img = document.createElement('img');
            let name = document.createElement('p');
            img.src = imgUrl;
            name.textContent = breadName;

            blockdiv.appendChild(img);
            blockdiv.appendChild(name);
            div.appendChild(blockdiv);
        }
    })
    .catch(err => console.log('Rejected: ', err))