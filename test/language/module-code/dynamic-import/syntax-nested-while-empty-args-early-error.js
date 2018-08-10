// This file was procedurally generated from the following sources:
// - src/dynamic-import/empty-args-early-error.case
// - src/dynamic-import/syntax/nested-while.template
/*---
description: It's a SyntaxError if AssignmentExpression is omitted (nested while syntax)
esid: sec-import-call-runtime-semantics-evaluation
features: [dynamic-import]
flags: [generated, module]
negative:
  phase: parse
  type: SyntaxError
info: |
    ImportCall :
        import( AssignmentExpression )

    1. Let referencingScriptOrModule be ! GetActiveScriptOrModule().
    2. Assert: referencingScriptOrModule is a Script Record or Module Record (i.e. is not null).
    3. Let argRef be the result of evaluating AssignmentExpression.
    4. Let specifier be ? GetValue(argRef).
    5. Let promiseCapability be ! NewPromiseCapability(%Promise%).
    6. Let specifierString be ToString(specifier).
    7. IfAbruptRejectPromise(specifierString, promiseCapability).
    8. Perform ! HostImportModuleDynamically(referencingScriptOrModule, specifierString, promiseCapability).
    9. Return promiseCapability.[[Promise]].


    ImportCall :
        import()

---*/
throw "Test262: This statement should not be evaluated.";

let x = 0;
while (!x) {
  x++;
  import();
};

/* The params region intentionally empty */
