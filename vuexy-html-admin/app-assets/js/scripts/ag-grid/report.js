/*=========================================================================================
    File Name: report.js
    Description: Aggrid Table
    --------------------------------------------------------------------------------------
    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(document).ready(function() {
  /*** COLUMN DEFINE ***/
  var columnDefs = [
    {
      headerName: "CALL TIME",
      field: "firstname",
      editable: true,
      sortable: true,
      filter: true,
      width: 200,
      filter: false,
    
    },
    {
      headerName: "CALLER NUMBER",
      field: "lastname",
      editable: true,
      sortable: true,
      filter: false,
      width: 175
    },
    {
      headerName: "DESTINATION",
      field: "company",
      editable: true,
      sortable: true,
      filter: false,
      width: 150
    },
    {
      headerName: "DISPOSITION",
      field: "city",
      editable: true,
      sortable: true,
      filter: false,
      width: 150
    },
    {
      headerName: "TALKTIME",
      field: "country",
      editable: true,
      sortable: true,
      filter: false,
      width: 125
    },
    {
      headerName: "WAITTIME",
      field: "state",
      editable: true,
      sortable: true,
      filter: false,
      width: 125
    },
    {
      headerName: "DURATION",
      field: "zip",
      editable: true,
      sortable: true,
      filter: false,
      width: 125
    },
    {
      headerName: "QUEUE",
      field: "email",
      editable: true,
      sortable: true,
      filter: false,
      width: 100,
    
    },
    {
      headerName: "DID",
      field: "followers",
      editable: true,
      sortable: true,
      filter: false,
      width: 150
    },{
      headerName: "QUEUELOG",
      field: "followers",
      editable: true,
      sortable: true,
      filter: false,
      width: 250
    }
  ];

  /*** GRID OPTIONS ***/
  var gridOptions = {
    columnDefs: columnDefs,
    rowSelection: "multiple",
    floatingFilter: false,
    filter: false,
    pagination: true,
    paginationPageSize: 20,
    pivotPanelShow: "always",
    colResizeDefault: "shift",
    animateRows: true,
    resizable: true
  };

  /*** DEFINED TABLE VARIABLE ***/
  var gridTable = document.getElementById("myGrid");

  /*** GET TABLE DATA FROM URL ***/

  agGrid
    .simpleHttpRequest({ url: "../../../app-assets/data/ag-grid-data.json" })
    .then(function(data) {
      gridOptions.api.setRowData(data);
    });

  /*** FILTER TABLE ***/
  function updateSearchQuery(val) {
    gridOptions.api.setQuickFilter(val);
  }

  $(".ag-grid-filter").on("keyup", function() {
    updateSearchQuery($(this).val());
  });

  /*** CHANGE DATA PER PAGE ***/
  function changePageSize(value) {
    gridOptions.api.paginationSetPageSize(Number(value));
  }

  $(".sort-dropdown .dropdown-item").on("click", function() {
    var $this = $(this);
    changePageSize($this.text());
    $(".filter-btn").text("1 - " + $this.text() + " of 500");
  });

  /*** EXPORT AS CSV BTN ***/
  $(".ag-grid-export-btn").on("click", function(params) {
    gridOptions.api.exportDataAsCsv();
  });

  /*** INIT TABLE ***/
  new agGrid.Grid(gridTable, gridOptions);

});
