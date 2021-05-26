sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/model/json/JSONModel',
	'sap/m/MessageBox'
], function(Controller, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("ZHCM_LAVAGILE_APPRZHCM_LAVAGILE_APPR.controller.Main", {
		
		onInit: function () {
				// create model
				
				
			var oModelStub = new JSONModel({

                  "ListaRichieste": [{

                         "nome": "Isabella",
                         "cognome": "Potami",
                         "dataRic": "25/05/2021"

            },

            {

                        "nome": "Raffaella",
                         "cognome": "Trimarchi",
                         "dataRic": "24/05/2021"

            },
             {

                        "nome": "Raffaella",
                         "cognome": "Trimarchi",
                         "dataRic": "26/05/2021"

            }
            ]

           });
			this.getView().setModel(oModelStub, "modello");
			
			var oModelStub2 = new JSONModel({

                  "ListaRichieste": [{
						
						 "cid":  "00001258",
                         "nome": "Isabella",
                         "cognome": "Potami",
                         "mese": "Maggio",
                         "residuo": "9",
                         "totale": "10"

            },

            {
						
						 "cid":  "00001259",
                        "nome": "Raffaella",
                         "cognome": "Trimarchi",
                         "mese": "Maggio",
                         "residuo": "10",
                         "totale": "10"

            },
             {
						
						 "cid":  "00001259",
                        "nome": "Laura",
                         "cognome": "D'Alessio",
                         "mese": "Maggio",
                         "residuo": "9",
                         "totale": "10"

            }
            ]

           });
			this.getView().setModel(oModelStub2, "modello2");
			
				
				var oModel = new JSONModel();
				oModel.setData({
					startDate: new Date(),
					minDate: new Date(2000, 0, 1, 0, 0, 0),
					maxDate: new Date(2050, 11, 31, 23, 59, 59),
					people: [{
						pic: "sap-icon://employee",
						name: "Isabella Potami",
						role: "Divisione ANAS 1",
						appointments: [{
							start: new Date(2021, 4, 25, 0, 0),
							end: new Date(2021, 4, 25, 24, 0),
							title: "Smart Working",
							type: "Type07",
							info: "Approvato",
							tentative: false
						},
							{
								start: new Date(2021, 4, 26, 0, 0),
								end: new Date(2021, 4, 26, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "Richiesto",
								tentative: false
							}
						]
					},
						{
							pic: "sap-icon://employee",
							name: "Laura D'Alessio",
							role: "Divisione Anas 2",
							appointments: [{
							start: new Date(2021, 4, 22, 0, 0),
							end: new Date(2021, 4, 22, 24, 0),
							title: "Smart Working",
							type: "Type07",
							info: "Approvato",
							tentative: false
						},
							{
								start: new Date(2021, 4, 28, 0, 0),
								end: new Date(2021, 4, 28, 24, 0),
								title: "Smart Working",
								type: "Type01",
								info: "Richiesto",
								tentative: false
							}
						]
						},
						{
						pic: "sap-icon://employee",
						name: "Raffaella Trimarchi",
						role: "Divisione ANAS 3",
						appointments: [{
							start: new Date(2021, 4, 24, 0, 0),
							end: new Date(2021, 4, 24, 24, 0),
							title: "Smart Working",
							type: "Type07",
							info: "Approvato",
							tentative: false
						},
							{
								start: new Date(2021, 4, 26, 0, 0),
								end: new Date(2021, 4, 26, 24, 0),
								title: "Smart Working",
								type: "Type07",
								info: "Approvato",
								tentative: false
							}
						]
					}
					]
				});
				this.getView().setModel(oModel);
				
				var oStateModel = new JSONModel();
				oStateModel.setData({
					legendShown: false
				});
				this.getView().setModel(oStateModel, "stateModel");

			}
		

	});
});