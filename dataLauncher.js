var timer = 0;
var theTime = "";
var time_interval = 1000;

//this class will hold the UAT space data.
class InputData{
    constructor(
        seconds_data,
        latitude,
        longitude,
        gpsSensor_alt,
        bmpSensor_alt,
        bmpSensor_pres,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eC02,
        cssSensor_TVOC,
        UV,
        accelx,
        accely,
        accelz,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.seconds_data = seconds_data;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gpsSensor_alt = gpsSensor_alt;
        this.bmpSensor_alt = bmpSensor_alt;
        this.bmpSensor_pres = bmpSensor_pres;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eC02 = cssSensor_eC02;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelx = accelx;
        this.accely = accely;
        this.accelz = accelz;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }

}
/* This function builds the row data of information to display. 
Sample Output: <td>Legend; </td><td>value units </td>
*/
function dataRow(legend, value, units){
    var txt = "<td>";
    txt += legend;
    txt += ": </td><td>";
    txt += value;
    txt += " " + units;
    txt += "</td>";
    return txt; 

}


function start(){
    var timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}
function updateDisplay(){
    theTime = new Date();
    var theSeconds = (theTime.getSeconds()) < 10 ? + "0" + String(theTime.getSeconds()) : theTime.getSeconds();
    var theMinutes = theTime.getMinutes();
    if(theMinutes < 10){
        theMinutes = "0" + String(theMinutes);
    }
    var timeFormat = theTime.getHours() + ":" + theMinutes + ":" + theSeconds;

    document.getElementById("timestamp").innerHTML = timeFormat;

    var timeRead = data[index].time_seconds;
    var dataTable = document.getElementById("data");

    if(timeRead >= 10) {
        dataTable.rows["seconds_data"]. innerHTML = dataRow("Time Elapsed", data[index].seconds_data, "seconds");
        dataTable.rows["latitude"]. innerHTML = dataRow("Latitude", data[index].latitude, "");
        dataTable.rows["longitude"]. innerHTML = dataRow("Longitude", data[index].longitude, "");
        dataTable.rows["gpsSensor_alt"]. innerHTML = dataRow("GPS Altitude", data[index].gpsSensor_alt, "");
        dataTable.rows["bmpSensor_alt"]. innerHTML = dataRow("BMP Sensor Altitude", data[index].bmpSensor_alt, "");
        dataTable.rows["bmpSensor_pres"]. innerHTML = dataRow("BMP Sensor Pressure", data[index].bmpSensor_pres, "");
        dataTable.rows["bmpSensor_temp"]. innerHTML = dataRow("BMP Sensor Temperature", data[index].bmpSensor_temp, "");
        dataTable.rows["digSensor_temp"]. innerHTML = dataRow("Digital Sensor Temperature", data[index].digSensor_temp, "");
        dataTable.rows["cssSensor_temp"]. innerHTML = dataRow("Css Sensor Temperature", data[index].cssSensor_temp, "");
        dataTable.rows["cssSensor_eC02"]. innerHTML = dataRow("Css Sensor eC02", data[index].cssSensor_eC02, "");
        dataTable.rows["cssSensor_TVOC"]. innerHTML = dataRow("Css Sensor TVOC", data[index].cssSensor_TVOC, "");
        dataTable.rows["UV"]. innerHTML = dataRow("Uv", data[index].UV, "");
        dataTable.rows["accelx"]. innerHTML = dataRow("X Acceleration", data[index].accelx, "");
        dataTable.rows["accely"]. innerHTML = dataRow("Y Acceleration", data[index].accely, "");
        dataTable.rows["accelz"]. innerHTML = dataRow("Z Acceleration", data[index].accelz, "");
        dataTable.rows["magneticX"]. innerHTML = dataRow("X Magnetic", data[index].magneticX, "");
        dataTable.rows["magneticY"]. innerHTML = dataRow("Y Magnetic", data[index].magneticY, "");
        dataTable.rows["magneticZ"]. innerHTML = dataRow("X Magnetic", data[index].magneticZ, "");
        dataTable.rows["gyroX"]. innerHTML = dataRow("X Gyro", data[index].gyroX, "");
        dataTable.rows["gyroY"]. innerHTML = dataRow("Y Gyro", data[index].gyroY, "");
        dataTable.rows["gyroZ"]. innerHTML = dataRow("Z Gyro", data[index].gyroZ, "");













    }   
    if(index > 500){
        index = 0;
    }
    else{
        index++;
        //index = index + 1;
    }
}