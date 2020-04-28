
function doGet() {
 return HtmlService.createTemplateFromFile('Survey').evaluate();
}


function getCities() {
  var spreadsheetId = '1D8scXk10ZWXwZ7yl9hhIpdOC9p77aMzbv-NiGJPnIB0';
  var rangeName = 'A2:A1100';
  var values = Sheets.Spreadsheets.Values.get(spreadsheetId, rangeName).values;
  if (!values) {
    Logger.log('No data found.');
  } else {
    return values
  }  
}


function getMikvaot() {
  var ss = '1D8scXk10ZWXwZ7yl9hhIpdOC9p77aMzbv-NiGJPnIB0';
//  var addressRange = 'C2:C1044';
//  var cityRange = 'B2:B1044';
//  var uniqueCityRange = 'A2:A1044';
  var dataRange = 'B2:C1044';
//  var address = Sheets.Spreadsheets.Values.get(ss, addressRange).values;
//  var cityName = Sheets.Spreadsheets.Values.get(ss, cityRange).values;
//  var uniqueCity = Sheets.Spreadsheets.Values.get(ss, uniqueCityRange).values;
  var dataTuples = Sheets.Spreadsheets.Values.get(ss, dataRange).values;
//  var mikveh = [cityName, address];
  var cityDict = {};
 
  for(var i = 0; i < dataTuples.length; i++) {  
    var datum = dataTuples[i];
      if (!cityDict[datum[0]]) {
          cityDict[datum[0]] = [];
      }
    cityDict[datum[0]].push(datum[1]);
  }
  return cityDict    
}                                                                  
                            



/*
function getMikvaot() {
  var ss = '1D8scXk10ZWXwZ7yl9hhIpdOC9p77aMzbv-NiGJPnIB0';
  var addressRange = 'F2:F1044';
  var uniqueCityRange = 'A2:A1044';
  var cityRange = 'B2:B1044';
  var address = Sheets.Spreadsheets.Values.get(ss, addressRange).values;
  var cityName = Sheets.Spreadsheets.Values.get(ss, cityRange).values;
  var uniqueCity = Sheets.Spreadsheets.Values.get(ss, uniqueCityRange).values;
  var mikveh = [address, cityName]
  if (!address) {
    Logger.log('No data found.');
  } else {
    return mikveh
    return uniqueCity
  }  
}  
*/