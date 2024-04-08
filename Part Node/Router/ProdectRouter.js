const express = require('express')
const router = express.Router()
const ProdectControl = require('./../Controler/ProdectControl.js') 
const multer = require('multer')

const ok = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      console.log(file);
      const DR = Math.round(Math.random() * 1E9)
      const TN = file.mimetype.split('/')[1]
      const finalname = DR + '.' + TN 
      cb(null, finalname) 
    }
  })
  
  const tanks = multer({ storage: ok,
    fileFilter:(req,file,cb)=>{
     const tanse = file.mimetype.split('/')[0]
     if(tanse !== 'image' ){
        cb(null, false)
     }else{
         cb(null, true)
     }
      }  
})


// breakfast
router.route('/api/breakfast').get(ProdectControl.breakone).post(tanks.single('avatar'),ProdectControl.breakthree)
router.route('/api/breakfast/:GN').get(ProdectControl.breaktow).patch(tanks.single('avatar'),ProdectControl.breakfour).delete(ProdectControl.breaksexs)

// MainDish
router.route('/api/MainDish').get(ProdectControl.Dishesone).post(tanks.single('avatar'),ProdectControl.Dishesthree)
router.route('/api/MainDish/:GN').get(ProdectControl.Dishestow).patch(ProdectControl.Dishesfour).delete(ProdectControl.Dishessexs)

// JoisDrin
router.route('/api/JoisDrin').get(ProdectControl.Joisone).post(tanks.single('avatar'),ProdectControl.Joisthree)
router.route('/api/JoisDrin/:GN').get(ProdectControl.Joistow).patch(ProdectControl.Bacerfour).delete(ProdectControl.Joissexs)

// BacerDesse
router.route('/api/BacerDesse').get(ProdectControl.Bacerone).post(tanks.single('avatar'),ProdectControl.Bacerthree)
router.route('/api/BacerDesse/:GN').get(ProdectControl.Bacertow).patch(ProdectControl.Bacerfour).delete(ProdectControl.Bacersexs)

// BookTable 
router.route('/api/BookTable').get(ProdectControl.Bookone).post(ProdectControl.Bookthree)
router.route('/api/BookTable/:GN').get(ProdectControl.Booktow).patch(ProdectControl.Bookfour).delete(ProdectControl.Booksexs)
   
module.exports = router