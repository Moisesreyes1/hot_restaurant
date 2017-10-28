app.get("api/tables", function(rep , res){res.JSON(tabledata)});
app.get("api/waitlisst",function(rep, res) {res.JSON(waitlist)});

app.post("api/table",function(rep , res){ 
    if(tableData.lenght< 5){
        tableData.push(rep.body);
        res.json(true);
    }
    
});
app.post("api/waitlisst",function(rep, res){
    if(tableData.lenght>5){
        waitlistData.push(rep.body);
        res.json(true);

    }
});