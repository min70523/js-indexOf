//indexOf函数  首次位置    数组里能找到返回下标i    找不到返回-1
		// function indexOf(arr,value){			
		// 	for(i=0;i<arr.length;i++){
		// 		if(value==arr[i]){
		// 			return i;
		// 		// }else if(value[i]==arr[i]){
		// 		// 	return i;
		// 		}									
		// 	}
		// 	return -1;
		// }
		//最后一次出现的位置     倒着遍历
		// function lastindexOf(arr,value){
		// 	for(i=arr.length-1;i>=0;i--){
		// 		if(value==arr[i]){
		// 			return i;
		// 		}
		// 	}
		// 	return -1;
		// }
		//数组内的元素 反转 reverse  倒着遍历，然后传到新数组
		// function reverse(arr){
		// 	var newarr=[];
		// 	for(var i=arr.length-1;i>=0;i--){
		// 		push(newarr,arr[i])
		// 	}
		// 	return newarr;
		// }
		// function push(arr,...rest){
		// 	for(var i=0;i<rest.length;i++){
		// 		arr[arr.length]=rest[i];
		// 	}
		// }
 
		//万能删除      splice   pos-删除位置   num-删除个数
		//      i 0 1 2 3 4 5
		//    pos   1 2 
		//    num    2 
		//   
		// function spliceCancle(arr,pos,num){
		// 	var newarr=[];
		// 	for(i=0;i<arr.length;i++){
		// 		if(i>=pos&&i<pos+num){
		// 			continue;
		// 		}
		// 		newarr[newarr.length]=arr[i];
		// 	}
		// 	return newarr;
		// }

		// //万能添加  spliceAdd   pos前面的 
		// var arr0=[1,2,3,4,5,6];   
		//           pos
		//            2
		//spliceAdd(arr0,2,'a','b','c')
		//newarr=[1,2,'a','b','c',4,5,6]
		//1.pos 之前的放进来  newarr=[1,2]  
		//2.接着放要添加的	  newarr=[1,2,'a','b','c']
		//3.==pos的放进来     newarr=[1,2,'a','b','c',3,4,5,6]
		// console.log(spliceAdd(arr0,2,'a','b','c'))
		// function spliceAdd(arr,pos,...rest){
		// 	var newarr=[];
		// 	for(var i=0;i<pos;i++){
		// 		newarr[newarr.length]=arr[i];
		// 	}
		// 	for(var i=0;i<rest.length;i++){
		// 		newarr[newarr.length]=rest[i];
		// 	}
		// 	for(var i=pos;i<arr.length;i++){
		// 		newarr[newarr.length]=arr[i];
		// 	}
		// 	return newarr;
		// }
		//万能的添加或删除
		//不管添加或删除，先给他删除一遍，如果有元素，就添加
		//   //记得console.log
		// function splice(arr,pos,num,...rest){
		// 	var newarr=[];							//记得定义新数组
		// 		newarr=spliceCancle(arr,pos,num);
		// 	if(rest.length>0){       //如果有元素
		// 		newarr=spliceAdd(newarr,pos,num,...rest);  
		// 		//就添加在新数组的后面  ...rest(将数组解封)
		// 	}
		// 	return newarr;
		// }
		//some every 
		// var arr0=[1,2,3,4,5,6];   回调
		// function some(arr,fn){	
		// 	for(i=0;i<arr.length;i++){
		// 		if(fn(arr[i])){
		// 			return true;
		// 		}
		// 	}
		// 	return false;
		// }
		// function every(arr,fn){
		// 	for(i=0;i<arr.length;i++){
		// 		if(fn(arr[i])){
		// 			return false;
		// 		}
		// 	}
		// 	return true;
		// }
	