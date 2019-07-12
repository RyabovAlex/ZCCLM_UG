sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
	"use strict";
	return Controller.extend("sap.cust.zcclm_ug.controller.View1", {
		/**
		 *@memberOf MainScreen.controller.View1
		 **/
		onInit: function () {
			this.getOwnerComponent().getRouter().getRoute("Systems")
				.attachPatternMatched(this.onRouteMatched, this);
		},

		onRouteMatched: function (event) {
			var systemId = event.getParameter("arguments").Id;

			var filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));

			var template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{UsageDate}"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'DSODate',
							formatter: this.getIconType
						},
						color: {
							path: 'DSODate',
							formatter: this.getIconColor
						},
						size: "2em"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'ScmonStat',
							formatter: this.getIconType
						},
						color: {
							path: 'ScmonStat',
							formatter: this.getIconColor
						},
						size: "2em"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'AggrWeek',
							formatter: this.getIconType
						},
						color: {
							path: 'AggrWeek',
							formatter: this.getIconColor
						},
						size: "2em"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'AggrMonth',
							formatter: this.getIconType
						},
						color: {
							path: 'AggrMonth',
							formatter: this.getIconColor
						},
						size: "2em"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'AggrYear',
							formatter: this.getIconType
						},
						color: {
							path: 'AggrYear',
							formatter: this.getIconColor
						},
						size: "2em"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'TBAggregated',
							formatter: this.getIconType2
						},
						color: {
							path: 'TBAggregated',
							formatter: this.getIconColor2
						},
						size: "2em"
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
					new sap.ui.core.Icon({
						src: {
							path: 'Availability',
							formatter: this.getIconType
						},
						color: {
							path: 'Availability',
							formatter: this.getIconColor
						},
						size: "2em"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'TBAggregated',
							formatter: this.getIconType2
						},
						color: {
							path: 'TBAggregated',
							formatter: this.getIconColor2
						},
						size: "2em"
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
					new sap.ui.core.Icon({
						src: {
							path: 'Availability',
							formatter: this.getIconType
						},
						color: {
							path: 'Availability',
							formatter: this.getIconColor
						},
						size: "2em"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'TBAggregated',
							formatter: this.getIconType2
						},
						color: {
							path: 'TBAggregated',
							formatter: this.getIconColor2
						},
						size: "2em"
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
					new sap.ui.core.Icon({
						src: {
							path: 'Availability',
							formatter: this.getIconType
						},
						color: {
							path: 'Availability',
							formatter: this.getIconColor
						},
						size: "2em"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'TBAggregated',
							formatter: this.getIconType2
						},
						color: {
							path: 'TBAggregated',
							formatter: this.getIconColor2
						},
						size: "2em"
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

			filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));
			template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Weeks}"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'Availability',
							formatter: this.getIconType
						},
						color: {
							path: 'Availability',
							formatter: this.getIconColor
						},
						size: "2em"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'TBDeleted',
							formatter: this.getIconType2
						},
						color: {
							path: 'TBDeleted',
							formatter: this.getIconColor2
						},
						size: "2em"
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

			filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));
			template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Months}"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'Availability',
							formatter: this.getIconType
						},
						color: {
							path: 'Availability',
							formatter: this.getIconColor
						},
						size: "2em"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'TBDeleted',
							formatter: this.getIconType2
						},
						color: {
							path: 'TBDeleted',
							formatter: this.getIconColor2
						},
						size: "2em"
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

			filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));
			template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Years}"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'Availability',
							formatter: this.getIconType
						},
						color: {
							path: 'Availability',
							formatter: this.getIconColor
						},
						size: "2em"
					}),
					new sap.ui.core.Icon({
						src: {
							path: 'TBDeleted',
							formatter: this.getIconType2
						},
						color: {
							path: 'TBDeleted',
							formatter: this.getIconColor2
						},
						size: "2em"
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

			filters = [];
			filters.push(new sap.ui.model.Filter("System_ID", sap.ui.model.FilterOperator.EQ, systemId));
			template = new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{Granularity}"
					}),
					new sap.m.Text({
						text: "{Aggregation}"
					}),
					new sap.m.Text({
						text: "{CurSys_HK}"
					}),
					new sap.m.Text({
						text: "{CUST_HK}"
					}),
					new sap.m.Text({
						text: "{SAP_HK}"
					})
				],
				vAlign: "Middle",
				type: "Active"
			});
			bindingInfo = {
				path: "/ConfigSet",
				template: template,
				filters: filters
			};
			this.getView().byId("Config").bindItems(bindingInfo);
		},

		getIconType: function (level) {
			if (level === "X") {
				return "sap-icon://accept";
			} else {
				return "sap-icon://cancel";
			}
		},

		getIconColor: function (level) {
			if (level === "X") {
				return "#2b7d2b";
			} else {
				return "#bb0000";
			}
		},

		getIconType2: function (level) {
			if (level === "X") {
				return "sap-icon://delete";
			} else {
				return "";
			}
		},

		getIconColor2: function (level) {
			return "#0000bb";
		}
	});
});