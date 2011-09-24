// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check For Statement for automatic semicolon insertion.
 * If automatic insertion semicolon would become one of the two semicolons in the header of a For Statement.
 * Don`t use semicolons
 *
 * @path 07_Lexical_Conventions/7.9_Automatic_Semicolon_Insertion/S7.9_A6.3_T6.js
 * @description For header is (\n false \n false \n)
 * @negative
 */

//CHECK#1
for(
    false
    false
) {
  break;
}
