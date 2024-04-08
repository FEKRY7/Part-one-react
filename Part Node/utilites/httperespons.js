// FAIL
const First = (res,data,statuscod,statustext)=>{
res.status(statuscod).json({
    "status":statustext , 
    "data":data
})
}


// SUCCESS
const Second = (res,data,statuscod,statustext)=>{
    res.status(statuscod).json({
        "status":statustext , 
        "data":{
            'products': data
        }
    })
}

// ERROR
const Third = (res,massege,statuscod,statustext)=>{
    res.status(statuscod).json({
        "status":statustext , 
        "massege":massege
    })
}

module.exports={
 First ,
 Second,
 Third  
}