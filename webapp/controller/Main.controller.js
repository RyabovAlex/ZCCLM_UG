sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("sap.cust.zcclm_ug.controller.Main", {
		/**
		 *@memberOf MainScreen.controller.View1
		 **/
		onInit: function () {

			this._oPopover = new sap.ui.xmlfragment("sap.cust.zcclm_ug.view.ExtractorPopover", this);
			this.getView().addDependent(this._oPopover);

			var table = this.getView().byId("idExtractors");
			var template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Extractor}"
					}),
					new sap.ui.core.Icon({
						src: {
							path: "Rc",
							formatter: this.getIconType
						},
						color: {
							path: "Rc",
							formatter: this.getIconColor
						},
						size: "2em"
					}),
					new sap.m.Text({
						text: {
							path: "TStartLast",
							formatter: this.convertExtractorTime
						}
					}),
					new sap.m.Text({
						text: {
							path: "TStopLast",
							formatter: this.convertExtractorTime
						}
					}),
					new sap.m.Text({
						text: "{Lastrecords}"
					})
				],
				type: "Active",
				press: this.handleExtractorDetailsPress
			});
			var filters = new sap.ui.model.Filter({
				filters: [
					new sap.ui.model.Filter("Extractor", sap.ui.model.FilterOperator.Contains, "SCMON"),
					new sap.ui.model.Filter("Extractor", sap.ui.model.FilterOperator.Contains, "DSO")
				],
				and: true
			});
			var bindingInfo = {
				path: "/EXTRACTORSet",
				template: template,
				filters: filters
			};
			table.bindItems(bindingInfo);
		},

		handleExtractorDetailsPress: function (oEvent) {
			var table = this._oPopover.getContent()[0];
			this.src = oEvent.getSource();
			var name = oEvent.getSource().getSelectedItem().getCells()[0].getText();
			table.attachUpdateFinished({}, this.openPopover, this);
			var template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: {
							path: "Time",
							formatter: sap.ui.core.format.DateFormat.getDateTimeInstance()
						}
					}),
					new sap.m.Text({
						text: "{Phase}"
					}),
					new sap.m.Text({
						text: "{Runtime}"
					}),
					new sap.m.Text({
						text: "{Records}"
					}),
					new sap.m.Text({
						text: "{Message}"
					})
				]
			});
			var sorter = new sap.ui.model.Sorter({
				path: "Time",
				descending: true
			});
			var filters = new sap.ui.model.Filter("Extractor", sap.ui.model.FilterOperator.Contains, name);
			var bindingInfo = {
				path: "/EXTRACTOR_LOGSet",
				template: template,
				filters: filters,
				sorter: sorter
			};
			table.bindItems(bindingInfo);
		},

		onSystemSelect: function (event) {
			var context = event.getSource().getSelectedItem().getBindingContext();
			var systemId = context.getProperty("Id");
			if (systemId) {
				this.getOwnerComponent().getRouter().navTo("Systems", {
					Id: systemId
				});
			}
		},

		getIconType: function (level) {
			if (level === 0) {
				return "sap-icon://accept";
			} else if (level === 3) {
				return "sap-icon://alert";
			} else {
				return "sap-icon://cancel";
			}
		},

		getIconColor: function (level) {
			if (level === 0) {
				return "#2b7d2b";
			} else if (level === 3) {
				return "#bbbb00";
			} else {
				return "#bb0000";
			}
		},

		getIconType2: function (value) {
			if (value === "X") {
				return "sap-icon://accept";
			} else {
				return "sap-icon://cancel";
			}
		},

		getIconColor2: function (value) {
			if (value === "X") {
				return "#2b7d2b";
			} else {
				return "#bb0000";
			}
		},

		openPopover: function () {
			this._oPopover.openBy(this.src);
		},

		onPopoverClose: function () {
			this._oPopover.close();
		},

		convertExtractorTime: function (text) {
			var years = text.substring(0, 4);
			var months = text.substring(4, 6);
			var days = text.substring(6, 8);
			var hours = text.substring(8, 10);
			var minutes = text.substring(10, 12);
			var seconds = text.substring(12, 14);
			return years + "/" + months + "/" + days + " " + hours + ":" + minutes + ":" + seconds;
		}
	});
});