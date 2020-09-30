document.addEventListener('DOMContentLoaded', function () {
    for (var i = 1; i < 101; i++) {
        var h3 = document.createElement('h3')
        h3.textContent = `Accusation ${i}`
        var details = addDetails(i);
        h3.addEventListener('click', details);
        document.body.appendChild(h3);
    }




})


function addDetails(i) {
    friends = ['Alex', 'Joey', 'Hunter', 'Noah', 'Karson']
    locations = ['Pier', 'Lake', 'Shed', 'Second Shed', 'Garage', 'Kitchen', 'Bathroom', 'Driveway', 'Living room', 'Boat']
    objects = ['Woman', 'Float', 'Life Jacket', 'Boat Keys', 'Shovel', 'Gun', 'Drill', 'Fishing Pole', 'Pool Noodle', 'Energy Drink', 'Xbox Controller', 'Phone', 'Paper Hat',
        'Soup', 'BBQ', 'Fish', 'Glizzy', 'BTS shrine', 'Single Cheeto', 'RTX 3090']




return function () {
    alert (`Accusation ${i}: I accuse ${friends[i % 5]}, with the ${objects[i % 20]} in the ${locations[i % 10]}!`)
}
}
//function Scenarios() {
    //friends + ' was at ' + locations + ' with a ' + objects
//}


