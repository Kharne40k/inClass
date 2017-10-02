/**
 * Created by w0291126 on 10/2/2017.
 */

//Create variables would not be hardcoded normally
var us_percent_pizzerias = 0.12;
var num_pizzerias = 70000;
//figure out total restaurants
var total_restaurtants = num_pizzerias / us_percent_pizzerias;
//print to console and parseInt to get rid of float value
console.log(parseInt(total_restaurtants));