const Article = require('./../models/Article.js')
const HTTP = require('./../folderS,F,E/S,F,E.JS')
const httperespons = require('./../utilites/httperespons.js')


// break
const breakone = async(req,res)=>{
try{
    const cars = await Article.Article.find()
    if(!cars){
        httperespons.First(res,[],200,HTTP.FAIL)
    }else{
        httperespons.Second(res,cars,200,HTTP.SUCCESS)
    }
}catch(err){
    console.log(err);
    httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
}
res.end()
}
 
const breaktow = async(req,res)=>{
    try{
        const bid = req.params.GN
        const cars = await Article.Article.findById(bid)
        if(!cars){
            httperespons.First(res,[],200,HTTP.FAIL)
        }else{
            httperespons.Second(res,cars,200,HTTP.SUCCESS)
        }
    }catch(err){
        console.log(err);
        httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
    }
    res.end()
}


const breakthree = async(req,res)=>{
    try{
        const tanders = await req.body
        const sora = await req.file.filename
        const cars = await Article.Article.create({
            title:tanders.title,
            name:tanders.name,
            price:tanders.price,
            avatar:sora
        }) 
        if(!cars){
            httperespons.First(res,[],200,HTTP.FAIL)
        }else{
            httperespons.Second(res,cars,200,HTTP.SUCCESS)
        }
    }catch(err){
        console.log(err);
        httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
    }
    res.end()
}


const breakfour = async(req,res)=>{

    try{
        const bid =  req.params.GN
        const tanders = await req.body
        const cars = await Article.Article.findByIdAndUpdate(bid,tanders,{new:true , runValidators:true})
        if(!cars){
            httperespons.First(res,[],200,HTTP.FAIL)
        }else{
            httperespons.Second(res,cars,200,HTTP.SUCCESS)
        }
    }catch(err){
        console.log(err);
        httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
    }
    res.end()
}


const breaksexs = async(req,res)=>{
    try{
        const bid = req.params.GN
        const cars = await Article.Article.findByIdAndDelete(bid)
        if(!cars){
            httperespons.First(res,[],200,HTTP.FAIL)
        }else{
            httperespons.Second(res,cars,200,HTTP.SUCCESS)
        }
    }catch(err){
        console.log(err);
        httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
    }
    res.end()
}


// Dishes
const Dishesone = async(req,res)=>{
    try{
        const cars = await Article.MainDish.find()
        if(!cars){
            httperespons.First(res,[],200,HTTP.FAIL)
        }else{
            httperespons.Second(res,cars,200,HTTP.SUCCESS)
        }
    }catch(err){
        console.log(err);
        httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
    }
    res.end()
}
     
const Dishestow = async(req,res)=>{
        try{
            const bid = req.params.GN
            const cars = await Article.MainDish.findById(bid)
            if(!cars){
                httperespons.First(res,[],200,HTTP.FAIL)
            }else{
                httperespons.Second(res,cars,200,HTTP.SUCCESS)
            }
        }catch(err){
            console.log(err);
            httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
        }
        res.end()
}
    
    
const Dishesthree = async(req,res)=>{
        try{
            const tanders = await req.body
            const sora = await req.file.filename
            const cars = await Article.MainDish.create({
                title:tanders.title,
                name:tanders.name,
                price:tanders.price,
                avatar:sora
            })
            if(!cars){
                httperespons.First(res,[],200,HTTP.FAIL)
            }else{
                httperespons.Second(res,cars,200,HTTP.SUCCESS)
            }
        }catch(err){
            console.log(err);
            httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
        }
        res.end()
}
    
    
const Dishesfour = async(req,res)=>{
    
        try{
            const bid =  req.params.GN
            const tanders = await req.body
            const cars = await Article.MainDish.findByIdAndUpdate(bid,tanders,{new:true , runValidators:true})
            if(!cars){
                httperespons.First(res,[],200,HTTP.FAIL)
            }else{
                httperespons.Second(res,cars,200,HTTP.SUCCESS)
            }
        }catch(err){
            console.log(err);
            httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
        }
        res.end()
}
    
    
const Dishessexs = async(req,res)=>{
        try{
            const bid = req.params.GN
            const cars = await Article.MainDish.findByIdAndDelete(bid)
            if(!cars){
                httperespons.First(res,[],200,HTTP.FAIL)
            }else{
                httperespons.Second(res,cars,200,HTTP.SUCCESS)
            }
        }catch(err){
            console.log(err);
            httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
        }
        res.end()
}
    


// Jois
const Joisone = async(req,res)=>{
        try{
            const cars = await Article.JoisDrin.find()
            if(!cars){
                httperespons.First(res,[],200,HTTP.FAIL)
            }else{
                httperespons.Second(res,cars,200,HTTP.SUCCESS)
            }
        }catch(err){
            console.log(err);
            httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
        }
        res.end()
}
         
const Joistow = async(req,res)=>{
            try{
                const bid = req.params.GN
                const cars = await Article.JoisDrin.findById(bid)
                if(!cars){
                    httperespons.First(res,[],200,HTTP.FAIL)
                }else{
                    httperespons.Second(res,cars,200,HTTP.SUCCESS)
                }
            }catch(err){
                console.log(err);
                httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
            }
            res.end()
}
        
        
const Joisthree = async(req,res)=>{
            try{
                const tanders = await req.body
                const sora = await req.file.filename
                const cars = await Article.JoisDrin.create({
                title:tanders.title,
                name:tanders.name,
                price:tanders.price,
                avatar:sora
            })
                if(!cars){
                    httperespons.First(res,[],200,HTTP.FAIL)
                }else{
                    httperespons.Second(res,cars,200,HTTP.SUCCESS)
                }
            }catch(err){
                console.log(err);
                httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
            }
            res.end()
}
         
const Joisfour = async(req,res)=>{
        
            try{
                const bid =  req.params.GN
                const tanders = await req.body
                const cars = await Article.JoisDrin.findByIdAndUpdate(bid,tanders,{new:true , runValidators:true})
                if(!cars){
                    httperespons.First(res,[],200,HTTP.FAIL)
                }else{
                    httperespons.Second(res,cars,200,HTTP.SUCCESS)
                }
            }catch(err){
                console.log(err);
                httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
            }
            res.end()
}
        
const Joissexs = async(req,res)=>{
            try{
                const bid = req.params.GN
                const cars = await Article.JoisDrin.findByIdAndDelete(bid)
                if(!cars){
                    httperespons.First(res,[],200,HTTP.FAIL)
                }else{
                    httperespons.Second(res,cars,200,HTTP.SUCCESS)
                }
            }catch(err){
                console.log(err);
                httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
            }
            res.end()
}
        
    
// Bacer
const Bacerone = async(req,res)=>{
            try{
                const cars = await Article.BacerDesse.find()
                if(!cars){
                    httperespons.First(res,[],200,HTTP.FAIL)
                }else{
                    httperespons.Second(res,cars,200,HTTP.SUCCESS)
                }
            }catch(err){
                console.log(err);
                httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
            }
            res.end()
}
             
const Bacertow = async(req,res)=>{
                try{
                    const bid = req.params.GN
                    const cars = await Article.BacerDesse.findById(bid)
                    if(!cars){
                        httperespons.First(res,[],200,HTTP.FAIL)
                    }else{
                        httperespons.Second(res,cars,200,HTTP.SUCCESS)
                    }
                }catch(err){
                    console.log(err);
                    httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
                }
                res.end()
}
                
const Bacerthree = async(req,res)=>{
                try{
                    const tanders = await req.body
                    const sora = await req.file.filename
                const cars = await Article.BacerDesse.create({
                    title:tanders.title,
                    name:tanders.name,
                    price:tanders.price,
                    avatar:sora
                })
                    if(!cars){
                        httperespons.First(res,[],200,HTTP.FAIL)
                    }else{
                        httperespons.Second(res,cars,200,HTTP.SUCCESS)
                    }
                }catch(err){
                    console.log(err);
                    httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
                }
                res.end()
}
            
const Bacerfour = async(req,res)=>{
            
                try{
                    const bid =  req.params.GN
                    const tanders = await req.body
                    const cars = await Article.BacerDesse.findByIdAndUpdate(bid,tanders,{new:true , runValidators:true})
                    if(!cars){
                        httperespons.First(res,[],200,HTTP.FAIL)
                    }else{
                        httperespons.Second(res,cars,200,HTTP.SUCCESS)
                    }
                }catch(err){
                    console.log(err);
                    httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
                }
                res.end()
}
            
const Bacersexs = async(req,res)=>{
                try{
                    const bid = req.params.GN
                    const cars = await Article.BacerDesse.findByIdAndDelete(bid)
                    if(!cars){
                        httperespons.First(res,[],200,HTTP.FAIL)
                    }else{
                        httperespons.Second(res,cars,200,HTTP.SUCCESS)
                    }
                }catch(err){
                    console.log(err);
                    httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
                }
                res.end()
}

// Book
const Bookone = async(req,res)=>{
                try{
                    const cars = await Article.BookT.find()
                    if(!cars){
                        httperespons.First(res,[],200,HTTP.FAIL)
                    }else{
                        httperespons.Second(res,cars,200,HTTP.SUCCESS)
                    }
                }catch(err){
                    console.log(err);
                    httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
                }
                res.end()
}
                 
const Booktow = async(req,res)=>{
                    try{
                        const bid = req.params.GN
                        const cars = await Article.BookT.findById(bid)
                        if(!cars){
                            httperespons.First(res,[],200,HTTP.FAIL)
                        }else{
                            httperespons.Second(res,cars,200,HTTP.SUCCESS)
                        }
                    }catch(err){
                        console.log(err);
                        httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
                    }
                    res.end()
}
                         
const Bookthree = async(req,res)=>{
                    try{
                        const tanders = await req.body
                    const cars = await Article.BookT.create(tanders)
                        if(!cars){
                            httperespons.First(res,[],200,HTTP.FAIL)
                        }else{
                            httperespons.Second(res,cars,200,HTTP.SUCCESS)
                        }
                    }catch(err){
                        console.log(err);
                        httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
                    }
                    res.end()
}
                
const Bookfour = async(req,res)=>{
                
                    try{
                        const bid =  req.params.GN
                        const tanders = await req.body
                        const cars = await Article.BookT.findByIdAndUpdate(bid,tanders,{new:true , runValidators:true})
                        if(!cars){
                            httperespons.First(res,[],200,HTTP.FAIL)
                        }else{
                            httperespons.Second(res,cars,200,HTTP.SUCCESS)
                        }
                    }catch(err){
                        console.log(err);
                        httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
                    }
                    res.end()
}
                

const Booksexs = async(req,res)=>{
                    try{
                        const bid = req.params.GN
                        const cars = await Article.BookT.findByIdAndDelete(bid)
                        if(!cars){
                            httperespons.First(res,[],200,HTTP.FAIL)
                        }else{
                            httperespons.Second(res,cars,200,HTTP.SUCCESS)
                        }
                    }catch(err){
                        console.log(err);
                        httperespons.Third(res,['Error in here:'],404,HTTP.ERROR) 
                    }
                    res.end()
}
    


module.exports = {
    breakone,
    breaktow,
    breakthree,
    breakfour,
    breaksexs,
    Dishesone,
    Dishestow,
    Dishesthree,
    Dishesfour,
    Dishessexs,
    Joisone,
    Joistow,
    Joisthree,
    Joisfour,
    Joissexs,
    Bacerone,
    Bacertow,
    Bacerthree,
    Bacerfour,
    Bacersexs,
    Bookone,
    Booktow,
    Bookthree,
    Bookfour,
    Booksexs,
}