function f1() {
    this.myProperty = "This is my property";
}
var instanceOne = new f1();
instanceOne.myProperty = "Instance one property changed";
document.getElementById("one").innerHTML = instanceOne.myProperty;
var instanceTwo = new f1();
document.getElementById("two").innerHTML = instanceTwo.myProperty;

var myObject = {
    property: 'Object literal property'
};
myObject.property = "literal property changed";
var anotherObject = myObject;
document.getElementById("objLiteral").innerHTML = anotherObject.property;

var data = 10;
var obj1 = {
    data: 'This is obj1 data',
    f: function(a, b) {
        // alert(this.data);
        // alert(
        // 	a +b
        // );
        document.getElementById('call').innerHTML = this.data;
    }
};

var obj = {
    data: 'This is what we want'
};

obj1.f.call(obj, 5, 8);

// Map, reduce, Filter

var mapButton = document.getElementById('mapButton');
mapButton.onclick = function() {
    const DOLLARS = [2, 4, 6, 8];
    const INR = DOLLARS.map( dollar => dollar * 68.82);
    console.log('Map: Dollars in INR ', INR);
}

var filterButton = document.getElementById('filterButton');
filterButton.onclick = function() {
    const AGE = ['23', '12', '15', '33', '43'];
    const filteredAge = AGE.filter(age =>  age > 18 );
    console.log('Filter: Age > 18', filteredAge);
}

var reduceButton = document.getElementById('reduceButton');
reduceButton.onclick = function() {
    const NUMBERS = [12, 34, 10];
    const SUM = NUMBERS.reduce((result, number) => {
        return result + number;
    }, 0);
    console.log('Sum', SUM);
}

// Table Data (CRUD)
var addButton = document.getElementById("add");
var nameField = document.getElementById("name");
var ageField = document.getElementById("age");
var personDetail = [];
addButton.addEventListener('click', ()=> {
    personDetail = [];
    const personObject = {
        name: nameField.value,
        age: ageField.value
    };
    personDetail.push(personObject);
    console.log(personDetail['length']);
    for (var i = 0; i < personDetail['length']; i++) {
        console.log('i', i);
        var row = $("<tr id='row'/>");
        // var tableReference = document.getElementById("person");
        $("#person").append(row);
        row.append($("<td >" + personDetail[i].name + "</td>"));
        row.append($("<td >" + personDetail[i].age + "</td>"));
        // row.append($("<td>&nbsp;&nbsp;<button type='button' class='btn btn-primary' id='edit'><i class='glyphicon glyphicon-pencil'></i> </button></td>"));
        // row.append($("<td>&nbsp;&nbsp;<button type='button' class='btn btn-danger' id='" + i +"'><i class='glyphicon glyphicon-trash'></i> </button></td>"));
        // // personDetail.splice(0, 1);
        // document.getElementById(i).onclick = function() {
        //     console.log('delete', i);
        //     var rows = document.getElementById('person').getElementsByTagName('tr');
        //     for (i = 0; i < rows.length; i++) {
        //         rows[i].onclick = function() {
        //         personDetail.splice(this.rowIndex - 1, 1);
        //         var index = this.rowIndex;
        //         $("tr").eq(index).remove();        
        //         };
        //     }
        // }

        // document.getElementById("edit").onclick = function() {
        //     console.log('Edit', personDetail[i]);
        // }
    }

    deleteRow =function(index) {
        console.log(index);
    }
    nameField.value = '';
    ageField.value = '';
    nameField.focus();


    // personDetail.push(personObject);
    // console.log(personDetail);
    // var tableReference = document.getElementById("person");
    // var row = $("<tr id='row'/>");
    // row.append($("<td></td>"));
    // tableReference.append(row);
});