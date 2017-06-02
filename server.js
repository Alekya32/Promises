//var Promise=require('promise')
function getData(value,err){
	return new Promise(function(resolve,reject){
		if(err){
			reject(err)//to reject err
		}
		resolve(value)//to get value
	})
}
getData("a","i am error").then(function(data){

	console.log(data)
})
.catch(function(err){
	console.log('error block')
	console.log(err)
})
 
/*function sample(){
	return new Promise(function(resolve,reject){
		if(err){
			reject(err)
		}
		resolve(value)
	})
	
}
sample().then(function(data){

	console.log(data)
})
*/

/*function callback(){
	return "i am callback"
}
var array=[1,2,3];

var obj={
	name:'hi',
	city:'hyd'
}
function sample(cb){
	console.log(cb())
}
sample(callback)*/