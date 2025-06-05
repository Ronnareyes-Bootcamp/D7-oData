sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter"
], function (Controller, JSONModel, Sorter, Filter) {
    "use strict";

    return Controller.extend("sapips.training.odata.controller.Main", {

        onInit: function () {
            var oModel = new JSONModel(sap.ui.require.toUrl("sapips/training/odata/localService/mainService/data/Products.json"));
            this.getView().setModel(oModel); 
        },
        onPressedSort: function () {
            if (!this._bSortAsc) {
                this._bSortAsc = true;
            } else {
                this._bSortAsc = !this._bSortAsc;
            }
        
            var oTable = this.byId("idProductsTable");
            var oBinding = oTable.getBinding("items");
            var oSorter = new sap.ui.model.Sorter("ProductName", !this._bSortAsc);
            oBinding.sort(oSorter);
        },                
        onPressedFilter: function () {
            this._bFiltered = !this._bFiltered;
        
            var oTable = this.byId("idProductsTable");
            var oBinding = oTable.getBinding("items");
        
            const oFilter = new sap.ui.model.Filter("Discontinued", sap.ui.model.FilterOperator.EQ, false);
 
            oBinding.filter([oFilter]);
          }
        
               
    });
});