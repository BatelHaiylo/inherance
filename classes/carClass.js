
class Car {
  constructor(numOfWheels, engineCapacity, color) {
    this.numOfWheels = numOfWheels;
    this.engineCapacity = engineCapacity;
    this.color = color;
  }

  getCarInfo() {
    return `car info: number of wheels: ${this.numOfWheels} ,
         engine capacity: ${this.engineCapacity} ,
          car color: ${this.color}`;
  }

//   static getlargestengineCapacityCar(objArray){
//     let best;

//     for(let i = 0; i<objArray.length-1; i++){
//       let previous = objArray[i]
//       let current = objArray[i+1]

//         if(previous<current){
//             best = current
//         }
//         else{best = previous}
//       }
//       return best
//   }

static getlargestengineCapacityCar(objArray){
    let maxObj = objArray[0]
    objArray.forEach(item => {
        if(item.engineCapacity>maxObj.engineCapacity){
            maxObj=item
        }
    });
    return maxObj
  }
}

 class Suv extends Car {
  constructor(numOfWheels, engineCapacity, color, name) {
    super(numOfWheels, engineCapacity, color);
    this.name = name;
  }
  getinfo() {
    return `${super.getCarInfo()} name: ${this.name}`;
  }
}

class Motorbike extends Car {
  constructor(numOfWheels, engineCapacity, color, name) {
    super(numOfWheels, engineCapacity, color);
    this.name = name;
  }
  getinfo() {
    return `${super.getCarInfo()} name: ${this.name}`;
  }
  correctNameWrriting(){
      let res = `${this.name[0].toUpperCase()} ${this.name.substring(1,this.name.length-2)} ${this.name[this.name.length-1].toUpperCase()}`
      return res 
  }
  get res(){
      return `${this.correctNameWrriting()}`
  }
}

class Electrical extends Car {
  constructor(numOfWheels, engineCapacity, color, name) {
    super(numOfWheels, engineCapacity, color);
    this.name = name;
  }
  getInfo() {
    return `${super.getCarInfo()} name: ${this.name}`;
  }
}

// const carA = new Car(4,200, "silver")
// console.log(carA.getCarInfo())
// const carB = new Suv(5,400, "green","bmw")
// console.log(carB.getCarInfo())
// console.log(carB.getinfo())
// const carC = new Motorbike(6,600, "black","Harrley")
// console.log(carC.getCarInfo())
// console.log(carC.getinfo())
// console.log(Suv.res)
// const carD = new Electrical(2,150, "blue","Fiat")
// console.log(carD.getCarInfo())
// console.log(carD.getInfo())
// // const carsArr = [carA.engineCapacity,carB.engineCapacity,carC.engineCapacity,carD.engineCapacity]
// const carsArr = [carA,carB,carC,carD]
// console.log(Car.getlargestengineCapacityCar(carsArr))

function userClassChoise(){
    let userCar =""
    let userOption = document.getElementById("user_class_name")
    switch(userOption.value){
        case "Suv":
             userCar = new Suv (wheel.value,engien.value,car_color.value,car_lable.value)
             break;
        case "Motorbike":
             userCar = new Motorbike (wheel.value,engien.value,car_color.value,car_lable.value)
             break;
        case "Electrical":
             userCar = new Electrical (wheel.value,engien.value,car_color.value,car_lable.value)
             break;
    }
    let table = document.getElementById("base_table")
    table.style = "border-collapse: collapse;"
    let th = document.getElementById("table_head")
    let td = document.getElementById("table_body")

    for(let key in userCar){
        th.innerHTML += `<th> ${key} </th> `
        td.innerHTML += `<td> ${userCar[key]} </td>`
    }
}
