sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text"
], (Controller, Dialog, Button, Text) => {
    "use strict";

    return Controller.extend("com.incture.mydemoproject1.controller.Second", {
        onInit: function () {

        },

        onBack: function () {
            // var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            // oRouter.navTo("RouteDemoView");

            this.getOwnerComponent().getRouter().navTo("RouteDemoView");
        },

        onSubmit: function () {
            // Setting name dynamically
            var name = this.getView().byId('idIpName').getValue();
            var msg = 'Hi! Welcome ' + name;
            this.getView().byId('idTxtMsg').setText(msg);

            // Setting alignment dynamically
            var alignment = this.getView().byId('idIpAlign').getValue();
            this.getView().byId('idTxtMsg').setTextAlign(alignment);

            // Disable the input fields after submitting
            this.getView().byId('idIpName').setEnabled(false);
            this.getView().byId('idIpAlign').setEnabled(false);
        },

        onHideShow: function () {
            // debugger;
            var btnText = this.getView().byId('idBtnHideShow').getText();

            if (btnText == 'Hide') {
                this.getView().byId('idTxtMsg').setVisible(false);
                this.getView().byId('idLblName').setVisible(false);
                this.getView().byId('idIpName').setVisible(false);
                this.getView().byId('idLblAlign').setVisible(false);
                this.getView().byId('idIpAlign').setVisible(false);

                this.getView().byId('idBtnHideShow').setText('Show');
            }
            else {
                this.getView().byId('idTxtMsg').setVisible(true);
                this.getView().byId('idLblName').setVisible(true);
                this.getView().byId('idIpName').setVisible(true);
                this.getView().byId('idLblAlign').setVisible(true);
                this.getView().byId('idIpAlign').setVisible(true);

                this.getView().byId('idBtnHideShow').setText('Hide');
            }
        },

        onDefaultDialog: function () {
            if (!this.oDefaultDialog) {
                this.oDefaultDialog = new Dialog({
                    title: "Hello Dialog",
                    content: new Text({
                        text: "Hi, I am a Dialog"
                    }),
                    beginButton: new Button({
                        // type: ButtonType.Emphasized,
                        text: "OK",
                        press: function () {
                            this.oDefaultDialog.close();
                        }.bind(this)
                    }),
                    endButton: new Button({
                        // type: ButtonType.Default,
                        text: "Close",
                        press: function () {
                            this.oDefaultDialog.close()
                        }.bind(this)
                    })
                });

                this.getView().addDependent(this.oDefaultDialog);
            }
            this.oDefaultDialog.open();
        },


        onOpenDialog() {
            // create dialog lazily
            this.pDialog ??= this.loadFragment({
                name: "com.incture.mydemoproject1.fragment.Login"
            });

            this.pDialog.then((oDialog) => oDialog.open()).catch((error) => console.log(error));
        },

        // Second method

        /*
        onOpenDialog() {
            if(!this.pDialog){
                this.pDialog = this.loadFragment({
                    name: "com.incture.mydemoproject1.fragment.Login"
                });
            }
        
            this.pDialog.then((oDialog) => oDialog.open());
        },
        */

        onCloseDialog(){
            this.pDialog.then((oDialog) => oDialog.close());
        }
    })
});