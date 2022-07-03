const BasePage = require('./BasePage');

class CategoryMenuPage extends BasePage {

    
    get txtSpecials () {
        return $('#main_menu_top li');
    }

    get txtproducts () {
        return $$("[class='fixed_wrapper'] [class='prdocutname']");
    }

    get ddCart () {
        return $$("[class='dropdown hover']");
    }

    get btnAddToCart () {
        return $('.productpagecart');
    }

    async clickOnSpecials () {
         await this.txtSpecials.click()
    }

    async selectProduct (product) {
       
         for(var i = 0; i < await this.txtproducts.length; i++)
         {   console.log("I am Menu==>"+await this.txtproducts[i].getText());
             if(await this.txtproducts[i].getText() === product)
             {
                 await this.txtproducts[i].click()
                 break
             }
                
         }
     }

     async clickOnAddToCart () {
        await this.btnAddToCart.click()
   }

      

}

module.exports = new CategoryMenuPage();