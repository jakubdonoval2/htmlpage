class OrderForm{
    ShippingForm = document.getElementById("shippingForm");
    ShippingFormValues = [];


    constructor(ID){
        var ID = this.ID;
    }
    addForm(){
        this.ShippingForm.style.display = "inline";
    }
    removeForm(){
        this.ShippingForm.style.display = "none";
    }
    checkActiveProduct(q1,q2){
        if (q1 + q2 == 0) {
            this.removeForm();
          }
          else {
            this.addForm();
          }

    }
    getInputValues(){
        const Email = document.getElementById("inputEmail").value;
        const Name = document.getElementById("inputName").value;
        const Adress = document.getElementById("inputAdress").value;
        const Adress2 = document.getElementById("inputAdress2").value;
        const AdressCity = document.getElementById("inputCity").value;
        const AdressState = document.getElementById("inputState").value;
        const AdressZip = document.getElementById("inputZip").value;
        this.ShippingFormValues.push(Email,Name,Adress,Adress2,AdressCity,AdressState,AdressZip);

        return Email,Name,Adress,Adress2,AdressCity,AdressState,AdressZip, this.ShippingFormValues;
    }
    validateInputValues(){
        let ValuesLenght = this.ShippingFormValues.length;
        for (let i = 0; i<ValuesLenght; i++){
            let StringValue = ShippingFormValues[i.valueOf()];
            let LenghtOfString = StringValue.length;
            if (LenghtOfString == 0){
                let ErrorMessage = document.createElement("p");
                ErrorMessage.textContent = "This field can't be empty";
                const ErrorField = document.getElementById("input"+this.ShippingFormValues[i]);
                ErrorField.appendChild(ErrorMessage);
                return;
                }
            else if (LenghtOfString > 30){
                let ErrorMessage2 = document.createElement("p");
                ErrorMessage2.textContent = "Lenght of maximum characters used exeeded";
                const ErrorField = document.getElementById("input"+this.ShippingFormValues[i]);
                ErrorField.appendChild(ErrorMessage2);
                return;
            
            }
        }
    }
    
}
