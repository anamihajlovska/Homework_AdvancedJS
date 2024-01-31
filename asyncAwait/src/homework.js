async function getTodoWithId1(id){
    let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    let todo = await response.json();
    console.log(todo);

}

getTodoWithId1(1)

async function UserDetails (userId){
    let response2 = await fetch(`https://jsonplaceholder.typicode.com/todos/${userId}`)
    let todo2 = await response2.json
    console.log(todo2);

    let userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    let userDetails = await userResponse.json();
    console.log(userDetails);
}

UserDetails(1)