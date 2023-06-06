const url = 'https://valorant-api.com/v1/weapons';

const getUsers = async () => {
    const response = await fetch(url);
    if (!response.ok) {
        const message = 'an error occured';
        throw new Error(message);
    }

    const data = await response.json();
    return data;
}

const div = document.querySelector('.container');

getUsers()
    .then(data => {
        let users = data;
        console.log(data);
        document.getElementById("container").innerHTML = "";
        for (let i = 0; i < data.data.length; i++) {
            console.log(i);

            let weaponWeight = data.data[i].category

            let blockdiv = document.createElement('div');
            blockdiv.setAttribute('class', 'weaponbox');
            let name = document.createElement('h1');
            let category = document.createElement('p');
            let img = document.createElement('img');

            name.textContent = data.data[i].displayName;
            category.textContent = weaponWeight.replace("EEquippableCategory::", "");
            img.src = data.data[i].displayIcon;

            blockdiv.appendChild(img);
            blockdiv.appendChild(name);
            blockdiv.appendChild(category);
            div.appendChild(blockdiv);
        }
    })
    .catch(err => console.log('Rejected: ', err))

function allWeapons() {
    getUsers()
        .then(data => {
            let users = data;
            console.log(data);
            document.getElementById("container").innerHTML = "";
            for (let i = 0; i < data.data.length; i++) {
                console.log(i);

                let weaponWeight = data.data[i].category

                let blockdiv = document.createElement('div');
                blockdiv.setAttribute('class', 'weaponbox');
                let name = document.createElement('h1');
                let category = document.createElement('p');
                let img = document.createElement('img');

                name.textContent = data.data[i].displayName;
                category.textContent = weaponWeight.replace("EEquippableCategory::", "");
                img.src = data.data[i].displayIcon;

                blockdiv.appendChild(img);
                blockdiv.appendChild(name);
                blockdiv.appendChild(category);
                div.appendChild(blockdiv);

            }
        })
        .catch(err => console.log('Rejected: ', err))
}

let weaponType

function filter(weaponType) {
    getUsers()
        .then(data => {
            let users = data;
            console.log(data);
            document.getElementById("container").innerHTML = "";
            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i].category == weaponType) {
                    console.log(i);

                    let weaponWeight = data.data[i].category

                    let blockdiv = document.createElement('div');
                    blockdiv.setAttribute('class', 'weaponbox');
                    let name = document.createElement('h1');
                    let category = document.createElement('p');
                    let img = document.createElement('img');

                    name.textContent = data.data[i].displayName;
                    category.textContent = weaponWeight.replace("EEquippableCategory::", "");
                    img.src = data.data[i].displayIcon;

                    blockdiv.appendChild(img);
                    blockdiv.appendChild(name);
                    blockdiv.appendChild(category);
                    div.appendChild(blockdiv);
                }
            }
        })
        .catch(err => console.log('Rejected: ', err))
}