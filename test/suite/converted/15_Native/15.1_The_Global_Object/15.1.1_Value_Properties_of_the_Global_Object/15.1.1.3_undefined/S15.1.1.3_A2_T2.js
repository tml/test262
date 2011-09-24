// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The undefined is not ReadOnly
 *
 * @path 15_Native/15.1_The_Global_Object/15.1.1_Value_Properties_of_the_Global_Object/15.1.1.3_undefined/S15.1.1.3_A2_T2.js
 * @description Checking typeof Operator
 * @onlyStrict
 * @negative
 */

// CHECK#1
undefined = true;
if (typeof(undefined) !== "boolean") { 
	ERROR('#1: undefined = true; typeof(undefined) === "boolean". Actual: ' + (typeof(undefined)));	
}
