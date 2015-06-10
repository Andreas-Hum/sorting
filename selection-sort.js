/**
*	Selection sort implementation
*
*	For browser, it exposes window.sort.selectionSort function
*
*	For node, it exposes require('sorting').selectionSort function
*	do npm install sorting
*
*	@author Lakha Singh
*/

(function(){
	var selectionSort = function( arr ){
		var i, j, tmp, mi;

		for ( i = 0; i < arr.length - 1; i++ ){
			mi = i;
			for ( j = i + 1; j < arr.length; j++ ){
				if ( arr[mi] > arr[j] ){
					mi = j;
				}
			}
			if ( mi > i ){
				tmp = arr[i];
				arr[i] = arr[mi];
				arr[mi] = tmp;
			}
		}

		return arr;
	}

	// Supporting browser and node env
	if ( typeof window === 'object' ){
		window.sort = window.sort || {};
		window.sort.selectionSort = selectionSort;
	}
	else if ( typeof module === 'object' ){
		module.exports = selectionSort;
	}
}());
