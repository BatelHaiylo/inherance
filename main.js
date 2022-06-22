
function userClassChoise(){
    let userOption = document.getElementById("user_class_name")
    let userCar =""
    switch(userOption.value){
        case "Suv":
            return userCar = `new Suv (${wheel.value},${engien.value},${car_color.value},${car_lable.value})`
        case "Motorbike":
            return userCar = `new MotoBike (${wheel.value},${engien.value},${car_color.value},${car_lable.value})`
        case "Electrical":
            return userCar = `new Electrical (${wheel.value},${engien.value},${car_color.value},${car_lable.value})`
    }
    printObjToTable()
}


function printObjToTable(){
    let th = document.getElementById("table_head")
    let td = document.getElementById("table_body")

    for(key in userCar){
        th.innerHTML = `<th> ${key} </th>`
    }
    for(key in userCar){
        td.innerHTML = `<td> ${userCar[key]} </td>`
    }
}