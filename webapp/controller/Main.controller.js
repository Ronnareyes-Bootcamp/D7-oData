sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter"
], function (Controller, JSONModel, Sorter, Filter) {
    "use strict";

    return Controller.extend("sapips.training.odata.controller.Main", {

        onInit: function () {
            var sUrl = sap.ui.require.toUrl("sapips/training/odata/model/products.json");
            var oModel = new JSONModel();
        
            oModel.loadData(sUrl);
        
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
        
            if (this._bFiltered) {
                var oFilter = new sap.ui.model.Filter("Status", sap.ui.model.FilterOperator.NE, "Discontinued");
                oBinding.filter([oFilter]);
            } else {
                oBinding.filter([]);
            }
        }
        
               
    });
});