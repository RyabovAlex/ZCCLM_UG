sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("MainScreen.controller.View1", {
		/**
		 *@memberOf MainScreen.controller.View1
		 */
		onSystemSelect: function (oEvent) {
			var systemId = oEvent.getParameters().selectedItem.getKey();

			var filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));
			var template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{UsageDate}"
					}),
					new sap.m.Text({
						text: "{DSODate}"
					}),
					new sap.m.Text({
						text: "{ExtractDate}"
					}),
					new sap.m.Text({
						text: "{ScmonStat}"
					}),
					new sap.m.Text({
						text: "{AggrWeek}"
					}),
					new sap.m.Text({
						text: "{AggrMonth}"
					}),
					new sap.m.Text({
						text: "{AggrYear}"
					})
				],
				vAlign: "Middle",
				type: "Active"
			});
			var bindingInfo = {
				path: "/DSO_DaySet",
				template: template,
				filters: filters
			};
			this.getView().byId("DSO_Day").bindItems(bindingInfo);
			this.getView().byId("DSO_Day").bindItems(bindingInfo);

			filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));
			template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{UsageDate}"
					}),
					new sap.m.Text({
						text: "{DSODate}"
					}),
					new sap.m.Text({
						text: "{ExtractDate}"
					}),
					new sap.m.Text({
						text: "{ScmonStat}"
					}),
					new sap.m.Text({
						text: "{AggrWeek}"
					}),
					new sap.m.Text({
						text: "{AggrMonth}"
					}),
					new sap.m.Text({
						text: "{AggrYear}"
					})
				],
				vAlign: "Middle",
				type: "Active"
			});
			bindingInfo = {
				path: "/DSO_DaySet",
				template: template,
				filters: filters
			};
			this.getView().byId("DSO_Day").bindItems(bindingInfo);
			this.getView().byId("DSO_Day").bindItems(bindingInfo);

			filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));
			template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Days}"
					}),
					new sap.m.Text({
						text: "{Weeks}"
					}),
					new sap.m.Text({
						text: "{Availability}"
					})
				],
				vAlign: "Middle",
				type: "Active"
			});
			bindingInfo = {
				path: "/DSO_WeekSet",
				template: template,
				filters: filters
			};
			this.getView().byId("DSO_Week").bindItems(bindingInfo);
			this.getView().byId("DSO_Week").bindItems(bindingInfo);

			filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));
			template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Days}"
					}),
					new sap.m.Text({
						text: "{Months}"
					}),
					new sap.m.Text({
						text: "{Availability}"
					})
				],
				vAlign: "Middle",
				type: "Active"
			});
			bindingInfo = {
				path: "/DSO_MonthSet",
				template: template,
				filters: filters
			};
			this.getView().byId("DSO_Month").bindItems(bindingInfo);
			this.getView().byId("DSO_Month").bindItems(bindingInfo);

			filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));
			template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Days}"
					}),
					new sap.m.Text({
						text: "{Years}"
					}),
					new sap.m.Text({
						text: "{Availability}"
					})
				],
				vAlign: "Middle",
				type: "Active"
			});
			bindingInfo = {
				path: "/DSO_YearSet",
				template: template,
				filters: filters
			};
			this.getView().byId("DSO_Year").bindItems(bindingInfo);
			this.getView().byId("DSO_Year").bindItems(bindingInfo);

			filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));
			template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Weeks}"
					}),
					new sap.m.Text({
						text: "{Availability}"
					})
				],
				vAlign: "Middle",
				type: "Active"
			});
			bindingInfo = {
				path: "/BW_WeekSet",
				template: template,
				filters: filters
			};
			this.getView().byId("BW_Week").bindItems(bindingInfo);
			this.getView().byId("BW_Week").bindItems(bindingInfo);

			filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));
			template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Months}"
					}),
					new sap.m.Text({
						text: "{Availability}"
					})
				],
				vAlign: "Middle",
				type: "Active"
			});
			bindingInfo = {
				path: "/BW_MonthSet",
				template: template,
				filters: filters
			};
			this.getView().byId("BW_Month").bindItems(bindingInfo);
			this.getView().byId("BW_Month").bindItems(bindingInfo);

			filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));
			template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Years}"
					}),
					new sap.m.Text({
						text: "{Availability}"
					})
				],
				vAlign: "Middle",
				type: "Active"
			});
			bindingInfo = {
				path: "/BW_YearSet",
				template: template,
				filters: filters
			};
			this.getView().byId("BW_Year").bindItems(bindingInfo);
			this.getView().byId("BW_Year").bindItems(bindingInfo);
		}
	});
});