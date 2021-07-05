sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageBox',
	'sap/ui/unified/CalendarMonthInterval',
	"sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/FilterType",
	"sap/m/MessageToast"
], function(Controller, JSONModel, MessageBox, CalendarMonthInterval, Sorter, Filter, FilterOperator, FilterType, MessageToast) {
	"use strict";

	return Controller.extend("ZHCM_LAVAGILE_APPRZHCM_LAVAGILE_APPR.controller.Main", {
		
		selectValueWeek2: function(){
			this.getView().byId("PC1").setViewKey("Day");
			this.getView().byId("c_week").setSelected(false);
			this.getView().byId("c_month").setSelected(false);
		},
		
		selectValueWeek: function(){
			
				
				this.getView().byId("PC1").setViewKey("Week");
				this.getView().byId("c_week2").setSelected(false);
				this.getView().byId("c_month").setSelected(false);
				
		},
		selectValueMonth: function(){
			this.getView().byId("PC1").setViewKey("One Month");
				this.getView().byId("c_week2").setSelected(false);
				this.getView().byId("c_week").setSelected(false);
				
		},
		
		onInit: function () {
				// create model
				
			var oStateModel = new JSONModel();
 				oStateModel.setData({
 					legendShown: false
 				});
 				this.getView().setModel(oStateModel, "stateModel");
			
			this._init_services();
			
			//Impostazione filtri
			
			//BEGDA
			
			//ENDDA
			
			

			//var oView = this.getView(),
			//oFilter = new Filter("stato", FilterOperator.Contains, 'RICHIESTO');

			//oView.byId("table").getBinding("items").filter(oFilter, FilterType.Application);
			


			},
			
			panelExpand: function(){
				
				this.getView().byId("viewPlanning").setVisible(!this.getView().byId("viewPlanning").getVisible());
				
			},
			
			// Funzione Private //
			_init_services: function(){
				
				var oModelListaRichieste = new sap.ui.model.odata.v2.ODataModel("/sap/opu/odata/sap/ZHCM_LAVORO_AGILE_REQ_APPROVE_SRV", false);
				var oView = this.getView();
				
				oView.setModel(oModelListaRichieste, "modello");
				oView.setBusy(true);
			
				oModelListaRichieste.read("/LeaveRequestSet", {
				success: function _OnSuccess(oData, response) {
					oView.setBusy(false);
					
					
					
				},
				error: function _OnError(oError) {
					oView.setBusy(false);
					MessageToast.show("LeaveRequestSet Error: " + oError);
				}
			});
			
				
				this._init_stubs();
				
			},
			
			_init_stubs: function(){
				
			var oModelStub3 = new JSONModel({
				
					"legendItems" : [
							{
							text: "Richieste Lavoro Agile Ordinario Rifiutate",
							type: "Type02",
							color: "#feeee5"
						},
						{
							text: "Richieste Lavoro Agile Ordinario da Approvare",
							type: "Type04",
							color: "#fff9c5"
						},
						{
							text: "Richieste Lavoro Agile Ordinario Approvate",
							type: "Type05",
							color: "#adf9a6"
						}]
				
			});
			
				var oModelStub6 = new JSONModel({
				
					"uo" : [
						{
							idUo: "DICT SHRPS",
							descrizione: "DICT Sistemi HR e Progetti Speciali"
						},
						{
							idUo: "DRUO CRIA AD",
							descrizione: "DRUO CRIA AD Amministrazione Dirigenti"
						},
						{
							idUo: "DICT SHRPS S",
							descrizione: "DICT SHRPS Sistemi HR e Prog Spec"
						}]
				
			});
			
			
			var oModelStub = new JSONModel({

                  "ListaRichieste": [{

                         "nome": "Nome 1",
                         "cognome": "Cognome 1",
                         "uo": "DICT SHRPS Sistemi HR e Prog Spec",
                         "dataRic": "15/04/2021",
                         "dataSched": "25/05/2021",
                         "stato": "APPROVATO",
                         "statoT": "A"

            },
            {

                         "nome": "Nome 1",
                         "cognome": "Cognome 1",
                         "uo": "DICT SHRPS Sistemi HR e Prog Spec",
                         "dataRic": "15/04/2021",
                         "dataSched": "26/05/2021",
                         "stato": "Richiesto",
                         "statoT": "R"

            },

            {

                         "nome": "Nome 2",
                         "cognome": "Cognome 2",
                         "uo": "DRUO CRIA AD Amministrazione Dirigenti",
                         "dataRic": "24/04/2021",
                         "dataSched": "24/05/2021",
                         "stato": "APPROVATO",
                         "statoT": "A"

            },
             {

                        "nome": "Nome 2",
                         "cognome": "Cognome 2",
                         "uo": "DRUO CRIA AD Amministrazione Dirigenti",
                         "dataRic": "26/04/2021",
                         "dataSched": "26/05/2021",
                        "stato": "APPROVATO",
                         "statoT": "A"

            },
             {

                        "nome": "Nome 2",
                         "cognome": "Cognome 2",
                         "uo": "DRUO CRIA AD Amministrazione Dirigenti",
                         "dataRic": "26/04/2021",
                         "dataSched": "27/05/2021",
                        "stato": "RIFIUTATO",
                         "statoT": "R"

            },
            {

                        "nome": "Nome 3",
                         "cognome": "Cognome 3",
                         "dataRic": "26/04/2021",
                         "uo": "DICT Sistemi HR e Progetti Speciali",
                         "dataSched": "28/05/2021",
                        "stato": "Richiesto",
                         "statoT": "R"

            }
            ]

           });
			//this.getView().setModel(oModelStub, "modello");
			
			
			this.getView().setModel(oModelStub6, "modello6");
			
			var oModelStub2 = new JSONModel({

                  "ListaRichieste": [{
						
						 "cid":  "00001258",
                         "nome": "Nome 1 Cognome 1",
                         "cognome": "Potami",
                         "mese": "Maggio",
                         "residuo": "9",
                         "totale": "10",
                         "approvato": "0",
                         "daApprovare": "1"

            },

            {
						
						 "cid":  "00001259",
                        "nome": "Nome 2 Cognome 2",
                         "cognome": "Trimarchi",
                         "mese": "Maggio",
                         "residuo": "8",
                         "approvato": "2",
                         "totale": "10"

            },
             {
						
						 "cid":  "00001259",
                        "nome": "Nome 3 Cognome 3",
                         "cognome": "D'Alessio",
                         "mese": "Maggio",
                         "residuo": "9",
                         "totale": "10",
                         "approvato": "1",
                         "daApprovare": "1"

            }
            ]

           });
			this.getView().setModel(oModelStub2, "modello2");
			this.getView().setModel(oModelStub3, "modello3");
			
				
				var oModel = new JSONModel();
				oModel.setData({
					startDate: new Date(),
					minDate: new Date(2000, 0, 1, 0, 0, 0),
					maxDate: new Date(2050, 11, 31, 23, 59, 59),
					people: [{
						pic: "sap-icon://employee",
						name: "Nome 1 Cognome 1",
						role: "Divisione ANAS 1",
						appointments: [{
							start: new Date(2021, 4, 25, 0, 0),
							end: new Date(2021, 4, 25, 24, 0),
							title: "Smart Working",
							type: "Type07",
							info: "A",
							tentative: false
						},
							{
								start: new Date(2021, 4, 26, 0, 0),
								end: new Date(2021, 4, 26, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							},
							{
								start: new Date(2021, 4, 4, 0, 0),
								end: new Date(2021, 4, 4, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							},
							{
								start: new Date(2021, 4, 6, 0, 0),
								end: new Date(2021, 4, 6, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							},
							{
								start: new Date(2021, 4, 12, 0, 0),
								end: new Date(2021, 4, 12, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							},
							{
								start: new Date(2021, 4, 13, 0, 0),
								end: new Date(2021, 4, 13, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							}
						]
					},
						{
							pic: "sap-icon://employee",
							name: "Nome 2 Cognome 2",
							role: "Divisione Anas 2",
							appointments: [{
							start: new Date(2021, 4, 22, 0, 0),
							end: new Date(2021, 4, 22, 24, 0),
							title: "Smart Working",
							type: "Type07",
							info: "A",
							tentative: false
						},
							{
								start: new Date(2021, 4, 28, 0, 0),
								end: new Date(2021, 4, 28, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							},{
								start: new Date(2021, 4, 6, 0, 0),
								end: new Date(2021, 4, 6, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							},
							{
								start: new Date(2021, 4, 10, 0, 0),
								end: new Date(2021, 4, 10, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							},
							{
								start: new Date(2021, 4, 11, 0, 0),
								end: new Date(2021, 4, 11, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							}
						]
						},
						{
						pic: "sap-icon://employee",
						name: "Nome 3 Cognome 3",
						role: "Divisione ANAS 3",
						appointments: [{
							start: new Date(2021, 4, 24, 0, 0),
							end: new Date(2021, 4, 24, 24, 0),
							title: "Smart Working",
							type: "Type07",
							info: "A",
							tentative: false
						},
							{
								start: new Date(2021, 4, 26, 0, 0),
								end: new Date(2021, 4, 26, 24, 0),
								title: "Smart Working",
								type: "Type07",
								info: "A",
								tentative: false
							},
							
							{
								start: new Date(2021, 4, 28, 0, 0),
								end: new Date(2021, 4, 28, 24, 0),
								title: "Smart Working",
								type: "Type02",
								info: "X",
								tentative: false
							},{
								start: new Date(2021, 4, 26, 0, 0),
								end: new Date(2021, 4, 26, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							},
							{
								start: new Date(2021, 4, 17, 0, 0),
								end: new Date(2021, 4, 17, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							},
							{
								start: new Date(2021, 4, 18, 0, 0),
								end: new Date(2021, 4, 18, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							},
							{
								start: new Date(2021, 4, 19, 0, 0),
								end: new Date(2021, 4, 19, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							},
							{
								start: new Date(2021, 4, 20, 0, 0),
								end: new Date(2021, 4, 20, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							}
						]
					},
					{
						pic: "sap-icon://employee",
						name: "Nome 4 Cognome 4",
						role: "Divisione ANAS 1",
						appointments: [{
							start: new Date(2021, 4, 25, 0, 0),
							end: new Date(2021, 4, 25, 24, 0),
							title: "Smart Working",
							type: "Type07",
							info: "A",
							tentative: false
						},
							{
								start: new Date(2021, 4, 26, 0, 0),
								end: new Date(2021, 4, 26, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							}
						]
					},
					{
						pic: "sap-icon://employee",
						name: "Nome 5 Cognome 5",
						role: "Divisione ANAS 1",
						appointments: [{
							start: new Date(2021, 4, 25, 0, 0),
							end: new Date(2021, 4, 25, 24, 0),
							title: "Smart Working",
							type: "Type07",
							info: "A",
							tentative: false
						},
							{
								start: new Date(2021, 4, 26, 0, 0),
								end: new Date(2021, 4, 26, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "R",
								tentative: false
							}
						]
					}
					]
				});
				this.getView().setModel(oModel);

				
			}
		

	});
});