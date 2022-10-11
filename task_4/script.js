const getData = async () => {
    const response = await fetch("https://reqres.in/api/users");
    if (response.ok) {
    const data = await response.json();
    return data;
    }
    else {
        console.log("Error: ", response.status)
    }
}

getData().then(data => console.log(data));