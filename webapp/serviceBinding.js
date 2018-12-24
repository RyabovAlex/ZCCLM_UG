function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZCCLM_ODATA_UG_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}