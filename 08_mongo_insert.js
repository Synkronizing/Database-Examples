db.customers.insert([{
        first_name:"Troy",
        last_name:"Makons",
        gender:"male",
        age:33,
        address:{
            street:"432 Essex st",
            city:"Lawrence",
            state:"MA"
        },
        memberships:["mem1","mem2"],
        balance:125.32
    }, {
        first_name:"Beth",
        last_name:"Jenkins",
        gender:"female",
        age:23,
        address:{
            street:"411 Blue st",
            city:"Boston",
            state:"MA"
        },
        memberships:["mem2","mem1"],
        balance:505.33
    }, {
        first_name:"William",
        last_name:"Jackson",
        gender:"male",
        age:43,
        address:{
            street:"11 Albany st",
            city:"Boston",
            state:"MA"
        },
        memberships:["mem1","mem2"],

        balance:333.23
    }, {
        first_name:"Sharon",
        last_name:"Thompson",
        gender:"female",
        age:34,
        address:{
            street:"19 Willis st",
            city:"Worchester",
            state:"MA"
        },
        memberships:["mem1","mem2"],
        balance:99.99
    }
]);
