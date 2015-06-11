/**
*	Insertion sort implementation
*
*	For browser, it exposes window.sort.insertionSort function
*
*	For node, it exposes require('sorting').insertionSort function
*	do npm install sorting
*
*	@author Lakha Singh
*/

(function(){
	var insertionSort = function( arr ){
		var i, j, tmp, ci;

		for ( i = 1; i < arr.length; i++ ){
			ci = i;
			for ( j = i - 1; j >= 0 && arr[ci] < arr[j]; j-- ){
				tmp = arr[ci];
				arr[ci] = arr[j];
				arr[j] = tmp;
				ci = j;
			}
		}

		return arr;
	}

	// Supporting browser and node env
	if ( typeof window === 'object' ){
		window.sort = window.sort || {};
		window.sort.insertionSort = insertionSort;
	}
	else if ( typeof module === 'object' ){
		module.exports = insertionSort;
	}
}());
