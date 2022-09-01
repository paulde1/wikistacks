 const express = require('express')
 const router = express.Router()
 const { main, addPage, editPage, wikiPage } = require("../views");
 const { Page, User } = require("../models");


 wikiPage(Page)
 router.get("/", async (req, res, next) => {
    try{
const pages = await Page.findAll();
  res.send(main(pages))
    }catch(error) {
        next(error)
    }
  });
  router.get('/add', (req, res) => {
    res.send(addPage())
  })

  router.post("/", async (req, res, next) => {
    try {
      const [user, wasCreated] = await User.findOrCreate({
        where: {
          name: req.body.name,
          email: req.body.email
        }
      });
      const page = await Page.create(req.body);
      await page.setAuthor(user);
      res.redirect("/wiki/" + page.slug);
    } catch (error) {
      next(error);
    }
  });


  router.get('/:slug', async(req, res, next) => {
    try {
      const page = await Page.findOne({
        where: {
          slug: req.params.slug
        }
      });
      
      res.json(page);
      res.redirect(`/wiki/${page.slug}`)
  
    } catch (error) {
      next(error)
    }
  });


  router.put("/:slug", async (req, res, next) => {
    try {
      const [updatedRowCount, updatedPages] = await Page.update(req.body, {
        where: {
          slug: req.params.slug
        },
        returning: true
      });
      res.redirect("/wiki/" + updatedPages[0].slug);
    } catch (error) {
      next(error);
    }
  });


  


  //   router.post('/', (req, res, next) => {
//     res.send('this is wiki-post')
//   })




//     let title =  req.body.title
//     let content =  req.body.content
//   try {
//     const page = await Page.create({
//       title: title, 
//       content: content,  
// });
//     res.redirect('/');
//   } catch (error) { next(error) }
// });




module.exports = router