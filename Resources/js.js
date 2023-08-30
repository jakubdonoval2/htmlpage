//import{
//    OrderForm1,
//} from './OrderForm.js';

//declaring important variables which will be needed later, ValuesForm1,2 for storing customer adress 
var ShoppingBasket = false;
var currentLayot;
var productCount = 0;
const ValuesForm1 = [];
const ValuesForm2 = [];

//declaring two products
var laptop = {
    ID: "Laptop Basic Offer",
    Price: 1299,
    Quantity: 0,
  };

var laptop365 = {
    ID: "Laptop with 365 Office Package",
    Price: 1399,
    Quantity: 0,
  };

//class cart mostly to handle transition from product page to the shopping cart
class Cart{
    productsList = [];
    constructor(productname){
        this.itemID = this.itemID;
        this.productname = this.productname;
        debugger
        this.productsList.push(productname);
        return this.itemID,this.productsList,this.productname;

    }

//display summary for calculating total price of products in the basket
    displaySummary(){
//showing html element with Order summary that is on pageload set to hidden with CSS
        const InsertSummaryTo = document.getElementById("OrderSummary");
        InsertSummaryTo.style.display="inline";
//deleting all previous childrens of the summary element to make sure that there aren`t any element stacking on top
// of each other
        while (InsertSummaryTo.firstChild) {
            InsertSummaryTo.removeChild(InsertSummaryTo.firstChild);
          }
//creates new html element to which text displaing total price will be appended
        const Summary = document.createElement('div');
        Summary.setAttribute("id", "PriceSummary");
        const DisplayTotalPrice = document.createElement('h5');
        DisplayTotalPrice.setAttribute("id","TotalPriceText")
//calculating total price of the products
        let TotalPrice = laptop.Quantity*laptop.Price + laptop365.Quantity*laptop365.Price;
        DisplayTotalPrice.textContent = "Total: $"+ TotalPrice;
        debugger
//adding elements to the parent
        InsertSummaryTo.appendChild(Summary);
        Summary.appendChild(DisplayTotalPrice);
    }
//function to hide summary and remove all the children
    removeSummary(){
            const InsertSummaryTo = document.getElementById("OrderSummary");
            while (InsertSummaryTo.firstChild) {
                InsertSummaryTo.removeChild(InsertSummaryTo.firstChild);
              }
              debugger
            InsertSummaryTo.style.display="none";
        }

//function for displaying products total price and remove item button, which is invoked after order now button click
    displayProducts(element){
        //declaring necessary html elements
        const StartingCol = document.getElementById("ProductsDisplay");
        const newH1IDTag= document.createElement("h5");
        const newH1QuantityTag= document.createElement("h5");
        const newH1PriceTag= document.createElement("h5");
        const newRemoveItemButton = document.createElement("button");
        productCount++;
        //unhiding summary element
        this.displaySummary();


            //deciding which product it is and if it is the first, because when it is first we must initialize
            //all the Html elements, then when other product of the same kind is added we just update some of those 
            //elements
            if ((element == laptop.ID )&& (laptop.Quantity == 1 )){
                const Collum = document.createElement("div");
                Collum.setAttribute("id", element );
                //each product have separate row in the container 
                Collum.setAttribute("class","row justify-content-center align-items-center")
                const ProductQuantity = document.createElement("div");
                //next line creates collums insite specified row, there will be four collums for products quantity, product name,
                // product price and remove item button
                ProductQuantity.setAttribute("class","col-1 text-center text-md-start")
                ProductQuantity.setAttribute("id","productQuantity");
                StartingCol.appendChild(Collum);
                Collum.appendChild(ProductQuantity);
                debugger
                newH1QuantityTag.setAttribute("id", element+"1");
                newH1QuantityTag.textContent = laptop.Quantity;
                ProductQuantity.appendChild(newH1QuantityTag);
                const ProductName = document.createElement("div");
                ProductName.setAttribute("class","col-5 text-center text-md-start")
                ProductName.setAttribute("id","productName");
                Collum.appendChild(ProductName);
                newH1IDTag.textContent = laptop.ID;
                ProductName.appendChild(newH1IDTag);
                const ProductPrice = document.createElement("div");
                ProductPrice.setAttribute("class","col-md-2 text-center text-md-start");
                ProductPrice.setAttribute("id","productPrice");
                Collum.appendChild(ProductPrice);               
                newH1PriceTag.textContent = "$"+laptop.Price;
                ProductPrice.appendChild(newH1PriceTag);
                //creating html element for remove item button and setting its class parameter, id and on click
                //parameter
                const RemoveItemButton = document.createElement("div");
                RemoveItemButton.setAttribute("class","col-md-2 text-center text-md-start");
                RemoveItemButton.setAttribute("id","removeItemButton");
                Collum.appendChild(RemoveItemButton);
                newRemoveItemButton.textContent = "Remove Item";
                newRemoveItemButton.setAttribute("ID", "removeButton")
                newRemoveItemButton.setAttribute("class", "btn bg-primary text-white border border-black");
                newRemoveItemButton.setAttribute("type", "button");
                //setting on click parameter so it will call removeItem function with parameter being object on which the 
                //quantity should be lowered
                newRemoveItemButton.setAttribute("onclick", "removeItem('Laptop Basic Offer')");
                RemoveItemButton.appendChild(newRemoveItemButton);
                debugger
                return;
            


            }
            //now if there will be more products than 1 of the same kind we do have create all the html elements,
            //because those have been created when first product was added to cart, now we just update the
            //content with innerHTML DOM function
            else if ((element == laptop.ID) && ((laptop.Quantity > 1) && (laptop.Quantity < 5))){
                const quantityUpdate = document.getElementById(element+"1");
                quantityUpdate.innerHTML = laptop.Quantity;
                return;
                debugger

            }
            //now we are going to repeat the same process for the second product
            //meaning, initialize all the html elements
            else if((element == laptop365.ID) && (laptop365.Quantity ==1)){
                const Collum = document.createElement("div");
                Collum.setAttribute("id", element );
                //creating another row in the containder that will independent of the second product row
                Collum.setAttribute("class","row justify-content-center align-items-center")
                const ProductQuantity = document.createElement("div");
                ProductQuantity.setAttribute("class","col-1 text-center text-md-start")
                ProductQuantity.setAttribute("id","productQuantity");
                StartingCol.appendChild(Collum);
                Collum.appendChild(ProductQuantity);
                debugger
                newH1QuantityTag.setAttribute("id", element+"1");
                newH1QuantityTag.textContent = laptop365.Quantity;
                ProductQuantity.appendChild(newH1QuantityTag);
                const ProductName = document.createElement("div");
                ProductName.setAttribute("class","col-5 text-center text-md-start")
                ProductName.setAttribute("id","productName");
                Collum.appendChild(ProductName);
                newH1IDTag.textContent = laptop365.ID;
                ProductName.appendChild(newH1IDTag);
                const ProductPrice = document.createElement("div");
                ProductPrice.setAttribute("class","col-md-2 text-center text-md-start");
                ProductPrice.setAttribute("id","productPrice");
                Collum.appendChild(ProductPrice);               
                newH1PriceTag.textContent = "$"+laptop365.Price;
                ProductPrice.appendChild(newH1PriceTag);
                //creating remove item element which will call remove Item function with paramenter of 
                // product that is being removed from the cart
                const RemoveItemButton = document.createElement("div");
                RemoveItemButton.setAttribute("class","col-md-2 text-center text-md-start");
                RemoveItemButton.setAttribute("id","removeItemButton");
                Collum.appendChild(RemoveItemButton);
                newRemoveItemButton.textContent = "Remove Item";
                newRemoveItemButton.setAttribute("ID", "removeButton")
                newRemoveItemButton.setAttribute("class", "btn bg-primary text-white border border-black");
                newRemoveItemButton.setAttribute("type", "button");
                newRemoveItemButton.setAttribute("onclick", "removeItem('Laptop with 365 Office Package')");
                RemoveItemButton.appendChild(newRemoveItemButton);
                debugger
                return;

            }
            //updating parameters if another product is added to the cart
            else if (element == laptop365.ID && laptop365.Quantity > 1 && laptop365.Quantity < 5){
                const quantityUpdate = document.getElementById(element+"1");
                quantityUpdate.innerHTML = laptop365.Quantity;
                return;
            }
            //here we will denie of added more products than 5 of the same kind, because products are 
            //expensive so orders with large qunatities can fraud orders
            else if (laptop.Quantity || laptop365.Quantity > 5){
                alert("max limit of products reached");
                return;
            }  
            //hiding the shopping cart and displaing the main page   
            else 
            document.getElementById("mainPage").style.display="inline";
            document.getElementById("shoppingBasketActive").style.display="none";
            return;
    
        }
    }
//this is the main function that is executed after order button click on the product
function activateBasket(item){
    document.getElementById("shoppingBasketActive").style.display="none";
    //depending on which order button was clicked different parameters are going to specify which 
    //product should be added to cart
    if (item == "Laptop Basic Offer"){
        //setting shopping cart for the first product laptop
        ShoppingBasket = true;
        document.getElementById("mainPage").style.display="none";
        document.getElementById("shoppingBasketActive").style.display="inline";
        //instantiating new object of type Cart which have methods for displaing the order summary
        const product1 = new Cart(item);
        //instantiating new object of type OrderForm used for getting shipping adress and operations with it
        const OrderForm1 = new OrderForm(1);
        //clering previous variables
        OrderForm1.clearShippingFormValuess();
        //increasing count of product 
        laptop.Quantity++;
        //display product function creates html elemens that then display item informations
        product1.displayProducts(item);
        debugger
        return ShoppingBasket,product1,OrderForm1;

    }
    else if (item == "Laptop with 365 Office Package"){
        ShoppingBasket = true;
        //displaing shopping cart and hidding the main page 
        document.getElementById("mainPage").style.display="none";
        document.getElementById("shoppingBasketActive").style.display="inline";
        //cerating new object of type product that handles displaying the product and summary
        const product1 = new Cart(item);
        //creating object cof type OrderForm that handles getting shipping form values
        const OrderForm1 = new OrderForm(1);
        OrderForm1.clearShippingFormValuess();
        debugger
        laptop365.Quantity++;
        product1.displayProducts(item);
        return ShoppingBasket,product1,OrderForm1;
    }
    //if clicked an the basket menu from the main page
    else if(item == "basketIcon"){
        document.getElementById("mainPage").style.display="none";
        document.getElementById("shoppingBasketActive").style.display="inline";


    }
    else document.getElementById("mainPage").style.display="none";
    document.getElementById("shoppingBasketActive").style.display="inline";


    return ShoppingBasket;



}

function backHome(){
    //bavkHome function providesnavigation between basket and main page
    document.getElementById("mainPage").style.display="inline";
    document.getElementById("shoppingBasketActive").style.display="none";
}

function removeItem(tagID){
    //removeItem function is called when someone clicks on the remove item button in the product page
    //if there are more products of the same kind, and customer clicks on remove item button, quantity is lowered
    //and final price updated with display summary method
    if ((tagID == laptop.ID) && laptop.Quantity > 1 ){
        laptop.Quantity--;
        productCount--;
        document.getElementById(tagID+"1").innerHTML = laptop.Quantity;
        product1.displaySummary();
        return;
    }
    //same applies for second product
    else if (tagID == laptop365.ID && laptop365.Quantity > 1 ){
        laptop365.Quantity--;
        productCount--;
        document.getElementById(tagID+"1").innerHTML = laptop365.Quantity;
        product1.displaySummary();
        return;
        }
    //if there is only one product and customer removes we have to remove html elements associated with the product
    else if (tagID == laptop.ID && laptop.Quantity == 1){
        debugger
        let RemoveContent = document.getElementById("ProductsDisplay");
        let ProductBeingRemoved = document.getElementById(tagID);
        //removing html elements which were created when customer added them into cart
        let RemovedNode = RemoveContent.removeChild(ProductBeingRemoved);
        //setting quantity to 0
        laptop.Quantity--;
        productCount--;
        product1.displaySummary();

        if(productCount ==0){
            //handlig situation when cart is empty
            const OrderForm1 = new OrderForm;
            OrderForm1.removeNewForm2();
            product1.removeSummary();
            backHome();
        }
        return;
    }
    else if (tagID ==laptop365.ID && laptop365.Quantity == 1){
        //removing all the elements of the product
        let RemoveContent = document.getElementById("ProductsDisplay");
        let ProductBeingRemoved = document.getElementById(tagID);
        let RemovedNode = RemoveContent.removeChild(ProductBeingRemoved);
        laptop365.Quantity--;
        productCount--;
        product1.displaySummary();

        if(productCount == 0){
            const OrderForm1 = new OrderForm;
            OrderForm1.removeNewForm2()
            OrderForm1.removeNewForm();
            product1.removeSummary();
            backHome();
        }

        return;
    }

}
function getShippingInputValues(WhichOrderForm){
//function getShippingInputValues is called when submit adress information button is
//clicked
//function creates objects of type OrderForm and then calls its methods to handle input values of customer
const OrderForm1 = new OrderForm;
OrderForm1.getInputValues(WhichOrderForm);
return;
}

class OrderForm{
    //properties which will store values from shipping adress form
    ShippingForm = document.getElementById("shippingForm");
    ShippingForm2 = document.getElementById("shippingForm2");
    ShippingFormValues = [];
    FirstName = "FirstName";
    SecondName = "SecondName";
    Email = "Email";
    Telephone = "Telephone";
    Adress = "Adress";
    Adress2 = "Adress2";
    City="City";
    State="State";
    Zip="Zip";
    ParID = 0;
    Properties = [];
    PreviousErrorSigns = [];


    constructor(ParID){
        //creating list of properties that are in the shipping form
        ParID = this.ParID;
        this.Properties.push(this.FirstName,this.SecondName, this.Email,this.Telephone,this.Adress,this.Adress2,this.State,this.City,this.Zip);
        
        return this.Properties,this.addNewForm(),this.removeNewForm2();
    }

    getProperties (){
        //getter for properties
            return this.Properties;
    }

    getValuesForm1(){
        //getter for ValuesForm1
        return ValuesForm1;
    }

    getValuesForm2(){
        //getter for ValuesForm2
        return ValuesForm2;
    }

    addNewForm(){
        this.ShippingForm.style.display = "inline";
        return
    }
    
    addNewForm2(){
        this.ShippingForm2.style.display = "inline";
    }


    removeNewForm(){
        this.ShippingForm.style.display = "none";
    }

    removeNewForm2(){
        this.ShippingForm2.style.display = "none";
    }


    checkActiveProduct(q1,q2){
        //checking whether there is some ptoduct in the cart, if not it hides cart page
        if (q1 + q2 == 0) {
            this.removeNewForm();
          }
          else {
            this.addNewForm();
          }

    }   
    
    clearPreviousErrorSigns(){
        //function to clear PreviousErrorSigns array which stores incorrect Shipping Adress form values
        //this function is used when displaying error when user exeeded maximum character limit or left empty field 
        //this function is called on submit shipping adress button 
        while(this.PreviousErrorSigns.length > 0){
            this.PreviousErrorSigns.pop();
            debugger
        }

    }

    clearShippingFormValuess(){
        //function for clearing revious shipping adresss values
        while(this.ShippingFormValues.length > 0){
            this.ShippingFormValues.pop();
        }
    }
    
    getInputValues(WhichOrderForm){
        //function for getting values from shipping adress form fields,
        //adding them into ShippingFormValues array
        this.clearShippingFormValuess()
        let FirstName = document.getElementById("inputFirstName"+WhichOrderForm).value;
        let SecondName = document.getElementById("inputSecondName"+WhichOrderForm).value;
        let Email = document.getElementById("inputEmail"+WhichOrderForm).value;
        let Telephone = document.getElementById("inputTelephone"+WhichOrderForm).value;
        let Adress = document.getElementById("inputAdress"+WhichOrderForm).value;
        let Adress2 = document.getElementById("inputAdress2"+WhichOrderForm).value;
        let AdressCity = document.getElementById("inputCity"+WhichOrderForm).value;
        let AdressState = document.getElementById("inputState"+WhichOrderForm).value;
        let AdressZip = document.getElementById("inputZip"+WhichOrderForm).value;
        this.ShippingFormValues.push(FirstName,SecondName,Email,Telephone,Adress,Adress2,AdressCity,AdressState,AdressZip);
        debugger
        return FirstName,SecondName,Email,Telephone,Adress,Adress2,AdressCity,AdressState,AdressZip, this.ShippingFormValues, this.validateInputValues(WhichOrderForm);
    }
    validateInputValues(WhichOrderForm){
        //function for checking that input fields aren't empnty and that they don`t exeed limit of 30 characters
        //if the field is breaking one of those rules error is going to be displayed
        let NumberOfPreviousErorrs = this.PreviousErrorSigns.length;
        for(let b = 0; b<NumberOfPreviousErorrs;b++){
            debugger
            let node = document.getElementById(this.PreviousErrorSigns[b]);
            //first we are going to remove previous error html elements
            if (node.parentNode) {
               node.parentNode.removeChild(node);
            }
        }
        //clear array that stores errors
        this.clearPreviousErrorSigns();

        let ValuesLenght = this.ShippingFormValues.length;
        for (let i = 0; i<ValuesLenght; i++){
            debugger
            let StringValue = this.ShippingFormValues[i];
            //here we are getting string from the input field and checking it`s lenght 
            let LenghtOfString = StringValue.length;
            if (LenghtOfString == 0){
                //if the lenght is 0 error is thrown
                let ErrorMessage = document.createElement("p");
                ErrorMessage.setAttribute("id","error"+this.Properties[i]+WhichOrderForm);
                ErrorMessage.setAttribute("class", "text-danger")
                ErrorMessage.textContent = "This field can't be empty"; 
                debugger
                const ErrorField = document.getElementById("append"+this.Properties[i]+WhichOrderForm);
                ErrorField.appendChild(ErrorMessage);
                //at the end we are adding ID of the error html element to the array 
                this.PreviousErrorSigns.push("error"+this.Properties[i]+WhichOrderForm);
                }
            else if (LenghtOfString > 30){
                //next we are checking if the lenght of the string isn`t more than 30 characters
                let ErrorMessage2 = document.createElement("p");
                ErrorMessage2.setAttribute("id","error"+this.Properties[i]+WhichOrderForm)
                ErrorMessage2.textContent = "Lenght of maximum characters used exeeded";
                const ErrorField = document.getElementById("append"+this.Properties[i]+WhichOrderForm);
                ErrorField.appendChild(ErrorMessage2);
                //also adding html element id to the array
                this.PreviousErrorSigns.push("error"+this.Properties[i]+WhichOrderForm);

            
            }

        }
        if (this.PreviousErrorSigns.length == 0){
            //next there are no error program is going to check whether recipients adressis same a the shipping adress
            debugger
        let CheckBoxValue = document.getElementById("flexCheckChecked").checked;
        debugger
            if (CheckBoxValue == true){
                //if yes we don`t have to collect recipients adress because it`s same as shipping adresss already provided
                //so the program cotinues displaying next form which is form for choosing delivrery option and payment option
                this.removeNewForm();
                const DeliveryForm1 = new DeliveryForm;
                DeliveryForm1.displayDeliveryForm();
                debugger
                //here we are adding shipping form values to declared variable ValuesForm1 which is visible outside of the class OrderForm
                //so we can acess this values from other classes
                for (let q = 0; q <this.ShippingFormValues.length; q++){
                    ValuesForm1.push(this.ShippingFormValues[q]);
                }
                return CheckBoxValue,ValuesForm1;
            }
            else if (WhichOrderForm == "4"){
                //this block is executed when shipping adress isn`t same as recipients adress and customer fullfilled and clicked
                //on continue to purchase button on the recipients adress form
                //code below hides all shipping form 
                this.removeNewForm2();
                this.removeNewForm();
                debugger
                //getting recipient adress values to the valuesform2
                for (let q = 0; q <this.ShippingFormValues.length; q++){
                    ValuesForm2.push(this.ShippingFormValues[q]);
                }
                this.clearShippingFormValuess();
                //displaing payment options and delivery method options
                const DeliveryForm1 = new DeliveryForm;
                DeliveryForm1.displayDeliveryForm();
                debugger
                return ValuesForm2;
            }

            else if (CheckBoxValue == false){
                //if checbox wasn`t checked we have to display new shipping adress form for the recipients
                //adress
                //then next shipping adress form will invoke this function again exept that next time it will
                //pass a parameter '4' which means that it will end up in the block code above
                this.removeNewForm();
                this.addNewForm2();
                //collecting the data from the first shipping adress form
                for (let q = 0; q <this.ShippingFormValues.length; q++){
                    ValuesForm1.push(this.ShippingFormValues[q]);
                }              
                debugger
                this.clearShippingFormValuess();
                return ValuesForm1;
            }
        }
    }
 
    checkBoxValid(){
        this.removeNewForm();
    }
}
function DeliveryButtonClick(){
    //function for getting delivery method and payment option and then displaying the final summary
    let DeliveryForm2 = new DeliveryForm(3);
    let OrderForm1 = new OrderForm; 
    const ListOfProperties = OrderForm1.getProperties();
    const ShippingAdress = ValuesForm1;
    const RecipientsAdress = ValuesForm2;
    debugger
    //variable storing a hash map with the delivery button picked option and payment method picked option
    const ButtonOption = DeliveryForm2.getButtonOption();
    let IndexOf = ButtonOption.entries();
    const Entry1 = IndexOf.next().value;
    const Entry2 = IndexOf.next().value;
    DeliveryForm2.hideDeliveryForm();
    OrderForm1.removeNewForm();
    OrderForm1.removeNewForm2();
    debugger
    //instantiating new object of type Customer for final order summary
    //Customer`s constructor will display final order summary
    const Customer1 = new Customer(ListOfProperties,Entry1,Entry2,laptop,laptop365, ShippingAdress,RecipientsAdress,8);
    debugger
    return ButtonOption;
}
class DeliveryForm{
    //class for handling delivery options and the payment options
    DeliveryElement = document.getElementById("DeliveryMethods");
    PaymentElement = document.getElementById("PaymentMethods");
    PaymentFirstOption = document.getElementById("PaymentFirstRadio");
    PaymentSecondOption = document.getElementById("PaymentSecondRadio");
    FirstOption = document.getElementById("firstRadio");
    SecondOption = document.getElementById("secondRadio");
    DeliveryButton = document.getElementById("DeliveryMethodsValues");
    FinalOptions = [];
    ErrorMessage3;
    ListOfDeliveryOptions = new Map;
    //creating available delivery options
    DeliveryOption1= {
        Order: 0,
        deliveryOptionName : "Standart 3 to 5 days delivery",
        deliveryOptionPrice: 3.99,
        State: false,
        }
    DeliveryOption2= {
        Order: 1,
        deliveryOptionName : "DHL express delivery",
        deliveryOptionPrice: 5.99,
        State: false,
         }
    //cerating available payment options
    PaymentOption1 = {
        Order: 2,
        paymentOptionName : "Bank Transfer",
        State: false,
    }
    PaymentOption2 = {
        Order: 3,
        paymentOptionName : "PayPal",
        State: false,
    }

    constructor(){
        //filling hash map with the predefined objects
        //key is going to be order of the objects which the same as the order of the objects displayed on the site
        //and the value is going to be object itself
        this.ListOfDeliveryOptions.set(this.DeliveryOption1.Order , this.DeliveryOption1);
        this.ListOfDeliveryOptions.set(this.DeliveryOption2.Order , this.DeliveryOption2);
        this.ListOfDeliveryOptions.set(this.PaymentOption1.Order , this.PaymentOption1);
        this.ListOfDeliveryOptions.set(this.PaymentOption2.Order , this.PaymentOption2);

    }

    displayDeliveryForm(){
        this.DeliveryElement.style.display = "inline";
        this.PaymentElement.style.display = "inline";
    }



    hideDeliveryForm(){
        this.DeliveryElement.style.display = "none";
        this.PaymentElement.style.display = "none";
    }

    getInputValues(){
        const FirstBoxValue = this.FirstOption.checked;
        const SecondBoxValue = this.SecondOption.checked;
        return FirstBoxValue,SecondBoxValue;
    }
    getButtonOption(){
        //function for collecting customers delivery method and payment method
        let valueOfFirstOption = this.FirstOption.checked;
        let valueOfSecondOption = this.SecondOption.checked;
        let valueOfPaymentFirstOption = this.PaymentFirstOption.checked;
        let valueOfPaymentSecondOption = this.PaymentSecondOption.checked;
        //then calling validateInput function and passing parameter that store value true or false
        this.validateInput(valueOfFirstOption,valueOfSecondOption,valueOfPaymentFirstOption,valueOfPaymentSecondOption)
        
        return this.ListOfDeliveryOptions;
    }

    validateInput(valueOfFirstOption,valueOfSecondOption,valueOfPaymentFirstOption,valueOfPaymentSecondOption){
        //validate input function checks whether customer didn`t left some option uchecked and returns checked option
        //below we are filling array with with true or false values based on whether customer picked this choice or not
        this.FinalOptions.push(valueOfFirstOption,valueOfSecondOption,valueOfPaymentFirstOption,valueOfPaymentSecondOption);
        let FinalOptionLenght =this.FinalOptions.length;
        let b = 0;
        let QuaickChange = undefined;
        debugger
        for (let i = 0; i < FinalOptionLenght; i++) {
            debugger
            if (this.FinalOptions[i] == true){
                //here we are checking which of the four elements customer choosed
                //those that customer picked at the DeliveryForm page are going to be true
                //and because we passed them as parameters in the same order as they are declared
                //we can get elements by their position and change their state from false to true
                QuaickChange =this.ListOfDeliveryOptions.get(i);
                QuaickChange.State = true;
                b = b+i;
                    }
            else if (this.FinalOptions[i]== false){
                //deleting false option will leave us with the array that has only true (picked) options
                this.ListOfDeliveryOptions.delete(i);
            }
        }
            
        
        if (this.ListOfDeliveryOptions.size == 0){
            //listofdeliveryoptions.size ==0 means that customer didn't picked any option
            //because every element in the hash map ended up with the state false and have been removed from the hash map
            debugger
            //now we are going to display error message to the customer so he have to pick some options
            ErrorMessage3 = document.getElementById("ErrorMessagePlaceholder");
            let ErrorMessageContent2 = document.createElement('p');
            ErrorMessageContent2.textContent ="Choose one option";
            ErrorMessageContent2.setAttribute("class","text-danger");
            this.ErrorMessage3.appendChild(ErrorMessageContent2);
            this.ErrorMessage3 = document.getElementById("PaymentMethodErrorPlaceholder");
            ErrorMessageContent2 = document.createElement('p');
            ErrorMessageContent2.textContent ="Choose one option";
            ErrorMessageContent2.setAttribute("class","text-danger");
            this.ErrorMessage3.appendChild(ErrorMessageContent2);
            return;
        }
        else if (this.ListOfDeliveryOptions.size == 1){
            //this block handles when customer picked one option for example delivery option and forgot to pick payment
            //option 
            if (QuaickChange.Order > 1){
                //previously defined variable QuaickChange is storing object which had the state value true
                //above we are checking if the order of that object is more than 1 
                //by that we can find out in which area customr left without picking option
                //becase order of the payment option elements is 2 and 3 and order of the delivery items is 0 and 1 
                debugger
                //if quaickcahnge.order is bigger than 1  it means that custom didn't picked delivery method
                //now we can display error message in delivery method section
                this.ErrorMessage3 = document.getElementById("ErrorMessagePlaceholder");
                let ErrorMessageContent2 = document.createElement('p');
                ErrorMessageContent2.textContent ="Choose one option";
                ErrorMessageContent2.setAttribute("class","text-danger");
                ErrorMessageContent2.setAttribute("id","ErrorMessageDelivery");
                this.ErrorMessage3.appendChild(ErrorMessageContent2);
                return;
            }
            else if (QuaickChange.Order <= 1){
                //here we will display error message if customer didn't picked payment method
                debugger
                this.ErrorMessage3 = document.getElementById("PaymentMethodErrorPlaceholder");
                let ErrorMessageContent2 = document.createElement('p');
                ErrorMessageContent2.textContent ="Choose one option";
                ErrorMessageContent2.setAttribute("class","text-danger");
                ErrorMessageContent2.setAttribute("id","ErrorMessagePayment");
                this.ErrorMessage3.appendChild(ErrorMessageContent2);
                return;
            }
        }
        else if (this.ListOfDeliveryOptions.size == 2){
            debugger
            //in this block we are going to handle success scenario when customer picked both option
            //we have to remove previous error elements if some where created from previous blocks
            this.ErrorMessage3 = document.getElementById("PaymentMethodErrorPlaceholder");
            //here we are trying to get them, if they were not created meaning that customer picked both options
            //on the first time the return value of getElementById function is going to be null
            let ErrorMessage3Child = document.getElementById("ErrorMessagePayment");
            debugger
            if((ErrorMessage3Child !== null)== true){
                //if there were error messages we are going to remove them
                debugger
                this.ErrorMessage3.removeChild(ErrorMessage3Child);
            }

            this.ErrorMessage3 = document.getElementById("ErrorMessagePlaceholder");
            ErrorMessage3Child = document.getElementById("ErrorMessageDelivery");
            debugger
            if((ErrorMessage3Child !== null) == true){
                //same for the delivery method section
                debugger
                this.ErrorMessage3.removeChild(ErrorMessage3Child);

            }
            return this.ListOfDeliveryOptions;

        }
    }


}
class Customer{
    //objects of class customer handles displaing customer data on the final order page
    //here we are getting html elements for this operation 
    //elements are hidden by default
    FinalOrder = document.getElementById("FinalOrder");
    FinallOrderShipping= document.getElementById("FinallOrderShipping");
    FinallOrderRecipientsAdress= document.getElementById("FinallOrderRecipientsAdress");
    FinallOrderShippingMethod = document.getElementById("FinallOrderShippingMethod");
    FinallOrderPaymentMethod = document.getElementById("FinallOrderPaymentMethod")
    FinallOrderTotalCost = document.getElementById("FinallOrderTotalCost");
    CompleteOrderButton = document.getElementById("CompleteOrderButton");
  
    HashShipping = new Map;
    HashRecipients = new Map;
    lina;

    constructor(ListOfProperties,DeliveryOption, PaymentOption, laptop, laptop365, ShippingAdress,RecipientsAdress, lina){
        this.ListOfProperties= ListOfProperties;
        this.DeliveryOption = DeliveryOption
        this.PaymentOption =  PaymentOption; 
        const laptop5 = this.laptop;
        const laptop6 = this.laptop365;
        this.ShippingAdress= ShippingAdress;
        this.RecipientsAdress =RecipientsAdress;
        this.lina =lina;
        this.displayFinalOrder();
        debugger
        this.displayFinalSummary();
    }


    displayFinalOrder(){
        //displaying final order page
        this.FinalOrder.style.display = "inline";
    }
    createHashShipping(){
        //function for converting array with shipping adress into hash map with key being name of the property
        //for example first name and value being customers input in customer name input field (first name : Anne)
        for (let i = 0; i < this.ListOfProperties.length; i++){
            this.HashShipping.set(this.ListOfProperties[i],this.ShippingAdress[i]);
        debugger
        }
    }

    createHashRecipients(){
        //function for converting array with recipients adress into hash map with key being name of the property
        //for example first name and value being customers input in customer name input field (first name : Anne)

        for (let i = 0; i < this.ListOfProperties.length; i++){
            this.HashRecipients.set(this.ListOfProperties[i],this.RecipientsAdress[i]);
        debugger
        }
    }

    displayFinalSummary(){
        //displaying the summary with values that customer provided
        if(this.RecipientsAdress.length == 0){
            debugger
            //in this if block we are going to  display shipping adress
            //above we checked whether shipping adress is the same as the recipients adress
            this.createHashShipping();

            for (let i = 0; i < this.ListOfProperties.length; i++){
                debugger
                //with for loop we are going to display adress as key : value pair 
                const child = document.createElement("p");
                child.textContent = this.ListOfProperties[i]+": " +this.ShippingAdress[i];
                //appending elements to the shipping adress section of the summary
                this.FinallOrderShipping.appendChild(child);
            debugger
            
            }
            for (let i = 0; i < this.ListOfProperties.length; i++){
                debugger
                //now we are going to display the same properties for the recipients adress
                const child = document.createElement("p");
                child.textContent = this.ListOfProperties[i]+": " +this.ShippingAdress[i];
                //and appent shipping adress to the recipients adress
                this.FinallOrderRecipientsAdress.appendChild(child);
            debugger
            
            }
        }
        else if (this.RecipientsAdress.length !== 0 ){
            //if the shipping adress isn't same as the recipients adress we are going to execute following code
            for (let i = 0; i < this.ListOfProperties.length; i++){
                debugger
                //generating and displaying shipping adress
                const child = document.createElement("p");
                child.textContent = this.ListOfProperties[i]+": " +this.ShippingAdress[i];
                this.FinallOrderShipping.appendChild(child);
            debugger
            
            }
            for (let i = 0; i < this.ListOfProperties.length; i++){
                debugger
                //generating and displaying recipients adress
                const child = document.createElement("p");
                child.textContent = this.ListOfProperties[i]+": " +this.RecipientsAdress[i];
                this.FinallOrderRecipientsAdress.appendChild(child);
            debugger
            
            }
        }
        //now we are going to use the parameters and display remaining properties
        //delivery method, payment metod and price
        let Delivery =document.createElement("p");
        let name = this.DeliveryOption[1];
        Delivery.textContent = "Shipping: "+name.deliveryOptionName +" Price: " +name.deliveryOptionPrice;
        this.FinallOrderShippingMethod.appendChild(Delivery);

        let TotalCost = document.createElement("p");
        let LaptopPrice = laptop.Quantity*laptop.Price + laptop365.Quantity*laptop365.Price;
        TotalCost.textContent="Price: "+LaptopPrice +" + Shipping: "+ name.deliveryOptionPrice;
        let Payment =document.createElement("p");
        let name2 = this.PaymentOption[1];
        Payment.textContent = "Payment option: "+name2.paymentOptionName;
        this.FinallOrderPaymentMethod.appendChild(TotalCost);
        this.FinallOrderPaymentMethod.appendChild(Payment);
        //for the bank transfer method we are going to aslo inclde guide on how to make the bake transfer
        if (name2.paymentOptionName == "Bank Transfer"){
            const StepsRequed = document.createElement("p");
            StepsRequed.textContent = "1. Please send money to the corresponding Bank Account within 3 days after confirmation email received (We will send confirmation email after Complete Order Button will be pressed)"
            const StepsRequed2 = document.createElement("p");
            StepsRequed2.textContent = "2. Make sure you include your invoice number (Which will send to your email after order completion) in remmitance information";
            const StepsRequed3 = document.createElement("p");
            StepsRequed3.textContent = "Bank details: "+ "\n"+"IBAN: SK90 9890 0980 0890 0890"+"\n"+"SWIFT:BDDIWWD"+"\n"+"Name:COMPUTERWORLD"+"\n";
            this.FinallOrderPaymentMethod.appendChild(StepsRequed);
            this.FinallOrderPaymentMethod.appendChild(StepsRequed2);
            this.FinallOrderPaymentMethod.appendChild(StepsRequed3);

        }       
    }

}

function CompleteOrderButton(){
    //complete order button is going to get response from recatpcha an also send an
    //email with the invoice to the customer
    var ReCaptchaResponse =  grecaptcha.getResponse();
    if(ReCaptchaResponse.length == 0){
        //we need to check whether recaptcha has been completed succesfuly, protecing us against bots
        //if not we are goig to display an error message
       const recatchaDOM = document.getElementById("recaptcha");
       const recatpchaERRORMessage =document.createElement("p");
       recatchaDOM.appendChild(recatpchaERRORMessage);
    } 
    else {
        // for sending an email we are using EmailJS service 
    const CustomerName = ValuesForm1[0]+ValuesForm1[1];
    ReplyToEmail ="kubo685@gmail.com",
    (function (){
        //here we have generated key for email service
        emailjs.init("IUgc8rvUM5eBuJqRs");
    })();
    var params = {
        //parameter will be sind with parameters in the email form
        to : ValuesForm1[2],
        InvoiceID : 2323,
        reply_to : ReplyToEmail, 
    }
    var serviceID = "service_gwqdqdl";
    var templateID = "template_56b873t";

    emailjs.send(serviceID,templateID,params)
    //displaying an alert when email was successfuly sended
    .then(res =>{alert("Email sucessfully sended!");
    })
    .catch();
 }
}