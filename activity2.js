const input = [
    {
        name: "company",
        type: "IS",
        value: [
            "Apple",
            "Google"
        ],
    },
    {
        name: "technology",
        type: "IS",
        value: [
            "Javascript",
            "React"
        ],
    },
    {
        name: "technology",
        type: "NOT",
        value: [
            "Vue",
            "Angular"
        ],
    },
    {
        name: "company",
        type: "NOT",
        value: [
            "Microsoft",
            "Wipro"
        ],
    },
    {
        name: "location",
        type: "NOT",
        value: [
            "Bangalore",
            "Chennai"
        ],
    },
];

//adding initial object to the resultant object
var flag;
var result = {};
var key = input[0].name;
var obj = {};
var key2 = input[0].type;
var obj2={};
obj[key] = {};
obj2[key2] = input[0].value; 
obj[key] = { ...obj[key], ...obj2}
result = {...result, ...obj};

for (var i = 1; i < input.length; i++) {
    flag=0;
    for( var key in result) {  
        //adding values to object where its corresponding key already exists in resultant object
        if (key === (input[i].name)) {
            var key2 = input[i].type;
            var obj2 = {};
            obj2[key2] = input[i].value;
            result[key] = { ...result[key], ...obj2 };
            flag = 1;
            continue;
        }
    }
    //adding value to obect where its corresponding key doesnot exist in the resultant object
    if(flag === 0){
        var key = input[i].name;
        var obj = {};
        var key2 = input[i].type;
        var obj2={};
        obj[key] = {};
        obj2[key2] = input[i].value; 
        obj[key] = { ...obj[key], ...obj2}
        result = {...result, ...obj};
    }
}


console.log(result);

