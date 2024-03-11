sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("com.incture.mydemoproject1.controller.Second", {
        onInit: function() {
            
        }, 

        onBack: function(){
            // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // oRouter.navTo("RouteDemoView");

            this.getOwnerComponent().getRouter().navTo("RouteDemoView");
        },

        onSubmit: function(){
            // Setting name dynamically
            var name = this.getView().byId('idIpName').getValue();
            var msg = 'Hi! Welcome '+ name;
            this.getView().byId('idTxtMsg').setText(msg);

            // Setting alignment dynamically
            var alignment = this.getView().byId('idIpAlign').getValue();
            this.getView().byId('idTxtMsg').setTextAlign(alignment);

            // Disable the input fields after submitting
            this.getView().byId('idIpName').setEnabled(false);
            this.getView().byId('idIpAlign').setEnabled(false);
        },

        onHideShow: function(){
            // debugger;
            var btnText = this.getView().byId('idBtnHideShow').getText();

            if(btnText == 'Hide'){
                this.getView().byId('idTxtMsg').setVisible(false);
                this.getView().byId('idLblName').setVisible(false);
                this.getView().byId('idIpName').setVisible(false);
                this.getView().byId('idLblAlign').setVisible(false);
                this.getView().byId('idIpAlign').setVisible(false);

                this.getView().byId('idBtnHideShow').setText('Show');
            }
            else{
                this.getView().byId('idTxtMsg').setVisible(true);
                this.getView().byId('idLblName').setVisible(true);
                this.getView().byId('idIpName').setVisible(true);
                this.getView().byId('idLblAlign').setVisible(true);
                this.getView().byId('idIpAlign').setVisible(true);

                this.getView().byId('idBtnHideShow').setText('Hide');
            }
        }
    })
});