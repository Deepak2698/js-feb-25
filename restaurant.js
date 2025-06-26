//Classes in javascript


/***
 * class restaurant{
 * 
 * // data members
 * // method functions
 * 
 * }
 * 
 * let obj = new restaurant();
 * 
 * 
 */


class restaurant{

    //data members
    restaurantList = [
        {id:1,name:'KFC',location:'FC Road',city:'Pune'},
        {id:2,name:'Dominos',location:'Bistupur',city:'Jamshedpur'},
        {id:3,name:'Litti Chokha',location:'Hazaribaug',city:'Patna'},
        {id:4,name:'Bangalore Cafe',location:'Shivajinagar',city:'bangalore'},
    ];

    //method functions
    displayRestaurant(){
        this.restaurantList.forEach((value) => {
            console.log(`We are visting ${value.name} having id as ${value.id} in ${value.location} inside ${value.city} `);
        });
    }
}

const obj = new restaurant();

// console.log(obj.restaurantList);
obj.displayRestaurant();
